<script setup></script>

<template>
  <header class="bg-white sticky top-0 z-30">
    <div class="border-b border-slate-100">
      <div class="container mx-auto px-4 py-3.5">
        <div
          class="flex flex-col gap-4 md:gap-10 lg:flex-row lg:items-center lg:justify-between"
        >
          <div class="flex items-center justify-between lg:hidden">
            <NuxtLink to="/">
              <NuxtImg
                src="/logo.svg"
                alt="logo"
                class="w-full h-12 object-contain"
              />
            </NuxtLink>
            <div class="flex gap-2">
              <NuxtLink
                to="/auth/login"
                class="text-xs px-3 py-1.5 border border-slate-300 rounded-full text-slate-700"
              >
                Login
              </NuxtLink>
              <NuxtLink
                to="/auth/register"
                class="text-xs px-3 py-1.5 bg-primary text-white rounded-full"
              >
                Register
              </NuxtLink>
            </div>
          </div>

          <div class="hidden lg:flex">
            <NuxtLink to="/">
              <NuxtImg
                src="/logo.svg"
                alt="logo"
                class="w-full h-auto object-contain"
              />
            </NuxtLink>
          </div>

          <div
            class="flex w-full flex-col gap-3 lg:flex-row lg:items-center lg:justify-between"
          >
            <div
              class="hidden w-full max-w-xl rounded-full border border-slate-200 transition sm:block"
            >
              <form class="w-full">
                <div
                  class="flex items-center gap-2 border border-slate-200 rounded-full p-1"
                >
                  <input
                    type="text"
                    placeholder="Search here..."
                    class="w-full bg-transparent px-3 text-sm outline-none"
                  />

                  <button
                    type="submit"
                    class="px-5 py-2 text-sm rounded-full border border-white text-white bg-primary hover:bg-primary-hover transition"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>

            <!-- Desktop Auth Buttons -->
            <div class="hidden lg:flex gap-3">
              <NuxtLink
                to="/auth/login"
                class="px-5 py-2.5 border border-slate-300 rounded-full text-slate-700 hover:bg-slate-100"
              >
                Sign in
              </NuxtLink>
              <NuxtLink
                to="/auth/register"
                class="px-5 py-2.5 bg-primary text-white rounded-full hover:bg-primary-hover"
              >
                Sign up
              </NuxtLink>
            </div>

            <!-- Mobile Search -->
            <div class="block sm:hidden">
              <form class="w-full">
                <div
                  class="flex items-center rounded-full border border-slate-200 p-2"
                >
                  <input
                    type="text"
                    placeholder="Search here..."
                    class="w-full bg-transparent px-3 text-sm outline-none"
                  />
                  <button
                    type="submit"
                    class="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white"
                  >
                    <UIcon name="i-lucide-search" class="size-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="border-b border-slate-100">
      <div class="mx-auto max-w-7xl px-4">
        <div class="flex overflow-x-auto whitespace-nowrap py-3">
          <NuxtLink to="/" class="px-4 text-sm">Home</NuxtLink>
          <NuxtLink to="/coupon" class="px-4 text-sm">Browse Coupons</NuxtLink>
          <NuxtLink to="/stores" class="px-4 text-sm">Stores</NuxtLink>
          <NuxtLink to="/categories" class="px-4 text-sm">Categories</NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>
