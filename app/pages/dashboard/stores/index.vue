<script setup>
definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});

useSeoMeta({
  title: "All Stores - Couponzer",
  description:
    "Explore all stores on Couponzer and manage merchants, featured stores, and store traffic from your dashboard.",
});

const merchantStore = useMerchantStore();
const { stores, total } = storeToRefs(merchantStore);

const page = ref(1);
const limit = ref(10);

const loadStores = async () => {
  await merchantStore.all(page.value, limit.value);
};

onMounted(() => {
  loadStores();
});

watch(page, () => {
  loadStores();
});
</script>

<template>
  <div class="bg-white p-4 rounded-2xl">
    <div
      class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6"
    >
      <div>
        <h1 class="text-2xl font-bold text-dark">All Stores</h1>
        <p class="text-sm text-body">Manage all stores and merchants</p>
      </div>

      <NuxtLink
        to="/dashboard/stores/create"
        class="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded text-sm font-semibold"
      >
        Add Store
      </NuxtLink>
    </div>

    <div class="bg-white rounded-2xl border border-border">
      <div
        class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4"
      >
        <input
          type="text"
          placeholder="Search stores..."
          class="w-full md:w-72 px-4 py-2 border border-border rounded text-sm focus:outline-none"
        />
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead class="bg-slate-100 text-body">
            <tr>
              <th class="px-4 py-3 text-left">ID</th>
              <th class="px-4 py-3 text-left">Logo</th>
              <th class="px-4 py-3 text-left">Store</th>
              <th class="px-4 py-3 text-left">Website</th>
              <th class="px-4 py-3 text-left">Affiliate</th>
              <th class="px-4 py-3 text-left">Featured</th>
              <th class="px-4 py-3 text-left">Votes</th>
              <th class="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody class="divide-y">
            <tr
              v-for="store in stores"
              :key="store.id"
              class="hover:bg-slate-50"
            >
              <td class="px-4 py-3 font-medium text-slate-700">
                #{{ store.id }}
              </td>

              <td class="px-4 py-3">
                <NuxtImg
                  :src="store.logo_url"
                  :alt="store.name"
                  class="h-8 w-auto"
                />
              </td>
              <td class="px-4 py-3">
                <div class="flex flex-col">
                  <span class="font-semibold text-slate-800 max-w-3xs truncate">
                    {{ store.name }}
                  </span>
                  <span class="text-xs text-slate-500">
                    {{ store.slug }}
                  </span>
                </div>
              </td>

              <td class="px-4 py-3 text-slate-600">
                <a
                  :href="store.website_url"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  class="text-blue-600 text-xs font-medium"
                >
                  {{ store.website_url }}
                </a>
              </td>

              <td class="px-4 py-3">
                <a
                  :href="store.affiliate_url"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  class="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-3 py-1.5 rounded text-xs font-medium transition"
                >
                  Visit
                </a>
              </td>

              <td class="px-4 py-3">
                <span
                  v-if="store.is_featured"
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
                {{ store.votes }} Votes
              </td>

              <td class="px-4 py-3">
                <div class="flex items-center gap-2">
                  <NuxtLink
                    :to="`/dashboard/stores/${store.id}`"
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

            <tr v-if="!stores.length">
              <td colspan="7" class="text-center py-6 text-slate-500">
                No stores found
              </td>
            </tr>
          </tbody>
        </table>

        <div class="flex justify-between items-center px-6 py-4">
          <button
            @click="page--"
            :disabled="page === 1"
            class="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>

          <span>Page {{ page }}</span>

          <button
            @click="page++"
            :disabled="page * limit >= total"
            class="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
