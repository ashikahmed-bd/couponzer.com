<script setup>
const authStore = useAuthStore();

const form = reactive({
  email: "",
  password: "",
});

const submit = async () => {
  await authStore.login(form);
};
</script>

<template>
  <main class="bg-white/50 text-body">
    <SeoMeta
      title="Login | Couponzer"
      description="Sign in to Couponzer to access your saved coupons, promo codes, and exclusive deals. Discover and share the best offers easily."
      keywords="login couponzer, sign in couponzer, coupon account login, promo code login"
    />
    <div class="grid min-h-screen lg:grid-cols-2">
      <section class="hidden lg:flex flex-col justify-center px-16 xl:px-24">
        <div class="max-w-xl">
          <div
            class="inline-flex items-center gap-2 rounded-full border border-border bg-primary/10 px-4 py-1 text-sm text-primary"
          >
            <span class="h-2 w-2 rounded-full bg-primary"></span>
            Save more with verified deals
          </div>

          <h1 class="mt-6 text-5xl font-extrabold leading-tight text-accent">
            Find the best
            <span class="text-primary">coupon & promo codes</span>
            in one place
          </h1>

          <p class="mt-6 text-lg leading-8 text-body">
            Join our community to discover, share, and save with the latest
            verified offers from your favorite brands.
          </p>

          <div class="mt-10 grid grid-cols-3 gap-4">
            <div class="rounded-2xl bg-white p-4 border border-border">
              <h3 class="text-2xl font-bold text-primary">10K+</h3>
              <p class="mt-1 text-sm text-body">Active deals</p>
            </div>
            <div class="rounded-2xl bg-white p-4 border border-border">
              <h3 class="text-2xl font-bold text-primary">5K+</h3>
              <p class="mt-1 text-sm text-body">Daily users</p>
            </div>
            <div class="rounded-2xl bg-white p-4 border border-border">
              <h3 class="text-2xl font-bold text-primary">99%</h3>
              <p class="mt-1 text-sm text-body">Verified codes</p>
            </div>
          </div>
        </div>
      </section>

      <section class="flex items-center justify-center px-6 py-10 sm:px-10">
        <div class="w-full max-w-md">
          <div class="rounded-3xl border border-border bg-white p-8 sm:p-10">
            <div class="mb-8 text-center">
              <div
                class="mx-auto size-20 flex items-center justify-center rounded-2xl bg-wgite text-xl font-bold text-white"
              >
                <NuxtImg
                  src="/android-chrome-192x192.png"
                  alt="logo"
                  class="w-full"
                />
              </div>
              <h2 class="mt-4 text-3xl font-bold text-accent">Welcome back</h2>
              <p class="mt-2 text-sm text-body">
                Sign in to access your saved coupons and promo codes
              </p>
            </div>

            <form @submit.prevent="submit" class="space-y-5">
              <div>
                <label class="mb-2 block text-sm font-medium text-body">
                  Email address
                </label>
                <input
                  type="email"
                  v-model="form.email"
                  placeholder="you@example.com"
                  class="w-full rounded-full border border-border px-4 py-3 outline-none focus:border-primary"
                />
              </div>

              <div>
                <div class="mb-2 flex items-center justify-between">
                  <label class="block text-sm font-medium text-body">
                    Password
                  </label>
                  <a
                    href="#"
                    class="text-sm text-primary hover:text-primary-hover"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  v-model="form.password"
                  placeholder="Enter your password"
                  class="w-full rounded-full border border-border px-4 py-3 outline-none focus:border-primary"
                />
              </div>

              <div class="flex items-center justify-between text-sm">
                <label class="flex items-center gap-2 text-gray-600">
                  <input
                    type="checkbox"
                    class="accent-primary h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary-hover"
                  />
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                :disabled="authStore.loading"
                :class="[
                  'w-full flex items-center justify-center rounded bg-primary px-4 py-3 font-semibold text-white transition active:scale-95',
                  authStore.loading
                    ? 'opacity-70 cursor-not-allowed'
                    : 'hover:bg-primary-hover cursor-pointer',
                ]"
              >
                <UIcon
                  v-if="authStore.loading"
                  name="i-lucide-loader"
                  class="size-6 animate-spin"
                />

                <span class="ml-2">
                  {{ authStore.loading ? "Loading..." : "Sign In" }}
                </span>
              </button>
            </form>

            <p class="mt-8 text-center text-sm text-body">
              Don’t have an account?
              <NuxtLink
                to="/auth/register"
                class="font-semibold text-primary hover:text-primary-hover"
              >
                Sign up
              </NuxtLink>
            </p>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped></style>
