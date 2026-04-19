<script setup>
const props = defineProps({
  store: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <article
    class="group overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary"
  >
    <NuxtLink
      :to="`/store/${store.slug}`"
      class="flex items-center justify-center px-4 py-6"
      :style="{
        backgroundColor: store.background || '#f9fafb',
      }"
    >
      <NuxtImg
        :src="store.logo_url ?? '/stores/default.png'"
        :alt="store.name"
        class="relative z-10 h-32 w-auto object-contain transition-all duration-300 group-hover:scale-110"
      />
    </NuxtLink>

    <div class="p-4">
      <div class="flex items-start justify-between gap-3">
        <NuxtLink
          :to="`/store/${store.slug}`"
          class="min-w-0 flex-1 text-gray-900 hover:text-primary"
        >
          <h2 class="truncate text-base font-bold md:text-lg">
            {{ store.name }}
          </h2>
        </NuxtLink>

        <span
          v-if="store.is_verified"
          class="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-200"
        >
          <UIcon name="i-lucide-badge-check" class="size-3.5" />
          Verified
        </span>
      </div>

      <p v-if="store.summary" class="mt-2 line-clamp-2 text-sm text-body">
        {{ store.summary }}
      </p>

      <div class="mt-4 flex flex-wrap gap-2">
        <span
          v-if="store.offer_text"
          class="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-700 ring-1 ring-sky-200"
        >
          <UIcon name="i-lucide-badge-percent" class="size-3.5" />
          {{ store.offer_text }}
        </span>

        <span
          v-if="store.cashback_text"
          class="inline-flex items-center gap-1.5 rounded-full bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-700 ring-1 ring-violet-200"
        >
          <UIcon name="i-lucide-wallet" class="size-3.5" />
          {{ store.cashback_text }}
        </span>
      </div>

      <NuxtLink
        :to="`/store/${store.slug}`"
        class="flex items-center justify-center mt-4 w-full rounded bg-primary px-4 py-3 text-center text-sm font-semibold text-white hover:bg-primary-hover"
      >
        View Store
        <UIcon name="i-lucide-arrow-up-right" class="size-5" />
      </NuxtLink>
    </div>
  </article>
</template>

<style scoped></style>
