<script setup></script>

<template>
  <main class="max-w-7xl mx-auto px-4 py-6">
    <section
      class="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white via-slate-50 to-slate-100 px-4 py-12"
    >
      <div class="max-w-2xl">
        <div
          class="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-3 py-2 backdrop-blur"
        >
          <span class="h-2 w-2 rounded-full bg-primary"></span>
          <span
            class="text-xs font-semibold uppercase tracking-[0.2em] text-primary"
          >
            Store Directory
          </span>
        </div>

        <h1
          class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
        >
          Store Style
        </h1>

        <p class="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
          Discover exclusive coupon codes, trending offers, and handpicked deals
          from top categories and stores.
        </p>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-4">
        <div
          class="mb-8 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between"
        >
          <p class="text-sm text-slate-500">
            Showing <span class="font-semibold text-slate-900">8</span> of
            <span class="font-semibold text-slate-900">600</span> Results
          </p>

          <div class="flex items-center gap-3">
            <button
              class="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-primary hover:bg-primary hover:text-white"
            >
              <i class="ph ph-faders-horizontal"></i>
              Filter
            </button>
            <select
              class="h-10 rounded-full border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
            >
              <option>Newest</option>
              <option>Popular</option>
              <option>Trending</option>
            </select>
          </div>
        </div>

        <div
          class="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        >
          <BaseStoreCard v-for="value in 20" />
        </div>

        <!-- Pagination -->
        <div class="mt-10 flex justify-center">
          <nav class="flex items-center gap-2">
            <button
              class="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:bg-primary hover:text-white"
            >
              <i class="ph ph-caret-left"></i>
            </button>

            <button
              class="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-semibold"
            >
              1
            </button>

            <button
              class="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white text-sm font-semibold"
            >
              2
            </button>

            <button
              class="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-semibold"
            >
              3
            </button>

            <span class="px-2 text-slate-400">...</span>

            <button
              class="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:bg-primary hover:text-white"
            >
              <i class="ph ph-caret-right"></i>
            </button>
          </nav>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
