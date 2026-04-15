<script setup>
const couponStore = useCouponStore();
const merchantStore = useMerchantStore();

const {
  data: coupons,
  pending,
  error,
} = await useAsyncData("coupons", () => couponStore.getFeaturedCoupons());

const { data: stores } = await useAsyncData("stores", () =>
  merchantStore.getFeaturedStores(),
);
</script>

<template>
  <main class="">
    <SeoMeta
      title="Couponzer | Latest Coupons, Promo Codes & Verified Deals"
      description="Find the latest coupons, promo codes, and verified deals on Couponzer. Save money with exclusive discounts from top stores across fashion, electronics, hosting, travel, and more."
      keywords="Couponzer, coupons, promo codes, discount codes, verified deals, online deals, best coupons, latest coupons, store discounts"
    />

    <LazyHomeHeroSection />

    <section class="max-w-7xl mx-auto px-4 py-8">
      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <div
          class="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl md:p-7"
        >
          <div class="relative z-10 flex items-start gap-4">
            <div
              class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-green-200 bg-green-50 p-3"
            >
              <NuxtImg
                src="/icons/engineering.png"
                alt="Engineering icon"
                class="h-8 w-8 object-contain transition duration-300 group-hover:scale-110"
              />
            </div>

            <div class="space-y-2">
              <a href="faqs.html" class="inline-block">
                <h5
                  class="text-lg font-extrabold text-gray-900 transition duration-300 group-hover:text-green-600"
                >
                  Log In &amp; Store
                </h5>
              </a>
              <p class="text-sm leading-6 text-gray-600">
                Click to select your favorite coupon, explore amazing deals, and
                start shopping.
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
          class="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl md:p-7"
        >
          <div class="relative z-10 flex items-start gap-4">
            <div
              class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-orange-200 bg-orange-50 p-3"
            >
              <NuxtImg
                src="/icons/briefcase.png"
                alt="Briefcase icon"
                class="h-8 w-8 object-contain transition duration-300 group-hover:scale-110"
              />
            </div>

            <div class="space-y-2">
              <a href="faqs.html" class="inline-block">
                <h5
                  class="text-lg font-extrabold text-gray-900 transition duration-300 group-hover:text-orange-600"
                >
                  Cashback Earned
                </h5>
              </a>
              <p class="text-sm leading-6 text-gray-600">
                Cashback rewards are instantly added to your Couponly wallet,
                ready for future.
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
          class="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl md:p-7"
        >
          <div class="relative z-10 flex items-start gap-4">
            <div
              class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 p-3"
            >
              <NuxtImg
                src="/icons/wallet.png"
                alt="Wallet icon"
                class="h-8 w-8 object-contain transition duration-300 group-hover:scale-110"
              />
            </div>

            <div class="space-y-2">
              <a href="faqs.html" class="inline-block">
                <h5
                  class="text-lg font-extrabold text-gray-900 transition duration-300 group-hover:text-blue-600"
                >
                  Withdraw Cashback
                </h5>
              </a>
              <p class="text-sm leading-6 text-gray-600">
                Cashback gets added to your bank account, or as a voucher or
                recharge option instantly.
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

    <section class="max-w-7xl mx-auto px-4 py-8">
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

      <div class="grid gap-5 lg:grid-cols-3">
        <CouponCard v-for="coupon in coupons" :coupon="coupon" />
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 py-8">
      <div class="mb-5 flex items-center justify-between">
        <h2 class="text-3xl font-bold text-accent">
          Top <span class="text-primary">Stores</span>
        </h2>
        <a href="#" class="text-sm font-semibold text-accent">See All Store</a>
      </div>

      <div class="grid gap-4 sm:grid-cols-4">
        <StoreMiniCard v-for="store in stores" :store="store" />
      </div>
    </section>

    <Newsletter />

    <section class="max-w-7xl mx-auto px-4 py-6">
      <div class="mx-auto max-w-3xl text-center">
        <span
          class="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
        >
          Trusted Partners
        </span>

        <h2 class="mt-4 text-2xl font-bold text-accent sm:text-3xl lg:text-4xl">
          Trusted by 250+ Leading Brands & Partners
        </h2>

        <p class="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
          Discover coupons and promo codes from trusted global brands you
          already know and love.
        </p>
      </div>

      <div class="mt-6">
        <UMarquee
          pause-on-hover
          :overlay="false"
          :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }"
        >
          <NuxtImg src="/stores/amazon.svg" alt="Amazon" class="h-24 w-full" />
          <NuxtImg
            src="/stores/coca-cola.svg"
            alt="Coca-Cola"
            class="h-24 w-full"
          />
          <NuxtImg
            src="/stores/deepseek.svg"
            alt="DeepSeek"
            class="h-24 w-full"
          />
          <NuxtImg src="/stores/disney.svg" alt="Disney" class="h-24 w-full" />
          <NuxtImg
            src="/stores/meta_platforms.svg"
            alt="Meta"
            class="h-24 w-full"
          />
          <NuxtImg
            src="/stores/netflix.svg"
            alt="Netflix"
            class="h-24 w-full"
          />
          <NuxtImg src="/stores/spaceX.svg" alt="SpaceX" class="h-24 w-full" />
          <NuxtImg
            src="/stores/youtube.svg"
            alt="YouTube"
            class="h-24 w-full"
          />
        </UMarquee>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
