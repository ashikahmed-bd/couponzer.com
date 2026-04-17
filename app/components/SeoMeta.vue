<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  keywords: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "https://www.couponzer.com/og-image.jpg",
  },
  url: {
    type: String,
    default: () => useRequestURL().href,
  },
  robots: {
    type: String,
    default: "noindex, nofollow",
  },

  author: {
    type: String,
    default: "Couponzer.com",
  },
});
</script>

<template>
  <Head>
    <Title>{{ props.title }}</Title>

    <Meta name="description" :content="props.description" />
    <Meta name="keywords" :content="props.keywords" />
    <Link rel="canonical" :href="props.url" />
    <Meta name="robots" :content="props.robots" />
    <Meta name="author" :content="props.author" />

    <Meta property="og:title" :content="props.title" />
    <Meta property="og:description" :content="props.description" />
    <Meta property="og:image" :content="props.image" />
    <Meta property="og:image:alt" :content="props.title" />
    <Meta property="og:url" :content="props.url" />
    <Meta property="og:type" content="website" />
    <Meta property="og:locale" content="en_US" />

    <Meta name="twitter:card" content="summary_large_image" />
    <Meta name="twitter:title" :content="props.title" />
    <Meta name="twitter:description" :content="props.description" />
    <Meta name="twitter:url" :content="props.url" />
    <Meta name="twitter:image" :content="props.image" />
    <Meta name="twitter:image:alt" :content="props.title" />
    <Meta name="twitter:creator" content="@couponzer" />
    <Meta name="twitter:site" content="@couponzer" />
  </Head>
</template>

<style scoped></style>
