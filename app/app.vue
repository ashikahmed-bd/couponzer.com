<script setup>
const toaster = {
  position: "top-right",
};
</script>

<template>
  <UApp :toaster="toaster">
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
      <CouponDialog />
    </NuxtLayout>
  </UApp>
</template>
