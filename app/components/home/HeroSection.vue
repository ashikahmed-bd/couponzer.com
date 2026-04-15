<script setup>
const bannerStore = useBannerStore();

const {
  data: banners,
  pending,
  error,
} = await useAsyncData("banners", async () => {
  return await bannerStore.getHeroBanners();
});

const heroLeft = computed(
  () => banners.value?.find((item) => item.placement === "hero_left") || null,
);

const heroMiddle = computed(
  () => banners.value?.find((item) => item.placement === "hero_middle") || null,
);

const heroRights = computed(() =>
  (banners.value || [])
    .filter((item) => item.placement === "hero_right")
    .sort((a, b) => a.sort_order - b.sort_order),
);

const heroRightTop = computed(() => heroRights.value[0] || null);
const heroRightBottom = computed(() => heroRights.value[1] || null);

const getBannerImage = (banner) => {
  return (
    banner?.mobile_image_url || banner?.image_url || "/ads/placeholder.png"
  );
};
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
            :src="heroLeft.image_url"
            :alt="heroLeft.alt_text ?? heroLeft.title"
            class="w-full h-auto object-cover transition duration-700 ease-out group-hover:scale-110"
          />
        </NuxtLink>

        <div class="grid gap-4">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <a
              v-if="heroMiddle"
              :href="heroMiddle.redirect_url"
              class="group bg-surface relative overflow-hidden rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              <NuxtImg
                :src="heroMiddle.image_url"
                :alt="heroMiddle.alt_text ?? heroMiddle.title"
                class="w-full h-auto object-contain transition duration-700 ease-out group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-black/20 opacity-0 transition duration-500 group-hover:opacity-100"
              ></div>

              <div
                class="absolute inset-0 flex flex-col justify-end p-4 text-accent"
              >
                <p v-if="heroMiddle.subtitle" class="mb-1 text-xs">
                  {{ heroMiddle.subtitle }}
                </p>
                <h3 class="text-lg font-semibold">
                  {{ heroMiddle.title }}
                </h3>
              </div>
            </a>

            <div class="grid gap-4">
              <a
                v-if="heroRightTop"
                :href="heroRightTop.redirect_url"
                class="group relative block overflow-hidden rounded"
                target="_blank"
                rel="noopener noreferrer"
              >
                <NuxtImg
                  :src="heroRightTop.image_url"
                  :alt="heroRightTop.alt_text ?? heroRightTop.title"
                  class="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                />
                <div
                  class="absolute inset-0 bg-black/20 opacity-0 transition duration-500 group-hover:opacity-100"
                ></div>

                <div
                  class="absolute inset-0 flex flex-col justify-end p-4 text-white"
                >
                  <h3 class="text-base font-semibold">
                    {{ heroRightTop.title }}
                  </h3>
                </div>
              </a>

              <a
                v-if="heroRightBottom"
                :href="heroRightBottom.redirect_url"
                class="group relative block overflow-hidden rounded"
                target="_blank"
                rel="noopener noreferrer"
              >
                <NuxtImg
                  :src="heroRightBottom.image_url"
                  :alt="heroRightBottom.alt_text ?? heroRightBottom.title"
                  class="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                />
                <div
                  class="absolute inset-0 bg-black/20 opacity-0 transition duration-500 group-hover:opacity-100"
                ></div>

                <div
                  class="absolute inset-0 flex flex-col justify-end p-4 text-white"
                >
                  <h3 class="text-base font-semibold">
                    {{ heroRightBottom.title }}
                  </h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
