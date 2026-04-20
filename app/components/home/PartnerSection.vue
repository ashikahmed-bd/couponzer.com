<script setup>
const partnerStore = usePartnerStore();

const {
  data: partners,
  pending,
  error,
} = await useAsyncData("partners", async () => {
  return await partnerStore.getPartners();
});
</script>

<template>
  <section class="max-w-7xl mx-auto px-4 py-6">
    <div class="mx-auto max-w-3xl text-center">
      <span
        class="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
      >
        Trusted Partners
      </span>

      <h2 class="mt-4 text-2xl font-bold text-accent sm:text-3xl lg:text-4xl">
        Trusted by 250+ Leading Brands & Partners
      </h2>

      <p class="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
        Discover coupons and promo codes from trusted global brands you already
        know and love.
      </p>
    </div>

    <div class="mt-6">
      <UMarquee
        pause-on-hover
        :overlay="false"
        :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }"
      >
        <NuxtLink v-for="partner in partners" :key="partner.id">
          <NuxtImg
            :src="partner.logo_url"
            :alt="partner.name"
            class="h-24 w-auto"
          />
        </NuxtLink>
      </UMarquee>
    </div>
  </section>
</template>

<style scoped></style>
