<script setup>
const couponStore = useCouponStore();
const subscriberStore = useSubscriberStore();
const copied = ref(false);
const route = useRoute();

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

const form = reactive({
  email: "",
  name: route.params.slug,
});

const submit = async () => {
  await subscriberStore.store(form);
  form.email = null;
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
            class="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white p-5"
          >
            <button
              class="absolute top-2 right-2 z-10 flex size-6 items-center justify-center rounded-full border border-primary text-primary transition hover:bg-primary/10"
              @click="closeDialog"
            >
              <UIcon name="i-lucide-x" class="size-4 cursor-pointer" />
            </button>

            <div class="relative flex justify-center">
              <div class="rounded-2xl">
                <NuxtImg
                  :src="coupon?.store?.logo_url ?? '/stores/default.png'"
                  :alt="coupon?.store?.name"
                  class="h-24 w-auto object-contain p-4"
                />
              </div>
            </div>

            <main class="max-w-2xl mx-auto md:px-10">
              <div class="text-center">
                <div class="py-4">
                  <h1 class="text-xl font-semibold text-accent truncate">
                    {{ coupon?.title }}
                  </h1>
                  <span class="text-sm font-normal line-clamp-2">
                    {{ coupon?.description }}
                  </span>
                </div>

                <template v-if="coupon?.code">
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
                </template>

                <template v-else>
                  <div
                    class="flex max-w-md mx-auto overflow-hidden rounded-full border border-dashed border-primary bg-primary/10"
                  >
                    <div
                      class="flex w-full items-center justify-center px-6 py-2 text-center text-lg font-semibold tracking-wider text-slate-700"
                    >
                      No code needed
                    </div>

                    <a
                      :href="coupon?.affiliate_url ?? coupon?.landing_url"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="min-w-32 rounded-full bg-primary px-4 py-2 text-base font-bold text-white text-center transition hover:bg-primary-hover"
                    >
                      Get Deal
                    </a>
                  </div>
                </template>
              </div>

              <div class="text-sm mt-4">
                <h3 class="font-bold text-dark">Offer Details:</h3>
                <div v-html="coupon?.instructions" class="text-body"></div>
              </div>

              <div
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
              </div>

              <div class="bg-gray-100 p-4 rounded-2xl max-w-2xl space-y-2">
                <p class="text-dark text-sm font-bold text-center">
                  Never miss a great
                  <a
                    :href="`/click/${coupon.slug}`"
                    rel="nofollow sponsored"
                    target="_blank"
                    class="text-primary"
                  >
                    {{ coupon?.store?.name }}
                  </a>
                  coupon, and so many more!
                </p>

                <form @submit.prevent="submit" class="relative w-full">
                  <input
                    type="email"
                    v-model="form.email"
                    placeholder="Email Address"
                    class="w-full px-4 py-2 pr-32 border border-border rounded outline-none focus:outline-primary"
                  />

                  <button
                    type="submit"
                    class="absolute top-1/2 right-1 -translate-y-1/2 bg-primary hover:bg-primary-hover text-white font-semibold px-4 py-1.5 rounded"
                  >
                    Subscribe
                  </button>
                </form>

                <p class="text-xs text-body mt-2">
                  By clicking the Subscribe button, I agree to the
                  <a href="/terms" class="text-primary hover:underline">
                    Terms of Use
                  </a>
                  and have read the
                  <a
                    href="/privacy-policy "
                    class="text-primary hover:underline"
                  >
                    Privacy Statement </a
                  >.
                </p>
              </div>
            </main>
          </div>
        </transition>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped></style>
