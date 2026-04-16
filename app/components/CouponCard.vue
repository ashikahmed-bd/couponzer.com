<script setup>
const couponStore = useCouponStore();

const props = defineProps({
  coupon: {
    type: Object,
    required: true,
  },
});

const store = computed(() => props.coupon?.stores || null);

const badgeText = computed(() => {
  if (props.coupon?.discount_text) return props.coupon.discount_text;
  if (props.coupon?.is_exclusive) return "Exclusive";
  if (props.coupon?.is_featured) return "Featured";
  return "Special Offer";
});

const statusText = computed(() => {
  if (props.coupon?.is_verified) return "Verified";
  return "Active";
});
</script>

<template>
  <div
    class="group flex flex-col overflow-hidden rounded-3xl border border-border bg-white p-3 transition duration-300 hover:-translate-y-1 hover:border-primary"
  >
    <div
      class="flex min-h-40 w-full items-center justify-center overflow-hidden rounded-2xl"
      :style="{ background: store?.background }"
    >
      <NuxtImg
        v-if="store?.logo_url"
        :src="store.logo_url"
        :alt="store?.name ?? coupon.title"
        class="h-24 w-auto object-contain transition duration-500 group-hover:scale-105"
      />
      <div v-else class="px-6 text-center text-lg font-bold text-accent">
        {{ store?.name ?? coupon.title }}
      </div>
    </div>

    <div class="flex w-full items-center justify-between gap-2 p-3">
      <span
        class="rounded-lg border border-orange-200 bg-orange-50 px-3 py-1 text-sm font-medium text-orange-600"
      >
        {{ badgeText }}
      </span>

      <span
        class="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-3 py-1 text-sm font-medium text-green-700"
      >
        <UIcon name="i-lucide-badge-check" class="size-4" />
        <span>{{ statusText }}</span>
      </span>
    </div>

    <div class="grid gap-4 p-3">
      <div>
        <p v-if="store?.name" class="mb-1 text-sm font-medium text-body">
          {{ store.name }}
        </p>

        <h3
          class="text-xl font-bold leading-snug text-accent transition duration-300 group-hover:text-orange-600"
        >
          {{ coupon.title }}
        </h3>

        <p
          v-if="coupon.summary"
          class="mt-2 text-sm leading-6 text-gray-600 line-clamp-2"
        >
          {{ coupon.summary }}
        </p>
      </div>

      <div
        class="flex w-full items-center justify-between border-y border-gray-200 py-3 text-sm text-gray-500"
      >
        <div class="flex items-center gap-1.5">
          <UIcon name="i-lucide-calendar" class="size-4" />
          <span>
            Expires:
            {{ coupon.expires_at ? $date(coupon.expires_at) : "No expiry" }}
          </span>
        </div>

        <div class="flex items-center gap-1.5">
          <UIcon name="i-lucide-mouse-pointer-click" class="size-4" />
          <span>{{ coupon.clicks }} Clicks</span>
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
</template>
