<script setup></script>

<template>
  <main class="bg-white/50 text-body">
    <SeoMeta
      title="Create Account | Couponzer"
      description="Sign up for Couponzer to discover, save, and share the best coupon and promo codes. Join now and start saving on your favorite brands."
      keywords="register couponzer, sign up couponzer, create account coupon site, promo code account signup"
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
            Join & Start Saving
            <span class="text-primary">today</span>
          </h1>

          <p class="mt-6 text-lg leading-8 text-body">
            Create your account to unlock exclusive coupons, share deals, and
            never miss savings again.
          </p>
        </div>
      </section>

      <section class="flex items-center justify-center px-6 py-10">
        <div class="w-full max-w-md">
          <div class="rounded-3xl border border-border bg-white p-8">
            <div class="mb-8 text-center">
              <h2 class="mt-4 text-3xl font-bold text-accent">
                Create Account
              </h2>

              <p class="mt-2 text-sm text-body">
                Sign up to start sharing and saving with promo codes
              </p>
            </div>

            <form class="space-y-5">
              <div>
                <label class="mb-2 block text-sm font-medium text-body">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  class="w-full rounded-full border border-border px-4 py-3 outline-none focus:border-primary"
                />
              </div>

              <div>
                <label class="mb-2 block text-sm font-medium text-body">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  class="w-full rounded-full border border-border px-4 py-3 outline-none focus:border-primary"
                />
              </div>

              <div>
                <label class="mb-2 block text-sm font-medium text-body">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Create password"
                  class="w-full rounded-full border border-border px-4 py-3 outline-none focus:border-primary"
                />
              </div>

              <div class="flex items-start gap-2 text-sm text-body">
                <input
                  type="checkbox"
                  class="mt-1 accent-primary h-4 w-4 rounded border-gray-300"
                />
                <span>
                  I agree to the
                  <a href="#" class="text-primary hover:text-primary-hover">
                    Terms & Conditions
                  </a>
                </span>
              </div>

              <button
                type="submit"
                class="w-full rounded bg-primary px-4 py-3 font-semibold text-white transition hover:bg-primary-hover active:scale-95"
              >
                Create Account
              </button>
            </form>

            <p class="mt-8 text-center text-sm text-gray-500">
              Already have an account?
              <NuxtLink
                to="/auth/login"
                class="font-semibold text-primary hover:text-primary-hover"
              >
                Sign in
              </NuxtLink>
            </p>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped></style>
