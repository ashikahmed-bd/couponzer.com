<script setup>
const route = useRoute();
const merchantStore = useMerchantStore();

const slug = route.params.slug;

const {
  data: store,
  pending,
  error,
} = await useAsyncData(`store-${slug}`, () => merchantStore.getStore(slug));

const { data: featured } = await useAsyncData("featured", async () => {
  return await merchantStore.getFeatured();
});

const handleClick = (url) => {
  setTimeout(() => {
    window.open(url, "_blank");
  }, 300);
};
</script>

<template>
  <main>
    <section class="bg-white/50 py-6">
      <div class="mx-auto max-w-7xl px-4">
        <div
          class="flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:text-left"
        >
          <div
            class="mx-auto flex shrink-0 items-center justify-center rounded-2xl p-10"
            :style="{
              backgroundColor: store.background,
            }"
          >
            <NuxtImg
              :src="store.logo_url ?? '/stores/default.png'"
              :alt="store.name"
              class="h-20 md:h-32 w-auto object-contain"
            />
          </div>

          <div class="min-w-0 flex-1">
            <div
              class="flex flex-wrap items-center justify-center gap-2 md:justify-start mb-3"
            >
              <span
                v-if="store.is_verified"
                class="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200"
              >
                <UIcon name="i-lucide-badge-check" class="size-3.5" />
                Verified Store
              </span>

              <span
                v-if="store.offer_text"
                class="inline-flex items-center gap-1 rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700 ring-1 ring-rose-200"
              >
                <UIcon name="i-lucide-ticket-percent" class="size-3.5" />
                {{ store.offer_text }}
              </span>

              <span
                v-if="store.cashback_text"
                class="inline-flex items-center gap-1 rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700 ring-1 ring-violet-200"
              >
                <UIcon name="i-lucide-wallet" class="size-3.5" />
                {{ store.cashback_text }}
              </span>
            </div>
            <h1
              class="text-2xl font-extrabold tracking-tight text-gray-900 md:text-4xl"
            >
              {{ store.title }}
            </h1>

            <div
              class="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-sm md:justify-start md:text-base"
            >
              <div class="flex items-center gap-1">
                <template v-for="i in 5" :key="i">
                  <UIcon
                    v-if="i <= Math.floor(store.rating)"
                    name="i-lucide-star"
                    class="size-4 fill-yellow-500 text-yellow-400"
                  />
                  <UIcon
                    v-else-if="i - store.rating < 1"
                    name="i-lucide-star-half"
                    class="size-4 fill-yellow-400 text-yellow-400"
                  />
                  <UIcon
                    v-else
                    name="i-lucide-star"
                    class="size-4 text-gray-300"
                  />
                </template>

                <span class="ml-2 text-sm font-semibold text-gray-700">
                  {{ Number(store.rating).toFixed(1) }} Rating
                </span>
              </div>

              <div class="text-gray-700 flex items-center gap-1">
                <UIcon name="i-lucide-thumbs-up" class="size-4" />
                <span>{{ store.votes }} votes</span>
              </div>
              <a
                v-if="store.website_url"
                :href="store.affiliate_url ?? store.website_url"
                target="_blank"
                rel="nofollow noopener noreferrer"
                class="inline-flex items-center gap-1 font-medium text-primary transition hover:text-primary-hover"
              >
                Visit Website
                <UIcon name="i-lucide-arrow-up-right" class="size-4" />
              </a>
            </div>

            <p
              v-if="store.summary"
              class="mt-4 max-w-3xl text-sm leading-6 text-body md:text-base"
            >
              {{ store.summary }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 py-8">
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px]">
        <div class="space-y-6">
          <div v-html="store.description"></div>

          <div class="rounded-2xl border border-border bg-white p-5">
            <div class="mb-4">
              <h2 class="text-xl font-bold text-dark">Latest Coupons</h2>
              <p class="mt-2 text-sm text-body">
                Browse the latest deals and coupons for {{ store.name }}.
              </p>
            </div>

            <div class="space-y-4">
              <UCollapsible
                v-for="(coupon, index) in store.coupons"
                :key="coupon.id"
                class="rounded-2xl border border-border bg-white p-3 hover:border-primary sm:p-4"
              >
                <template #default="{ open }">
                  <div
                    class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between"
                  >
                    <div class="flex-1 md:pr-6">
                      <div class="flex flex-wrap items-center gap-2">
                        <span
                          v-if="coupon.is_verified"
                          class="inline-flex items-center gap-2 rounded-lg border border-border bg-sky-50 px-3 py-1.5 text-sm font-medium text-sky-600"
                        >
                          <UIcon name="i-lucide-badge-check" class="size-4" />
                          Verified
                        </span>

                        <span
                          v-if="coupon.is_featured"
                          class="inline-flex items-center gap-2 rounded-lg border border-yellow-300 bg-yellow-50 px-3 py-1.5 text-sm font-medium text-yellow-600"
                        >
                          <UIcon name="i-lucide-star" class="size-4" />
                          Featured
                        </span>

                        <span
                          v-if="coupon.expires_at"
                          class="inline-flex items-center gap-2 rounded-lg border border-orange-300 bg-orange-50 px-3 py-1.5 text-sm font-medium text-orange-500"
                        >
                          <UIcon name="i-lucide-calendar-days" class="size-4" />
                          Expires: {{ $date(coupon.expires_at) ?? "N/A" }}
                        </span>
                      </div>

                      <h3
                        class="mt-4 text-2xl font-bold leading-tight text-accent"
                      >
                        {{ coupon.title }}
                      </h3>

                      <p
                        v-if="coupon.summary"
                        class="mt-2 text-sm leading-6 text-body"
                      >
                        {{ coupon.summary }}
                      </p>

                      <div class="mt-4 flex flex-wrap items-center gap-3">
                        <span
                          class="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-600"
                        >
                          {{ coupon.discount_text || "Special Offer" }}
                        </span>

                        <span
                          v-if="coupon.is_exclusive"
                          class="inline-flex items-center rounded-full bg-purple-50 px-3 py-1 text-sm font-medium text-purple-600"
                        >
                          Exclusive
                        </span>

                        <div class="flex items-center gap-2">
                          <UIcon
                            name="i-lucide-mouse-pointer-click"
                            class="size-4"
                          />
                          <span>{{ coupon.click_count }} Clicks</span>
                        </div>
                      </div>
                    </div>

                    <div
                      class="border-border border-t py-4 md:border-l md:border-t-0 md:pl-6"
                    >
                      <div class="flex flex-col items-center text-center">
                        <a
                          :href="coupon.affiliate_url ?? coupon.deal_url"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="inline-flex items-center gap-2 text-base font-semibold text-success"
                        >
                          <UIcon name="i-lucide-share-2" class="size-4" />
                          Share & Earn
                        </a>

                        <p class="mt-3 text-sm text-body mb-3">
                          Grab this latest offer now
                        </p>

                        <UModal
                          :title="coupon.title"
                          :ui="{
                            content: 'w-full max-w-2xl',
                          }"
                          :close="{
                            color: 'primary',
                            variant: 'outline',
                            class: 'rounded-full',
                          }"
                        >
                          <button
                            @click="
                              handleClick(
                                coupon.affiliate_url ?? coupon.deal_url,
                              )
                            "
                            class="relative w-full flex items-center justify-between rounded-full border border-dashed border-primary py-2"
                          >
                            <span
                              class="absolute cursor-pointer flex items-center justify-center w-[85%] group-hover:w-[80%] h-full rounded-full bg-primary text-white transition-all duration-500 ease-out z-20"
                            >
                              {{ coupon.code ? "Show Code" : "Get Deal" }}
                            </span>
                            <span
                              class="w-full flex items-center justify-end font-semibold text-orange-600 px-4"
                            >
                              {{ coupon.code ?? "Get Deal" }}
                            </span>
                          </button>
                          <template #body>
                            <div class="flex flex-col items-center gap-3">
                              <div
                                class="w-full px-2 md:px-0 flex justify-center"
                              >
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
                                  :href="
                                    coupon.affiliate_url ?? coupon.deal_url
                                  "
                                  target="_blank"
                                  rel="nofollow sponsored noopener"
                                  class="font-semibold text-primary hover:text-primary-hover"
                                >
                                  {{ store?.name ?? "Visit Store" }}
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
                              <span
                                class="mr-2 text-sm font-semibold text-dark"
                              >
                                Did it work?
                              </span>

                              <button
                                class="flex items-center gap-2 rounded-lg bg-green-100 px-3 py-2 font-bold text-green-600 transition hover:bg-green-200"
                              >
                                <UIcon
                                  name="i-lucide-thumbs-up"
                                  class="size-5"
                                />
                                <span>Yes</span>
                              </button>

                              <button
                                class="flex items-center gap-2 rounded-lg bg-red-100 px-3 py-2 font-bold text-red-600 transition hover:bg-red-200"
                              >
                                <UIcon
                                  name="i-lucide-thumbs-down"
                                  class="size-5"
                                />
                                <span>No</span>
                              </button>
                            </div>
                          </template>
                        </UModal>

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
                      v-html="coupon.description"
                      class="=text-sm text-body mb-3"
                    ></div>

                    <div
                      class="rounded-xl border border-border bg-surface p-4 text-sm text-body"
                    >
                      <h4 class="mb-2 font-semibold">Terms:</h4>

                      <div
                        v-html="coupon.terms"
                        class="[&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2"
                      ></div>
                    </div>

                    <div class="mt-4 flex items-center gap-5 px-1 text-body">
                      <span class="text-sm">
                        {{
                          coupon.is_verified
                            ? "Verified coupon"
                            : "User submitted coupon"
                        }}
                      </span>

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
            </div>
            <div class="rounded-2xl border border-border bg-white p-4 mt-4">
              <h3 class="mb-4 text-lg font-bold text-dark">Similar Stores</h3>

              <div class="space-y-3">
                <NuxtLink
                  v-for="item in featured"
                  :key="item.id"
                  :to="`/stores/${item.slug}`"
                  class="flex items-center gap-3 rounded-xl p-2 transition hover:bg-gray-50"
                >
                  <div
                    class="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100"
                  >
                    <NuxtImg
                      :src="item.logo_url || '/stores/default.png'"
                      class="h-8 w-auto object-contain"
                    />
                  </div>

                  <div class="min-w-0">
                    <p class="truncate text-sm font-semibold text-gray-900">
                      {{ item.name }}
                    </p>
                    <p class="text-xs text-gray-500">
                      {{ item.offer_text || "View Deals" }}
                    </p>
                  </div>
                </NuxtLink>
              </div>
            </div>

            <NuxtLink
              to="https://namecheap.pxf.io/c/3173023/1183697/5618"
              title="ads"
            >
              <NuxtImg src="/ads/300x250.gif" alt="" class="w-full rounded" />
            </NuxtLink>
          </div>
        </aside>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
