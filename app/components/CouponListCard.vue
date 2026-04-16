<script setup>
const couponStore = useCouponStore();

defineProps({
  coupon: {
    type: Object,
    required: true,
  },
  store: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="space-y-4">
    <div
      class="rounded-2xl border border-border bg-white p-5 hover:border-primary"
    >
      <div
        class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between"
      >
        <div class="flex-1 md:pr-6">
          <div class="flex flex-wrap items-center gap-2">
            <span
              v-if="coupon.is_verified"
              class="inline-flex items-center gap-2 rounded-lg border border-border bg-sky-50 px-3 py-1.5 text-sm font-medium text-sky-600"
            >
              <UIcon name="i-lucide-badge-check" class="size-4" />
              Verified
            </span>

            <span
              v-if="coupon.is_featured"
              class="inline-flex items-center gap-2 rounded-lg border border-yellow-300 bg-yellow-50 px-3 py-1.5 text-sm font-medium text-yellow-600"
            >
              <UIcon name="i-lucide-star" class="size-4" />
              Featured
            </span>
          </div>

          <h3 class="mt-4 text-2xl font-bold leading-tight text-accent">
            {{ coupon.title }}
          </h3>

          <p v-if="coupon.summary" class="mt-2 text-sm leading-6 text-body">
            {{ coupon.summary }}
          </p>

          <div class="mt-4 flex flex-wrap items-center gap-3">
            <span
              class="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-600"
            >
              {{ coupon.discount_text || "Special Offer" }}
            </span>

            <span
              v-if="coupon.is_exclusive"
              class="inline-flex items-center rounded-full bg-purple-50 px-3 py-1 text-sm font-medium text-purple-600"
            >
              Exclusive
            </span>

            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-mouse-pointer-click" class="size-4" />
              <span>{{ coupon.click_count }} Clicks</span>
            </div>
          </div>
        </div>

        <div
          class="border-border border-t py-4 md:border-l md:border-t-0 md:pl-6"
        >
          <div class="flex flex-col items-center text-center">
            <a
              :href="coupon.affiliate_url ?? coupon.deal_url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-base font-semibold text-success"
            >
              <UIcon name="i-lucide-share-2" class="size-4" />
              Share & Earn
            </a>

            <p class="mt-3 text-sm text-body mb-3">
              Grab this latest offer now
            </p>

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
    </div>
  </div>
</template>
