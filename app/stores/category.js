export const useCategoryStore = defineStore("category", {
  state: () => ({
    errors: null,
    loading: false,
    categories: [],
    category: {},
  }),

  getters: {},

  actions: {
    async all() {
      const supabase = useSupabaseClient();

      try {
        const { data, error } = await supabase
          .from("categories")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          throw error;
        }

        this.categories = data;
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
          .from("categories")
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
          .from("categories")
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
          .from("categories")
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
          .from("categories")
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

    async getCategories() {
      const supabase = useSupabaseClient();

      try {
        const { data, error } = await supabase
          .from("categories")
          .select("*")
          .order("sort_order", { ascending: true });

        if (error) {
          throw error;
        }

        this.categories = data;
        return data;
      } catch (error) {
        this.errors = error.message;
        return null;
      }
    },

    async getStoresByCategory(slug) {
      const supabase = useSupabaseClient();

      try {
        const { data: category, error: categoryError } = await supabase
          .from("categories")
          .select("*")
          .eq("slug", slug)
          .single();

        if (categoryError) throw categoryError;

        const { data: stores, error: storeError } = await supabase
          .from("stores")
          .select("*")
          .eq("category_id", category.id);

        if (storeError) throw storeError;

        return {
          category,
          stores,
        };
      } catch (error) {
        this.errors = error.message;
        return null;
      }
    },
  },
});
