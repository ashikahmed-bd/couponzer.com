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
    class="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition duration-300 hover:-translate-y-1 hover:border-primary"
  >
    <div
      class="flex min-h-40 w-full items-center justify-center overflow-hidden"
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

    <div class="block p-4">
      <div class="flex w-full items-center justify-between gap-2 mb-2">
        <NuxtLink :to="`/store/${store.slug}`" v-if="store?.name">
          <h3 class="text-base font-semibold text-primary">
            {{ store.name }}
          </h3>
        </NuxtLink>

        <span
          class="flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-2 py-1 text-sm font-medium text-blue-700"
        >
          <UIcon name="i-lucide-badge-check" class="size-4" />
          <span>{{ statusText }}</span>
        </span>
      </div>
      <div class="grid gap-4">
        <div class="block">
          <h3
            class="text-xl font-bold text-accent line-clamp-2 transition duration-300 mb-2"
          >
            {{ coupon.title }}
          </h3>
          <span
            class="rounded-lg border border-border bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
          >
            {{ badgeText }}
          </span>
          <p
            v-if="coupon.summary"
            class="mt-2 text-sm leading-6 text-gray-600 line-clamp-2"
          >
            {{ coupon.summary }}
          </p>
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
</template>
