<script setup>
const couponStore = useCouponStore();
const copied = ref(false);

const closeDialog = () => {
  couponStore.closeDialog();
};

const coupon = computed(() => couponStore.coupon);

const copyCode = async () => {
  if (!coupon.value?.code) return;

  try {
    await navigator.clipboard.writeText(coupon.value.code);
    copied.value = true;

    setTimeout(() => {
      copied.value = false;
    }, 1500);
  } catch (error) {
    console.error("Copy failed:", error);
  }
};
</script>

<template>
  <Teleport to="body">
    <transition name="fade">
      <div
        v-if="couponStore.dialog"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4"
        @click.self="closeDialog"
      >
        <transition name="zoom">
          <div
            class="relative w-full max-w-xl overflow-hidden rounded-2xl bg-white"
          >
            <header
              class="flex items-center justify-between border-b border-border px-6 py-4"
            >
              <h2 class="pr-6 text-base font-semibold text-accent">
                {{ coupon?.stores?.name }}
              </h2>

              <button
                class="flex size-8 items-center justify-center rounded-full border border-primary text-xl text-primary transition hover:bg-primary/10"
                @click="closeDialog"
              >
                <UIcon name="i-lucide-x" class="size-5" />
              </button>
            </header>

            <div class="relative flex justify-center">
              <div class="rounded-2xl p-5">
                <NuxtImg
                  :src="coupon?.stores?.logo_url ?? '/stores/default.png'"
                  :alt="coupon?.stores?.name"
                  class="h-16 w-auto object-contain"
                />
              </div>
            </div>

            <main class="px-6">
              <div class="text-center">
                <h1 class="text-3xl font-semibold text-accent">
                  {{ coupon?.title }}
                </h1>
                <div class="mb-3">
                  <span>Copy and paste this code at </span>
                  <a
                    :href="`/click/${coupon.slug}`"
                    rel="nofollow sponsored"
                    target="_blank"
                    class="font-semibold text-primary"
                    >{{ coupon?.stores?.name }}</a
                  >
                </div>
                <div
                  class="flex max-w-md mx-auto overflow-hidden rounded-full border border-dashed border-primary bg-primary/10"
                >
                  <input
                    type="text"
                    :value="coupon?.code"
                    readonly
                    class="w-full bg-transparent px-6 py-2 text-center text-lg font-semibold tracking-wider text-slate-700 outline-none"
                  />

                  <button
                    class="min-w-32 rounded-full bg-orange-500 px-4 py-2 text-base font-bold text-white transition hover:bg-orange-600"
                    @click="copyCode"
                  >
                    {{ copied ? "Copied" : "Copy" }}
                  </button>
                </div>
              </div>

              <div class="mt-5 text-center text-sm">
                Continue to
                <a
                  :href="
                    coupon?.stores?.affiliate_url ?? coupon?.stores?.website_url
                  "
                  rel="nofollow sponsored"
                  target="_blank"
                  class="font-semibold text-primary after:content-['•'] after:mx-1 after:text-slate-400"
                >
                  {{ coupon?.stores?.name }}
                </a>

                <a
                  :href="
                    coupon?.stores?.affiliate_url ?? coupon?.stores?.website_url
                  "
                  rel="nofollow sponsored"
                  target="_blank"
                  class="font-semibold text-slate-700 hover:underline"
                >
                  Visit Store
                </a>
              </div>

              <div class="text-sm leading-7">
                <h3 class="font-bold text-dark">Offer Details:</h3>
                <div v-html="coupon?.instructions" class="text-body"></div>
              </div>
            </main>
            <footer
              class="flex flex-wrap items-center justify-center gap-2 border-t border-border mt-3 py-4"
            >
              <span class="mr-2 text-sm font-semibold text-dark">
                Did it work?
              </span>

              <button
                class="flex items-center gap-2 rounded-lg bg-green-100 px-3 py-2 font-bold text-green-600 transition hover:bg-green-200"
              >
                <UIcon name="i-lucide-thumbs-up" class="size-5" />
                <span>Yes</span>
              </button>

              <button
                class="flex items-center gap-2 rounded-lg bg-red-100 px-3 py-2 font-bold text-red-600 transition hover:bg-red-200"
              >
                <UIcon name="i-lucide-thumbs-down" class="size-5" />
                <span>No</span>
              </button>
            </footer>
          </div>
        </transition>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped></style>
