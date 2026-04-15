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
    <SeoMeta
      title="Top Stores with Coupons & Deals | Couponzer"
      description="Browse top stores on Couponzer and find the latest coupons, promo codes, and verified deals. Save more with exclusive discounts from trusted brands and online shops."
      keywords="Couponzer stores, top stores, store coupons, brand deals, online shopping discounts, verified store offers"
    />

    <section class="relative overflow-hidden bg-white/60 py-6">
      <div class="mx-auto max-w-7xl px-4 py-6">
        <div class="max-w-3xl">
          <h1 class="text-3xl font-bold tracking-tight text-accent md:text-4xl">
            Top Stores with Coupons & Deals
          </h1>

          <p class="mt-3 max-w-2xl text-sm leading-6 text-body sm:text-base">
            Explore top online stores on Couponzer and discover the latest
            coupons, promo codes, and exclusive deals. Shop smarter with
            verified offers from trusted brands across fashion, electronics,
            travel, and more.
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
          <StoreCard
            v-for="store in visibleStores"
            :key="store.id"
            :store="store"
          />
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
