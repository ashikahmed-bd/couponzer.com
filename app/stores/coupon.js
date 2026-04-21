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
    async all(page = 1, limit = 10) {
      const supabase = useSupabaseClient();

      try {
        const from = (page - 1) * limit;
        const to = from + limit - 1;

        const { data, error } = await supabase
          .from("coupons")
          .select(`*,clicks(count)`)
          .order("created_at", { ascending: false })
          .range(from, to);

        if (error) throw error;

        this.coupons = data;
        this.total = count;

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
        toast.success("Coupon added successfully");
        navigateTo("/dashboard/coupons");
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
        toast.success("Coupon updated successfully");
        navigateTo("/dashboard/coupons");
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

    async getCouponBySlug(slug) {
      const supabase = useSupabaseClient();

      try {
        const { data, error } = await supabase
          .from("coupons")
          .select(`*, stores(*)`)
          .eq("slug", slug)
          .maybeSingle();

        if (error) throw error;

        this.coupon = {
          id: data.id,
          title: data.title,
          slug: data.slug,
          description: data.description,
          code: data.code,
          discount_text: data.discount_text,
          affiliate_url: data.affiliate_url,
          landing_url: data.landing_url,
          instructions: data.instructions,
          store: {
            id: data.stores?.id ?? data.store_id,
            name: data.stores?.name ?? null,
            slug: data.stores?.slug ?? null,
            logo_url: data.stores?.logo_url ?? null,
            website_url: data.stores?.website_url ?? null,
          },
        };
        this.dialog = true;

        return data;
      } catch (error) {
        this.errors = error.message;
        this.dialog = false;
        return null;
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
          .order("click_count", { ascending: false })
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
      this.coupon = {
        id: coupon.id,
        title: coupon.title,
        slug: coupon.slug,
        description: coupon.description,
        code: coupon.code,
        discount_text: coupon.discount_text,
        affiliate_url: coupon.affiliate_url,
        landing_url: coupon.landing_url,
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

      const url = `/store/${this.coupon.store?.slug}?coupon=${this.coupon.slug}`;
      if (this.coupon.store?.slug && this.coupon.slug) {
        window.open(url, "_blank", "noopener,noreferrer");
      }
    },

    closeDialog() {
      this.dialog = false;
      this.coupon = null;
    },
  },
});
