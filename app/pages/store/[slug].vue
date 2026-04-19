<script setup>
const route = useRoute();
const merchantStore = useMerchantStore();
const bannerStore = useBannerStore();

const slug = route.params.slug;

const {
  data: store,
  pending,
  error,
} = await useAsyncData(`store-${slug}`, () => merchantStore.getStore(slug));

const { data: coupons, pending: couponsPending } = await useAsyncData(
  `coupons-${slug}`,
  async () => {
    if (!slug) return [];

    return await merchantStore.getCouponsByStoreSlug(slug);
  },
  {
    watch: [store],
  },
);

const { data: related } = await useAsyncData(`related-${slug}`, async () => {
  if (!store.value?.id) return [];
  return await merchantStore.getRelated(store.value.id);
});

const { data: square } = await useAsyncData("square-300", async () => {
  return await bannerStore.getBanner("300x300");
});

const { data: rectangle } = await useAsyncData(
  "rectangle-300x250",
  async () => {
    return await bannerStore.getBanner("300x250");
  },
);

useSchemaOrg([
  defineWebPage({
    "@type": "WebPage",
    name: "Amazon Coupons & Promo Codes | Couponzer",
    description:
      "Find the latest Amazon coupons, promo codes, and discount deals on Couponzer.",
    url: "https://www.couponzer.com/store/amazon",
    inLanguage: "en",
  }),

  defineBreadcrumb({
    itemListElement: [
      {
        name: "Home",
        item: "https://www.couponzer.com",
      },
      {
        name: "Stores",
        item: "https://www.couponzer.com/stores",
      },
      {
        name: "Amazon",
        item: "https://www.couponzer.com/store/amazon",
      },
    ],
  }),

  defineOrganization({
    name: "Amazon",
    url: "https://www.couponzer.com/store/amazon",
    logo: "https://www.couponzer.com/logo/amazon.png",
    sameAs: [
      "https://www.facebook.com/Amazon",
      "https://twitter.com/amazon",
      "https://www.instagram.com/amazon",
    ],
  }),

  {
    "@type": "ItemList",
    name: "Amazon Coupons",
    description:
      "Latest Amazon coupon codes, promo deals, and discounts available now.",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: 5,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        url: "https://www.couponzer.com/coupon/amazon-50-off",
        name: "Amazon 50% Off Coupon",
      },
      {
        "@type": "ListItem",
        position: 2,
        url: "https://www.couponzer.com/coupon/amazon-free-shipping",
        name: "Amazon Free Shipping Code",
      },
      {
        "@type": "ListItem",
        position: 3,
        url: "https://www.couponzer.com/coupon/amazon-student-deal",
        name: "Amazon Student Discount",
      },
      {
        "@type": "ListItem",
        position: 4,
        url: "https://www.couponzer.com/coupon/amazon-fashion-sale",
        name: "Amazon Fashion Sale Offer",
      },
      {
        "@type": "ListItem",
        position: 5,
        url: "https://www.couponzer.com/coupon/amazon-electronics-deal",
        name: "Amazon Electronics Discount",
      },
    ],
  },
]);
</script>

<template>
  <main>
    <template v-if="pending"> </template>
    <template v-if="error"> </template>
    <template v-else>
      <SeoMeta
        :title="store.meta_title"
        :description="store.meta_description"
        :keywords="store.meta_keywords"
        :url="store.canonical_url"
        :image="store.og_image_url"
      />

      <section class="bg-white/50 py-6">
        <div class="mx-auto max-w-7xl px-4">
          <div
            class="flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:text-left"
          >
            <div
              class="mx-auto max-w-xs flex shrink-0 items-center justify-center rounded-2xl p-10"
              :style="{
                backgroundColor: store.background,
              }"
            >
              <NuxtImg
                :src="store.logo_url ?? '/stores/default.png'"
                :alt="store.name"
                class="h-20 md:h-32 w-auto object-contain"
              />
            </div>

            <div class="min-w-0 flex-1">
              <div
                class="flex flex-wrap items-center justify-center gap-2 md:justify-start mb-3"
              >
                <span
                  v-if="store.is_verified"
                  class="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200"
                >
                  <UIcon name="i-lucide-badge-check" class="size-3.5" />
                  Verified Store
                </span>

                <span
                  v-if="store.offer_text"
                  class="inline-flex items-center gap-1 rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700 ring-1 ring-rose-200"
                >
                  <UIcon name="i-lucide-ticket-percent" class="size-3.5" />
                  {{ store.offer_text }}
                </span>

                <span
                  v-if="store.cashback_text"
                  class="inline-flex items-center gap-1 rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700 ring-1 ring-violet-200"
                >
                  <UIcon name="i-lucide-wallet" class="size-3.5" />
                  {{ store.cashback_text }}
                </span>
              </div>
              <h1
                class="text-2xl font-extrabold tracking-tight text-accent md:text-3xl"
              >
                {{ store.title }}
              </h1>

              <div
                class="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-sm md:justify-start md:text-base"
              >
                <div class="flex items-center gap-1">
                  <template v-for="i in 5" :key="i">
                    <UIcon
                      v-if="i <= Math.floor(store.rating)"
                      name="i-lucide-star"
                      class="size-4 fill-yellow-500 text-yellow-400"
                    />
                    <UIcon
                      v-else-if="i - store.rating < 1"
                      name="i-lucide-star-half"
                      class="size-4 fill-yellow-400 text-yellow-400"
                    />
                    <UIcon
                      v-else
                      name="i-lucide-star"
                      class="size-4 text-gray-300"
                    />
                  </template>

                  <span class="ml-2 text-sm font-semibold text-gray-700">
                    {{ Number(store.rating).toFixed(1) }} Rating
                  </span>
                </div>

                <div class="text-gray-700 flex items-center gap-1">
                  <UIcon name="i-lucide-thumbs-up" class="size-4" />
                  <span>{{ store.votes }} votes</span>
                </div>
                <a
                  :href="store.affiliate_url ?? store.website_url"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  class="inline-flex items-center gap-1 text-sm font-medium text-primary transition hover:text-primary-hover"
                >
                  Visit Website
                  <UIcon name="i-lucide-arrow-up-right" class="size-4" />
                </a>
              </div>

              <p
                v-if="store.summary"
                class="mt-2 max-w-3xl text-sm leading-6 text-body"
              >
                {{ store.summary }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="max-w-7xl mx-auto px-4 py-8">
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px]">
          <div class="space-y-6">
            <div class="rounded-2xl border border-border bg-white p-5">
              <div class="mb-4">
                <h2 class="text-xl font-bold text-dark">Latest Coupons</h2>
                <p class="mt-2 text-sm text-body">
                  Browse the latest deals and coupons for {{ store.name }}.
                </p>
              </div>

              <div class="space-y-4">
                <CouponListCard
                  v-for="coupon in coupons"
                  :key="coupon.id"
                  :coupon="coupon"
                  :store="store"
                />
              </div>
            </div>

            <MarkdownPreview
              :content="store.description"
              class="markdown px-5 rounded-2xl py-6"
            />
          </div>

          <aside class="w-full">
            <div class="sticky top-24 space-y-6">
              <div class="space-y-4">
                <div
                  class="overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300"
                >
                  <div
                    class="flex items-center justify-between border-b border-border px-4 py-3"
                  >
                    <span
                      class="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-orange-600 ring-1 ring-orange-200"
                    >
                      Sponsored
                    </span>

                    <span class="text-xs font-medium text-gray-400"
                      >Advertisement</span
                    >
                  </div>

                  <a
                    :href="`/redirect/${square?.slug}`"
                    target="_blank"
                    rel="sponsored nofollow noopener"
                    class="group block p-4"
                  >
                    <div
                      class="relative overflow-hidden rounded-2xl border border-gray-100 bg-gray-50"
                    >
                      <NuxtImg
                        :src="square?.image_url"
                        :alt="square?.alt_text ?? square?.title"
                        class="h-auto w-full transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        format="webp"
                      />
                    </div>

                    <div class="pt-4">
                      <h3
                        class="line-clamp-2 text-lg font-bold leading-6 text-dark transition-colors duration-300 group-hover:text-primary"
                      >
                        {{ square?.title }}
                      </h3>

                      <p class="mt-2 line-clamp-3 text-sm leading-6 text-body">
                        {{ square?.description }}
                      </p>

                      <div class="mt-4">
                        <span
                          class="inline-flex items-center justify-center rounded bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 group-hover:bg-primary-hover"
                        >
                          Explore Offer
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div class="rounded-2xl border border-border bg-white p-4 mt-4">
                <h3 class="mb-4 text-lg font-bold text-dark">Similar Stores</h3>

                <div class="space-y-3">
                  <NuxtLink
                    v-for="item in related"
                    :key="item.id"
                    :to="`/stores/${item.slug}`"
                    class="flex items-center gap-3 rounded-xl p-2 transition hover:bg-gray-50"
                  >
                    <div
                      class="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100"
                    >
                      <NuxtImg
                        :src="item.logo_url || '/stores/default.png'"
                        class="h-8 w-auto object-contain"
                      />
                    </div>

                    <div class="min-w-0">
                      <p class="truncate text-sm font-semibold text-gray-900">
                        {{ item.name }}
                      </p>
                      <p class="text-xs text-gray-500">
                        {{ item.offer_text || "View Deals" }}
                      </p>
                    </div>
                  </NuxtLink>
                </div>
              </div>

              <a
                :href="`/redirect/${rectangle?.slug}`"
                target="_blank"
                rel="sponsored nofollow noopener"
              >
                <div
                  class="relative overflow-hidden rounded-2xl border border-gray-100 bg-gray-50"
                >
                  <NuxtImg
                    :src="rectangle?.image_url"
                    :alt="rectangle?.alt_text ?? rectangle?.title"
                    class="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    format="webp"
                  />
                </div>
              </a>
            </div>
          </aside>
        </div>
      </section>
    </template>
  </main>
</template>

<style scoped>
:deep(.markdown .md-editor-preview) {
  color: #334155;
  font-size: 16px;
  line-height: 1.9;
  word-break: break-word;
}

:deep(.markdown .md-editor-preview h1),
:deep(.markdown .md-editor-preview h2),
:deep(.markdown .md-editor-preview h3),
:deep(.markdown .md-editor-preview h4),
:deep(.markdown .md-editor-preview h5),
:deep(.markdown .md-editor-preview h6) {
  font-weight: 700;
  line-height: 1.3;
  color: #0f172a;
  margin: 0;
}

:deep(.markdown .md-editor-preview h1) {
  font-size: 1.65rem;
}

:deep(.markdown .md-editor-preview h2) {
  font-size: 1.35rem;
}

:deep(.markdown .md-editor-preview h3) {
  font-size: 1.1rem;
}

:deep(.markdown .md-editor-preview h4) {
  font-size: 1rem;
}

:deep(.markdown .md-editor-preview h5),
:deep(.markdown .md-editor-preview h6) {
  font-size: 0.95rem;
}

:deep(.markdown .md-editor-preview p) {
  color: #475569;
}

:deep(.markdown .md-editor-preview ul) {
  padding-left: 1.5rem;
  list-style-type: disc;
  list-style-position: outside;
}

:deep(.markdown .md-editor-preview ol) {
  padding-left: 1.5rem;
  list-style-type: decimal;
  list-style-position: outside;
}

:deep(.markdown .md-editor-preview li) {
  display: list-item;
  color: #475569;
}

:deep(.markdown .md-editor-preview ul li::marker),
:deep(.markdown .md-editor-preview ol li::marker) {
  color: #475569;
}

:deep(.markdown .md-editor-preview li p) {
  margin: 0;
}

:deep(.markdown .md-editor-preview a) {
  color: #059669;
  font-weight: 600;
  text-decoration: none;
}

:deep(.markdown .md-editor-preview a:hover) {
  text-decoration: underline;
}

:deep(.markdown .md-editor-preview blockquote) {
  margin: 1.25rem 0;
  padding: 1rem 1.25rem;
  border-left: 4px solid #10b981;
  border-radius: 0.75rem;
  background: #f8fafc;
  color: #475569;
}

:deep(.markdown .md-editor-preview pre) {
  overflow-x: auto;
  margin: 1.25rem 0;
  padding: 1rem;
  border-radius: 0.75rem;
  background: #0f172a;
  color: #e2e8f0;
}

:deep(.markdown .md-editor-preview code) {
  background: #f1f5f9;
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-size: 0.9em;
}

:deep(.markdown .md-editor-preview pre code) {
  background: transparent;
  padding: 0;
  border-radius: 0;
  color: inherit;
}

:deep(.markdown .md-editor-preview img) {
  display: block;
  margin: 1rem 0;
  border-radius: 0.75rem;
  max-width: 100%;
  height: auto;
}

:deep(.markdown .md-editor-preview hr) {
  margin: 1rem 0;
  border: 0;
  border-top: 1px solid #e2e8f0;
}

:deep(.markdown .md-editor-preview table) {
  display: block;
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-collapse: collapse;
  white-space: nowrap;
}

:deep(.markdown .md-editor-preview thead) {
  background: #f8fafc;
}

:deep(.markdown .md-editor-preview th),
:deep(.markdown .md-editor-preview td) {
  border: 1px solid #e2e8f0;
  padding: 0.75rem 1rem;
  text-align: left;
  vertical-align: top;
}

:deep(.markdown .md-editor-preview th) {
  background: #f8fafc;
  color: #0f172a;
  font-weight: 600;
}

:deep(.markdown .md-editor-preview tbody tr:nth-child(even)) {
  background: #fcfcfd;
}

@media (max-width: 640px) {
  :deep(.markdown .md-editor-preview) {
    font-size: 15px;
    line-height: 1.8;
  }

  :deep(.markdown .md-editor-preview h1) {
    font-size: 1.45rem;
  }

  :deep(.markdown .md-editor-preview h2) {
    font-size: 1.25rem;
  }

  :deep(.markdown .md-editor-preview h3) {
    font-size: 1.05rem;
  }

  :deep(.markdown .md-editor-preview blockquote) {
    padding: 0.875rem 1rem;
  }

  :deep(.markdown .md-editor-preview pre) {
    padding: 0.875rem;
    border-radius: 0.625rem;
  }

  :deep(.markdown .md-editor-preview th),
  :deep(.markdown .md-editor-preview td) {
    padding: 0.65rem 0.875rem;
    font-size: 0.92rem;
  }
}
</style>
