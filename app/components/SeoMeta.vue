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
    default: "https://www.couponzer.com/og-image.webp",
  },
  url: {
    type: String,
    default: () => useRequestURL().href,
  },
  robots: {
    type: String,
    default: "index, follow",
  },

  author: {
    type: String,
    default: "Couponzer.com",
  },
});

const requestURL = useRequestURL();

const canonicalUrl = computed(() => {
  if (!props.url) return "";

  if (props.url.startsWith("http")) {
    return props.url;
  }

  const path = props.url.startsWith("/") ? props.url : `/${props.url}`;
  return `${requestURL.origin}${path}`;
});
</script>

<template>
  <Head v-if="props.title">
    <Title>{{ props.title }}</Title>

    <Meta name="description" :content="props.description" />
    <Meta name="keywords" :content="props.keywords" />
    <Link rel="canonical" :href="canonicalUrl" />
    <Meta name="robots" :content="props.robots" />
    <Meta name="author" :content="props.author" />

    <Meta property="og:title" :content="props.title" />
    <Meta property="og:description" :content="props.description" />
    <Meta property="og:image" :content="props.image" />
    <Meta property="og:image:alt" :content="props.title" />
    <Meta property="og:url" :content="canonicalUrl" />
    <Meta property="og:type" content="website" />
    <Meta property="og:locale" content="en_US" />

    <Meta name="twitter:card" content="summary_large_image" />
    <Meta name="twitter:title" :content="props.title" />
    <Meta name="twitter:description" :content="props.description" />
    <Meta name="twitter:url" :content="canonicalUrl" />
    <Meta name="twitter:image" :content="props.image" />
    <Meta name="twitter:image:alt" :content="props.title" />
    <Meta name="twitter:creator" content="@couponzer" />
    <Meta name="twitter:site" content="@couponzer" />
  </Head>
</template>

<style scoped></style>
