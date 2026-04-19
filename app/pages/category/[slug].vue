<script setup>
const categoryStore = useCategoryStore();
const route = useRoute();
const siteUrl = "https://www.couponzer.com";

const { data, pending, error } = await useAsyncData(
  `category-${route.params.slug}`,
  async () => {
    return await categoryStore.getStoresByCategory(route.params.slug);
  },
);

const categoryName = computed(() => {
  return data.value?.category?.name ?? "Category";
});

const categoryUrl = computed(() => {
  return `${siteUrl}/category/${route.params.slug}/`;
});

const categoryStoreList = computed(() => {
  return (data.value?.stores || []).map((store, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: `${store.name} Coupons`,
    url: `${siteUrl}/store/${store.slug}/`,
  }));
});

useSchemaOrg([
  defineWebPage({
    name: `${categoryName.value} Coupons & Promo Codes - Couponzer`,
    url: categoryUrl.value,
    description: `Discover the latest ${categoryName.value.toLowerCase()} coupons, promo codes, and discount deals at Couponzer.`,
    inLanguage: "en-US",
  }),

  defineItemList({
    name: `${categoryName.value} Stores`,
    itemListElement: categoryStoreList.value,
  }),

  defineBreadcrumb({
    itemListElement: [
      {
        name: "Home",
        item: `${siteUrl}/`,
      },
      {
        name: "Categories",
        item: `${siteUrl}/categories/`,
      },
      {
        name: categoryName.value,
        item: categoryUrl.value,
      },
    ],
  }),
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
