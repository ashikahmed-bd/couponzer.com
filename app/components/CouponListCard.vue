<script setup>
const couponStore = useCouponStore();

defineProps({
  coupon: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="group overflow-hidden rounded-2xl border border-border bg-white p-4 transition-all duration-300 hover:-translate-y-1"
  >
    <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-5">
      <div
        class="flex h-24 w-full items-center justify-center rounded-2xl border border-gray-100 bg-gray-50 p-4 lg:h-28 lg:w-32 lg:flex-none"
        :style="
          coupon.stores?.background
            ? { backgroundColor: coupon.stores.background }
            : {}
        "
      >
        <NuxtLink
          :to="`/stores/${coupon.stores?.slug}`"
          class="flex h-full w-full items-center justify-center"
        >
          <NuxtImg
            :src="coupon.stores?.logo_url ?? '/stores/default.png'"
            :alt="coupon.stores?.name ?? coupon.title"
            class="max-h-full max-w-full object-contain"
          />
        </NuxtLink>
      </div>

      <div class="min-w-0 flex-1">
        <div class="mb-3 flex flex-wrap items-center gap-2">
          <span
            v-if="coupon.discount_text"
            class="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600 ring-1 ring-orange-200"
          >
            {{ coupon.discount_text }}
          </span>

          <span
            v-if="coupon.is_verified"
            class="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200"
          >
            Verified
          </span>

          <span
            v-if="coupon.is_exclusive"
            class="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700 ring-1 ring-violet-200"
          >
            Exclusive
          </span>
        </div>

        <h3
          class="text-lg font-bold leading-snug text-gray-900 transition-colors duration-200 group-hover:text-orange-600 md:text-xl"
        >
          {{ coupon.title }}
        </h3>

        <p
          v-if="coupon.description"
          class="mt-2 line-clamp-2 text-sm leading-6 text-gray-500"
        >
          {{ coupon.description }}
        </p>
      </div>

      <div class="w-full lg:w-52 lg:flex-none">
        <a
          :href="`/click/${coupon.slug}`"
          rel="nofollow sponsored"
          @click="couponStore.openDialog(coupon)"
          class="group relative flex min-w-52 items-center justify-between overflow-hidden rounded-full border border-dashed border-orange-400 bg-orange-50 py-2.5"
        >
          <span
            class="absolute left-0 top-0 z-10 flex h-full w-[85%] items-center justify-center rounded-full bg-orange-500 px-5 text-sm font-bold text-white transition-all duration-300 group-hover:w-[80%]"
          >
            {{ coupon.code ? "Show Coupon" : "Get Deal" }}
          </span>

          <span
            class="flex w-full items-center justify-end px-4 text-sm font-semibold tracking-wider text-orange-600"
          >
            {{ coupon.code || "No Code Needed" }}
          </span>
        </a>
      </div>
    </div>
  </div>
</template>
