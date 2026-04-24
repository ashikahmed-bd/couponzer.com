<script setup>
const couponStore = useCouponStore();

const props = defineProps({
  coupon: {
    type: Object,
    required: true,
  },
});

const shareStore = async () => {
  const url = `/coupon/${props.coupon.slug}`;
  const title = props.coupon.title;

  if (navigator?.share) {
    try {
      await navigator.share({ title, url });
    } catch (e) {}
    return;
  }

  if (navigator?.clipboard && url) {
    await navigator.clipboard.writeText(url);
  }
};
</script>

<template>
  <article
    class="group border border-border p-2.5 overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1"
  >
    <div class="flex flex-col gap-4 lg:flex-row">
      <div class="flex flex-wrap items-stretch gap-4 lg:flex-1">
        <div
          class="w-28 shrink-0 bg-gray-100 rounded flex items-center justify-center text-center p-2.5"
        >
          <span class="text-xl md:text-3xl">
            {{ coupon.discount_text }}
          </span>
        </div>

        <div class="min-w-0 flex-1">
          <div class="mb-3 flex flex-wrap items-center gap-2">
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
            class="text-lg line-clamp-2 font-bold leading-snug text-gray-900 transition-colors duration-200 group-hover:text-orange-600 md:text-xl"
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
      </div>

      <div class="flex w-full flex-col gap-3 lg:w-auto lg:min-w-40">
        <button
          type="button"
          @click="shareStore"
          class="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-border bg-white px-4 py-3 text-sm transition hover:bg-gray-50 active:scale-110"
        >
          <UIcon name="i-lucide-share-2" class="size-5" />
          <span>Share</span>
        </button>

        <a
          :href="`/click/${coupon.slug}`"
          rel="nofollow sponsored"
          @click="couponStore.openDialog(coupon)"
          class="group relative flex w-full min-w-0 items-center justify-between overflow-hidden rounded-full border border-dashed border-orange-400 bg-orange-50 py-3 lg:min-w-[208px]"
        >
          <span
            class="absolute left-0 top-0 z-10 flex h-full w-[85%] items-center justify-center rounded-full bg-orange-500 px-4 text-sm font-bold text-white transition-all duration-300 group-hover:w-[90%] sm:px-5"
          >
            {{ coupon.code ? "Show Coupon" : "Get Deal" }}
          </span>

          <span
            class="flex w-full items-center justify-end truncate px-4 text-xs font-semibold tracking-wide text-orange-600 sm:text-sm"
          >
            {{ coupon.code || "No Code Needed" }}
          </span>
        </a>
      </div>
    </div>
  </article>
</template>
