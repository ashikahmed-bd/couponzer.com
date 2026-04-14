<script setup></script>

<template>
  <div
    class="min-h-screen bg-background text-body selection:bg-primary selection:text-white"
  >
    <div class="relative z-10">
      <Header />
      <slot />
      <Footer />
    </div>
  </div>
</template>

<style scoped></style>
