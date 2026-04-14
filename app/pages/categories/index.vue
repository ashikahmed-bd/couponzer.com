<script setup>
const categoryStore = useCategoryStore();

const {
  data: categories,
  pending,
  error,
} = await useAsyncData("categories", categoryStore.getCategories);
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
              :to="`/categories/${category.slug}`"
              class="group block rounded-xl border border-gray-200 bg-white px-4 py-6 text-center transition-all duration-200 hover:border-primary"
            >
              <!-- Image -->
              <div
                class="flex w-full items-center justify-center overflow-hidden rounded-lg mb-3"
              >
                <NuxtImg
                  :src="category.icon_url"
                  :alt="category.name"
                  class="h-16 w-16 object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>

              <!-- Text -->
              <span
                class="block text-sm font-medium text-gray-700 transition-colors duration-200 group-hover:text-primary"
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
