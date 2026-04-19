<script setup>
useSchemaOrg([
  defineWebPage({
    "@type": "WebPage",
    name: "Get 50% Off on Amazon | Couponzer",
    description:
      "Use this verified Amazon coupon code and get 50% discount on electronics and accessories.",
    url: "https://www.couponzer.com/coupon/amazon-50-off",
    inLanguage: "en",
  }),

  defineBreadcrumb({
    itemListElement: [
      {
        name: "Home",
        item: "https://www.couponzer.com",
      },
      {
        name: "Coupons",
        item: "https://www.couponzer.com/coupons",
      },
      {
        name: "Get 50% Off on Amazon",
        item: "https://www.couponzer.com/coupon/amazon-50-off",
      },
    ],
  }),

  defineOffer({
    name: "Get 50% Off on Amazon",
    description:
      "Apply this promo code and save 50% on Amazon electronics and accessories.",
    url: "https://www.couponzer.com/coupon/amazon-50-off",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",

    validFrom: "2026-04-01",
    validThrough: "2026-04-30",

    seller: {
      "@type": "Organization",
      name: "Amazon",
      url: "https://www.couponzer.com/store/amazon",
    },

    itemOffered: {
      "@type": "Service",
      name: "Amazon Discount Offer",
    },
  }),
]);
</script>

<template>
  <div>
    <h1>Get 50% Off on Amazon</h1>
    <p>
      Use this verified Amazon coupon code and get 50% discount on electronics
      and accessories.
    </p>

    <p><strong>Code:</strong> SAVE50</p>
    <p><strong>Expires:</strong> April 30, 2026</p>
    <p><strong>Store:</strong> Amazon</p>
  </div>
</template>

<style scoped></style>
