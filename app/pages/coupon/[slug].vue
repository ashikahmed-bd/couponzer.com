<script setup>
import { onMounted, watch } from "vue";

const route = useRoute();
const couponStore = useCouponStore();

const redirect = async () => {
  const coupon = await couponStore.getCouponBySlug(route.params.slug);

  console.log(coupon);

  if (coupon?.slug && coupon?.store?.slug) {
    await navigateTo(`/store/${coupon.store.slug}?coupon=${coupon.slug}`, {
      replace: true,
    });
  } else {
    console.log("Invalid coupon data:", coupon);
  }
};

onMounted(redirect);

watch(() => route.params.slug, redirect);
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
