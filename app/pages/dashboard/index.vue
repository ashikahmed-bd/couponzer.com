<script setup>
definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});
const stats = [
  { label: "Total Coupons", value: "128" },
  { label: "Total Stores", value: "42" },
  { label: "Categories", value: "16" },
  { label: "Subscribers", value: "860" },
];

const cards = [
  {
    title: "Category",
    icon: "i-lucide-folder-tree",
    count: "16 Categories",
    description: "Create, update and organize categories for better browsing.",
  },
  {
    title: "Store",
    icon: "i-lucide-store",
    count: "42 Stores",
    description: "Manage store profiles, logos and all related information.",
  },
  {
    title: "Coupon",
    icon: "i-lucide-ticket-percent",
    count: "128 Coupons",
    description: "Add, edit and track coupon performance and status.",
  },
  {
    title: "Subscriber",
    icon: "i-lucide-users",
    count: "860 Users",
    description: "Manage subscribers and monitor newsletter engagement.",
  },
];

useSeoMeta({
  title: "Dashboard - Couponzer",
  description:
    "Manage coupons, deals, stores, categories, and website analytics from the Couponzer dashboard.",
});
</script>

<template>
  <div class="space-y-8">
    <div class="grid gap-4 sm:grid-cols-4">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="rounded-3xl border border-border bg-white p-4 transition duration-300 hover:-translate-y-1 hover:shadow-md"
      >
        <div class="flex items-start justify-between">
          <div>
            <p class="text-sm font-medium text-slate-500">
              {{ stat.label }}
            </p>
            <h2 class="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              {{ stat.value }}
            </h2>
          </div>

          <div
            class="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10"
          >
            <UIcon name="i-lucide-sparkles" class="size-5 text-primary" />
          </div>
        </div>
      </div>
    </div>

    <div class="rounded-2xl border border-slate-200 bg-white p-5">
      <div
        class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
      >
        <div>
          <h2 class="text-2xl font-bold tracking-tight text-dark">
            Main Section
          </h2>
          <p class="mt-1 text-sm text-body">
            Quick access to all important admin modules.
          </p>
        </div>
      </div>

      <div class="mt-6 grid gap-4 sm:grid-cols-4 xl:grid-cols-4">
        <div
          v-for="card in cards"
          :key="card.title"
          class="group rounded-2xl border border-border bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white"
        >
          <div class="mb-5 flex items-center justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10"
            >
              <UIcon :name="card.icon" class="size-6 text-primary" />
            </div>

            <span
              class="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
            >
              {{ card.count }}
            </span>
          </div>

          <h3 class="text-xl font-semibold text-dark">
            {{ card.title }}
          </h3>

          <p class="mt-2 text-sm leading-6 text-body line-clamp-2">
            {{ card.description }}
          </p>

          <button
            class="mt-6 inline-flex w-full items-center justify-center rounded bg-accent px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90"
          >
            Open {{ card.title }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
