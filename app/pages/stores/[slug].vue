<script setup>
const route = useRoute();
const merchantStore = useMerchantStore();

const slug = route.params.slug;

const {
  data: store,
  pending,
  error,
} = await useAsyncData(`store-${slug}`, () => merchantStore.getStore(slug));

const { data: coupons, pending: couponsPending } = await useAsyncData(
  `coupons-${slug}`,
  async () => {
    if (!slug) return [];

    return await merchantStore.getCouponsByStoreSlug(slug);
  },
  {
    watch: [store],
  },
);

const { data: related } = await useAsyncData(`related-${slug}`, async () => {
  if (!store.value?.id) return [];
  return await merchantStore.getRelated(store.value.id);
});
</script>

<template>
  <main>
    <SeoMeta
      :title="store.meta_title"
      :description="store.meta_description"
      :keywords="store.meta_keywords"
      :url="store.canonical_url"
      :image="store.og_image_url"
    />
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
          <div class="rounded-2xl border border-border bg-white p-5">
            <div class="mb-4">
              <h2 class="text-xl font-bold text-dark">Latest Coupons</h2>
              <p class="mt-2 text-sm text-body">
                Browse the latest deals and coupons for {{ store.name }}.
              </p>
            </div>

            <div class="space-y-4">
              <CouponListCard
                v-for="coupon in coupons"
                :key="coupon.id"
                :coupon="coupon"
                :store="store"
              />
            </div>
          </div>

          <div v-html="store.description"></div>
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
                  v-for="item in related"
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
