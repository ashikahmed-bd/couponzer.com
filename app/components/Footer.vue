<script setup></script>

<template>
  <footer class="mt-10 bg-[#071a3c] text-white">
    <div class="mx-auto max-w-7xl px-4 py-16 lg:px-6">
      <div class="mb-12 flex items-center justify-between gap-4">
        <div class="flex items-center gap-2">
          <div
            class="grid h-8 w-8 place-items-center rounded-full bg-blue-500 text-white font-bold"
          >
            C
          </div>
          <span class="text-2xl font-bold tracking-tight">Couponly</span>
        </div>
        <div class="flex gap-3">
          <div
            v-for="n in 5"
            :key="n"
            class="h-10 w-10 rounded-full border border-sky-400"
          ></div>
        </div>
      </div>

      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 class="mb-4 text-lg font-bold">Contact</h3>
          <ul class="space-y-4 text-sm text-slate-300">
            <li>(505) 555-0115</li>
            <li>info@couponly.com</li>
            <li>2118 Thornridge Cir. Syracuse, Connecticut</li>
          </ul>
        </div>
        <div>
          <h3 class="mb-4 text-lg font-bold">Quick Link</h3>
          <ul class="space-y-3 text-sm text-slate-300">
            <li>Home</li>
            <li>About Us</li>
            <li>Browse Coupons</li>
            <li>Stores</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h3 class="mb-4 text-lg font-bold">Categories</h3>
          <ul class="space-y-3 text-sm text-slate-300">
            <li>Accessories</li>
            <li>Beauty</li>
            <li>Clothing</li>
            <li>Electronics</li>
            <li>Food</li>
          </ul>
        </div>
        <div>
          <h3 class="mb-4 text-lg font-bold">Newsletter</h3>
          <p class="mb-4 text-sm text-slate-300">
            Subscribe our newsletter to get our latest update & news
          </p>
          <div class="flex items-center rounded-full bg-white p-2">
            <input
              type="email"
              placeholder="Email address"
              class="flex-1 bg-transparent px-4 py-2 text-sm text-slate-700 outline-none"
            />
            <button
              class="rounded-full bg-orange-400 px-5 py-2 text-sm font-semibold text-white"
            >
              Go
            </button>
          </div>
        </div>
      </div>

      <div
        class="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between"
      >
        <p>Copyright ©2025 Couponly. All rights reserved</p>
        <div class="flex gap-6">
          <a href="#">Help & Support</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms Conditions</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
