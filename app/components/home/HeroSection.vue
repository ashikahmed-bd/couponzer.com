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

const { data: bottom } = await useAsyncData("banner-728x90", async () => {
  return await bannerStore.getBanner("728x90");
});
</script>

<template>
  <section class="bg-white/50">
    <div class="max-w-7xl mx-auto px-4 py-6">
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

      <div v-else-if="error" class="text-red-500">Failed to load banners.</div>

      <div v-else class="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <NuxtLink
          :to="`/click/hostinger-80-off-coupon`"
          rel="nofollow noreferrer sponsored"
          class="group relative overflow-hidden rounded"
          target="_blank"
        >
          <NuxtImg
            :src="main?.image_url"
            :alt="main?.title"
            class="w-full h-auto object-cover transition duration-700 ease-out group-hover:scale-110"
          />
        </NuxtLink>

        <div class="grid gap-4">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <a
              v-if="square"
              :href="square.redirect_url"
              rel="noopener noreferrer"
              target="_blank"
              class="group bg-surface relative overflow-hidden rounded"
            >
              <NuxtImg
                :src="square.image_url"
                :alt="square.alt_text ?? square.title"
                class="w-full h-auto object-contain transition duration-700 ease-out group-hover:scale-110"
              />
            </a>

            <div class="grid gap-4">
              <a
                v-if="top"
                :href="top.redirect_url"
                rel="noopener noreferrer"
                target="_blank"
                class="group bg-surface relative overflow-hidden rounded"
              >
                <NuxtImg
                  :src="top.image_url"
                  :alt="top.alt_text ?? top.title"
                  class="w-full h-auto object-cover transition duration-700 ease-out group-hover:scale-110"
                />
              </a>

              <a
                v-if="bottom"
                :href="bottom.redirect_url"
                rel="noopener noreferrer"
                target="_blank"
                class="group relative block overflow-hidden rounded"
              >
                <NuxtImg
                  :src="bottom.image_url"
                  :alt="bottom.alt_text ?? bottom.title"
                  class="w-full h-auto object-cover transition duration-700 ease-out group-hover:scale-110"
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
