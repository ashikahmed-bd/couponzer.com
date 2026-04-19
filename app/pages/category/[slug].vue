<script setup>
const categoryStore = useCategoryStore();
const route = useRoute();

const { data, pending, error } = await useAsyncData(
  () => `category-${route.params.slug}`,
  async () => {
    return await categoryStore.getStoresByCategory(route.params.slug);
  },
);

useSchemaOrg([
  defineWebPage({
    "@type": "CollectionPage",
    name: "Electronics Coupons & Deals | Couponzer",
    description:
      "Find the best electronics coupons, promo codes, and discount deals from top brands.",
    url: "https://www.couponzer.com/category/electronics",
    inLanguage: "en",
  }),

  defineBreadcrumb({
    itemListElement: [
      {
        name: "Home",
        item: "https://www.couponzer.com",
      },
      {
        name: "Categories",
        item: "https://www.couponzer.com/categories",
      },
      {
        name: "Electronics",
        item: "https://www.couponzer.com/category/electronics",
      },
    ],
  }),

  {
    "@type": "ItemList",
    name: "Electronics Coupons",
    description:
      "Latest electronics coupon codes, promo deals, and discounts available now.",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: 5,

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        url: "https://www.couponzer.com/coupon/amazon-electronics-50-off",
        name: "Amazon 50% Off Electronics",
      },
      {
        "@type": "ListItem",
        position: 2,
        url: "https://www.couponzer.com/coupon/daraz-tech-sale",
        name: "Daraz Tech Week Sale",
      },
      {
        "@type": "ListItem",
        position: 3,
        url: "https://www.couponzer.com/coupon/bestbuy-discount",
        name: "BestBuy Gadget Discount Code",
      },
      {
        "@type": "ListItem",
        position: 4,
        url: "https://www.couponzer.com/coupon/ebay-electronics",
        name: "eBay Electronics Deal",
      },
      {
        "@type": "ListItem",
        position: 5,
        url: "https://www.couponzer.com/coupon/aliexpress-gadgets",
        name: "AliExpress Gadget Offers",
      },
    ],
  },
]);
</script>

<template>
  <main>
    <SeoMeta
      :title="data.category?.meta_title"
      :description="data.category?.meta_description"
      :keywords="data.category?.meta_keywords"
      :url="data.category?.canonical_url"
      :image="data.category?.image_url"
    />

    <section class="relative overflow-hidden bg-white/60 py-6">
      <div class="mx-auto max-w-7xl px-4 py-6">
        <div class="max-w-3xl">
          <h1 class="text-3xl font-bold tracking-tight text-accent md:text-4xl">
            {{ data.category?.title }}
          </h1>

          <p class="mt-3 max-w-2xl text-sm leading-6 text-body sm:text-base">
            {{ data.category?.description }}
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

      <template v-else-if="data.stores?.length">
        <div
          class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          <StoreCard
            v-for="store in data.stores"
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
