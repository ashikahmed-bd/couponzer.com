<script setup>
definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});

useSeoMeta({
  title: "Add Store - Couponzer",
  description: "Create a new store or merchant in the Couponzer dashboard.",
});

const route = useRoute();
const merchantStore = useMerchantStore();
const categoryStore = useCategoryStore();
const { categories } = storeToRefs(categoryStore);

const form = reactive({
  category_id: null,
  name: "",
  slug: "",
  title: "",
  offer_text: "",
  cashback_text: "",
  logo_url: "",
  background: "#f5ebe2",
  website_url: "",
  affiliate_url: "",
  summary: "",
  description: "",
  meta_title: "",
  meta_description: "",
  meta_keywords: "",
  canonical_url: "",
  og_image_url: "",
  is_featured: false,
  is_verified: false,
  rating: null,
  score: null,
  votes: 0,
  status: "active",
});

const generateSlug = (text) => {
  return (
    text
      ?.toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-") || ""
  );
};

watch(
  () => form.name,
  (value) => {
    const newSlug = generateSlug(value);
    form.slug = newSlug;
    form.canonical_url = newSlug ? `/store/${newSlug}` : "";
  },
);

const loadStore = async () => {
  const response = await merchantStore.show(route.params.id);

  Object.assign(form, {
    category_id: response.category_id,
    name: response.name,
    slug: response.slug,
    title: response.title,
    offer_text: response.offer_text,
    cashback_text: response.cashback_text,
    logo_url: response.logo_url,
    background: response.background,
    website_url: response.website_url,
    affiliate_url: response.affiliate_url,
    summary: response.summary,
    description: response.description,
    meta_title: response.meta_title,
    meta_description: response.meta_description,
    meta_keywords: response.meta_keywords,
    canonical_url: response.canonical_url,
    og_image_url: response.og_image_url,
    is_featured: response.is_featured,
    is_verified: response.is_verified,
    rating: response.rating,
    score: response.score,
    votes: response.votes,
    status: response.status,
  });
};

const loadCategories = async () => {
  await categoryStore.all();
};

const submit = async () => {
  await merchantStore.update(route.params.id, form);
};

onMounted(() => {
  loadCategories();
  loadStore();
});
</script>

<template>
  <div class="bg-white p-4 md:p-6 rounded-2xl">
    <div
      class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6"
    >
      <div>
        <h1 class="text-2xl font-bold text-slate-900">Add Store</h1>
        <p class="text-sm text-slate-500">Create a new store or merchant</p>
      </div>

      <NuxtLink
        to="/dashboard/stores"
        class="inline-flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-semibold transition"
      >
        Back to Stores
      </NuxtLink>
    </div>

    <form
      @submit.prevent="submit"
      class="bg-white border border-slate-200 rounded-2xl overflow-hidden"
    >
      <div class="grid grid-cols-1 xl:grid-cols-3">
        <div
          class="xl:col-span-2 p-5 md:p-6 border-b xl:border-b-0 xl:border-r border-slate-200 space-y-6"
        >
          <div>
            <h2 class="text-base font-semibold text-slate-900 mb-4">
              Store Information
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">
                  Name <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="form.name"
                  type="text"
                  placeholder="e.g. Amazon"
                  class="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">
                  Title
                </label>
                <input
                  v-model="form.title"
                  type="text"
                  placeholder="e.g. Amazon Coupons & Deals"
                  class="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div class="block">
                <label class="block text-sm font-medium text-slate-700 mb-1">
                  Slug
                </label>
                <input
                  v-model="form.slug"
                  type="text"
                  placeholder="e.g. amazon"
                  class="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">
                  Logo URL
                </label>
                <input
                  v-model="form.logo_url"
                  type="url"
                  placeholder="https://example.com/logo.png"
                  class="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">
                  Category
                </label>
                <select
                  v-model="form.category_id"
                  class="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option :value="null" disabled>Select category</option>
                  <option
                    v-for="category in categories"
                    :key="category.id"
                    :value="category.id"
                  >
                    {{ category.name }}
                  </option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">
                  Background Color
                </label>
                <input
                  v-model="form.background"
                  type="text"
                  placeholder="Enter hex color (e.g. #f5f5f5)"
                  class="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div class="block">
                <label class="block text-sm font-medium text-slate-700 mb-1">
                  Offer Text
                </label>
                <input
                  v-model="form.offer_text"
                  type="text"
                  placeholder="e.g. Up to 50% Off"
                  class="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div class="block">
                <label class="block text-sm font-medium text-slate-700 mb-1">
                  Cashback Text
                </label>
                <input
                  v-model="form.cashback_text"
                  type="text"
                  placeholder="e.g. Up to 10% cashback"
                  class="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div class="block">
                <label class="block text-sm font-medium text-slate-700 mb-1">
                  Website URL
                </label>
                <input
                  v-model="form.website_url"
                  type="url"
                  placeholder="https://example.com"
                  class="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div class="block">
                <label class="block text-sm font-medium text-slate-700 mb-1">
                  Affiliate URL
                </label>
                <input
                  v-model="form.affiliate_url"
                  type="url"
                  placeholder="https://example.com/affiliate-link"
                  class="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 class="text-base font-semibold text-slate-900 mb-4">
              SEO Information
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="md:col-span-2">
                <label class="block text-sm font-medium text-slate-700 mb-1">
                  Meta Title
                </label>
                <input
                  v-model="form.meta_title"
                  type="text"
                  placeholder="Enter SEO title"
                  class="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div class="md:col-span-2">
                <label class="block text-sm font-medium text-slate-700 mb-1">
                  Meta Description
                </label>
                <textarea
                  v-model="form.meta_description"
                  placeholder="Enter SEO description"
                  class="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>

              <div class="md:col-span-2">
                <label class="block text-sm font-medium text-slate-700 mb-1">
                  Meta Keywords
                </label>
                <textarea
                  v-model="form.meta_keywords"
                  placeholder="store, coupons, deals"
                  class="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">
                  Canonical URL
                </label>
                <input
                  v-model="form.canonical_url"
                  type="text"
                  placeholder="/stores/store-slug"
                  class="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">
                  OG Image URL
                </label>
                <input
                  v-model="form.og_image_url"
                  type="url"
                  placeholder="https://example.com/og-image.jpg"
                  class="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="p-5 md:p-6 bg-slate-50 space-y-6">
          <div>
            <h2 class="text-base font-semibold text-slate-900 mb-4">
              Publish Settings
            </h2>

            <div class="space-y-3">
              <label
                class="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3"
              >
                <span class="text-sm font-medium text-slate-700">Featured</span>
                <input
                  v-model="form.is_featured"
                  type="checkbox"
                  class="h-4 w-4"
                />
              </label>

              <label
                class="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3"
              >
                <span class="text-sm font-medium text-slate-700">Verified</span>
                <input
                  v-model="form.is_verified"
                  type="checkbox"
                  class="h-4 w-4"
                />
              </label>
            </div>
          </div>

          <div>
            <h2 class="text-base font-semibold text-slate-900 mb-4">
              Store Metrics
            </h2>

            <div class="grid grid-cols-1 gap-4">
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">
                  Rating
                </label>
                <input
                  v-model="form.rating"
                  type="number"
                  step="0.1"
                  min="0"
                  max="5"
                  placeholder="e.g. 4.5"
                  class="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">
                  Score
                </label>
                <input
                  v-model="form.score"
                  type="number"
                  min="0"
                  placeholder="e.g. 90"
                  class="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">
                  Votes
                </label>
                <input
                  v-model="form.votes"
                  type="number"
                  min="0"
                  placeholder="e.g. 0"
                  class="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">
              Status
            </label>
            <select
              v-model="form.status"
              class="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <div class="rounded-xl border border-slate-200 bg-white p-4">
            <h3 class="text-sm font-semibold text-slate-900 mb-2">
              Quick Tips
            </h3>
            <ul class="space-y-2 text-xs text-slate-500">
              <li>Use a clear and short store name.</li>
              <li>Slug should be unique and readable.</li>
              <li>Add valid website and affiliate URLs.</li>
              <li>Use SEO fields for better search visibility.</li>
            </ul>
          </div>

          <BaseButton :loading="merchantStore.loading">
            Update Store
          </BaseButton>
        </div>
      </div>

      <div class="p-4">
        <div class="block">
          <label class="block text-sm font-medium text-slate-700 mb-1">
            Summary
          </label>
          <textarea
            v-model="form.summary"
            rows="3"
            placeholder="Short summary about the store..."
            class="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
        </div>

        <div class="block">
          <MarkdownEditor
            label="Description"
            v-model="form.description"
            placeholder="Write store details..."
          />
        </div>
      </div>
    </form>
  </div>
</template>
