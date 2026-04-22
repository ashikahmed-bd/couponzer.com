<script setup>
const route = useRoute();
const couponStore = useCouponStore();
const config = useRuntimeConfig();

const siteUrl = config.public.siteUrl;

const { data: coupon, error } = await useAsyncData(
  `coupon-${route.params.slug}`,
  () => couponStore.getCouponBySlug(route.params.slug),
);

useSchemaOrg([
  defineWebPage({
    name: coupon.value?.title,
    url: `${siteUrl}/coupon/${coupon.value?.slug}`,
    description: coupon.value?.description,
    inLanguage: "en-US",
  }),

  defineOffer({
    name: coupon.value.title || `${coupon.value.stores?.name} Coupon`,
    description: coupon.value?.description,
    url: `${siteUrl}/coupon/${coupon.value?.slug}`,

    seller: {
      "@type": "Organization",
      name: coupon.value.stores?.name,
      url: `${siteUrl}/store/${coupon.value.stores?.slug}`,
    },

    price: "0",
    priceCurrency: "USD",

    availability: "https://schema.org/InStock",
    category: "Coupon",

    couponCode: coupon.value.code,
    validThrough: coupon.value.expires_at,
  }),

  defineBreadcrumb({
    itemListElement: [
      {
        name: "Home",
        item: `${siteUrl}`,
      },
      {
        name: "Stores",
        item: `${siteUrl}/stores`,
      },
      {
        name: coupon.value.stores?.name,
        item: `${siteUrl}/store/${coupon.value.stores?.slug}`,
      },
      {
        name: "Coupon",
        item: `${siteUrl}/coupon/${coupon.value.slug}`,
      },
    ],
  }),
]);
</script>

<template>
  <main class="min-h-screen bg-slate-50">
    <SeoMeta
      :title="coupon.meta_title"
      :description="coupon.meta_description"
      :keywords="coupon.meta_keywords"
      :url="coupon.canonical_url"
      :image="coupon.stores?.og_image_url"
    />

    <!-- Hero -->
    <section class="border-b border-slate-200 bg-white">
      <div class="max-w-7xl mx-auto px-4 py-8 lg:py-12">
        <div class="grid gap-8 lg:grid-cols-3 items-start">
          <!-- Left -->
          <div class="lg:col-span-2">
            <div class="flex flex-wrap items-center gap-3 mb-4">
              <span
                v-if="coupon.is_verified"
                class="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 ring-1 ring-emerald-200"
              >
                Verified Deal
              </span>

              <span
                v-if="coupon.is_featured"
                class="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-sm font-medium text-amber-700 ring-1 ring-amber-200"
              >
                Featured
              </span>

              <span
                class="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
              >
                {{ coupon.type === "deal" ? "Special Deal" : "Coupon Code" }}
              </span>
            </div>

            <h1
              class="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
            >
              {{ coupon.title }}
            </h1>

            <p
              class="mt-4 max-w-3xl text-base md:text-lg leading-8 text-slate-600"
            >
              {{ coupon.description }}
            </p>

            <div
              class="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500"
            >
              <div class="flex items-center gap-2">
                <span class="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                <span>{{ coupon.stores?.name }}</span>
              </div>

              <div v-if="coupon.click_count" class="flex items-center gap-2">
                <span>🔥</span>
                <span>{{ coupon.click_count }} people used this</span>
              </div>

              <div v-if="coupon.updated_at">
                Updated: {{ $date(coupon.updated_at) }}
              </div>
            </div>
          </div>

          <!-- Right Card -->
          <div class="lg:col-span-1">
            <div
              class="overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 p-[1px] shadow-xl"
            >
              <div class="rounded-3xl bg-white p-6">
                <div class="flex items-center gap-4">
                  <div
                    class="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white"
                    :style="{
                      backgroundColor: coupon.stores?.background || '#fff',
                    }"
                  >
                    <img
                      v-if="coupon.stores?.logo_url"
                      :src="coupon.stores.logo_url"
                      :alt="coupon.stores?.name"
                      class="h-10 w-10 object-contain"
                    />
                    <span v-else class="text-lg font-bold text-slate-700">
                      {{ coupon.stores?.name?.charAt(0) }}
                    </span>
                  </div>

                  <div>
                    <h2 class="text-lg font-semibold text-slate-900">
                      {{ coupon.stores?.name }}
                    </h2>
                    <p class="text-sm text-slate-500">
                      Trusted offer for hosting & cloud users
                    </p>
                  </div>
                </div>

                <div
                  class="mt-6 rounded-2xl bg-slate-50 p-5 text-center ring-1 ring-slate-200"
                >
                  <p
                    class="text-sm font-medium uppercase tracking-wide text-slate-500"
                  >
                    Discount
                  </p>
                  <h3 class="mt-2 text-3xl font-extrabold text-slate-900">
                    {{ coupon.discount_text || "Special Offer" }}
                  </h3>

                  <p class="mt-3 text-sm text-slate-600">
                    {{
                      coupon.code
                        ? "Use code below at checkout"
                        : "Discount will be applied automatically"
                    }}
                  </p>

                  <div
                    v-if="coupon.code"
                    class="mt-4 flex items-center justify-between rounded-2xl border border-dashed border-slate-300 bg-white px-4 py-3"
                  >
                    <span
                      class="truncate font-mono text-base font-bold text-slate-900"
                    >
                      {{ coupon.code }}
                    </span>
                    <button
                      class="ml-3 rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
                      @click="copyCode(coupon.code)"
                    >
                      Copy
                    </button>
                  </div>

                  <a
                    :href="coupon.landing_url"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    class="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Get This Deal
                  </a>
                </div>

                <div class="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <div
                    class="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200"
                  >
                    <p class="text-slate-500">Store Rating</p>
                    <p class="mt-1 font-semibold text-slate-900">
                      {{ coupon.stores?.rating || "4.5" }}/5
                    </p>
                  </div>
                  <div
                    class="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200"
                  >
                    <p class="text-slate-500">Votes</p>
                    <p class="mt-1 font-semibold text-slate-900">
                      {{ coupon.stores?.votes || 0 }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="max-w-7xl mx-auto px-4 py-8 lg:py-12">
      <div class="grid gap-8 lg:grid-cols-3">
        <!-- Main -->
        <div class="lg:col-span-2 space-y-8">
          <!-- About Offer -->
          <div class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 class="text-xl font-bold text-slate-900">About this offer</h2>
            <p class="mt-4 leading-8 text-slate-600">
              {{ coupon.description }}
            </p>

            <div class="mt-6 grid gap-4 md:grid-cols-2">
              <div class="rounded-2xl bg-slate-50 p-4">
                <p class="text-sm text-slate-500">Offer Type</p>
                <p class="mt-1 font-semibold text-slate-900 capitalize">
                  {{ coupon.type }}
                </p>
              </div>

              <div class="rounded-2xl bg-slate-50 p-4">
                <p class="text-sm text-slate-500">Status</p>
                <p class="mt-1 font-semibold text-emerald-600">
                  {{ coupon.is_active ? "Active" : "Inactive" }}
                </p>
              </div>
            </div>
          </div>

          <!-- How to use -->
          <div class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 class="text-xl font-bold text-slate-900">
              How to use this deal
            </h2>

            <div class="mt-6 space-y-4">
              <div
                v-for="(step, index) in instructionList"
                :key="index"
                class="flex gap-4 rounded-2xl bg-slate-50 p-4"
              >
                <div
                  class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white"
                >
                  {{ index + 1 }}
                </div>
                <p class="pt-2 text-slate-700">
                  {{ step }}
                </p>
              </div>
            </div>
          </div>

          <!-- Store summary -->
          <div class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 class="text-xl font-bold text-slate-900">
              About {{ coupon.stores?.name }}
            </h2>
            <p class="mt-4 leading-8 text-slate-600">
              {{ coupon.stores?.summary }}
            </p>
          </div>
        </div>

        <!-- Sidebar -->
        <aside class="space-y-6">
          <div class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 class="text-lg font-bold text-slate-900">Quick details</h3>

            <div class="mt-5 space-y-4 text-sm">
              <div
                class="flex items-start justify-between gap-4 border-b border-slate-100 pb-4"
              >
                <span class="text-slate-500">Store</span>
                <span class="text-right font-medium text-slate-900">
                  {{ coupon.stores?.name }}
                </span>
              </div>

              <div
                class="flex items-start justify-between gap-4 border-b border-slate-100 pb-4"
              >
                <span class="text-slate-500">Discount</span>
                <span class="text-right font-medium text-slate-900">
                  {{ coupon.discount_text }}
                </span>
              </div>

              <div
                class="flex items-start justify-between gap-4 border-b border-slate-100 pb-4"
              >
                <span class="text-slate-500">Verified</span>
                <span
                  class="font-medium"
                  :class="
                    coupon.is_verified ? 'text-emerald-600' : 'text-slate-900'
                  "
                >
                  {{ coupon.is_verified ? "Yes" : "No" }}
                </span>
              </div>

              <div class="flex items-start justify-between gap-4">
                <span class="text-slate-500">Last updated</span>
                <span class="text-right font-medium text-slate-900">
                  {{ $date(coupon.updated_at) }}
                </span>
              </div>
            </div>
          </div>

          <div class="rounded-3xl bg-slate-900 p-6 text-white shadow-sm">
            <h3 class="text-lg font-bold">Ready to save?</h3>
            <p class="mt-2 text-sm leading-7 text-slate-300">
              Grab this offer before it changes. Visit the official store and
              complete your order.
            </p>

            <a
              :href="coupon.landing_url"
              target="_blank"
              rel="nofollow noopener noreferrer"
              class="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Visit {{ coupon.stores?.name }}
            </a>
          </div>
        </aside>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
