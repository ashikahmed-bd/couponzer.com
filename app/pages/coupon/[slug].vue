<script setup>
const route = useRoute();
const supabase = useSupabaseClient();
const couponStore = useCouponStore();

// get single coupon
const { data: coupon } = await useAsyncData(
  `coupon-${route.params.slug}`,
  async () => {
    const { data, error } = await supabase
      .from("coupons")
      .select(`*, stores(*)`)
      .eq("slug", route.params.slug)
      .eq("is_active", true)
      .maybeSingle();

    if (error) throw error;
    return data;
  },
);

// get store coupons
const { data: coupons } = await useAsyncData(
  `coupons-${route.params.slug}`,
  async () => {
    if (!coupon.value) return [];

    const { data, error } = await supabase
      .from("coupons")
      .select("*")
      .eq("store_id", coupon.value.store_id)
      .eq("is_active", true)
      .neq("id", coupon.value.id)
      .order("is_featured", { ascending: false })
      .order("updated_at", { ascending: false });

    if (error) throw error;
    return data || [];
  },
);

// useSchemaOrg([
//   defineWebPage({
//     name: coupon.value?.title,
//     url: `${siteUrl}/coupon/${coupon.value?.slug}`,
//     description: coupon.value?.description,
//     inLanguage: "en-US",
//   }),

//   defineOffer({
//     name: coupon.value.title || `${coupon.value.stores?.name} Coupon`,
//     description: coupon.value?.description,
//     url: `${siteUrl}/coupon/${coupon.value?.slug}`,

//     seller: {
//       "@type": "Organization",
//       name: coupon.value.stores?.name,
//       url: `${siteUrl}/store/${coupon.value.stores?.slug}`,
//     },

//     price: "0",
//     priceCurrency: "USD",

//     availability: "https://schema.org/InStock",
//     category: "Coupon",

//     couponCode: coupon.value.code,
//     validThrough: coupon.value.expires_at,
//   }),

//   defineBreadcrumb({
//     itemListElement: [
//       {
//         name: "Home",
//         item: `${siteUrl}`,
//       },
//       {
//         name: "Stores",
//         item: `${siteUrl}/stores`,
//       },
//       {
//         name: coupon.value.stores?.name,
//         item: `${siteUrl}/store/${coupon.value.stores?.slug}`,
//       },
//       {
//         name: "Coupon",
//         item: `${siteUrl}/coupon/${coupon.value.slug}`,
//       },
//     ],
//   }),
// ]);
</script>

<template>
  <main>
    <SeoMeta
      :title="coupon.meta_title"
      :description="coupon.meta_description"
      :keywords="coupon.meta_keywords"
    />
    <section class="max-w-7xl mx-auto px-4 py-10">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div class="lg:col-span-8 space-y-8">
          <div class="rounded-3xl bg-white p-5 md:p-8">
            <h1 class="line-clamp-2 text-3xl font-bold text-dark md:text-4xl">
              {{ coupon.title }}
            </h1>

            <p
              v-if="coupon.description"
              class="mt-3 line-clamp-4 max-w-3xl text-base leading-8 text-bodu md:text-lg"
            >
              {{ coupon.description }}
            </p>

            <div class="mt-6 grid items-stretch gap-4 md:grid-cols-[1fr_auto]">
              <div
                class="flex items-center justify-center rounded-2xl bg-slate-50 text-center"
              >
                <h2 class="text-3xl font-extrabold uppercase text-slate-900">
                  {{ coupon.discount_text }}
                </h2>
              </div>

              <a
                :href="`/click/${coupon.slug}`"
                rel="nofollow sponsored"
                @click="couponStore.openDialog(coupon)"
                class="group relative flex w-full min-w-0 items-center justify-between overflow-hidden rounded-full border border-dashed border-orange-400 bg-orange-50 py-3 md:min-w-[240px]"
              >
                <span
                  class="absolute left-0 top-0 z-10 flex h-full w-[85%] items-center justify-center rounded-full bg-orange-500 px-4 text-sm font-bold text-white transition-all duration-300 group-hover:w-[90%] sm:px-5"
                >
                  {{ coupon.code ? "Show Coupon" : "Get Deal" }}
                </span>

                <span
                  class="flex w-full items-center justify-end truncate px-4 text-xs font-semibold tracking-wide text-orange-600 sm:text-sm"
                >
                  {{ coupon.code || "No Code Needed" }}
                </span>
              </a>
            </div>

            <div
              v-if="coupon.is_verified"
              class="mt-5 flex flex-wrap items-center gap-2"
            >
              <span
                v-if="coupon.is_verified"
                class="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200"
              >
                Verified
              </span>

              <span
                v-if="coupon.is_exclusive"
                class="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700 ring-1 ring-violet-200"
              >
                Exclusive
              </span>
            </div>
          </div>

          <div class="rounded-3xl bg-white p-6">
            <div class="mb-6">
              <h2 class="text-2xl font-bold text-slate-900">
                More offers from Contabo
              </h2>
              <p class="mt-1 text-slate-600">
                Explore all available deals and coupons from this store.
              </p>
            </div>

            <div class="space-y-4">
              <CouponMiniCard
                v-for="coupon in coupons"
                :key="coupon.id"
                :coupon="coupon"
              />
            </div>
          </div>
        </div>

        <aside class="lg:col-span-4">
          <div class="sticky top-24 space-y-6">
            <div
              class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100"
            >
              <div class="flex items-center gap-4">
                <div
                  class="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-100"
                >
                  <img
                    v-if="coupon.stores?.logo_url"
                    :src="coupon.stores.logo_url"
                    :alt="coupon.stores?.name"
                    class="h-full w-full object-contain p-2"
                  />

                  <span
                    v-else
                    class="text-xl font-bold uppercase text-slate-700"
                  >
                    {{ coupon.stores?.name?.charAt(0) }}
                  </span>
                </div>

                <div class="min-w-0">
                  <h2 class="truncate text-xl font-bold text-dark">
                    {{ coupon.stores?.name }}
                  </h2>
                  <p class="mt-1 text-sm text-body line-clamp-1">
                    {{ coupon.stores?.title }}
                  </p>
                </div>
              </div>

              <div class="mt-6 rounded-2xl bg-slate-50 p-4">
                <div class="flex items-center justify-between gap-4">
                  <span class="text-sm text-slate-500"> Offer </span>
                  <span class="text-right text-sm font-semibold text-slate-900">
                    {{ coupon.stores?.offer_text ?? "Available" }}
                  </span>
                </div>

                <div class="mt-3 flex items-center justify-between gap-4">
                  <span class="text-sm text-slate-500"> Cashback </span>
                  <span
                    class="text-right text-sm font-semibold text-orange-600"
                  >
                    {{ coupon.stores?.cashback_text ?? "No cashback" }}
                  </span>
                </div>
              </div>

              <div class="mt-4 grid grid-cols-2 gap-3">
                <div
                  class="rounded-2xl bg-slate-50 p-4 text-center ring-1 ring-slate-200"
                >
                  <p class="text-sm text-slate-500">Rating</p>
                  <p class="mt-1 font-semibold text-slate-900">
                    {{ coupon.stores?.rating }}/5
                  </p>
                </div>

                <div
                  class="rounded-2xl bg-slate-50 p-4 text-center ring-1 ring-slate-200"
                >
                  <p class="text-sm text-slate-500">Votes</p>
                  <p class="mt-1 font-semibold text-slate-900">
                    {{ coupon.stores?.votes }}
                  </p>
                </div>
              </div>

              <p
                v-if="coupon.stores?.summary"
                class="mt-6 line-clamp-4 text-sm leading-7 text-body"
              >
                {{ coupon.stores.summary }}
              </p>

              <NuxtLink
                :to="`/store/${coupon.stores.slug}`"
                class="mt-6 inline-flex w-full items-center justify-center rounded bg-dark px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Visit Store
              </NuxtLink>
            </div>
          </div>
        </aside>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
