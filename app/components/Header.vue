<script setup></script>

<template>
  <header class="sticky top-0 z-30 bg-white">
    <div class="border-b border-border">
      <div class="max-w-7xl mx-auto px-4 py-3">
        <div class="flex items-center justify-between gap-3 lg:hidden">
          <NuxtLink to="/" class="shrink-0">
            <NuxtImg
              src="/logo.svg"
              alt="logo"
              class="h-10 w-auto object-contain"
            />
          </NuxtLink>

          <div class="flex items-center gap-2">
            <NuxtLink
              to="/auth/login"
              class="rounded-full border border-slate-300 px-3 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Login
            </NuxtLink>

            <NuxtLink
              to="/auth/register"
              class="rounded-full bg-primary px-3 py-2 text-xs font-medium text-white transition hover:bg-primary-hover"
            >
              Register
            </NuxtLink>
          </div>
        </div>

        <div class="hidden items-center justify-between gap-6 lg:flex">
          <NuxtLink to="/" class="shrink-0">
            <NuxtImg
              src="/logo.svg"
              alt="logo"
              class="h-12 w-auto object-contain"
            />
          </NuxtLink>

          <div class="w-full max-w-xl">
            <form class="w-full">
              <div
                class="flex items-center gap-2 rounded-full border border-slate-200 p-1 transition"
              >
                <input
                  type="text"
                  placeholder="Search here..."
                  class="w-full bg-transparent px-4 text-sm text-slate-700 outline-none"
                />

                <button
                  type="submit"
                  class="rounded-full bg-primary px-5 py-2 text-sm text-white transition hover:bg-primary-hover"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          <div class="flex gap-3">
            <NuxtLink
              to="/auth/login"
              class="rounded-full border border-slate-300 px-5 py-2.5 text-slate-700 transition hover:bg-slate-100"
            >
              Sign in
            </NuxtLink>
            <NuxtLink
              to="/auth/register"
              class="rounded-full bg-primary px-5 py-2.5 text-white transition hover:bg-primary-hover"
            >
              Sign up
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <nav class="border-b border-border bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="flex overflow-x-auto whitespace-nowrap py-3 scrollbar-hide">
          <NuxtLink
            to="/"
            class="px-4 text-sm font-medium text-slate-700 transition hover:text-primary"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/categories"
            class="px-4 text-sm font-medium text-slate-700 transition hover:text-primary"
          >
            Categories
          </NuxtLink>
          <NuxtLink
            to="/coupons"
            class="px-4 text-sm font-medium text-slate-700 transition hover:text-primary"
          >
            Browse Coupons
          </NuxtLink>
          <NuxtLink
            to="/stores"
            class="px-4 text-sm font-medium text-slate-700 transition hover:text-primary"
          >
            Stores
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>
