export const useCouponStore = defineStore("coupon", {
  state: () => ({
    errors: null,
    loading: false,
    dialog: false,
    coupons: [],
    coupon: null,
  }),

  persist: true,

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

    async getCoupons() {
      const supabase = useSupabaseClient();

      try {
        const { data, error } = await supabase
          .from("coupons")
          .select(`*,stores(*)`)
          .order("created_at", { ascending: true });

        if (error) {
          throw error;
        }

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

    openDialog(coupon) {
      this.coupon = coupon;
      this.dialog = true;
      if (process.client && coupon?.slug) {
        const url = `/stores/${coupon.stores?.slug}?coupon=${coupon.slug}&modal=1`;
        window.open(url, "_blank", "noopener,noreferrer");
      }
    },

    // modal close
    closeDialog() {
      this.dialog = false;
      this.coupon = null;
    },
  },
});
