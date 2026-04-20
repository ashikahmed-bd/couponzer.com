<script setup>
const route = useRoute();
const couponStore = useCouponStore();
const config = useRuntimeConfig();

const siteUrl = config.public.siteUrl;

const { data, error } = await useAsyncData(`coupon-${route.params.slug}`, () =>
  couponStore.getCouponBySlug(route.params.slug),
);

if (data.value) {
  await navigateTo(
    `/store/${data.value.stores.slug}?coupon=${data.value.slug}`,
    {
      replace: true,
      redirectCode: 301,
    },
  );
}

console.log(data.value);

useSchemaOrg([
  defineWebPage({
    name: data.value?.title,
    url: `${siteUrl}/coupon/${data.value?.slug}`,
    description: data.value?.description,
    inLanguage: "en-US",
  }),

  defineOffer({
    name: data.value.title || `${data.value.stores?.name} Coupon`,
    description: data.value?.description,
    url: `${siteUrl}/coupon/${data.value?.slug}`,

    seller: {
      "@type": "Organization",
      name: data.value.stores?.name,
      url: `${siteUrl}/store/${data.value.stores?.slug}`,
    },

    price: "0",
    priceCurrency: "USD",

    availability: "https://schema.org/InStock",
    category: "Coupon",

    couponCode: data.value.code,
    validThrough: data.value.expires_at,
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
        name: data.value.stores?.name,
        item: `${siteUrl}/store/${data.value.stores?.slug}`,
      },
      {
        name: "Coupon",
        item: `${siteUrl}/coupon/${data.value.slug}`,
      },
    ],
  }),
]);
</script>

<template>
  <main class="min-h-screen flex items-center justify-center">
    <div class="max-w-7xl mx-auto px-4 py-6">
      <div class="text-center">
        <h1 class="text-xl font-semibold mb-2">Please wait...</h1>
        <p class="text-gray-500">Redirecting you to the store page...</p>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
