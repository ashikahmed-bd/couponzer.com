<script setup>
import PartnerSection from "~/components/home/PartnerSection.vue";

const couponStore = useCouponStore();
const merchantStore = useMerchantStore();
const bannerStore = useBannerStore();

const {
  data: coupons,
  pending,
  error,
} = await useAsyncData("homepage-coupons", () =>
  couponStore.getFeaturedCoupons(),
);

const { data: stores } = await useAsyncData("homepage-stores", () =>
  merchantStore.getFeaturedStores(),
);

const { data: banner } = await useAsyncData("home-banner", async () => {
  return await bannerStore.getBanner("728x90");
});

useSchemaOrg([
  defineWebPage({
    name: "Couponzer - Latest Coupons, Promo Codes & Deals",
    url: "https://www.couponzer.com/",
    description:
      "Browse the latest verified coupons, promo codes, and discount deals updated daily on Couponzer.",
    inLanguage: "en-US",
  }),

  defineBreadcrumb({
    itemListElement: [
      {
        name: "Home",
        item: "https://www.couponzer.com/",
      },
    ],
  }),
]);
</script>

<template>
  <main class="">
    <SeoMeta
      title="Couponzer | Latest Coupons, Promo Codes & Verified Deals"
      description="Find the latest coupons, promo codes, and verified deals on Couponzer. Save money with exclusive discounts from top stores across fashion, electronics, hosting, travel, and more."
      keywords="Couponzer, coupons, promo codes, discount codes, verified deals, online deals, best coupons, latest coupons, store discounts"
    />

    <LazyHomeHeroSection />

    <section class="max-w-7xl mx-auto px-4 py-10">
      <div class="text-center max-w-2xl mx-auto mb-8">
        <h2 class="text-2xl md:text-3xl font-bold text-dark">
          How to Use Coupons & Promo Codes
        </h2>
        <p class="text-body mt-2">
          Save money in 3 simple steps with Couponzer. Find, copy, and apply the
          best deals instantly.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <div
          class="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-green-400"
        >
          <div class="relative z-10 flex items-start gap-4">
            <div
              class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-green-200 bg-green-50 p-3"
            >
              <NuxtImg
                src="/icons/search.png"
                alt="Find coupons and deals"
                class="size-12 object-contain transition duration-300 group-hover:scale-110"
              />
            </div>

            <div class="space-y-0.5">
              <h3
                class="text-lg font-extrabold text-dark transition duration-300 group-hover:text-green-600"
              >
                Find Coupons
              </h3>
              <p class="text-sm leading-6 text-body line-clamp-2">
                Browse thousands of verified coupons, promo codes, and exclusive
                deals from top online stores.
              </p>
            </div>
          </div>

          <span
            class="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-7xl font-extrabold text-gray-100 transition duration-300 group-hover:text-green-50"
          >
            1
          </span>
        </div>

        <div
          class="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-orange-400"
        >
          <div class="relative z-10 flex items-start gap-4">
            <div
              class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-orange-200 bg-orange-50 p-3"
            >
              <NuxtImg
                src="/icons/coupon.png"
                alt="Copy promo code"
                class="size-12 object-contain transition duration-300 group-hover:scale-110"
              />
            </div>

            <div class="space-y-0.5">
              <h3
                class="text-lg font-extrabold text-dark transition duration-300 group-hover:text-orange-600"
              >
                Copy Promo Code
              </h3>
              <p class="text-sm leading-6 text-body line-clamp-2">
                Click and copy the best working coupon code instantly with one
                tap. No login required.
              </p>
            </div>
          </div>

          <span
            class="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-7xl font-extrabold text-gray-100 transition duration-300 group-hover:text-orange-50"
          >
            2
          </span>
        </div>

        <div
          class="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-400"
        >
          <div class="relative z-10 flex items-start gap-4">
            <div
              class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 p-3"
            >
              <NuxtImg
                src="/icons/checkout.png"
                alt="Apply coupon at checkout"
                class="size-12 object-contain transition duration-300 group-hover:scale-110"
              />
            </div>

            <div class="space-y-0.5">
              <h3
                class="text-lg font-extrabold text-dark transition duration-300 group-hover:text-blue-600"
              >
                Apply & Save
              </h3>
              <p class="text-sm leading-6 text-body line-clamp-2">
                Paste the coupon code at checkout and enjoy instant discounts on
                your purchase.
              </p>
            </div>
          </div>

          <span
            class="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-7xl font-extrabold text-gray-100 transition duration-300 group-hover:text-blue-50"
          >
            3
          </span>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 py-6">
      <div class="mb-6 flex items-center justify-between">
        <div>
          <h2 class="text-3xl font-bold text-accent">
            Popular <span class="text-primary">Coupons</span>
          </h2>
        </div>
        <NuxtLink to="/coupons" class="text-sm font-semibold text-accent"
          >See All</NuxtLink
        >
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <CouponCard v-for="coupon in coupons" :coupon="coupon" />
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4">
      <a
        :href="`/redirect/${banner?.slug}`"
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        class="group block overflow-hidden rounded-xl"
      >
        <NuxtImg
          :src="banner?.image_url"
          :alt="banner?.title"
          loading="lazy"
          class="w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </a>
    </section>

    <section class="max-w-7xl mx-auto px-4 py-8">
      <div class="mb-5 flex items-center justify-between">
        <h2 class="text-3xl font-bold text-accent">
          Top <span class="text-primary">Stores</span>
        </h2>
        <NuxtLink to="/stores" class="text-sm font-semibold text-primary"
          >See All Store</NuxtLink
        >
      </div>

      <div class="grid gap-4 sm:grid-cols-4">
        <StoreMiniCard v-for="store in stores" :store="store" />
      </div>

      <div class="mt-8 flex justify-center">
        <NuxtLink
          to="/stores"
          class="inline-flex items-center rounded-full border border-primary bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:opacity-90"
        >
          Load More
        </NuxtLink>
      </div>
    </section>

    <Newsletter />

    <PartnerSection />
  </main>
</template>

<style scoped></style>
