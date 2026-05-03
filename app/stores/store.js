export const useMerchantStore = defineStore("merchant", {
  state: () => ({
    errors: null,
    loading: false,
    stores: [],
    store: {},
    coupons: [],
  }),

  getters: {},

  actions: {
    async search() {
      const supabase = useSupabaseClient();

      try {
        const { data, error } = await supabase
          .from("stores")
          .select("*")
          .order("name", { ascending: true });

        if (error) throw error;

        this.stores = data;
        return data;
      } catch (error) {
        this.errors = error.message;
        return null;
      }
    },

    async all(page = 1, limit = 10) {
      const supabase = useSupabaseClient();

      try {
        const from = (page - 1) * limit;
        const to = from + limit - 1;

        const { data, error } = await supabase
          .from("stores")
          .select(`*,coupons:coupons(count)`)
          .order("id", { ascending: false })
          .range(from, to);

        if (error) throw error;

        this.stores = data;
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
          .from("stores")
          .insert([formData])
          .select()
          .single();

        if (error) {
          throw error;
        }

        toast.success("Store added successfully");
        navigateTo("/dashboard/stores");
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
          .from("stores")
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
          .from("stores")
          .update(formData)
          .eq("id", id)
          .select()
          .single();

        if (error) {
          throw error;
        }

        toast.success("Store updated successfully");
        navigateTo("/dashboard/stores");
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
          .from("stores")
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

    async getStores() {
      const supabase = useSupabaseClient();

      try {
        const { data, error } = await supabase
          .from("stores")
          .select("*")
          .eq("status", "active")
          .order("name", { ascending: true });

        if (error) {
          throw error;
        }

        this.stores = data;
        return data;
      } catch (error) {
        this.errors = error.message;
        return null;
      }
    },

    async getStore(slug) {
      const supabase = useSupabaseClient();

      try {
        const { data, error } = await supabase
          .from("stores")
          .select("*")
          .eq("slug", slug)
          .single();

        if (error) {
          throw error;
        }

        this.store = data;

        return data;
      } catch (error) {
        this.errors = error.message;
        throw error;
      }
    },

    async getRelated(storeId) {
      const supabase = useSupabaseClient();

      try {
        const { data, error } = await supabase
          .from("stores")
          .select("*")
          .eq("is_featured", true)
          .eq("status", "active")
          .neq("id", storeId)
          .order("name", { ascending: true })
          .limit(5);

        if (error) {
          throw error;
        }

        return data;
      } catch (error) {
        this.errors = error.message;
        return [];
      }
    },

    async getFeaturedStores() {
      const supabase = useSupabaseClient();

      try {
        const { data, error } = await supabase
          .from("stores")
          .select("*")
          .eq("is_featured", true)
          .eq("status", "active")
          .order("name", { ascending: true })
          .limit(12);

        if (error) {
          throw error;
        }

        this.stores = data;
        return data;
      } catch (error) {
        this.errors = error.message;
        return null;
      }
    },

    async getCouponsByStoreSlug(slug) {
      const supabase = useSupabaseClient();

      try {
        const { data: store, error: storeError } = await supabase
          .from("stores")
          .select("id")
          .eq("slug", slug)
          .single();

        if (storeError) {
          throw storeError;
        }

        const { data, error } = await supabase
          .from("coupons")
          .select("*, stores(*)")
          .eq("store_id", store.id)
          .order("created_at", { ascending: false });

        if (error) {
          throw error;
        }

        this.coupons = data;
        return data;
      } catch (error) {
        this.errors = error.message;
        throw error;
      }
    },
  },
});
