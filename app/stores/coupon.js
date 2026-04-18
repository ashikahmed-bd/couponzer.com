export const useCouponStore = defineStore("coupon", {
  state: () => ({
    errors: null,
    loading: false,
    dialog: false,
    coupons: [],
    coupon: null,
  }),

  // persist: true,
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
    pick: ["dialog", "coupon"],
  },

  getters: {},

  actions: {
    async all() {
      const supabase = useSupabaseClient();

      try {
        const { data, error } = await supabase
          .from("coupons")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          throw error;
        }

        this.coupons = data;
        return data;
      } catch (error) {
        this.errors = error.message;
        return null;
      }
    },

    async store(formData) {
      const supabase = useSupabaseClient();

      this.loading = true;

      try {
        const { data, error } = await supabase
          .from("coupons")
          .insert([formData])
          .select()
          .single();

        if (error) {
          throw error;
        }
        return data;
      } catch (error) {
        this.errors = error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async show(id) {
      const supabase = useSupabaseClient();

      try {
        const { data, error } = await supabase
          .from("coupons")
          .select("*")
          .eq("id", id)
          .single();

        this.category = data;

        if (error) {
          throw error;
        }
        return data;
      } catch (error) {
        this.errors = error.message;
        throw error;
      }
    },

    async update(id, formData) {
      const supabase = useSupabaseClient();

      this.loading = true;
      try {
        const { data, error } = await supabase
          .from("coupons")
          .update(formData)
          .eq("id", id)
          .select()
          .single();

        if (error) {
          throw error;
        }
        return data;
      } catch (error) {
        this.errors = error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async delete(id) {
      const supabase = useSupabaseClient();

      try {
        const { error } = await supabase
          .from("coupons")
          .delete()
          .eq("id", id)
          .select();

        if (error) throw error;

        return true;
      } catch (error) {
        this.errors = error?.message;
        console.error("Delete Error:", error);
        return false;
      }
    },

    async getCoupons(page = 1, limit = 10) {
      const supabase = useSupabaseClient();

      try {
        const from = (page - 1) * limit;
        const to = from + limit - 1;

        const { data, error } = await supabase
          .from("coupons")
          .select(`*, stores(*)`)
          .order("created_at", { ascending: false })
          .range(from, to);

        if (error) throw error;

        return data;
      } catch (error) {
        this.errors = error.message;
        return null;
      }
    },

    async getFeaturedCoupons() {
      const supabase = useSupabaseClient();

      try {
        const { data, error } = await supabase
          .from("coupons")
          .select(`*,stores(*)`)
          .eq("is_featured", true)
          .order("clicks", { ascending: false })
          .limit(12);

        if (error) {
          throw error;
        }

        return data;
      } catch (error) {
        this.errors = error.message;
        return null;
      }
    },

    async openDialog(coupon) {
      // this.coupon = JSON.parse(JSON.stringify(coupon));

      this.coupon = {
        id: coupon.id,
        title: coupon.title,
        slug: coupon.slug,
        code: coupon.code,
        discount_text: coupon.discount_text,
        affiliate_url: coupon.affiliate_url,
        instructions: coupon.instructions,
        store: {
          id: coupon.stores?.id ?? coupon.store_id,
          name: coupon.stores?.name ?? null,
          slug: coupon.stores?.slug ?? null,
          logo_url: coupon.stores?.logo_url ?? null,
          website_url: coupon.stores?.website_url ?? null,
        },
      };

      this.dialog = true;

      const url = `/stores/${coupon.stores.slug}?coupon=${coupon.slug}`;
      window.open(url, "_blank", "noopener,noreferrer");
    },

    closeDialog() {
      this.dialog = false;
      this.coupon = null;
    },
  },
});
