export const useSettingStore = defineStore("setting", {
  state: () => ({
    errors: null,
    loading: false,
    settings: null,
  }),

  getters: {},

  actions: {
    async getSettings() {
      const supabase = useSupabaseClient();

      try {
        const { data, error } = await supabase
          .from("settings")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          throw error;
        }

        this.settings = data;
        return data;
      } catch (error) {
        this.errors = error.message;
        return null;
      }
    },

    async update(id, formData) {
      const supabase = useSupabaseClient();
      this.loading = true;
      try {
        const { data, error } = await supabase
          .from("settings")
          .update(formData)
          .eq("id", id)
          .select()
          .single();

        if (error) {
          throw error;
        }
        return data;
      } catch (error) {
        this.errors = error.message || "Project update failed";
        throw error;
      } finally {
        this.loading = false;
      }
    },
  },
});
