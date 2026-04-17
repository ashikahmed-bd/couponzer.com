<script setup>
const bannerStore = useBannerStore();

const {
  data: heroBanner,
  pending,
  error,
} = await useAsyncData("hero-banner", async () => {
  return await bannerStore.getBanner("1000x500");
});

const { data: centerBanner } = await useAsyncData("center-banner", async () => {
  return await bannerStore.getBanner("400x500");
});

const { data: rightBanners } = await useAsyncData("right-banners", async () => {
  return await bannerStore.getBanners("400x245", 2);
});
</script>

<template>
  <section class="bg-white/50">
    <div class="max-w-7xl mx-auto px-4 py-6">
      <div class="mb-3 text-xs text-gray-500">Sponsored Deals</div>

      <div v-if="pending" class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <p>Loading...</p>
      </div>

      <div v-else-if="error" class="text-red-500">
        Unable to load deals right now.
      </div>

      <div v-else class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <a
          :href="`/redirect/${heroBanner?.slug}`"
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          class="group block overflow-hidden rounded-xl"
        >
          <NuxtImg
            :src="heroBanner?.image_url"
            :alt="heroBanner?.title"
            loading="lazy"
            class="w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </a>

        <div class="grid gap-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              :href="`/redirect/${centerBanner?.slug}`"
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              class="group block overflow-hidden rounded-xl"
            >
              <NuxtImg
                :src="centerBanner?.image_url"
                :alt="centerBanner?.alt_text"
                loading="lazy"
                class="w-full h-full object-cover transition duration-700 group-hover:scale-105"
              />
            </a>

            <div class="grid gap-4">
              <article v-for="(banner, i) in rightBanners" :key="i">
                <a
                  :href="`/redirect/${banner.slug}`"
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  class="group block overflow-hidden rounded-xl"
                >
                  <NuxtImg
                    :src="banner.image_url"
                    :alt="banner.alt_text"
                    loading="lazy"
                    class="w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </a>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
