<script setup></script>

<template>
  <section
    class="relative max-w-6xl mx-auto px-4 py-20 overflow-hidden rounded-2xl bg-primary"
  >
    <div class="pointer-events-none absolute inset-0 hidden md:block">
      <img
        src="/images/newsletter-illus-1.png"
        alt=""
        class="absolute bottom-0 left-0 w-44 lg:w-64 opacity-90"
      />
      <img
        src="/images/newsletter-illus-2.png"
        alt=""
        class="absolute right-0 top-0 w-28 lg:w-64 opacity-90"
      />
    </div>

    <div class="relative z-10 mx-auto max-w-2xl text-center">
      <h2
        class="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl"
      >
        Join our newsletter for updates!
      </h2>
      <p class="mt-3 text-sm text-white/80 sm:text-base">
        Join our community with more than 300K active users
      </p>

      <form class="mx-auto mt-6 max-w-xl">
        <div
          class="flex items-center gap-2 rounded-full bg-white p-2 shadow-lg ring-1 ring-black/5"
        >
          <input
            type="email"
            placeholder="Email address"
            class="h-12 w-full rounded-full bg-transparent px-4 text-sm text-slate-800 outline-none placeholder:text-slate-400"
          />
          <button
            type="submit"
            class="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white transition hover:scale-105 hover:bg-slate-800"
          >
            <UIcon name="i-ph-paper-plane-tilt" class="size-5" />
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped></style>
