<script setup>
const subscriberStore = useSubscriberStore();

const form = reactive({
  email: "",
  name: null,
});

const submit = async () => {
  await subscriberStore.store(form);
};
</script>

<template>
  <footer class="bg-accent-hover text-white">
    <div class="max-w-7xl mx-auto px-4 py-12">
      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p class="text-sm">
            Couponzer is your trusted source for the latest coupons, promo
            codes, and verified deals. Discover exclusive discounts from top
            brands and save on fashion, electronics, hosting, travel, and more.
          </p>

          <nav
            class="mt-6 flex items-center gap-3"
            aria-label="Social media links"
          >
            <a
              href="https://www.facebook.com/couponzer"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="Visit Couponzer on Facebook"
              title="Couponzer Facebook Page"
              class="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-blue-500/40 hover:bg-blue-500 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-5 w-5"
              >
                <path
                  d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34V22c4.78-.75 8.44-4.91 8.44-9.93z"
                />
              </svg>
            </a>

            <a
              href="https://x.com/couponzer"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="Visit Couponzer on X (formerly Twitter)"
              title="Couponzer X Profile"
              class="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white hover:text-slate-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-4 w-4"
              >
                <path
                  d="M18.9 2H21l-6.56 7.5L22 22h-5.97l-4.68-6.11L6 22H3.9l7.02-8.02L2 2h6.12l4.23 5.54L18.9 2Zm-1.05 18h1.1L7.52 3.9H6.34L17.85 20Z"
                />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/couponzer"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="Visit Couponzer on Instagram"
              title="Couponzer Instagram Profile"
              class="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-pink-500/40 hover:bg-pink-500 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-5 w-5"
              >
                <path
                  d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5c3.18 0 5.75-2.57 5.75-5.75v-8.5C22 4.57 19.43 2 16.25 2h-8.5Zm0 2h8.5C18.55 4 20 5.45 20 7.75v8.5c0 2.3-1.45 3.75-3.75 3.75h-8.5C5.45 20 4 18.55 4 16.25v-8.5C4 5.45 5.45 4 7.75 4Zm9.5 1.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/couponzer"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="Visit Couponzer on LinkedIn"
              title="Couponzer LinkedIn Profile"
              class="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-sky-700/40 hover:bg-sky-800 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="size-5"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                />
              </svg>
            </a>
          </nav>
        </div>

        <div class="grid grid-cols-2 gap-6 sm:contents">
          <div>
            <h3 class="mb-5 text-lg font-bold text-white">Quick Links</h3>
            <ul class="space-y-3 text-sm text-slate-300">
              <li>
                <NuxtLink to="/" class="transition hover:text-white"
                  >Home</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/about" class="transition hover:text-white"
                  >About Us</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/coupons" class="transition hover:text-white">
                  Coupons
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/stores" class="transition hover:text-white"
                  >Stores</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/" class="transition hover:text-white"
                  >Blog</NuxtLink
                >
              </li>
            </ul>
          </div>

          <!-- Categories -->
          <div>
            <h3 class="mb-5 text-lg font-bold text-white">Categories</h3>
            <ul class="space-y-3 text-sm text-slate-300">
              <li>
                <a href="#" class="transition hover:text-white">Accessories</a>
              </li>
              <li>
                <a href="#" class="transition hover:text-white">Beauty</a>
              </li>
              <li>
                <a href="#" class="transition hover:text-white">Clothing</a>
              </li>
              <li>
                <a href="#" class="transition hover:text-white">Electronics</a>
              </li>
              <li><a href="#" class="transition hover:text-white">Food</a></li>
            </ul>
          </div>
        </div>

        <!-- Newsletter -->
        <div>
          <h3 class="mb-5 text-lg font-bold text-white">Newsletter</h3>
          <p class="mb-4 text-sm leading-6 text-slate-300">
            Subscribe to our newsletter to get the latest coupons, promo codes,
            and updates.
          </p>

          <form
            @submit.prevent="submit"
            class="rounded border border-white/10 bg-white/5 p-2"
          >
            <div class="relative">
              <input
                type="email"
                v-model="form.email"
                placeholder="Email address"
                class="h-11 w-full rounded bg-white px-4 pr-12 text-sm text-body outline-none placeholder:text-slate-400"
              />

              <button
                type="submit"
                class="absolute right-1 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded bg-primary text-white transition hover:opacity-90"
              >
                <UIcon name="i-lucide-send" class="size-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        class="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between"
      >
        <p>Copyright © 2026 Couponzer. All rights reserved.</p>

        <div class="flex flex-wrap items-center gap-4 md:gap-6">
          <NuxtLink to="/help" class="transition hover:text-white"
            >Help & Support</NuxtLink
          >
          <NuxtLink to="/privacy-policy" class="transition hover:text-white"
            >Privacy Policy</NuxtLink
          >
          <NuxtLink to="/terms" class="transition hover:text-white"
            >Terms & Conditions</NuxtLink
          >
          <NuxtLink to="/disclaimer" class="transition hover:text-white"
            >Disclaimer</NuxtLink
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
