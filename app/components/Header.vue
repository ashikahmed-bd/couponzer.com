<script setup>
const mobileMenuOpen = ref(false);
const route = useRoute();

const navItems = [
  { label: "Home", to: "/" },
  { label: "Coupons", to: "/coupons" },
  { label: "Stores", to: "/stores" },
  { label: "Categories", to: "/categories" },
];
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur"
  >
    <div class="mx-auto max-w-7xl px-4 py-2">
      <div class="flex h-16 items-center justify-between">
        <a href="/" class="shrink-0">
          <NuxtImg
            src="/logo.svg"
            alt="logo"
            class="h-16 w-auto object-contain"
          />
        </a>

        <nav class="hidden items-center gap-3 lg:flex">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="rounded-full px-4 py-2 text-sm font-semibold transition"
            :class="
              route.path === item.to
                ? 'bg-primary/10 text-primary'
                : 'text-body hover:bg-slate-100 hover:text-primary'
            "
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <!-- Desktop CTA -->
        <div class="hidden items-center gap-3 lg:flex">
          <NuxtLink
            to="/auth/login"
            class="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Sign in
          </NuxtLink>

          <NuxtLink
            to="/auth/register"
            class="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary-hover"
          >
            Sign up
          </NuxtLink>
        </div>

        <!-- Mobile Toggle -->
        <button
          type="button"
          class="inline-flex items-center justify-center rounded-xl border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <UIcon
            :name="mobileMenuOpen ? 'i-lucide-x' : 'i-lucide-menu'"
            class="size-5"
          />
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="mobileMenuOpen"
          class="border-t border-slate-200 py-4 lg:hidden"
        >
          <nav class="flex flex-col gap-2">
            <NuxtLink
              v-for="item in navItems"
              :key="item.to"
              :to="item.to"
              class="rounded-xl px-4 py-3 text-sm font-medium transition"
              :class="
                route.path === item.to
                  ? 'bg-primary/10 text-primary'
                  : 'text-slate-700 hover:bg-slate-100 hover:text-primary'
              "
              @click="mobileMenuOpen = false"
            >
              {{ item.label }}
            </NuxtLink>
          </nav>

          <div class="mt-4 grid grid-cols-2 gap-3">
            <NuxtLink
              to="/auth/login"
              class="inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
              @click="mobileMenuOpen = false"
            >
              Sign in
            </NuxtLink>

            <NuxtLink
              to="/auth/register"
              class="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-medium text-white transition hover:bg-primary-hover"
              @click="mobileMenuOpen = false"
            >
              Sign up
            </NuxtLink>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>
