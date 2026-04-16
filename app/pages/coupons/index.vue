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
      <div class="mx-auto max-w-7xl px-4 space-y-4">
        <NuxtLink
          to="https://namecheap.pxf.io/c/3173023/1183690/5618"
          title="ads"
          class="block"
        >
          <NuxtImg src="/ads/728x90.gif" alt="" class="w-full rounded" />
        </NuxtLink>

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
              <NuxtLink
                to="https://1.envato.market/c/3173023/381185/4662"
                title="ads"
                class="block"
              >
                <NuxtImg
                  src="https://nzcjfrzjfbiukoejhqgc.supabase.co/storage/v1/object/public/ads/sidebar.gif"
                  alt=""
                  class="w-full rounded"
                />
              </NuxtLink>
            </div>
          </div>
        </aside>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
