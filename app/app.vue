<script setup>
const toaster = {
  position: "top-right",
};

useSchemaOrg([
  defineWebSite({
    name: "Couponzer",
    url: "https://www.couponzer.com",
    description:
      "Find verified coupons, promo codes, and discount deals for top online stores.",
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.couponzer.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }),

  defineOrganization({
    name: "Couponzer",
    url: "https://www.couponzer.com",
    logo: "https://www.couponzer.com/logo.svg",
    sameAs: [
      "https://facebook.com/couponzer",
      "https://twitter.com/couponzer",
      "https://pinterest.com/couponzer",
    ],
  }),
]);
</script>

<template>
  <UApp :toaster="toaster">
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
      <ClientOnly>
        <CouponDialog />
      </ClientOnly>
    </NuxtLayout>
  </UApp>
</template>
