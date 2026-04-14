<script setup>
const collapse = ref(null);

const details = [
  "Get upto 50-90% off on men's & women's fashion.",
  "Sale starts early on 25th Sep for HostingerInsider.",
  "Also, avail extra 10% off on Kotak, Axis & ICICI bank cards.",
  "Shop from an endless selection of brands like Nike, Adidas, Tommy Hilfiger, Flying Machine, AND, Forever 21 and a lot more.",
  "Shop for watches, t-shirts, jeans, shirts, shoes, jewellery & more.",
  "Avail Hostinger discounts on all categories.",
  "No Hostinger coupon code is required.",
];
</script>

<template>
  <main class="max-w-6xl mx-auto px-4 py-6">
    <UBreadcrumb
      :items="[
        { label: 'Home', to: '/' },
        { label: 'Store', to: '/' },
        { label: 'Product' },
      ]"
    />

    <section class="space-4">
      <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        <aside class="space-y-6">
          <div
            class="rounded-3xl border border-border hover:border-primary transition duration-300 bg-white p-5"
          >
            <div class="mb-4 flex items-center justify-between">
              <span
                class="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600"
              >
                Exclusive
              </span>

              <button
                class="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-slate-500 transition hover:border-primary hover:bg-primary hover:text-white"
              >
                <UIcon name="i-lucide-heart" class="size-6" />
              </button>
            </div>

            <div
              class="flex items-center justify-center rounded-2xl bg-slate-50 py-4"
            >
              <img
                src="/images/top-stores-details-1.png"
                alt="Store"
                class="w-full h-auto object-contain"
              />
            </div>

            <div class="mt-5 grid gap-3 sm:grid-cols-2">
              <div class="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <div class="flex items-center gap-3">
                  <div
                    class="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white"
                  >
                    4.9
                  </div>
                  <div>
                    <div class="flex items-center gap-1 text-amber-400">
                      <UIcon
                        v-for="item in 5"
                        name="i-lucide-star"
                        class="size-4"
                      />
                    </div>
                    <p class="mt-1 text-xs text-slate-500">2.5K Ratings</p>
                  </div>
                </div>
              </div>

              <div class="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <div class="flex items-center gap-3">
                  <div
                    class="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white"
                  >
                    <UIcon name="i-lucide-share-2" class="size-5" />
                  </div>
                  <div>
                    <p class="text-sm font-semibold text-slate-800">
                      Share & Earn
                    </p>
                    <p class="text-xs text-slate-500">Per share $5</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              class="mt-5 inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-white transition hover:bg-primary/90"
            >
              Activate Cashback
            </button>
          </div>

          <div
            class="rounded-3xl border border-border hover:border-primary transition duration-500 bg-white p-5"
          >
            <h3 class="text-xl font-bold text-slate-900">Filter</h3>

            <div class="mt-6 space-y-4 border-t border-slate-100 pt-6">
              <input
                type="text"
                placeholder="Type keyword..."
                class="h-12 w-full rounded-2xl border border-slate-200 px-4 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
              />

              <select
                class="h-12 w-full rounded-2xl border border-slate-200 px-4 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
              >
                <option>Select Store</option>
              </select>

              <select
                class="h-12 w-full rounded-2xl border border-slate-200 px-4 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
              >
                <option>Select Category</option>
              </select>
            </div>

            <div class="mt-8 border-t border-slate-100 pt-6">
              <h4 class="mb-4 text-lg font-semibold text-slate-900">
                Suggested Categories
              </h4>

              <div class="space-y-3">
                <label
                  class="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 hover:bg-slate-50"
                >
                  <div class="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked
                      class="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                    />
                    <span class="text-sm text-slate-700">Accessories</span>
                  </div>
                  <span class="text-sm text-slate-500">3215</span>
                </label>

                <label
                  class="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 hover:bg-slate-50"
                >
                  <div class="flex items-center gap-3">
                    <input
                      type="checkbox"
                      class="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                    />
                    <span class="text-sm text-slate-700">Beauty</span>
                  </div>
                  <span class="text-sm text-slate-500">1522</span>
                </label>

                <label
                  class="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 hover:bg-slate-50"
                >
                  <div class="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked
                      class="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                    />
                    <span class="text-sm text-slate-700">Clothing</span>
                  </div>
                  <span class="text-sm text-slate-500">545</span>
                </label>
              </div>

              <a
                href="#"
                class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                See All <i class="ph ph-arrow-right"></i>
              </a>
            </div>

            <div class="mt-8 border-t border-slate-100 pt-6">
              <h4 class="mb-4 text-lg font-semibold text-slate-900">
                Popular Tags
              </h4>

              <div class="flex flex-wrap gap-3">
                <a
                  href="#"
                  class="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 transition hover:border-primary hover:bg-primary hover:text-white"
                  >Coupons</a
                >
                <a
                  href="#"
                  class="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 transition hover:border-primary hover:bg-primary hover:text-white"
                  >Flash Sale</a
                >
                <a
                  href="#"
                  class="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 transition hover:border-primary hover:bg-primary hover:text-white"
                  >Exclusive</a
                >
                <a
                  href="#"
                  class="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 transition hover:border-primary hover:bg-primary hover:text-white"
                  >Trending</a
                >
              </div>
            </div>

            <button
              class="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:border-primary hover:bg-primary hover:text-white"
            >
              <i class="ph ph-arrow-clockwise"></i>
              Reset Filters
            </button>
          </div>
        </aside>

        <div class="col-span-2">
          <div class="py-4">
            <h2 class="text-4xl font-bold tracking-tight text-slate-900">
              Hostinger Offers
            </h2>

            <p class="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
              Hostinger is a fashion giant that allows you to shop for a wide
              range of stylish and trendy clothing, accessories, and footwear,
              while offering great deals and discounts.
            </p>

            <div class="inline-flex items-center gap-2 py-2.5">
              <img src="/images/fav.png" alt="fav" class="h-4 w-4" />
              <span class="text-sm font-medium text-primary"
                >Flat 75.5% Cashback</span
              >
            </div>
          </div>

          <BaseTabs
            :tabs="[
              { label: 'All (190+)', slot: 'all' },
              { label: 'Details', slot: 'details' },
              { label: 'Coupons', slot: 'coupons' },
            ]"
          >
            <template #all>
              <div class="space-y-4">
                <UCollapsible
                  v-for="(_, index) in 5"
                  :key="index"
                  class="rounded-2xl border border-border bg-white p-3 hover:border-primary sm:p-4"
                >
                  <template #default="{ open }">
                    <div
                      class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between"
                    >
                      <div class="flex-1 md:pr-6">
                        <div class="flex flex-wrap items-center gap-2">
                          <span
                            class="inline-flex items-center gap-2 rounded-lg border border-border bg-sky-50 px-3 py-1.5 text-sm font-medium text-sky-600"
                          >
                            <UIcon name="i-lucide-badge-check" class="size-4" />
                            Verified
                          </span>

                          <span
                            class="inline-flex items-center gap-2 rounded-lg border border-orange-300 bg-orange-50 px-3 py-1.5 text-sm font-medium text-orange-500"
                          >
                            <UIcon
                              name="i-lucide-calendar-days"
                              class="size-4"
                            />
                            25 Nov, 24
                          </span>
                        </div>

                        <h3
                          class="mt-4 text-2xl font-bold leading-tight text-accent"
                        >
                          Exclusive Coupon: $15 Off Orders Over $100!
                        </h3>

                        <div
                          class="flex items-center justify-between py-4 text-body"
                        >
                          <div class="flex items-center gap-2">
                            <UIcon name="i-lucide-lock" class="size-4" />
                            <span>5462</span>
                          </div>

                          <div class="flex items-center gap-4">
                            <a
                              href="#"
                              class="inline-flex items-center gap-1 transition hover:text-primary"
                            >
                              <UIcon
                                name="i-lucide-message-square-text"
                                class="size-4"
                              />
                              <span>25</span>
                            </a>

                            <a
                              href="#"
                              class="inline-flex items-center gap-1 transition hover:text-primary"
                            >
                              <UIcon name="i-lucide-share-2" class="size-4" />
                              <span>15</span>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div
                        class="border-border border-t md:border-l md:border-t-0 md:pl-6 py-4"
                      >
                        <div class="flex flex-col items-center text-center">
                          <a
                            href="#"
                            class="inline-flex items-center gap-2 text-base font-semibold text-sky-600"
                          >
                            <UIcon name="i-lucide-share-2" class="size-4" />
                            Share & Earn
                          </a>

                          <p class="mt-3 text-sm text-slate-500">
                            Save up to 25% on all Coupons
                          </p>

                          <button
                            class="mt-5 py-2.5 inline-flex min-w-full items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-white transition hover:bg-primary-hover"
                          >
                            Get Deal
                          </button>

                          <UCollapsibleButton
                            class="mt-5 inline-flex items-center gap-2 font-medium text-slate-500 transition hover:text-primary"
                          >
                            <span>{{
                              open ? "Hide Details" : "Show Details"
                            }}</span>
                            <UIcon
                              name="i-lucide-chevron-down"
                              class="size-4 transition duration-300"
                              :class="{ 'rotate-180': open }"
                            />
                          </UCollapsibleButton>
                        </div>
                      </div>
                    </div>
                  </template>

                  <template #content>
                    <div class="overflow-hidden py-4">
                      <div
                        class="rounded-xl border border-border bg-surface p-5"
                      >
                        <ul
                          class="list-disc space-y-2 pl-5 text-sm leading-7 text-body"
                        >
                          <li
                            v-for="(item, detailIndex) in details"
                            :key="detailIndex"
                          >
                            {{ item }}
                          </li>
                        </ul>
                      </div>

                      <div class="mt-4 flex items-center gap-5 px-1 text-body">
                        <span class="text-sm">75% Success</span>

                        <div class="flex items-center gap-3">
                          <button class="transition hover:text-primary">
                            <UIcon name="i-lucide-thumbs-up" class="size-5" />
                          </button>
                          <button class="transition hover:text-primary">
                            <UIcon name="i-lucide-thumbs-down" class="size-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </template>
                </UCollapsible>
              </div>
            </template>
            <template #details> </template>
            <template #coupons> </template>
            <template #cashback> </template>
            <template #deals> </template>
          </BaseTabs>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
