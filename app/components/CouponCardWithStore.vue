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
    class="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary"
  >
    <div class="grid md:grid-cols-[280px_1fr]">
      <div
        class="flex flex-col justify-between border-b border-gray-200 bg-gray-50 p-5 md:border-b-0 md:border-r"
        :style="
          coupon.stores?.background
            ? { backgroundColor: coupon.stores.background }
            : {}
        "
      >
        <div>
          <NuxtLink
            :to="`/stores/${coupon.stores?.slug}`"
            class="flex items-center gap-4"
          >
            <div
              class="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-2 ring-1 ring-gray-200"
            >
              <NuxtImg
                :src="coupon.stores?.logo_url ?? '/stores/default.png'"
                :alt="coupon.stores?.name ?? coupon.title"
                class="h-10 w-full object-contain"
              />
            </div>

            <div class="min-w-0">
              <h3 class="truncate text-lg font-bold text-accent mb-2">
                {{ coupon.stores?.name }}
              </h3>
              <span
                v-if="coupon.stores?.is_verified"
                class="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-200"
              >
                <UIcon name="i-lucide-badge-check" class="size-3.5" />
                Verified
              </span>
            </div>
          </NuxtLink>

          <div class="mt-4 flex flex-wrap gap-2">
            <span
              v-if="coupon.stores?.offer_text"
              class="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-700 ring-1 ring-sky-200"
            >
              <UIcon name="i-lucide-badge-percent" class="size-3.5" />
              {{ coupon.stores.offer_text }}
            </span>

            <span
              v-if="coupon.stores?.cashback_text"
              class="inline-flex items-center gap-1.5 rounded-full bg-purple-50 px-3 py-1.5 text-xs font-semibold text-purple-700 ring-1 ring-purple-200"
            >
              <UIcon name="i-lucide-wallet" class="size-3.5" />
              {{ coupon.stores.cashback_text }}
            </span>
          </div>
        </div>

        <div
          class="mt-5 flex items-center justify-between text-sm text-gray-500"
        >
          <div class="flex items-center gap-1.5">
            <UIcon name="i-lucide-star" class="size-4" />

            <span>{{ Number(coupon.stores?.rating).toFixed(1) }}/5</span>
          </div>

          <div class="flex items-center gap-1.5">
            <UIcon name="i-lucide-thumbs-up" class="size-4" />
            <span>{{ coupon.stores?.votes }} votes</span>
          </div>
        </div>
      </div>

      <div class="flex flex-col p-5">
        <div class="flex flex-wrap items-start justify-between gap-3">
          <div class="min-w-0 flex-1">
            <div class="mb-3 flex flex-wrap items-center gap-2">
              <span
                v-if="coupon.discount_text"
                class="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-bold text-orange-600 ring-1 ring-orange-200"
              >
                {{ coupon.discount_text }}
              </span>

              <span
                v-if="coupon.is_featured"
                class="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-700 ring-1 ring-amber-200"
              >
                Featured
              </span>

              <span
                v-if="coupon.is_verified"
                class="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700 ring-1 ring-emerald-200"
              >
                Verified Coupon
              </span>

              <span
                v-if="coupon.is_exclusive"
                class="rounded-full bg-violet-50 px-3 py-1.5 text-xs font-bold text-violet-700 ring-1 ring-violet-200"
              >
                Exclusive
              </span>
            </div>

            <h1
              class="block text-xl font-bold leading-snug text-accent transition-colors duration-200 hover:text-primary"
            >
              {{ coupon.title }}
            </h1>

            <p
              v-if="coupon.description"
              class="line-clamp-2 text-sm leading-6 text-body mt-2"
            >
              {{ coupon.description }}
            </p>
          </div>
        </div>

        <div
          class="flex flex-wrap items-center justify-between gap-3 border-t border-gray-200 py-3.5 mt-3"
        >
          <div class="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <div class="flex items-center gap-1.5">
              <UIcon name="i-lucide-mouse-pointer-click" class="size-4" />
              <span>{{ coupon.click_count }} clicks</span>
            </div>

            <div class="flex items-center gap-1.5">
              <UIcon name="i-lucide-calendar" class="size-4" />
              <span>{{ $date(coupon.starts_at) }}</span>
            </div>
          </div>

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
</template>
