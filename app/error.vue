<script setup>
useSeoMeta({
  title: "404 - Page Not Found",
  description:
    "Sorry, the coupon, deal, or store page you are looking for could not be found.",
});
</script>

<template>
  <main
    class="relative min-h-screen overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50"
  >
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute -top-20 -left-16 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl"
      />
      <div
        class="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl"
      />
      <div
        class="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-yellow-100/40 blur-3xl"
      />
    </div>

    <div
      class="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 py-10 sm:px-6 lg:px-8"
    >
      <div class="grid w-full items-center gap-10 lg:grid-cols-2">
        <section class="max-w-2xl">
          <div
            class="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm backdrop-blur"
          >
            <span class="flex h-2.5 w-2.5 rounded-full bg-primary" />
            page not found
          </div>

          <h1
            class="mt-6 text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"
          >
            404
          </h1>

          <h2
            class="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            This deal has expired, moved, or never existed.
          </h2>

          <p
            class="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg"
          >
            The coupon or store page you tried to open is unavailable right now.
            Check our latest verified deals, trending stores, and handpicked
            categories to find a better offer.
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink
              to="/coupons"
              class="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600"
            >
              Browse Coupons
            </NuxtLink>

            <NuxtLink
              to="/"
              class="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-orange-300 hover:text-orange-600"
            >
              Back to Home
            </NuxtLink>
          </div>
        </section>

        <section class="relative">
          <div
            class="relative mx-auto max-w-xl rounded-2xl border border-white/70 bg-white/70 p-5 shadow-2xl shadow-orange-100 backdrop-blur-xl"
          >
            <div
              class="rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 text-white"
            >
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-semibold text-orange-300">Oops!</p>
                  <h3 class="mt-1 text-2xl font-bold">Deal unavailable</h3>
                </div>

                <div
                  class="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-3xl font-black text-orange-300"
                >
                  %
                </div>
              </div>

              <div class="mt-6 space-y-4">
                <div class="rounded-2xl bg-white/10 p-4">
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-slate-300">Requested coupon</span>
                    <span
                      class="rounded-full bg-red-400/20 px-3 py-1 text-xs font-bold text-red-200"
                    >
                      Not Found
                    </span>
                  </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                  <div class="rounded-2xl bg-orange-500/15 p-4">
                    <p
                      class="text-xs font-semibold uppercase tracking-wide text-orange-200"
                    >
                      Better idea
                    </p>
                    <p class="mt-2 text-lg font-bold">Try verified deals</p>
                  </div>

                  <div class="rounded-2xl bg-white/10 p-4">
                    <p
                      class="text-xs font-semibold uppercase tracking-wide text-slate-300"
                    >
                      Fast route
                    </p>
                    <p class="mt-2 text-lg font-bold">Visit top stores</p>
                  </div>
                </div>

                <div
                  class="rounded-2xl border border-dashed border-white/20 p-4"
                >
                  <div class="flex items-center justify-between">
                    <span class="text-sm font-semibold text-slate-200">
                      Popular fallback
                    </span>
                    <span class="text-sm font-bold text-orange-300">
                      Save up to 70%
                    </span>
                  </div>
                  <div class="mt-4 flex items-center gap-3">
                    <div
                      class="flex-1 rounded-full bg-white/10 px-4 py-3 text-sm text-slate-300"
                    >
                      Search a store or coupon
                    </div>
                    <div
                      class="rounded-full bg-orange-500 px-4 py-3 text-sm font-bold text-white"
                    >
                      Search
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
