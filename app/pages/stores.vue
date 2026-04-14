<script setup>
const merchantStore = useMerchantStore();

const visibleCount = ref(12);

const {
  data: stores,
  pending,
  error,
} = await useAsyncData("stores", async () => {
  return await merchantStore.getStores();
});

const visibleStores = computed(() => {
  return stores.value?.slice(0, visibleCount.value) || [];
});

const hasMore = computed(() => {
  return (stores.value?.length || 0) > visibleCount.value;
});

const loadMore = () => {
  visibleCount.value += 8;
};
</script>

<template>
  <main>
    <section class="relative overflow-hidden bg-white/60 py-6">
      <div class="mx-auto max-w-7xl px-4 py-6">
        <div class="max-w-2xl">
          <h1 class="text-3xl font-bold tracking-tight text-accent md:text-4xl">
            Stores
          </h1>

          <p class="mt-3 max-w-xl text-sm leading-6 text-body sm:text-base">
            Discover exclusive coupon codes, trending offers, and handpicked
            deals from top stores.
          </p>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-4 py-6">
      <div v-if="pending" class="py-10 text-center text-sm text-gray-500">
        Loading stores...
      </div>

      <div v-else-if="error" class="py-10 text-center text-sm text-red-500">
        Failed to load stores.
      </div>

      <template v-else-if="stores?.length">
        <div
          class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          <article
            v-for="store in visibleStores"
            :key="store.id"
            class="group overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary"
          >
            <NuxtLink
              :to="`/stores/${store.slug}`"
              class="flex items-center justify-center px-4 py-12"
              :style="{
                backgroundColor: store.background || '#f9fafb',
              }"
            >
              <NuxtImg
                :src="store.logo_url || '/stores/default.png'"
                :alt="store.name"
                class="relative z-10 h-24 w-auto object-contain transition-all duration-300 group-hover:scale-110"
              />
            </NuxtLink>

            <div class="p-4">
              <div class="flex items-start justify-between gap-3">
                <NuxtLink
                  :to="`/stores/${store.slug}`"
                  class="min-w-0 flex-1 text-gray-900 hover:text-primary"
                >
                  <h2 class="truncate text-base font-bold md:text-lg">
                    {{ store.name }}
                  </h2>
                </NuxtLink>

                <span
                  v-if="store.is_verified"
                  class="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-200"
                >
                  <UIcon name="i-lucide-badge-check" class="size-3.5" />
                  Verified
                </span>
              </div>

              <p
                v-if="store.summary"
                class="mt-2 line-clamp-2 text-sm text-body"
              >
                {{ store.summary }}
              </p>

              <div class="mt-4 flex flex-wrap gap-2">
                <span
                  v-if="store.offer_text"
                  class="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-700 ring-1 ring-sky-200"
                >
                  <UIcon name="i-lucide-badge-percent" class="size-3.5" />
                  {{ store.offer_text }}
                </span>

                <span
                  v-if="store.cashback_text"
                  class="inline-flex items-center gap-1.5 rounded-full bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-700 ring-1 ring-violet-200"
                >
                  <UIcon name="i-lucide-wallet" class="size-3.5" />
                  {{ store.cashback_text }}
                </span>

                <span
                  v-if="store.is_featured"
                  class="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700 ring-1 ring-amber-200"
                >
                  <UIcon name="i-lucide-star" class="size-3.5" />
                  Featured
                </span>
              </div>

              <NuxtLink
                :to="`/stores/${store.slug}`"
                class="mt-4 block w-full rounded bg-primary px-4 py-3 text-center text-sm font-semibold text-white hover:bg-primary-hover"
              >
                View Store →
              </NuxtLink>
            </div>
          </article>
        </div>

        <div v-if="hasMore" class="mt-8 flex justify-center">
          <button
            type="button"
            @click="loadMore"
            class="inline-flex items-center rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-body transition hover:border-primary hover:text-primary"
          >
            Load More
          </button>
        </div>
      </template>

      <div v-else class="py-10 text-center text-sm text-gray-500">
        No stores found.
      </div>
    </section>
  </main>
</template>
