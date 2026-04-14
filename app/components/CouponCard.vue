<script setup>
defineProps({
  badge: {
    type: String,
    default: "Exclusive",
  },
  date: {
    type: String,
    default: "25 Nov, 24",
  },
  image: {
    type: String,
    default: "/images/popular-coupons-7.png",
  },
  title: {
    type: String,
    default: "10% Off All Summer Apparel - Limited Time",
  },
  expiry: {
    type: String,
    default: "25 Nov, 24",
  },
  comments: {
    type: [String, Number],
    default: 25,
  },
  shares: {
    type: [String, Number],
    default: 15,
  },
  code: {
    type: String,
    default: "FGFKG6589895AF",
  },
  storeLink: {
    type: String,
    default: "/stores-style-3",
  },
});

const handleClick = (url) => {
  setTimeout(() => {
    window.open(url, "_blank");
  }, 300);
};
</script>

<template>
  <div
    class="group flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white p-2 transition duration-300 hover:-translate-y-1"
  >
    <!-- Top badge area -->
    <div
      class="flex w-full items-center justify-between gap-2 p-3 md:gap-3 md:p-4"
    >
      <span
        class="rounded-lg border border-orange-200 bg-orange-50 px-3 py-1 text-sm font-medium text-orange-600"
      >
        {{ badge }}
      </span>

      <span
        class="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-3 py-1 text-sm font-medium text-green-700"
      >
        <UIcon name="i-lucide-calendar" class="size-5" />
        <span>{{ date }}</span>
      </span>
    </div>

    <!-- Image area -->
    <div
      class="flex w-full items-center justify-center overflow-hidden rounded-2xl bg-gray-50"
    >
      <NuxtImg
        :src="image"
        :alt="title"
        class="w-full h-auto object-cover transition duration-500 group-hover:scale-105"
      />
    </div>

    <!-- Bottom content -->
    <div class="grid gap-4 p-3 md:p-6">
      <NuxtLink :to="storeLink" class="block">
        <h4
          class="text-xl font-bold leading-snug text-gray-900 transition duration-300 group-hover:text-orange-600"
        >
          {{ title }}
        </h4>
      </NuxtLink>

      <!-- Meta area -->
      <div
        class="flex w-full items-center justify-between border-y border-gray-200 py-3 text-sm text-gray-500"
      >
        <div class="flex items-center gap-1.5">
          <UIcon name="i-lucide-calendar" class="size-5" />
          <span>{{ expiry }}</span>
        </div>

        <div class="flex items-center gap-4">
          <a
            href="#"
            class="flex items-center gap-1.5 transition hover:text-orange-600"
          >
            <UIcon name="i-lucide-messages-square" class="size-5" />
            <span>{{ comments }}</span>
          </a>

          <a
            href="#"
            class="flex items-center gap-1.5 transition hover:text-orange-600"
          >
            <UIcon name="i-lucide-share-2" class="size-5" />
            <span>{{ shares }}</span>
          </a>
        </div>
      </div>

      <UModal
        title="30% Off All Beauty Products"
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
          @click="handleClick"
          class="relative w-full flex items-center justify-between rounded-full border border-dashed border-orange-400 py-3.5"
        >
          <span
            class="absolute cursor-pointer flex items-center justify-center w-[85%] group-hover:w-[80%] h-full rounded-full bg-orange-500 text-white transition-all duration-500 ease-out z-20"
          >
            Show Coupon
          </span>
          <span
            class="w-full flex items-center justify-end font-semibold text-orange-600 px-4"
          >
            FGFKG6589895AF
          </span>
        </button>
        <template #body>
          <div class="flex flex-col items-center gap-3">
            <div class="w-full px-2 md:px-0 flex justify-center">
              <div class="w-full max-w-xl">
                <div
                  class="flex w-full overflow-hidden rounded-full border border-dashed border-orange-300 bg-orange-50"
                >
                  <input
                    type="text"
                    value="FGFKG6589895AF"
                    readonly
                    class="w-full bg-transparent px-6 py-3 text-sm font-bold tracking-wider text-orange-600 outline-none md:px-10 md:py-4"
                  />

                  <button
                    class="shrink-0 rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600 md:px-10 md:py-4"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>

            <p class="text-center text-sm font-medium text-gray-500 py-2">
              Continue to
              <a
                href="#"
                class="font-semibold text-gray-700 hover:text-orange-600"
              >
                us.couponly.com
              </a>
              •
              <a
                href="#"
                class="font-semibold text-gray-700 hover:text-orange-600"
              >
                Terms
              </a>
            </p>
          </div>

          <div class="grid gap-2 border-y border-gray-200 p-4">
            <p class="text-sm leading-7 text-gray-600">
              <span class="font-semibold text-gray-900">Offer's Details:</span>
              Click here to shop at Legoland and get Up to $30 Off California
              Brick-or-Treat Tickets. No code required for this offer. Your
              shopping cart will receive discounts only if the deal is used at
              legoland.com before 27 Oct 2024.
            </p>

            <p class="text-sm leading-7 text-gray-600">
              <span class="font-semibold text-gray-900">Expires:</span>
              In 4 weeks
            </p>

            <div>
              <p class="text-sm font-semibold text-gray-900">Terms:</p>
              <ul class="grid gap-2 pl-5 text-sm text-gray-600">
                <li class="list-disc">Exclusions may apply.</li>
                <li class="list-disc">
                  Verify the website for further details.
                </li>
                <li class="list-disc">
                  The merchant may apply stock limitations for this offer.
                </li>
                <li class="list-disc">
                  Discount deals can be limited by the seller at any time.
                </li>
                <li class="list-disc">
                  You can save using this deal only for online purchases.
                </li>
              </ul>
            </div>
          </div>

          <div class="flex flex-wrap items-center justify-center gap-2 mt-4">
            <span class="mr-2 text-sm font-semibold text-gray-800">
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
</template>
