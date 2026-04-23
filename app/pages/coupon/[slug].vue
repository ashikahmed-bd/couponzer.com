<script setup>
const route = useRoute();
const supabase = useSupabaseClient();

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
  <main class="min-h-screen bg-slate-50">
    <section class="max-w-7xl mx-auto px-4 py-10">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <!-- Left -->
        <div class="lg:col-span-8 space-y-8">
          <!-- Single Coupon -->
          <div class="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <div class="mb-4 flex flex-wrap gap-2">
              <span
                class="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 ring-1 ring-emerald-200"
              >
                Verified
              </span>
              <span
                class="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-sm font-medium text-amber-700 ring-1 ring-amber-200"
              >
                Featured
              </span>
              <span
                class="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
              >
                Deal
              </span>
            </div>

            <h1
              class="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
            >
              Contabo Cloud VPS Hosting - Get Up to 20% Off
            </h1>

            <p
              class="mt-4 max-w-3xl text-base leading-8 text-slate-600 md:text-lg"
            >
              Save up to 20% on Contabo Cloud VPS hosting. Affordable, powerful
              and reliable servers for developers, startups and growing
              projects.
            </p>

            <div class="mt-6 grid gap-4 md:grid-cols-[1fr_auto]">
              <div class="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                <p
                  class="text-sm font-medium uppercase tracking-wide text-slate-500"
                >
                  Discount
                </p>
                <h2 class="mt-2 text-3xl font-extrabold text-slate-900">
                  Up to 20% OFF
                </h2>
                <p class="mt-3 text-sm text-slate-600">
                  Discount will be applied automatically at checkout
                </p>
              </div>

              <a
                href="#"
                class="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Get Deal
              </a>
            </div>

            <div
              class="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500"
            >
              <div class="flex items-center gap-2">
                <span class="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                <span>Contabo</span>
              </div>
              <div class="flex items-center gap-2">
                <span>🔥</span>
                <span>4 used today</span>
              </div>
              <div>Updated: Apr 21, 2026</div>
            </div>
          </div>

          <!-- More Coupons -->
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
              <CouponListCard
                v-for="coupon in coupons"
                :key="coupon.id"
                :coupon="coupon"
              />
            </div>
          </div>
        </div>

        <aside class="lg:col-span-4">
          <div class="sticky top-24 space-y-6">
            <div class="rounded-3xl bg-white p-6">
              <div class="flex items-center gap-4">
                <div
                  class="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 text-xl font-bold text-slate-700"
                >
                  C
                </div>

                <div>
                  <h2 class="text-xl font-bold text-slate-900">Contabo</h2>
                  <p class="text-sm text-slate-500">Trusted hosting provider</p>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <span class="text-slate-500">Best Offer</span>
                <span class="text-right font-medium">Up to 20% OFF</span>
              </div>

              <div class="mt-6 grid grid-cols-2 gap-3">
                <div
                  class="rounded-2xl bg-slate-50 p-4 text-center ring-1 ring-slate-200"
                >
                  <p class="text-sm text-slate-500">Rating</p>
                  <p class="mt-1 font-semibold text-slate-900">4.5/5</p>
                </div>

                <div
                  class="rounded-2xl bg-slate-50 p-4 text-center ring-1 ring-slate-200"
                >
                  <p class="text-sm text-slate-500">Votes</p>
                  <p class="mt-1 font-semibold text-slate-900">70</p>
                </div>
              </div>

              <p class="mt-6 text-sm leading-7 text-slate-600">
                Contabo offers affordable VPS, dedicated servers and cloud
                hosting solutions with strong performance and global coverage.
              </p>

              <button
                class="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Visit Store
              </button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
