export const useAuthStore = defineStore("auth", {
  state: () => ({
    errors: {},
    loading: false,
    user: null,
    token: null,
  }),

  // persist: true,
  persist: {
    pick: ["user", "token"],
  },

  getters: {},

  actions: {
    async login(formData) {
      const supabase = useSupabaseClient();
      this.loading = true;
      try {
        const { data, error } =
          await supabase.auth.signInWithPassword(formData);

        if (error) {
          this.errors = {
            message: error.message,
          };
          return;
        }
        this.user = data?.user || null;
        this.token = data?.session?.access_token || null;

        await navigateTo("/dashboard");
      } catch (error) {
      } finally {
        this.loading = false;
      }
    },
  },
});
