<script setup></script>

<template>
  <div
    class="group rounded-2xl border border-border bg-white p-3 transition duration-300 hover:-translate-y-1 hover:border-primary"
  >
    <NuxtLink
      to="/stores/amazon"
      class="flex items-center justify-center rounded-xl bg-slate-50"
    >
      <NuxtImg
        src="/images/top-stores-icon-3.png"
        alt="Store"
        class="w-full h-auto object-contain transition duration-300 group-hover:scale-105"
      />
    </NuxtLink>

    <div class="mt-3">
      <div
        class="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-2 py-1.5"
      >
        <div
          class="flex h-6 w-6 items-center justify-center rounded-md bg-white"
        >
          <NuxtImg
            src="/images/fav.png"
            alt="fav"
            class="h-4 w-4 object-contain"
          />
        </div>

        <span class="text-xs font-semibold text-primary"> Upto 45.7% </span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
