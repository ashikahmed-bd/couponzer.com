<script setup>
definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});

useSeoMeta({
  title: "Add Coupon - Couponzer",
  description: "Create a new coupon code or deal in Couponzer dashboard.",
});

const merchantStore = useMerchantStore();
const couponStore = useCouponStore();
const { stores } = storeToRefs(merchantStore);

const form = reactive({
  store_id: "",
  title: "",
  slug: "",
  description: "",
  code: "",
  affiliate_url: "",
  discount_text: "",
  type: "deal",
  starts_at: "",
  expires_at: "",
  instructions: "",
  meta_title: "",
  meta_description: "",
  meta_keywords: "",
  canonical_url: "",
  og_image_url: "",
  is_featured: false,
  is_verified: false,
  is_exclusive: false,
  is_active: true,
});

const generateSlug = (text) => {
  return text
    ?.toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

watch(
  () => form.title,
  (value) => {
    if (!form.slug || form.slug === generateSlug(form.slug)) {
      form.slug = generateSlug(value);
      form.canonical_url = generateSlug(value);
    }
  },
);

const loadStores = async () => {
  await merchantStore.all();
};

const formatDate = (date) => {
  if (!date) return null;
  return new Date(date).toISOString().split("T")[0];
};

const submit = async () => {
  const payload = {
    ...form,
    starts_at: formatDate(form.starts_at),
    expires_at: formatDate(form.expires_at),
  };

  await couponStore.store(payload);
};

onMounted(() => {
  loadStores();
});
</script>

<template>
  <div class="bg-white p-4 md:p-6 rounded-2xl">
    <div
      class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6"
    >
      <div>
        <h1 class="text-2xl font-bold text-slate-900">Add Coupon</h1>
        <p class="text-sm text-slate-500">
          Create a new coupon code, deal, or promotion
        </p>
      </div>

      <NuxtLink
        to="/dashboard/coupons"
        class="inline-flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-semibold transition"
      >
        Back to Coupons
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
              Coupon Information
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="md:col-span-2">
                <label class="block text-sm font-medium text-slate-700 mb-1">
                  Title <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="form.title"
                  type="text"
                  placeholder="e.g. Get 25% Off on All Orders"
                  class="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div class="md:col-span-2">
                <label class="block text-sm font-medium text-slate-700 mb-1">
                  Slug
                </label>
                <input
                  v-model="form.slug"
                  type="text"
                  placeholder="e.g. get-25-off-on-all-orders"
                  class="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">
                  Store <span class="text-red-500">*</span>
                </label>
                <select
                  v-model="form.store_id"
                  class="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="" disabled>Select Store</option>
                  <option
                    v-for="store in stores"
                    :key="store.id"
                    :value="store.id"
                  >
                    {{ store.name }}
                  </option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">
                  Coupon Type
                </label>
                <select
                  v-model="form.type"
                  class="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="percentage">Percentage</option>
                  <option value="fixed">Fixed</option>
                  <option value="free_shipping">Free Shipping</option>
                  <option value="deal">Deal</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">
                  Coupon Code
                </label>
                <input
                  v-model="form.code"
                  type="text"
                  placeholder="e.g. SAVE25"
                  class="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">
                  Discount Text
                </label>
                <input
                  v-model="form.discount_text"
                  type="text"
                  placeholder="e.g. 25% OFF"
                  class="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div class="md:col-span-2">
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

              <div class="md:col-span-2">
                <label class="block text-sm font-medium text-slate-700 mb-1">
                  Description
                </label>
                <textarea
                  v-model="form.description"
                  rows="4"
                  placeholder="Write coupon details..."
                  class="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>

              <div class="md:col-span-2">
                <label class="block text-sm font-medium text-slate-700 mb-1">
                  Instructions
                </label>
                <textarea
                  v-model="form.instructions"
                  rows="4"
                  placeholder="How to use this coupon..."
                  class="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
            </div>
          </div>

          <div>
            <h2 class="text-base font-semibold text-slate-900 mb-4">
              Schedule
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">
                  Starts At
                </label>
                <input
                  v-model="form.starts_at"
                  type="date"
                  class="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">
                  Expires At
                </label>
                <input
                  v-model="form.expires_at"
                  type="date"
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
                  class="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div class="md:col-span-2">
                <label class="block text-sm font-medium text-slate-700 mb-1">
                  Meta Description
                </label>
                <textarea
                  v-model="form.meta_description"
                  rows="3"
                  class="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>

              <div class="md:col-span-2">
                <label class="block text-sm font-medium text-slate-700 mb-1">
                  Meta Keywords
                </label>
                <textarea
                  v-model="form.meta_keywords"
                  rows="2"
                  placeholder="coupon, discount, deal"
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

              <label
                class="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3"
              >
                <span class="text-sm font-medium text-slate-700"
                  >Exclusive</span
                >
                <input
                  v-model="form.is_exclusive"
                  type="checkbox"
                  class="h-4 w-4"
                />
              </label>

              <label
                class="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3"
              >
                <span class="text-sm font-medium text-slate-700">Active</span>
                <input
                  v-model="form.is_active"
                  type="checkbox"
                  class="h-4 w-4"
                />
              </label>
            </div>
          </div>

          <div class="rounded-xl border border-slate-200 bg-white p-4">
            <h3 class="text-sm font-semibold text-slate-900 mb-2">
              Quick Tips
            </h3>
            <ul class="space-y-2 text-xs text-slate-500">
              <li>Use a short and clear coupon title.</li>
              <li>Slug should be unique.</li>
              <li>Affiliate URL must be valid.</li>
              <li>Mark verified coupons only when confirmed.</li>
            </ul>
          </div>

          <BaseButton :loading="couponStore.loading">Create Coupon</BaseButton>
        </div>
      </div>
    </form>
  </div>
</template>
