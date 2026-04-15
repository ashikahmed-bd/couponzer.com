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
            <div
              class="flex items-center justify-between border-b border-gray-300 px-6 py-5"
            >
              <h2 class="pr-6 text-[18px] font-semibold text-slate-800">
                {{ coupon?.title }}
              </h2>

              <button
                class="flex h-10 w-10 items-center justify-center rounded-full border border-orange-400 text-xl text-orange-500 transition hover:bg-orange-50"
                @click="closeDialog"
              >
                ×
              </button>
            </div>

            <div class="px-6 py-6">
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

              <div class="mt-5 text-center text-sm text-slate-500">
                Continue to
                <span class="font-semibold text-orange-500">
                  {{ coupon?.stores?.name || "Hostinger" }}
                </span>
                •
                <button class="font-semibold text-slate-700 hover:underline">
                  Terms
                </button>
              </div>

              <div class="space-y-5 text-sm leading-7 text-slate-600">
                <p>
                  <span class="font-bold text-slate-800">Offer Details:</span>
                  {{ coupon?.description }}
                </p>

                <div>
                  <p class="mb-2 font-bold text-slate-800">Terms:</p>
                  <div
                    class="text-sm text-slate-600"
                    v-html="coupon?.terms"
                  ></div>
                </div>
              </div>

              <div
                class="flex flex-wrap items-center justify-center gap-2 mt-4"
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
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped></style>
