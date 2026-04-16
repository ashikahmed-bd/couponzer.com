<script setup>
const couponStore = useCouponStore();
const bannerStore = useBannerStore();

const {
  data: coupons,
  pending,
  error,
} = await useAsyncData("coupons", () => couponStore.getCoupons());

const { data: top_banner } = await useAsyncData("banner-728x90", async () => {
  return await bannerStore.getBanner("728x90");
});

const { data: sidebar } = await useAsyncData("banner-1080x1920", async () => {
  return await bannerStore.getBanner("1080x1920");
});
</script>

<template>
  <main>
    <SeoMeta
      title="Best Coupons & Promo Codes for Top Stores | Couponzer"
      description="Find the best coupons, promo codes, and limited-time deals on Couponzer. Browse verified discounts, featured offers, and exclusive savings from top online stores."
      keywords="Couponzer coupons, best promo codes, verified discounts, featured deals, exclusive offers, shopping deals"
    />

    <section class="relative overflow-hidden bg-white/60 py-6">
      <div class="mx-auto max-w-7xl px-4 space-y-4">
        <a
          :href="top_banner.redirect_url"
          rel="nofollow noreferrer sponsored"
          target="_blank"
          title="ads"
          class="block"
        >
          <NuxtImg
            :src="top_banner.image_url"
            :alt="top_banner.title"
            class="w-full rounded"
          />
        </a>

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
            <CouponCardWithStore
              v-for="coupon in coupons"
              :key="coupon.id"
              :coupon="coupon"
            />
          </div>
        </div>

        <aside class="w-full">
          <div class="sticky top-24 space-y-6">
            <div class="space-y-4">
              <a
                v-if="sidebar?.redirect_url"
                :href="sidebar.redirect_url"
                rel="nofollow sponsored"
                target="_blank"
                :title="sidebar.title"
                class="block"
              >
                <NuxtImg
                  :src="sidebar.image_url"
                  :alt="sidebar.alt_text ?? sidebar.title"
                  class="w-full rounded"
                  loading="lazy"
                  format="webp"
                />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
