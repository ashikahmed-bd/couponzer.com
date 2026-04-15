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
    </NuxtLayout>
  </UApp>
</template>
