<script setup>
const supabase = useSupabaseClient();

const logout = async () => {
  await supabase.auth.signOut();
};

useSeoMeta({
  title: "Dashboard - Couponzer",
  description:
    "Manage coupons, deals, stores, categories, and website analytics from the Couponzer dashboard.",
});
</script>

<template>
  <div class="min-h-screen bg-slate-100">
    <div class="flex items-start">
      <aside
        class="bg-white h-screen fixed left-0 w-64 md:block hidden z-50 px-4 py-4"
      >
        <div class="border-b border-slate-200 py-4">
          <div class="flex items-center gap-4">
            <div
              class="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10"
            >
              <UIcon name="i-lucide-panel-left" class="size-5 text-primary" />
            </div>

            <div>
              <h2 class="text-sm font-semibold text-slate-900">Admin Panel</h2>
              <p class="text-xs text-slate-500">Administrator</p>
            </div>
          </div>
        </div>

        <div class="flex flex-1 flex-col justify-between py-4">
          <nav class="space-y-1">
            <NuxtLink
              to="/dashboard"
              class="group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition-all duration-200 hover:text-primary"
              active-class="bg-primary/5 text-primary font-semibold"
              exact-active-class="bg-primary/5 text-primary font-semibold"
            >
              <span
                class="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-transparent transition-all duration-200 group-[.router-link-active]:bg-primary group-[.router-link-exact-active]:bg-primary"
              ></span>
              <UIcon
                name="i-lucide-layout-dashboard"
                class="size-5 text-slate-400 transition group-hover:text-primary group-[.router-link-active]:text-primary group-[.router-link-exact-active]:text-primary"
              />
              <span>Dashboard</span>
            </NuxtLink>

            <NuxtLink
              to="/dashboard/categories"
              class="group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition-all duration-200 hover:text-primary"
              active-class="bg-primary/5 text-primary font-semibold"
            >
              <span
                class="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-transparent transition-all duration-200 group-[.router-link-active]:bg-primary"
              ></span>
              <UIcon
                name="i-lucide-layers-3"
                class="size-5 text-slate-400 transition group-hover:text-primary group-[.router-link-active]:text-primary"
              />
              <span>Categories</span>
            </NuxtLink>

            <NuxtLink
              to="/dashboard/stores"
              class="group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition-all duration-200 hover:text-primary"
              active-class="bg-primary/5 text-primary font-semibold"
            >
              <span
                class="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-transparent transition-all duration-200 group-[.router-link-active]:bg-primary"
              ></span>
              <UIcon
                name="i-lucide-store"
                class="size-5 text-slate-400 transition group-hover:text-primary group-[.router-link-active]:text-primary"
              />
              <span>Stores</span>
            </NuxtLink>

            <NuxtLink
              to="/dashboard/coupons"
              class="group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition-all duration-200 hover:text-primary"
              active-class="bg-primary/5 text-primary font-semibold"
            >
              <span
                class="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-transparent transition-all duration-200 group-[.router-link-active]:bg-primary"
              ></span>
              <UIcon
                name="i-lucide-ticket-percent"
                class="size-5 text-slate-400 transition group-hover:text-primary group-[.router-link-active]:text-primary"
              />
              <span>Coupons</span>
            </NuxtLink>

            <NuxtLink
              to="/dashboard/reports"
              class="group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition-all duration-200 hover:text-primary"
              active-class="bg-primary/5 text-primary font-semibold"
            >
              <span
                class="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-transparent transition-all duration-200 group-[.router-link-active]:bg-primary"
              ></span>
              <UIcon
                name="i-lucide-bar-chart-3"
                class="size-5 text-slate-400 transition group-hover:text-primary group-[.router-link-active]:text-primary"
              />
              <span>Reports</span>
            </NuxtLink>
          </nav>

          <div class="mt-6 space-y-2 border-t border-slate-200 pt-4">
            <NuxtLink
              to="/dashboard/settings"
              class="group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition-all duration-200 hover:text-primary"
              active-class="bg-primary/5 text-primary font-semibold"
            >
              <span
                class="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-transparent transition-all duration-200 group-[.router-link-active]:bg-primary"
              ></span>
              <UIcon
                name="i-lucide-settings-2"
                class="size-5 text-slate-400 transition group-hover:text-primary group-[.router-link-active]:text-primary"
              />
              <span>Settings</span>
            </NuxtLink>

            <button
              @click="logout"
              class="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-red-500 transition-all duration-200 hover:text-red-600"
            >
              <UIcon
                name="i-lucide-log-out"
                class="size-5 text-red-400 transition group-hover:text-red-600"
              />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      <main class="flex-1 md:ml-64 p-4 overflow-y-auto">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped></style>
