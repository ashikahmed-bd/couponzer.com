<script setup></script>

<template>
  <main class="max-w-7xl mx-auto px-4 py-6">
    <section
      class="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white via-slate-50 to-slate-100 px-4 py-12"
    >
      <div class="max-w-2xl">
        <div
          class="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-3 py-2 backdrop-blur"
        >
          <span class="h-2 w-2 rounded-full bg-primary"></span>
          <span
            class="text-xs font-semibold uppercase tracking-[0.2em] text-primary"
          >
            Coupons Directory
          </span>
        </div>

        <h1
          class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
        >
          Coupon Style 01
        </h1>

        <p class="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
          Discover exclusive coupon codes, trending offers, and handpicked deals
          from top categories and stores.
        </p>
      </div>
    </section>

    <section class="py-12">
      <div class="grid grid-cols-4 gap-6">
        <aside class="md:sticky md:top-32 md:h-fit">
          <div class="rounded-3xl border border-slate-200 bg-white p-5">
            <div class="mb-5 flex xl:hidden">
              <button
                class="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                <i class="ph ph-faders-horizontal text-base"></i>
                Sidebar Toggler
              </button>
            </div>

            <div class="space-y-8">
              <div>
                <h3 class="text-xl font-bold text-slate-900">Filter</h3>
              </div>
              <div class="space-y-4 border-t border-slate-100 pt-6">
                <div class="space-y-2">
                  <label class="text-sm font-medium text-slate-700"
                    >Keyword</label
                  >
                  <input
                    type="text"
                    placeholder="Type keyword..."
                    class="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-4 focus:ring-primary/10"
                  />
                </div>

                <div class="space-y-2">
                  <label class="text-sm font-medium text-slate-700"
                    >Store</label
                  >
                  <select
                    class="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-800 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                  >
                    <option>Select Store</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>

                <div class="space-y-2">
                  <label class="text-sm font-medium text-slate-700"
                    >Category</label
                  >
                  <select
                    class="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-800 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                  >
                    <option>Select Category</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>

                <div class="space-y-2">
                  <label class="text-sm font-medium text-slate-700"
                    >Expire Date</label
                  >
                  <input
                    type="text"
                    placeholder="Select Date"
                    class="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-4 focus:ring-primary/10"
                  />
                </div>
              </div>

              <div class="border-t border-slate-100 pt-6">
                <div class="mb-5 flex items-center justify-between">
                  <h4 class="text-lg font-semibold text-slate-900">
                    Suggested Categories
                  </h4>
                </div>

                <div class="space-y-3">
                  <label
                    class="flex cursor-pointer items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 transition hover:border-primary/40 hover:bg-slate-50"
                  >
                    <div class="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked
                        class="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                      />
                      <span class="text-sm font-medium text-slate-700"
                        >Accessories</span
                      >
                    </div>
                    <span class="text-sm text-slate-500">3215</span>
                  </label>

                  <label
                    class="flex cursor-pointer items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 transition hover:border-primary/40 hover:bg-slate-50"
                  >
                    <div class="flex items-center gap-3">
                      <input
                        type="checkbox"
                        class="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                      />
                      <span class="text-sm font-medium text-slate-700"
                        >Beauty</span
                      >
                    </div>
                    <span class="text-sm text-slate-500">1522</span>
                  </label>

                  <label
                    class="flex cursor-pointer items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 transition hover:border-primary/40 hover:bg-slate-50"
                  >
                    <div class="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked
                        class="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                      />
                      <span class="text-sm font-medium text-slate-700"
                        >Clothing</span
                      >
                    </div>
                    <span class="text-sm text-slate-500">545</span>
                  </label>

                  <label
                    class="flex cursor-pointer items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 transition hover:border-primary/40 hover:bg-slate-50"
                  >
                    <div class="flex items-center gap-3">
                      <input
                        type="checkbox"
                        class="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                      />
                      <span class="text-sm font-medium text-slate-700"
                        >Food</span
                      >
                    </div>
                    <span class="text-sm text-slate-500">1563</span>
                  </label>

                  <label
                    class="flex cursor-pointer items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 transition hover:border-primary/40 hover:bg-slate-50"
                  >
                    <div class="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked
                        class="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                      />
                      <span class="text-sm font-medium text-slate-700"
                        >Medical</span
                      >
                    </div>
                    <span class="text-sm text-slate-500">475</span>
                  </label>
                </div>

                <a
                  href="categories-style-3.html"
                  class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
                >
                  See All
                  <i class="ph ph-arrow-right"></i>
                </a>
              </div>

              <div class="border-t border-slate-100 pt-6">
                <h4 class="mb-5 text-lg font-semibold text-slate-900">
                  Popular Tags
                </h4>

                <div class="flex flex-wrap gap-3">
                  <a
                    href="#"
                    class="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-primary hover:bg-primary hover:text-white"
                    >Coupons</a
                  >
                  <a
                    href="#"
                    class="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-primary hover:bg-primary hover:text-white"
                    >Flash Sale</a
                  >
                  <a
                    href="#"
                    class="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-primary hover:bg-primary hover:text-white"
                    >Exclusive</a
                  >
                  <a
                    href="#"
                    class="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-primary hover:bg-primary hover:text-white"
                    >Best Offer</a
                  >
                  <a
                    href="#"
                    class="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-primary hover:bg-primary hover:text-white"
                    >Trending</a
                  >
                  <a
                    href="#"
                    class="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-primary hover:bg-primary hover:text-white"
                    >Discount</a
                  >
                  <a
                    href="#"
                    class="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-primary hover:bg-primary hover:text-white"
                    >2024</a
                  >
                  <a
                    href="#"
                    class="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-primary hover:bg-primary hover:text-white"
                    >Hot Deal</a
                  >
                </div>

                <a
                  href="#"
                  class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
                >
                  More Tag
                  <i class="ph ph-arrow-right"></i>
                </a>
              </div>

              <!-- Reset -->
              <div class="border-t border-slate-100 pt-6">
                <button
                  class="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:border-primary hover:bg-primary hover:text-white"
                >
                  <i class="ph ph-arrow-clockwise text-base"></i>
                  Reset Filters
                </button>
              </div>
            </div>
          </div>
        </aside>

        <main class="md:col-span-3">
          <div class="space-y-4">
            <div
              class="flex flex-col items-center md:flex-row md:justify-between gap-4 rounded-3xl border border-slate-200 bg-white p-4"
            >
              <p class="text-sm text-slate-500">Showing 8 of 600 Results</p>

              <div class="flex items-center gap-3">
                <span class="hidden text-sm text-slate-500 sm:inline"
                  >Sort By:</span
                >
                <select
                  class="h-11 rounded-full border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                >
                  <option>Newest</option>
                  <option>Popular</option>
                  <option>Trending</option>
                </select>
              </div>
            </div>

            <div class="grid gap-4 sm:grid-cols-3 2xl:grid-cols-4">
              <BaseCouponCard v-for="value in 12" />
            </div>
          </div>
        </main>
      </div>
    </section>

    <Newsletter />
  </main>
</template>

<style scoped></style>
