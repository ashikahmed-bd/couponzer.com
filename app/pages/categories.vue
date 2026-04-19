<script setup>
const categoryStore = useCategoryStore();

const {
  data: categories,
  pending,
  error,
} = await useAsyncData("categories", categoryStore.getCategories);

useSchemaOrg([
  defineWebPage({
    "@type": "CollectionPage",
    name: "All Categories | Couponzer",
    description:
      "Browse coupon categories on Couponzer to find the latest promo codes, discount deals, and special offers.",
    url: "https://www.couponzer.com/categories",
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
    ],
  }),

  {
    "@type": "ItemList",
    name: "Coupon Categories",
    description: "A curated list of coupon categories available on Couponzer.",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: 5,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        url: "https://www.couponzer.com/category/electronics",
        name: "Electronics",
      },
      {
        "@type": "ListItem",
        position: 2,
        url: "https://www.couponzer.com/category/fashion",
        name: "Fashion",
      },
      {
        "@type": "ListItem",
        position: 3,
        url: "https://www.couponzer.com/category/food",
        name: "Food",
      },
      {
        "@type": "ListItem",
        position: 4,
        url: "https://www.couponzer.com/category/travel",
        name: "Travel",
      },
      {
        "@type": "ListItem",
        position: 5,
        url: "https://www.couponzer.com/category/health-beauty",
        name: "Health & Beauty",
      },
    ],
  },
]);
</script>

<template>
  <main>
    <section class="relative bg-white/60 overflow-hidden py-6">
      <div class="max-w-6xl mx-auto px-4 py-6">
        <div class="max-w-2xl">
          <h1 class="text-3xl md:text-4xl font-bold tracking-tight text-accent">
            Categories
          </h1>

          <p class="mt-3 max-w-xl text-sm leading-6 text-body sm:text-base">
            Discover exclusive coupon codes, trending offers, and handpicked
            deals from top categories and stores.
          </p>
        </div>
      </div>
    </section>

    <section class="py-8">
      <div class="max-w-6xl mx-auto px-4">
        <div
          class="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          <article v-for="category in categories" :key="category.id">
            <NuxtLink
              :to="`/category/${category.slug}`"
              class="group block rounded-xl border border-border bg-white px-4 py-6 text-center transition-all duration-200 hover:border-primary"
            >
              <div
                class="flex w-full items-center justify-center overflow-hidden rounded-lg mb-3"
              >
                <NuxtImg
                  :src="category.icon_url"
                  :alt="category.name"
                  class="h-16 w-16 object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <span
                class="block text-sm font-medium text-body transition-colors duration-200 group-hover:text-primary"
              >
                {{ category.name }}
              </span>
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
