<script setup>
const route = useRoute();
const couponStore = useCouponStore();
const config = useRuntimeConfig();

const siteUrl = config.public.siteUrl;

const { data: coupon, error } = await useAsyncData(
  `coupon-${route.params.slug}`,
  () => couponStore.getCouponBySlug(route.params.slug),
);

if (coupon.value) {
  await navigateTo(
    `/store/${coupon.value.stores.slug}?coupon=${coupon.value.slug}`,
    {
      replace: true,
      redirectCode: 301,
    },
  );
}

useSchemaOrg([
  defineWebPage({
    name: coupon.value?.title,
    url: `${siteUrl}/coupon/${coupon.value?.slug}`,
    description: coupon.value?.description,
    inLanguage: "en-US",
  }),

  defineOffer({
    name: coupon.value.title || `${coupon.value.stores?.name} Coupon`,
    description: coupon.value?.description,
    url: `${siteUrl}/coupon/${coupon.value?.slug}`,

    seller: {
      "@type": "Organization",
      name: coupon.value.stores?.name,
      url: `${siteUrl}/store/${coupon.value.stores?.slug}`,
    },

    price: "0",
    priceCurrency: "USD",

    availability: "https://schema.org/InStock",
    category: "Coupon",

    couponCode: coupon.value.code,
    validThrough: coupon.value.expires_at,
  }),

  defineBreadcrumb({
    itemListElement: [
      {
        name: "Home",
        item: `${siteUrl}`,
      },
      {
        name: "Stores",
        item: `${siteUrl}/stores`,
      },
      {
        name: coupon.value.stores?.name,
        item: `${siteUrl}/store/${coupon.value.stores?.slug}`,
      },
      {
        name: "Coupon",
        item: `${siteUrl}/coupon/${coupon.value.slug}`,
      },
    ],
  }),
]);
</script>

<template>
  <main v-if="coupon">
    <SeoMeta
      :title="coupon.meta_title"
      :description="coupon.meta_description"
      :keywords="coupon.meta_keywords"
      :url="coupon.canonical_url"
      :image="coupon.stores.og_image_url"
    />

    <div class="max-w-7xl mx-auto px-4 py-6">
      <div class="text-center">
        <h1 class="text-xl font-semibold mb-2">Please wait...</h1>
        <p class="text-gray-500">Redirecting you to the store page...</p>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
