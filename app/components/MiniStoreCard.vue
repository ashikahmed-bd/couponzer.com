<script setup></script>

<template>
  <div
    class="grid justify-start gap-4 rounded-xl border border-gray-200 bg-orange-50 p-3 transition duration-300"
  >
    <!-- Top -->
    <div class="flex items-center gap-4">
      <!-- Image -->
      <div class="flex items-center justify-center rounded-xl bg-white">
        <img
          src="/images/top-stores-icon-1.png"
          alt="Store"
          class="w-24 h-auto object-contain"
        />
      </div>

      <!-- Offer -->
      <div class="grid gap-1">
        <span class="text-base font-medium uppercase text-gray-500">
          Up To
        </span>

        <span class="flex items-center gap-2">
          <span class="text-2xl font-bold text-orange-600"> 70% </span>
          <span
            class="text-base font-medium uppercase text-gray-600 rotate-270 inline-block"
          >
            Off
          </span>
        </span>
      </div>
    </div>

    <!-- Bottom -->
    <div class="grid gap-3 md:gap-4">
      <p class="text-sm font-medium text-gray-600">
        Lorem Ipsum is simply dummy text of the printing.
      </p>

      <a
        href="stores-style-3.html"
        class="flex items-center gap-2 text-sm font-bold text-orange-600 transition hover:gap-3"
      >
        <span>View All Offers</span>
        <i class="ph ph-arrow-right text-base"></i>
      </a>
    </div>
  </div>
</template>

<style scoped></style>
