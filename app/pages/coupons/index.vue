<script setup>
const couponStore = useCouponStore();
const bannerStore = useBannerStore();

const page = ref(1);
const limit = ref(10);
const coupons = ref([]);
const loadingMore = ref(false);
const noMoreData = ref(false);

const { data, pending, error } = await useAsyncData("coupons", () =>
  couponStore.getCoupons(page.value, limit.value),
);

watchEffect(() => {
  if (data.value) {
    coupons.value = data.value;
    page.value = 2;
  }
});

const loadMore = async () => {
  if (loadingMore.value || noMoreData.value) return;

  loadingMore.value = true;

  try {
    const newCoupons = await couponStore.getCoupons(page.value, limit.value);

    if (!newCoupons?.length) {
      noMoreData.value = true;
      return;
    }

    coupons.value.push(...newCoupons);
    page.value++;
  } finally {
    loadingMore.value = false;
  }
};

const { data: banners } = await useAsyncData("banner-728x90", async () => {
  return await bannerStore.getBanners("728x90", 2);
});

const { data: sidebar } = await useAsyncData("banner-300x250", async () => {
  return await bannerStore.getBanner("300x250");
});
</script>

<template>
  <main>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Something went wrong</div>
    <div v-else>
      <SeoMeta
        title="Best Coupons & Promo Codes for Top Stores | Couponzer"
        description="Find the best coupons, promo codes, and limited-time deals on Couponzer. Browse verified discounts, featured offers, and exclusive savings from top online stores."
        keywords="Couponzer coupons, best promo codes, verified discounts, featured deals, exclusive offers, shopping deals"
      />

      <section class="relative overflow-hidden bg-white/60 py-6">
        <div class="mx-auto max-w-7xl px-4 space-y-4">
          <div class="max-w-3xl">
            <h1
              class="text-3xl font-bold tracking-tight text-accent md:text-4xl"
            >
              Best Coupons & Promo Codes for Top Stores
            </h1>

            <p class="mt-3 max-w-2xl text-sm leading-6 text-body sm:text-base">
              Couponzer helps you discover verified coupon codes, handpicked
              deals, and exclusive promo offers from trusted brands and online
              stores.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <article v-for="banner in banners">
              <a
                :href="`/redirect/${banner?.slug}`"
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                class="block"
              >
                <NuxtImg
                  :src="banner.image_url"
                  :alt="banner.title"
                  class="w-full rounded"
                />
              </a>
            </article>
          </div>
        </div>
      </section>

      <section class="max-w-7xl mx-auto px-4 py-8">
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px]">
          <div class="space-y-6">
            <div class="space-y-4">
              <CouponCardWithStore
                v-for="coupon in coupons"
                :key="coupon.id"
                :coupon="coupon"
              />
            </div>

            <div class="flex justify-center mt-6">
              <button
                v-if="!noMoreData"
                @click="loadMore"
                :disabled="loadingMore"
                class="bg-primary px-5 py-2.5 text-sm font-medium rounded-full text-white transition hover:bg-primary-hover"
              >
                {{ loadingMore ? "Loading..." : "Load More" }}
              </button>

              <p v-else>No more coupons</p>
            </div>
          </div>

          <aside class="w-full">
            <div class="sticky top-24 space-y-6">
              <div
                class="overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300"
              >
                <div
                  class="flex items-center justify-between border-b border-border px-4 py-3"
                >
                  <span
                    class="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-orange-600 ring-1 ring-orange-200"
                  >
                    Sponsored
                  </span>

                  <span class="text-xs font-medium text-gray-400"
                    >Advertisement</span
                  >
                </div>

                <a
                  :href="`/redirect/${sidebar?.slug}`"
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  class="group block p-4"
                >
                  <div
                    class="relative overflow-hidden rounded-2xl border border-gray-100 bg-gray-50"
                  >
                    <NuxtImg
                      :src="sidebar?.image_url"
                      :alt="sidebar?.alt_text ?? sidebar?.title"
                      class="h-auto w-full transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      format="webp"
                    />
                  </div>

                  <div class="pt-4">
                    <h3
                      class="line-clamp-2 text-lg font-bold leading-6 text-dark transition-colors duration-300 group-hover:text-primary"
                    >
                      {{ sidebar?.title }}
                    </h3>

                    <p class="mt-2 line-clamp-3 text-sm leading-6 text-body">
                      {{ sidebar?.description }}
                    </p>

                    <div class="mt-4">
                      <span
                        class="inline-flex items-center justify-center rounded-2xl bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 group-hover:bg-orange-600 group-hover:shadow-md"
                      >
                        Explore Offer
                      </span>
                    </div>
                  </div>
                </a>
              </div>

              <div
                class="rounded-3xl border border-dashed border-primary bg-orange-50/70 p-5"
              >
                <p
                  class="text-xs font-bold uppercase tracking-wide text-primary"
                >
                  Hot Deal
                </p>

                <h4 class="mt-2 text-lg font-bold leading-6 text-accent">
                  Save more with featured store promotions
                </h4>

                <p class="mt-2 text-sm leading-6 text-body">
                  Browse exclusive coupon picks and seasonal discounts curated
                  for smart shoppers.
                </p>

                <a
                  href="/stores"
                  class="mt-4 inline-flex items-center rounded border border-primary/50 bg-white px-4 py-2 text-sm font-semibold text-primary transition-all duration-300 hover:border-primary hover:opacity-90"
                >
                  Browse Stores
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped></style>
