<script setup></script>

<template>
  <div
    class="grid gap-4 rounded-2xl border border-gray-200 bg-orange-50 p-4 transition duration-300 hover:shadow-lg md:gap-6 md:p-6"
  >
    <div class="flex items-center justify-between gap-3 md:gap-5">
      <div class="flex items-center gap-3 md:gap-4">
        <div
          class="flex h-16 w-16 items-center justify-center overflow-hidden rounded-lg bg-white"
        >
          <img
            src="/images/top-stores-icon-14.png"
            alt="Canon"
            class="w-full object-contain"
          />
        </div>

        <div class="grid gap-1">
          <h5 class="whitespace-nowrap text-xl font-semibold text-gray-800">
            Canon
          </h5>

          <div class="flex items-center gap-1 text-sm text-gray-500">
            <i class="ph ph-map-pin-line"></i>
            <UIcon name="i-lucide-map-pin" class="size-5" />
            <span>Germany</span>
          </div>
        </div>
      </div>

      <button
        class="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition hover:bg-orange-100 hover:text-orange-600"
      >
        <UIcon name="i-lucide-share-2" class="size-5" />
      </button>
    </div>

    <div class="grid gap-3 md:gap-4">
      <p class="text-base font-medium text-gray-900">
        Buy One, Get One Free on Select Shoes
      </p>
      <div class="flex items-center gap-2 text-sm text-gray-500">
        <UIcon name="i-lucide-calendar" class="size-5" />
        <span>05 Aug, 24</span>
      </div>

      <div
        class="flex items-center gap-3 rounded-md border border-gray-200 bg-white p-2"
      >
        <div
          class="flex h-8 w-8 items-center justify-center rounded-md bg-white shadow"
        >
          <img src="/images/fav.png" alt="fav" class="h-5 w-5 object-contain" />
        </div>

        <span class="text-sm font-bold text-orange-600">
          Upto 58% Voucher
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
