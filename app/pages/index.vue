<script setup>
const stores = [
  {
    name: "FedEx",
    offer: "Save 15% On Your First Online Purchase Today",
    brandClass: "bg-purple-700",
  },
  {
    name: "Canon",
    offer: "Buy One, Get One Free on Select Shoes",
    brandClass: "bg-red-600",
  },
  {
    name: "Philips",
    offer: "25% Off All Home Furnishings - Shop Now",
    brandClass: "bg-sky-700",
  },
  {
    name: "Siemens",
    offer: "$30 Off Orders Over $150 - Use Code",
    brandClass: "bg-emerald-600",
  },
  {
    name: "LinkedIn",
    offer: "20% Off All Electronics - Limited Time Offer",
    brandClass: "bg-blue-700",
  },
  {
    name: "AD Hua",
    offer: "10% Off All Summer Apparel - Limited Time",
    brandClass: "bg-black",
  },
  {
    name: "Amazon",
    offer: "Free Shipping on Orders Over $50 - Shop Today",
    brandClass: "bg-slate-800",
  },
  {
    name: "Alibaba",
    offer: "30% Off All Beauty Products - Limited Stock",
    brandClass: "bg-orange-500",
  },
];

const offers = [
  {
    name: "amazon",
    title: "Flat 5% Off On Order",
    brandClass: "bg-slate-800",
    button: "Show Coupon",
    buttonClass: "bg-sky-500 text-white",
  },
  {
    name: "aHua",
    title: "25% Off All Furnishings",
    brandClass: "bg-black",
    button: "06 : 21 : 40",
    buttonClass: "bg-orange-50 text-orange-500",
  },
  {
    name: "Canon",
    title: "$30 Off Orders Over $150",
    brandClass: "bg-red-600",
    button: "Get Deal",
    buttonClass: "bg-sky-500 text-white",
  },
  {
    name: "Electrolux",
    title: "10% Off All Apparel",
    brandClass: "bg-sky-900",
    button: "Offer not available",
    buttonClass: "bg-orange-50 text-orange-500",
  },
];

const testimonials = [
  {
    name: "Harrel Williamson",
    role: "Medical Assistant",
    text: "There are many variations of passages of Lorem Ipsum available and all work seamlessly for modern coupon pages.",
  },
  {
    name: "Kathryn Murphy",
    role: "President of Sales",
    text: "My favourite app that gave me cashback on brands like Amazon and FedEx. Clean layout and easy to use.",
  },
  {
    name: "Sofia Martin",
    role: "Marketing Lead",
    text: "A lightweight landing page design that feels premium, simple and highly conversion focused for deals.",
  },
];
</script>

<template>
  <main class="">
    <SeoMeta
      title="Couponzer | Latest Coupons, Promo Codes & Verified Deals"
      description="Find the latest coupons, promo codes, and verified deals on Couponzer. Save money with exclusive discounts from top stores across fashion, electronics, hosting, travel, and more."
      keywords="Couponzer, coupons, promo codes, discount codes, verified deals, online deals, best coupons, latest coupons, store discounts"
    />
    <section class="bg-white/50">
      <div class="max-w-7xl mx-auto px-4 py-6">
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div class="group relative overflow-hidden rounded">
            <NuxtImg
              src="/images/index-2-banner-1.png"
              alt="Banner image 1"
              class="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-black/20 opacity-0 transition duration-500 group-hover:opacity-100"
            ></div>
          </div>

          <div class="grid gap-4">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div class="group relative overflow-hidden rounded">
                <NuxtImg
                  src="/images/index-2-banner-2.png"
                  alt="Banner image 2"
                  class="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                />
                <div
                  class="absolute inset-0 bg-black/20 opacity-0 transition duration-500 group-hover:opacity-100"
                ></div>
              </div>

              <div class="grid gap-4">
                <div class="group relative overflow-hidden rounded">
                  <NuxtImg
                    src="/images/index-2-banner-3.png"
                    alt="Banner image 3"
                    class="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                  />
                  <div
                    class="absolute inset-0 bg-black/20 opacity-0 transition duration-500 group-hover:opacity-100"
                  ></div>
                </div>

                <div class="group relative overflow-hidden rounded">
                  <NuxtImg
                    src="/images/index-2-banner-4.png"
                    alt="Banner image 4"
                    class="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                  />
                  <div
                    class="absolute inset-0 bg-black/20 opacity-0 transition duration-500 group-hover:opacity-100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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
          >See All Coupons</NuxtLink
        >
      </div>

      <div class="grid gap-5 lg:grid-cols-3">
        <CouponCard v-for="item in 6" />
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
        <StoreCard v-for="store in stores" :key="store.name" />
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 py-8">
      <h2 class="mb-5 text-3xl font-bold text-accent">
        Cashback <span class="text-primary">Increased</span>
      </h2>

      <UCarousel
        v-slot="{ item }"
        :items="15"
        loop
        :autoplay="{ delay: 2000 }"
        :ui="{ item: 'basis-1/1 md:basis-1/3' }"
      >
        <div
          class="flex items-start gap-4 rounded-xl border border-gray-200 transition duration-300 p-3"
        >
          <div class="flex items-center justify-center rounded-lg bg-white p-2">
            <img
              src="/images/cashback.png"
              alt="Image"
              class="w-28 h-auto object-contain"
            />
          </div>

          <div class="grid gap-3">
            <p class="text-sm font-medium text-gray-900">
              $30 Off Orders Over $150 - Use Code
            </p>

            <div
              class="flex items-center gap-2 md:gap-3 rounded-md border border-orange-200 bg-orange-50 p-1"
            >
              <span
                class="whitespace-nowrap text-xs font-medium text-orange-600"
              >
                Upto 25% OFF
              </span>
            </div>
          </div>
        </div>
      </UCarousel>
    </section>

    <section class="max-w-7xl mx-auto px-12 py-16 bg-orange-100 rounded-2xl">
      <div class="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <h2 class="text-3xl font-bold text-slate-900">
            Subscribe our newsletter to get the best deals right in your email
          </h2>
        </div>
        <div
          class="flex w-full max-w-xl items-center rounded-full bg-white p-2"
        >
          <input
            type="email"
            placeholder="Enter Email..."
            class="flex-1 px-4 py-3 text-sm outline-none placeholder:text-slate-400"
          />
          <button
            class="flex items-center gap-2 cursor-pointer rounded-full bg-orange-400 px-8 py-3 text-sm font-semibold text-white"
          >
            Send
            <UIcon name="i-lucide-send" class="size-5" />
          </button>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 py-6">
      <div class="mx-auto max-w-3xl text-center">
        <span
          class="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
        >
          Trusted Partners
        </span>

        <h2 class="mt-4 text-2xl font-bold text-accent sm:text-3xl lg:text-4xl">
          Trusted by 12,500+ Leading Brands & Partners
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
