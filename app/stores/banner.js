export const useBannerStore = defineStore("banner", {
  state: () => ({
    errors: null,
    loading: false,
  }),

  getters: {},

  actions: {
    async all() {
      const supabase = useSupabaseClient();

      try {
        const { data, error } = await supabase
          .from("banners")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          throw error;
        }

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
          .from("banners")
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
          .from("banners")
          .select("*")
          .eq("id", id)
          .single();

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
          .from("banners")
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
          .from("banners")
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

    async getBanner(size) {
      const supabase = useSupabaseClient();

      try {
        const { data, error } = await supabase
          .from("banners")
          .select("*")
          .eq("size", size)
          .eq("is_active", true)
          .order("sort_order", { ascending: true })
          .limit(1)
          .maybeSingle();

        if (error) throw error;

        return data;
      } catch (error) {
        this.errors = error.message;
        return null;
      }
    },

    async getBanners(size, limit = 2) {
      const supabase = useSupabaseClient();

      try {
        const { data, error } = await supabase
          .from("banners")
          .select("*")
          .eq("size", size)
          .eq("is_active", true)
          .order("sort_order", { ascending: true })
          .limit(limit);

        if (error) throw error;

        return data || [];
      } catch (error) {
        this.errors = error.message;
        return [];
      }
    },
  },
});
