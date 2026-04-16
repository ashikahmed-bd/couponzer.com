<script setup>
const props = defineProps({
  store: {
    type: Object,
    required: true,
  },
});

const shareStore = async () => {
  const url = props.store?.canonical_url || `/stores/${props.store?.slug}`;
  const title = props.store?.title || props.store?.name || "Store";

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

const ratingText = computed(() => {
  if (!props.store?.rating) return null;
  return Number(props.store.rating).toFixed(1);
});
</script>

<template>
  <div
    class="group overflow-hidden rounded-2xl border border-gray-200/80 bg-white transition-all duration-300 hover:-translate-y-1"
  >
    <div class="relative p-5" :style="{ backgroundColor: store.background }">
      <div class="relative flex items-start gap-4">
        <div
          class="flex size-20 shrink-0 items-center justify-center rounded-2xl bg-white p-2.5"
        >
          <NuxtImg
            v-if="store.logo_url"
            :src="store.logo_url"
            :alt="store.name"
            class="h-full w-full object-contain"
          />
        </div>

        <div class="min-w-0">
          <div class="flex flex-wrap items-center gap-2 mb-2">
            <h3 class="truncate text-lg font-bold text-accent md:text-xl">
              {{ store.name }}
            </h3>
            <UIcon
              v-if="store.is_verified"
              name="i-lucide-badge-check"
              class="size-4 text-success"
            />
          </div>
          <span
            v-if="store.offer_text"
            class="rounded-2xl bg-orange-50 px-3.5 py-1 text-sm font-semibold text-primary"
          >
            {{ store.offer_text }}
          </span>
        </div>
      </div>
    </div>

    <div class="p-4">
      <p v-if="store.summary" class="line-clamp-2 text-sm leading-6 text-body">
        {{ store.summary }}
      </p>

      <div class="mt-2 flex flex-wrap items-center gap-2">
        <span
          v-if="store.cashback_text"
          class="rounded-2xl bg-emerald-50 px-3.5 py-2 text-sm font-semibold text-emerald-600"
        >
          {{ store.cashback_text }}
        </span>
      </div>

      <div
        class="flex items-center justify-between gap-2.5 border-t border-border mt-2 pt-2"
      >
        <div class="flex items-center gap-4 text-sm text-gray-600">
          <span v-if="ratingText" class="flex items-center gap-1.5">
            <UIcon name="i-lucide-star" class="size-4 text-yellow-500" />
            {{ ratingText }}
          </span>

          <span v-if="store.votes" class="flex items-center gap-1.5">
            <UIcon name="i-lucide-thumbs-up" class="size-4" />
            {{ store.votes }}
          </span>
        </div>

        <div class="flex items-center gap-2">
          <button
            type="button"
            @click="shareStore"
            class="flex h-10 w-10 items-center justify-center rounded border border-border bg-white text-gray-500 transition hover:bg-orange-100 hover:text-orange-600"
          >
            <UIcon name="i-lucide-share-2" class="size-5" />
          </button>

          <NuxtLink
            :to="`/stores/${store.slug}`"
            class="inline-flex items-center gap-2 rounded bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary"
          >
            View
            <UIcon name="i-lucide-arrow-right" class="size-4" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
