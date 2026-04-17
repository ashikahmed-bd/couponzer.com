<script setup>
const bannerStore = useBannerStore();

const {
  data: main,
  pending,
  error,
} = await useAsyncData("banner-1200x630", async () => {
  return await bannerStore.getBanner("1200x630");
});

const { data: square } = await useAsyncData("banner-300x300", async () => {
  return await bannerStore.getBanner("300x300");
});

const { data: top } = await useAsyncData("banner-336x280", async () => {
  return await bannerStore.getBanner("336x280");
});

const { data: bottom } = await useAsyncData("banner-1200x300", async () => {
  return await bannerStore.getBanner("1200x300");
});
</script>

<template>
  <section class="bg-white/50">
    <div class="max-w-7xl mx-auto px-4 py-6">
      <!-- Sponsored Section -->
      <div class="mb-3 text-xs text-gray-500">Sponsored Deals</div>

      <div v-if="pending" class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div class="h-72 rounded bg-gray-200 animate-pulse"></div>
        <div class="grid gap-4">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div class="h-72 rounded bg-gray-200 animate-pulse"></div>
            <div class="grid gap-4">
              <div class="h-34 rounded bg-gray-200 animate-pulse"></div>
              <div class="h-34 rounded bg-gray-200 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="error" class="text-red-500">
        Unable to load deals right now.
      </div>

      <div v-else class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <!-- Main Banner -->
        <NuxtLink
          :to="`/go/hostinger-offer`"
          rel="sponsored"
          target="_blank"
          aria-label="View Hostinger Discount Offer"
          class="group relative overflow-hidden rounded"
        >
          <NuxtImg
            :src="main?.image_url"
            :alt="main?.title || 'Best Hosting Deal'"
            class="w-full h-auto object-cover transition duration-700 ease-out group-hover:scale-105"
          />
        </NuxtLink>

        <div class="grid gap-4">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <!-- Square -->
            <a
              v-if="square"
              :href="`/go/${square.slug}`"
              rel="sponsored"
              target="_blank"
              aria-label="View exclusive deal"
              class="group relative overflow-hidden rounded"
            >
              <NuxtImg
                :src="square.image_url"
                :alt="square.alt_text || 'Exclusive Deal'"
                class="w-full h-auto object-contain transition duration-700 ease-out group-hover:scale-105"
              />
            </a>

            <div class="grid gap-4">
              <!-- Top -->
              <a
                v-if="top"
                :href="`/go/${top.slug}`"
                rel="sponsored"
                target="_blank"
                aria-label="Top discount deal"
                class="group relative overflow-hidden rounded"
              >
                <NuxtImg
                  :src="top.image_url"
                  :alt="top.alt_text || 'Top Deal'"
                  class="w-full h-full object-contain transition duration-700 ease-out group-hover:scale-105"
                />
              </a>

              <!-- Bottom -->
              <a
                v-if="bottom"
                :href="`/go/${bottom.slug}`"
                rel="sponsored"
                target="_blank"
                aria-label="Limited time offer"
                class="group relative block overflow-hidden rounded"
              >
                <NuxtImg
                  :src="bottom.image_url"
                  :alt="bottom.alt_text || 'Limited Offer'"
                  class="w-full h-full object-contain transition duration-700 ease-out group-hover:scale-105"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
