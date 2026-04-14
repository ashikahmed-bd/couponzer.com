<script setup></script>

<template>
  <div
    class="group rounded-3xl border border-border hover:border-primary bg-white p-4 transition duration-300 hover:-translate-y-1"
  >
    <NuxtLink
      to="/stores/amazon"
      class="block overflow-hidden rounded-2xl bg-slate-50"
    >
      <NuxtImg
        src="/images/top-stores-icon-3.png"
        alt="Amazon Store"
        class="w-full h-auto object-contain transition duration-300 group-hover:scale-105"
      />
    </NuxtLink>

    <div class="mt-5">
      <h3
        class="line-clamp-2 text-lg font-bold leading-7 text-slate-800 transition duration-300 group-hover:text-primary"
      >
        Flat 5% Off on All Orders This Week
      </h3>

      <p class="mt-2 text-sm text-slate-500">
        Grab exciting discounts on your favorite products. Limited time offer,
        don’t miss out!
      </p>

      <div class="mt-4 flex flex-wrap items-center gap-2">
        <span
          class="rounded-full bg-sky-50 px-3 py-2 text-xs font-semibold text-sky-600"
        >
          Up to 58% Cashback
        </span>

        <span
          class="rounded-full bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-600"
        >
          Verified Deal
        </span>
      </div>

      <button
        type="button"
        class="mt-5 w-full rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-primary-hover"
      >
        Show Coupon Code
      </button>
    </div>
  </div>
</template>

<style scoped></style>
