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
        :repeat="5"
        :overlay="false"
        :ui="{
          root: 'py-3 [--gap:--spacing(6)] [--duration:20s]',
          content: 'w-auto',
        }"
      >
        <NuxtLink
          v-for="partner in partners"
          :key="partner.id"
          :to="partner.affiliate_url ?? partner.website_url"
          class="group transition-transform duration-300 hover:-translate-y-0.5"
        >
          <NuxtImg
            :src="partner.logo_url"
            :alt="partner.name"
            class="h-12 w-auto object-contain opacity-100 transition duration-300 group-hover:opacity-90 group-hover:grayscale-0"
            loading="lazy"
          />
        </NuxtLink>
      </UMarquee>
    </div>
  </section>
</template>

<style scoped></style>
