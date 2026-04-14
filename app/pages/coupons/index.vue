<script setup>
const couponStore = useCouponStore();

const {
  data: coupons,
  pending,
  error,
} = await useAsyncData("coupons", () => couponStore.getCoupons());
</script>

<template>
  <main>
    <SeoMeta
      title="Best Coupons & Promo Codes for Top Stores | Couponzer"
      description="Find the best coupons, promo codes, and limited-time deals on Couponzer. Browse verified discounts, featured offers, and exclusive savings from top online stores."
      keywords="Couponzer coupons, best promo codes, verified discounts, featured deals, exclusive offers, shopping deals"
    />

    <section class="relative overflow-hidden bg-white/60 py-6">
      <div class="mx-auto max-w-7xl px-4 py-6">
        <div class="max-w-3xl">
          <h1 class="text-3xl font-bold tracking-tight text-accent md:text-4xl">
            Best Coupons & Promo Codes for Top Stores
          </h1>

          <p class="mt-3 max-w-2xl text-sm leading-6 text-body sm:text-base">
            Couponzer helps you discover verified coupon codes, handpicked
            deals, and exclusive promo offers from trusted brands and online
            stores.
          </p>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 py-8">
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px]">
        <div class="space-y-6">
          <div class="space-y-4">
            <div
              v-for="coupon in coupons"
              :key="coupon.id"
              class="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary"
            >
              <div class="grid md:grid-cols-[280px_1fr]">
                <div
                  class="flex flex-col justify-between border-b border-gray-200 bg-gray-50 p-5 md:border-b-0 md:border-r"
                  :style="
                    coupon.stores?.background
                      ? { backgroundColor: coupon.stores.background }
                      : {}
                  "
                >
                  <div>
                    <NuxtLink
                      :to="`/stores/${coupon.stores?.slug}`"
                      class="flex items-center gap-4"
                    >
                      <div
                        class="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-2 ring-1 ring-gray-200"
                      >
                        <NuxtImg
                          :src="
                            coupon.stores?.logo_url ?? '/stores/default.png'
                          "
                          :alt="coupon.stores?.name ?? coupon.title"
                          class="h-10 w-full object-contain"
                        />
                      </div>

                      <div class="min-w-0">
                        <h3 class="truncate text-lg font-bold text-accent mb-2">
                          {{ coupon.stores?.name }}
                        </h3>
                        <span
                          v-if="coupon.stores?.is_verified"
                          class="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200"
                        >
                          <UIcon name="i-lucide-badge-check" class="size-3.5" />
                          Verified
                        </span>
                      </div>
                    </NuxtLink>

                    <div class="mt-4 flex flex-wrap gap-2">
                      <span
                        v-if="coupon.stores?.offer_text"
                        class="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-700 ring-1 ring-sky-200"
                      >
                        <UIcon name="i-lucide-badge-percent" class="size-3.5" />
                        {{ coupon.stores.offer_text }}
                      </span>

                      <span
                        v-if="coupon.stores?.cashback_text"
                        class="inline-flex items-center gap-1.5 rounded-full bg-purple-50 px-3 py-1.5 text-xs font-semibold text-purple-700 ring-1 ring-purple-200"
                      >
                        <UIcon name="i-lucide-wallet" class="size-3.5" />
                        {{ coupon.stores.cashback_text }}
                      </span>
                    </div>
                  </div>

                  <div
                    class="mt-5 flex items-center justify-between text-sm text-gray-500"
                  >
                    <div class="flex items-center gap-1.5">
                      <UIcon name="i-lucide-star" class="size-4" />

                      <span
                        >{{ Number(coupon.stores?.rating).toFixed(1) }}/5</span
                      >
                    </div>

                    <div class="flex items-center gap-1.5">
                      <UIcon name="i-lucide-thumbs-up" class="size-4" />
                      <span>{{ coupon.stores?.votes }} votes</span>
                    </div>
                  </div>
                </div>

                <div class="flex flex-col p-5">
                  <div class="flex flex-wrap items-start justify-between gap-3">
                    <div class="min-w-0 flex-1">
                      <div class="mb-3 flex flex-wrap items-center gap-2">
                        <span
                          v-if="coupon.discount_text"
                          class="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-bold text-orange-600 ring-1 ring-orange-200"
                        >
                          {{ coupon.discount_text }}
                        </span>

                        <span
                          v-if="coupon.is_featured"
                          class="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-700 ring-1 ring-amber-200"
                        >
                          Featured
                        </span>

                        <span
                          v-if="coupon.is_verified"
                          class="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700 ring-1 ring-emerald-200"
                        >
                          Verified Coupon
                        </span>

                        <span
                          v-if="coupon.is_exclusive"
                          class="rounded-full bg-violet-50 px-3 py-1.5 text-xs font-bold text-violet-700 ring-1 ring-violet-200"
                        >
                          Exclusive
                        </span>
                      </div>

                      <NuxtLink
                        :to="`/coupons/${coupon.slug}`"
                        class="block text-xl font-bold leading-snug text-accent transition-colors duration-200 hover:text-primary"
                      >
                        {{ coupon.title }}
                      </NuxtLink>

                      <p
                        v-if="coupon.summary"
                        class="line-clamp-2 text-sm leading-6 text-body mt-2"
                      >
                        {{ coupon.summary }}
                      </p>
                    </div>
                  </div>

                  <div
                    class="flex flex-wrap items-center justify-between gap-3 border-t border-gray-200 py-3.5 mt-3"
                  >
                    <div
                      class="flex flex-wrap items-center gap-4 text-sm text-gray-500"
                    >
                      <div class="flex items-center gap-1.5">
                        <UIcon
                          name="i-lucide-mouse-pointer-click"
                          class="size-4"
                        />
                        <span>{{ coupon.click_count }} clicks</span>
                      </div>

                      <div class="flex items-center gap-1.5">
                        <UIcon name="i-lucide-calendar" class="size-4" />
                        <span>{{ $date(coupon.starts_at) }}</span>
                      </div>
                    </div>

                    <UModal
                      :title="coupon.title"
                      :ui="{ content: 'w-full max-w-2xl' }"
                      :close="{
                        color: 'primary',
                        variant: 'outline',
                        class: 'rounded-full',
                      }"
                    >
                      <button
                        class="relative flex min-w-[200px] items-center justify-between overflow-hidden rounded-full border border-dashed border-orange-400 bg-orange-50 py-2.5"
                      >
                        <span
                          class="absolute left-0 top-0 z-10 flex h-full w-[78%] items-center justify-center rounded-full bg-orange-500 px-5 text-sm font-bold text-white transition-all duration-300 group-hover:w-[74%]"
                        >
                          {{ coupon.code ? "Show Coupon" : "Get Deal" }}
                        </span>

                        <span
                          class="flex w-full items-center justify-end px-4 text-sm font-semibold tracking-wider text-orange-600"
                        >
                          {{ coupon.code || "No Code Needed" }}
                        </span>
                      </button>

                      <template #body>
                        <div class="flex flex-col items-center gap-3">
                          <div class="w-full px-2 md:px-0 flex justify-center">
                            <div class="w-full max-w-xs">
                              <div
                                class="flex w-full overflow-hidden rounded-full border border-dashed border-orange-300 bg-orange-50"
                              >
                                <input
                                  type="text"
                                  :value="coupon.code"
                                  readonly
                                  class="w-full bg-transparent px-6 py-2 text-sm font-bold tracking-wider text-primary outline-none"
                                />

                                <button
                                  class="shrink-0 rounded-full bg-primary px-10 py-2 text-sm font-bold text-white transition hover:bg-primary-hover"
                                >
                                  Copy
                                </button>
                              </div>
                            </div>
                          </div>

                          <p
                            class="text-center text-sm font-medium text-body py-2"
                          >
                            Continue to
                            <a
                              :href="coupon.affiliate_url ?? coupon.deal_url"
                              target="_blank"
                              rel="nofollow sponsored noopener"
                              class="font-semibold text-primary hover:text-primary-hover"
                            >
                              {{ coupon.stores?.name ?? "Visit Store" }}
                            </a>
                            •

                            <a
                              v-if="coupon.slug"
                              :href="coupon.affiliate_url"
                              class="font-semibold text-body hover:text-primary-hover"
                            >
                              View Terms & Conditions
                            </a>
                          </p>
                        </div>

                        <div class="grid gap-2 border-y border-border p-4">
                          <div class="block">
                            <p class="text-sm font-semibold text-body">
                              Terms:
                            </p>
                            <div
                              v-html="coupon.terms"
                              class="text-sm [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2"
                            ></div>
                          </div>
                        </div>

                        <div
                          class="flex flex-wrap items-center justify-center gap-2 mt-4"
                        >
                          <span class="mr-2 text-sm font-semibold text-dark">
                            Did it work?
                          </span>

                          <button
                            class="flex items-center gap-2 rounded-lg bg-green-100 px-3 py-2 font-bold text-green-600 transition hover:bg-green-200"
                          >
                            <UIcon name="i-lucide-thumbs-up" class="size-5" />
                            <span>Yes</span>
                          </button>

                          <button
                            class="flex items-center gap-2 rounded-lg bg-red-100 px-3 py-2 font-bold text-red-600 transition hover:bg-red-200"
                          >
                            <UIcon name="i-lucide-thumbs-down" class="size-5" />
                            <span>No</span>
                          </button>
                        </div>
                      </template>
                    </UModal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside class="w-full">
          <div class="sticky top-24 space-y-6">
            <div class="space-y-4">
              <NuxtLink
                to="https://namecheap.pxf.io/c/3173023/1183690/5618"
                title="ads"
                class="block"
              >
                <NuxtImg src="/ads/728x90.gif" alt="" class="w-full rounded" />
              </NuxtLink>

              <NuxtLink
                to="https://1.envato.market/c/3173023/381185/4662"
                title="ads"
                class="block"
              >
                <NuxtImg
                  src="/ads/970X250.jpeg"
                  alt=""
                  class="w-full rounded"
                />
              </NuxtLink>

              <NuxtLink
                to="https://namecheap.pxf.io/c/3173023/1183697/5618"
                title="ads"
              >
                <NuxtImg src="/ads/300x250.gif" alt="" class="w-full rounded" />
              </NuxtLink>
            </div>
          </div>
        </aside>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
