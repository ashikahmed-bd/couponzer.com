<script setup>
import debounce from "lodash/debounce";

const mobileMenuOpen = ref(false);
const route = useRoute();


const navItems = [
  { label: "Home", to: "/" },
  { label: "Coupons", to: "/coupons" },
  { label: "Stores", to: "/stores" },
  { label: "Categories", to: "/categories" },
];

const supabase = useSupabaseClient();

const search = ref("");
const results = ref([]);
const loading = ref(false);
const showDropdown = ref(false);

const searchStores = debounce(async (keyword) => {
  if (!keyword) {
    results.value = [];
    showDropdown.value = false;
    return;
  }

  loading.value = true;

  const { data, error } = await supabase
    .from("stores")
    .select("id,name,slug,logo_url")
    .ilike("name", `%${keyword}%`)
    .order("name", { ascending: true })
    .limit(5);

  if (!error) {
    results.value = data || [];
    showDropdown.value = true;
  }

  loading.value = false;
}, 400);

watch(search, (value) => {
  searchStores(value.trim());
});
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur">
    <div class="mx-auto max-w-7xl px-4 py-2">
      <div class="flex h-16 items-center justify-between gap-3">
        <a href="/" class="shrink-0">
          <NuxtImg src="/logo.svg" alt="logo" class="h-16 w-auto object-contain" />
        </a>

        <div class="relative hidden flex-1 max-w-xs lg:block">
          <form class="relative" @submit.prevent>
            <input v-model="search" type="search" placeholder="Search stores..."
              class="h-11 w-full rounded-full border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm outline-none transition focus:border-primary focus:bg-white"
              @focus="showDropdown = true" @blur="setTimeout(() => (showDropdown = false), 150)" />

            <UIcon name="i-lucide-search" class="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />

            <UIcon v-if="loading" name="i-lucide-loader-2"
              class="absolute right-4 top-1/2 size-4 -translate-y-1/2 animate-spin text-slate-400" />
          </form>

          <div v-if="showDropdown"
            class="absolute top-full mt-2 w-full overflow-hidden rounded border border-border bg-white z-50">
            <a v-for="item in results" :key="item.id" :href="`/store/${item.slug}`"
              class="flex items-center justify-between gap-3 px-4 py-3 transition hover:bg-slate-50"
              @click="showDropdown = false">
              <div class="flex flex-col leading-tight">
                <p class="text-sm font-medium text-slate-800 line-clamp-1">
                  {{ item.name }}
                </p>
                <p class="text-xs text-slate-500">Store</p>
              </div>

              <div class="h-10 w-auto shrink-0 overflow-hidden  bg-slate-50">
                <NuxtImg v-if="item.logo_url" :src="item.logo_url" :alt="item.name"
                  class="h-full w-full object-cover" />
                <div v-else class="text-xs text-slate-400">
                  {{ item.name.charAt(0) }}
                </div>
              </div>
            </a>

            <div v-if="!loading && results.length === 0" class="px-4 py-3 text-sm text-slate-500">
              No results found
            </div>
          </div>
        </div>

        <nav class="hidden items-center gap-3 lg:flex">
          <NuxtLink v-for="item in navItems" :key="item.to" :to="item.to"
            class="rounded-full px-4 py-2 text-sm font-semibold transition" :class="route.path === item.to
              ? 'bg-primary/10 text-primary'
              : 'text-body hover:bg-slate-100 hover:text-primary'">
            {{ item.label }}
          </NuxtLink>
        </nav>

        <div class="hidden items-center gap-3 lg:flex">
          <NuxtLink to="/auth/login"
            class="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100">
            Sign in
          </NuxtLink>

          <NuxtLink to="/auth/register"
            class="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-hover">
            Sign up
          </NuxtLink>
        </div>

        <!-- Mobile Toggle -->
        <button type="button"
          class="inline-flex items-center justify-center rounded-xl border border-slate-200 p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
          @click="mobileMenuOpen = !mobileMenuOpen">
          <UIcon :name="mobileMenuOpen ? 'i-lucide-x' : 'i-lucide-menu'" class="size-5" />
        </button>
      </div>

      <!-- MOBILE SEARCH -->
      <div class="mt-3 lg:hidden relative">
        <form class="relative">
          <input v-model="search" type="search" placeholder="Search stores..."
            class="h-10 w-full rounded border border-border bg-slate-50 pl-10 pr-10 text-sm outline-none focus:border-primary focus:bg-white"
            @focus="showDropdown = true" @blur="setTimeout(() => (showDropdown = false), 150)" />

          <UIcon name="i-lucide-search" class="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />

          <UIcon v-if="loading" name="i-lucide-loader-2"
            class="absolute right-3 top-1/2 size-4 -translate-y-1/2 animate-spin text-slate-400" />
        </form>

        <div v-if="showDropdown"
          class="absolute top-full mt-2 w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl z-50">
          <a v-for="item in results" :key="item.id" :href="`/store/${item.slug}`"
            class="flex items-center justify-between gap-3 px-4 py-3 hover:bg-slate-50">
            <div class="flex flex-col">
              <p class="text-sm font-medium">{{ item.name }}</p>
              <p class="text-xs text-slate-500">Store</p>
            </div>

            <div class="h-8 w-auto shrink-0 overflow-hidden  bg-slate-50">
              <NuxtImg v-if="item.logo_url" :src="item.logo_url" class="h-full w-full object-cover" />
              <div v-else class="text-xs text-slate-400">
                {{ item.name.charAt(0) }}
              </div>
            </div>
          </a>

          <div v-if="!loading && results.length === 0" class="px-4 py-3 text-sm text-slate-500">
            No results found
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-2">
        <div v-if="mobileMenuOpen" class="border-t border-slate-200 py-4 lg:hidden">
          <nav class="flex flex-col gap-2">
            <NuxtLink v-for="item in navItems" :key="item.to" :to="item.to"
              class="rounded-xl px-4 py-3 text-sm font-medium transition" :class="route.path === item.to
                ? 'bg-primary/10 text-primary'
                : 'text-slate-700 hover:bg-slate-100 hover:text-primary'
                " @click="mobileMenuOpen = false">
              {{ item.label }}
            </NuxtLink>
          </nav>

          <div class="mt-4 grid grid-cols-2 gap-3">
            <NuxtLink to="/auth/login"
              class="inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
              @click="mobileMenuOpen = false">
              Sign in
            </NuxtLink>

            <NuxtLink to="/auth/register"
              class="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-medium text-white transition hover:bg-primary-hover"
              @click="mobileMenuOpen = false">
              Sign up
            </NuxtLink>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>
