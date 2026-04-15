export const useSubscriberStore = defineStore("subscriber", {
  state: () => ({
    errors: null,
    loading: false,
    settings: null,
  }),

  getters: {},

  actions: {
    async store(form) {
      const supabase = useSupabaseClient();

      this.loading = true;

      try {
        const { data, error } = await supabase.from("subscribers").insert([
          {
            email: form.email.trim().toLowerCase(),
            name: form.name?.trim() || null,
            source: "newsletter",
            status: "active",
          },
        ]);

        if (error) {
          if (error.code === "23505") {
            return { message: "Already subscribed" };
          }
          throw error;
        }

        toast.success("subscribed successfully");
        return data;
      } catch (error) {
        this.errors = error.message;

        throw error;
      } finally {
        this.loading = false;
      }
    },
  },
});
