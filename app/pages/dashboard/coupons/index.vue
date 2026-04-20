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

        <div class="flex gap-2">
          <select class="px-3 py-2 border border-border rounded text-sm">
            <option>All Types</option>
            <option>Code</option>
            <option>Deal</option>
          </select>

          <select class="px-3 py-2 border border-border rounded text-sm">
            <option>Status</option>
            <option>Featured</option>
            <option>Verified</option>
            <option>Exclusive</option>
          </select>
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead class="bg-slate-100 text-body">
            <tr>
              <th class="px-4 py-3 text-left">ID</th>
              <th class="px-4 py-3 text-left">Title</th>
              <th class="px-4 py-3 text-left">Code</th>
              <th class="px-4 py-3 text-left">Discount</th>
              <th class="px-4 py-3 text-left">Link</th>
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
                <span
                  v-if="coupon.code"
                  class="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold"
                >
                  {{ coupon.code }}
                </span>
                <span v-else class="text-slate-400 text-xs"> No Code </span>
              </td>

              <td class="px-4 py-3">
                {{ coupon.discount_text ?? "-" }}
              </td>

              <td class="px-4 py-3">
                <a
                  :href="coupon.affiliate_url"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded text-xs font-medium transition"
                >
                  Link
                </a>
              </td>

              <td class="px-4 py-3 font-medium text-slate-700">
                {{ coupon.clicks?.[0]?.count ?? 0 }}
              </td>

              <td class="px-4 py-3">
                <div class="flex gap-2">
                  <NuxtLink
                    :to="`/dashboard/coupons/${coupon.id}`"
                    class="bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1 rounded-lg text-xs font-semibold"
                  >
                    Edit
                  </NuxtLink>
                  <button
                    class="bg-red-100 hover:bg-red-200 text-red-700 px-3 py-1 rounded-lg text-xs font-semibold"
                  >
                    Delete
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
