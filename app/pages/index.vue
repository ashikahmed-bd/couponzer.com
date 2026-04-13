<script setup>
const popularCoupons = [
  {
    name: "PHILIPS",
    title: "10% Off All Beauty Products - Limited Stock",
    brandClass: "bg-sky-600",
  },
  {
    name: "amazon",
    title: "10% Off All Summer Apparel - Limited Time",
    brandClass: "bg-slate-800",
  },
  {
    name: "FedEx",
    title: "Free Shipping on Orders Over $50 - Shop Today",
    brandClass: "bg-purple-700",
  },
];

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

const categories = [
  { name: "amazon", brandClass: "bg-slate-800" },
  { name: "aHua", brandClass: "bg-black" },
  { name: "Canon", brandClass: "bg-red-600" },
  { name: "Electrolux", brandClass: "bg-sky-900" },
  { name: "Alibaba", brandClass: "bg-orange-500" },
  { name: "SIEMENS", brandClass: "bg-emerald-600" },
];

const sideStores = [
  { name: "amazon", brandClass: "bg-slate-800" },
  { name: "PHILIPS", brandClass: "bg-sky-700" },
  { name: "Alibaba", brandClass: "bg-orange-500" },
];

const cashbackDeals = [
  {
    name: "PHILIPS",
    title: "$30 Off Orders Over $150 - Use Code",
    brandClass: "bg-sky-700",
  },
  {
    name: "amazon",
    title: "Buy One, Get One Free on Select Shoes",
    brandClass: "bg-slate-800",
  },
  {
    name: "Electrolux",
    title: "Save 15% On Your First Purchase",
    brandClass: "bg-sky-900",
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
  <main class="mx-auto max-w-7xl px-4 py-6">
    <!-- Hero banners -->
    <section class="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <!-- Left big image -->
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

      <!-- Right side -->
      <div class="grid gap-4">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <!-- Top left image -->
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

          <!-- Right stacked images -->
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
    </section>

    <!-- Feature cards -->
    <section class="max-w-7xl mx-auto px-4 py-8">
      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <!-- Card 1 -->
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
                  Log In &amp; Shop
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

        <!-- Card 2 -->
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

        <!-- Card 3 -->
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

    <!-- Popular coupons -->
    <section class="max-w-7xl mx-auto px-4 py-8">
      <div class="mb-6 flex items-center justify-between">
        <div>
          <h2 class="text-3xl font-bold text-slate-900">
            Popular <span class="text-orange-400">Coupons</span>
          </h2>
        </div>
        <a href="#" class="text-sm font-semibold text-sky-500"
          >See All Coupons</a
        >
      </div>

      <div class="grid gap-5 lg:grid-cols-3">
        <CouponCard
          v-for="item in 6"
          badge="Exclusive"
          date="25 Nov, 24"
          image="/images/popular-coupons-7.png"
          title="10% Off All Summer Apparel - Limited Time"
          expiry="25 Nov, 24"
          :comments="25"
          :shares="15"
          code="FGFKG6589895AF"
          storeLink="/stores-style-3"
        />
      </div>
    </section>

    <!-- Top stores -->
    <section class="max-w-7xl mx-auto px-4 py-8">
      <div class="mb-5 flex items-center justify-between">
        <h2 class="text-3xl font-bold text-slate-900">
          Top <span class="text-orange-400">Stores</span>
        </h2>
        <a href="#" class="text-sm font-semibold text-sky-500">See All Store</a>
      </div>

      <div class="grid gap-4 sm:grid-cols-4">
        <StoreCard v-for="store in stores" :key="store.name" />
      </div>
    </section>

    <!-- Trending categories -->
    <section class="max-w-7xl mx-auto px-4 py-8 bg-orange-100 rounded-2xl">
      <div class="mb-5 flex items-center justify-between">
        <div>
          <h2 class="text-3xl font-bold text-slate-900">
            Trending <span class="text-orange-400">Categories</span>
          </h2>
          <div class="mt-3 flex flex-wrap gap-4 text-sm text-slate-500">
            <a class="font-semibold text-sky-500" href="#">All Offer</a>
            <a href="#">Today’s Best Offer</a>
            <a href="#">Upcoming Offer</a>
            <a href="#">Currently Using</a>
          </div>
        </div>
        <a href="#" class="text-sm font-semibold text-sky-500">See All</a>
      </div>

      <div class="grid gap-5 lg:grid-cols-4">
        <div class="grid gap-5 lg:col-span-3 md:grid-cols-2 xl:grid-cols-3">
          <CouponCardWithReward v-for="item in 6" />
        </div>

        <aside class="space-y-4 rounded-3xl bg-white p-4 shadow-sm">
          <div class="mb-2 flex items-center justify-between">
            <h3 class="font-bold text-slate-800">Stores</h3>
            <a href="#" class="text-sm font-semibold text-sky-500">See All</a>
          </div>

          <MiniStoreCard v-for="item in 3" />
        </aside>
      </div>
    </section>

    <!-- Cashback increased -->
    <section class="max-w-7xl mx-auto px-4 py-8">
      <h2 class="mb-5 text-3xl font-bold text-slate-900">
        Cashback <span class="text-orange-400">Increased</span>
      </h2>

      <UCarousel v-slot="{ item }" :items="15" :ui="{ item: 'basis-1/3' }">
        <div
          class="flex items-start gap-4 rounded-xl border border-gray-200 transition duration-300 p-3"
        >
          <div class="flex items-center justify-center rounded-lg bg-white p-2">
            <img
              src="/images/cashback-increased-img-3.png"
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
              <div
                class="flex items-center justify-center rounded-md bg-white shadow-sm p-1"
              >
                <img
                  src="/images/fav.png"
                  alt="fav"
                  class="h-5 w-5 object-contain"
                />
              </div>

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

    <!-- Newsletter -->
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

    <!-- Popular offers -->
    <section class="max-w-7xl mx-auto px-4 py-8">
      <div class="mb-5 flex items-center justify-between">
        <h2 class="text-3xl font-bold text-slate-900">
          Popular <span class="text-orange-400">Offers</span>
        </h2>
        <div class="flex gap-4 text-sm text-slate-500">
          <a class="font-semibold text-sky-500" href="#">All Offer</a>
          <a href="#">Today’s Best Offer</a>
          <a href="#">Upcoming Offer</a>
          <a href="#">Currently Using</a>
        </div>
      </div>

      <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <article
          v-for="offer in offers"
          :key="offer.name"
          class="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm"
        >
          <div
            :class="offer.brandClass"
            class="grid h-28 place-items-center rounded-2xl text-4xl font-black text-white"
          >
            {{ offer.name }}
          </div>
          <h3 class="mt-4 text-lg font-bold text-slate-800">
            {{ offer.title }}
          </h3>
          <div class="mt-4 flex items-center justify-between gap-3">
            <div
              class="rounded-full bg-sky-50 px-3 py-2 text-xs font-semibold text-sky-500"
            >
              Upto 58% Voucher Rewards
            </div>
          </div>
          <button
            :class="offer.buttonClass"
            class="mt-4 w-full rounded-full px-4 py-3 text-sm font-semibold"
          >
            {{ offer.button }}
          </button>
        </article>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="rounded-[2rem] bg-slate-100 p-6 md:p-8">
      <div class="grid gap-5 lg:grid-cols-3">
        <article
          v-for="review in testimonials"
          :key="review.name"
          class="rounded-3xl bg-white p-6 shadow-sm"
        >
          <div class="mb-4 text-orange-400">★★★★★</div>
          <p class="text-sm leading-7 text-slate-500">{{ review.text }}</p>
          <div class="mt-6 flex items-center gap-3">
            <div
              class="grid h-12 w-12 place-items-center rounded-full bg-slate-200 text-sm font-bold text-slate-700"
            >
              {{ review.name.charAt(0) }}
            </div>
            <div>
              <div class="font-bold text-slate-800">{{ review.name }}</div>
              <div class="text-sm text-slate-400">{{ review.role }}</div>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- Partners -->
    <section class="py-4 text-center">
      <p
        class="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400"
      >
        Trusted by over 12,500 best partner
      </p>
      <div
        class="grid gap-6 text-lg font-bold text-slate-500 sm:grid-cols-3 lg:grid-cols-6"
      >
        <div>Discord</div>
        <div>Shopify</div>
        <div>Feedly</div>
        <div>Loom</div>
        <div>Jotform</div>
        <div>Lat</div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
