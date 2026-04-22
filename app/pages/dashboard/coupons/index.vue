<script setup>
definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});

useSeoMeta({
  title: "Coupons - Couponzer",
  description:
    "Browse the latest coupon codes, discounts, and deals from top stores on Couponzer.",
});

const couponStore = useCouponStore();
const { coupons, total } = storeToRefs(couponStore);

const page = ref(1);
const limit = ref(5);

const loadCoupons = async () => {
  await couponStore.all(page.value, limit.value);
};

onMounted(() => {
  loadCoupons();
});

watch(page, () => {
  loadCoupons();
});

const copyCode = async (coupon) => {
  const config = useRuntimeConfig();

  try {
    if (!coupon?.slug) {
      throw new Error("Coupon slug is missing");
    }

    const url = `${config.public.siteUrl}/coupon/${coupon.slug}`;
    await navigator.clipboard.writeText(url);

    toast.success("Coupon link copied successfully!");
  } catch (error) {
    console.error("Copy failed:", error);
  }
};
</script>

<template>
  <div class="bg-white p-4 rounded-2xl">
    <div
      class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6"
    >
      <div>
        <h1 class="text-2xl font-bold text-dark">All Coupons</h1>
        <p class="text-sm text-body">Manage all coupon codes and deals</p>
      </div>

      <NuxtLink
        to="/dashboard/coupons/create"
        class="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded text-sm font-semibold"
      >
        Add Coupon
      </NuxtLink>
    </div>

    <div class="bg-white rounded-2xl border border-border">
      <div
        class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4"
      >
        <input
          type="text"
          placeholder="Search coupons..."
          class="w-full md:w-72 px-4 py-2 border border-border rounded text-sm focus:outline-none"
        />

        <div class="flex flex-wrap gap-2">
          <select class="px-3 py-2 border border-border rounded text-sm">
            <option value="">All Types</option>
            <option value="code">Code</option>
            <option value="deal">Deal</option>
          </select>

          <select class="px-3 py-2 border border-border rounded text-sm">
            <option value="">Status</option>
            <option value="featured">Featured</option>
            <option value="verified">Verified</option>
            <option value="exclusive">Exclusive</option>
            <option value="active">Active</option>
          </select>
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead class="bg-slate-100 text-body">
            <tr>
              <th class="px-4 py-3 text-left">ID</th>
              <th class="px-4 py-3 text-left">Title</th>
              <th class="px-4 py-3 text-left">Store</th>
              <th class="px-4 py-3 text-left">Code</th>
              <th class="px-4 py-3 text-left">Link</th>
              <th class="px-4 py-3 text-left">Featured</th>
              <th class="px-4 py-3 text-left">Clicks</th>
              <th class="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody class="divide-y">
            <tr
              v-for="coupon in coupons"
              :key="coupon.id"
              class="hover:bg-slate-50"
            >
              <td class="px-4 py-3 font-medium text-slate-700">
                #{{ coupon.id }}
              </td>

              <td class="px-4 py-3">
                <div class="flex flex-col">
                  <span class="font-semibold text-slate-800 max-w-3xs truncate">
                    {{ coupon.title }}
                  </span>
                  <span class="text-xs text-slate-500">
                    {{ coupon.slug }}
                  </span>
                </div>
              </td>

              <td class="px-4 py-3">
                {{ coupon.stores?.name }}
              </td>

              <td class="px-4 py-3">
                <span
                  v-if="coupon.code"
                  class="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold"
                >
                  {{ coupon.code }}
                </span>
                <span v-else class="text-slate-400 text-xs"> No Code </span>
              </td>

              <td class="px-4 py-3">
                <a
                  :href="coupon.affiliate_url ?? coupon.landing_url"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded text-xs font-medium transition"
                >
                  Link
                </a>
              </td>

              <td class="px-4 py-3">
                <span
                  v-if="coupon.is_featured"
                  class="px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full"
                >
                  Yes
                </span>
                <span
                  v-else
                  class="px-2 py-1 text-xs font-semibold text-gray-700 bg-gray-100 rounded-full"
                >
                  No
                </span>
              </td>

              <td class="px-4 py-3 font-medium text-slate-700">
                {{ coupon.click_count }}
              </td>

              <td class="px-4 py-3">
                <div class="flex items-center gap-2">
                  <a
                    :href="`/coupon/${coupon.slug}`"
                    target="_blank"
                    class="inline-flex cursor-pointer items-center justify-center w-9 h-9 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 hover:text-green-700 transition"
                  >
                    <UIcon name="i-lucide-eye" class="size-4" />
                  </a>
                  <NuxtLink
                    :to="`/dashboard/coupons/${coupon.id}`"
                    class="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 transition"
                  >
                    <UIcon name="i-lucide-square-pen" class="size-4" />
                  </NuxtLink>

                  <button
                    class="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 transition"
                  >
                    <UIcon name="i-lucide-trash-2" class="size-4" />
                  </button>
                </div>
              </td>
            </tr>

            <tr v-if="!coupons.length">
              <td colspan="12" class="text-center py-6 text-slate-500">
                No coupons found
              </td>
            </tr>
          </tbody>
        </table>

        <div class="flex justify-between items-center px-6 py-4">
          <button
            @click="page--"
            :disabled="page === 1"
            class="px-3 py-1 bg-gray-200 rounded"
          >
            Prev
          </button>

          <span>Page {{ page }}</span>

          <button
            @click="page++"
            :disabled="page * limit >= total"
            class="px-3 py-1 bg-gray-200 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
