<script setup>
const toaster = {
  position: "top-right",
};

useSchemaOrg([
  defineWebSite({
    name: "Couponzer",
    url: "https://www.couponzer.com",
    description:
      "Couponzer is a coupon and promo code sharing website where users can find verified coupons, promo codes, and discount deals for online stores.",
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.couponzer.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }),

  defineOrganization({
    name: "Couponzer",
    description:
      "Couponzer is a coupon and promo code sharing website where users can find verified coupons, promo codes, and discount deals for online stores.",
    url: "https://www.couponzer.com",
    logo: "https://www.couponzer.com/logo.svg",
    sameAs: [
      "https://www.facebook.com/couponzer.official",
      "https://x.com/couponzer",
      "https://www.instagram.com/couponzer.official",
      "https://www.pinterest.com/couponzer",
      "https://www.linkedin.com/company/couponzer",
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
