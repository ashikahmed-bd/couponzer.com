<script setup>
const props = defineProps({
  coupon: {
    type: Object,
    required: true,
  },
});

const hasCode = computed(() => !!props.coupon?.code);
const store = computed(() => props.coupon?.stores || null);
const targetUrl = computed(
  () => props.coupon?.affiliate_url || props.coupon?.deal_url || "#",
);

const badgeText = computed(() => {
  if (props.coupon?.discount_text) return props.coupon.discount_text;
  if (props.coupon?.is_exclusive) return "Exclusive";
  if (props.coupon?.is_featured) return "Featured";
  return "Special Offer";
});

const statusText = computed(() => {
  if (props.coupon?.is_verified) return "Verified";
  return "Active";
});

async function copyCode() {
  if (!props.coupon?.code || !navigator?.clipboard) return;
  await navigator.clipboard.writeText(props.coupon.code);
}

function openDeal() {
  if (process.client && targetUrl.value !== "#") {
    window.open(targetUrl.value, "_blank", "noopener,noreferrer");
  }
}
</script>

<template>
  <div
    class="group flex flex-col overflow-hidden rounded-3xl border border-border bg-white p-3 transition duration-300 hover:-translate-y-1 hover:border-primary"
  >
    <div
      class="flex min-h-40 w-full items-center justify-center overflow-hidden rounded-2xl"
      :style="{ background: store?.background }"
    >
      <NuxtImg
        v-if="store?.logo_url"
        :src="store.logo_url"
        :alt="store?.name ?? coupon.title"
        class="h-24 w-auto object-contain transition duration-500 group-hover:scale-105"
      />
      <div v-else class="px-6 text-center text-lg font-bold text-accent">
        {{ store?.name ?? coupon.title }}
      </div>
    </div>

    <div class="flex w-full items-center justify-between gap-2 p-3">
      <span
        class="rounded-lg border border-orange-200 bg-orange-50 px-3 py-1 text-sm font-medium text-orange-600"
      >
        {{ badgeText }}
      </span>

      <span
        class="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-3 py-1 text-sm font-medium text-green-700"
      >
        <UIcon name="i-lucide-badge-check" class="size-4" />
        <span>{{ statusText }}</span>
      </span>
    </div>

    <div class="grid gap-4 p-3">
      <div>
        <p v-if="store?.name" class="mb-1 text-sm font-medium text-body">
          {{ store.name }}
        </p>

        <h3
          class="text-xl font-bold leading-snug text-accent transition duration-300 group-hover:text-orange-600"
        >
          {{ coupon.title }}
        </h3>

        <p
          v-if="coupon.summary"
          class="mt-2 text-sm leading-6 text-gray-600 line-clamp-2"
        >
          {{ coupon.summary }}
        </p>
      </div>

      <div
        class="flex w-full items-center justify-between border-y border-gray-200 py-3 text-sm text-gray-500"
      >
        <div class="flex items-center gap-1.5">
          <UIcon name="i-lucide-calendar" class="size-4" />
          <span>
            Expires:
            {{ coupon.expires_at ? $date(coupon.expires_at) : "No expiry" }}
          </span>
        </div>

        <div class="flex items-center gap-1.5">
          <UIcon name="i-lucide-mouse-pointer-click" class="size-4" />
          <span>{{ coupon.clicks }} Clicks</span>
        </div>
      </div>

      <UModal
        :title="coupon.title"
        :ui="{ content: 'w-full max-w-2xl' }"
        :close="{
          color: 'primary',
          variant: 'outline',
          class: 'rounded-full',
        }"
      >
        <button
          type="button"
          class="relative flex w-full items-center justify-between rounded-full border border-dashed border-orange-400 py-2.5"
        >
          <span
            class="absolute z-20 flex h-full w-[85%] items-center justify-center rounded-full bg-orange-500 text-white transition-all duration-500 ease-out group-hover:w-[80%]"
          >
            {{ hasCode ? "Show Coupon" : "Get Deal" }}
          </span>
          <span
            class="flex w-full items-center justify-end px-4 font-semibold text-orange-600"
          >
            {{ coupon.code || "Get Deal" }}
          </span>
        </button>

        <template #body>
          <div class="flex flex-col items-center gap-3">
            <div class="flex w-full justify-center px-2 md:px-0">
              <div class="w-full max-w-sm">
                <div
                  class="flex w-full overflow-hidden rounded-full border border-dashed border-orange-300 bg-orange-50"
                >
                  <input
                    type="text"
                    :value="coupon.code"
                    readonly
                    class="w-full bg-transparent px-6 py-3 text-sm font-bold tracking-wider text-orange-600 outline-none md:px-10 md:py-4"
                  />

                  <button
                    type="button"
                    @click="copyCode"
                    class="shrink-0 rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600 md:px-10 md:py-4"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>

            <p class="py-2 text-center text-sm font-medium text-gray-500">
              Continue to
              <button
                type="button"
                @click="openDeal"
                class="font-semibold text-primary hover:text-primary-hover"
              >
                {{ store?.name || "Visit Store" }}
              </button>
              <template v-if="coupon.slug">
                •
                <NuxtLink
                  :to="`/coupon/${coupon.slug}`"
                  class="font-semibold text-gray-700 hover:text-orange-600"
                >
                  Terms
                </NuxtLink>
              </template>
            </p>
          </div>

          <div class="grid gap-3 border-y border-gray-200 p-4">
            <p
              v-if="coupon.description"
              class="text-sm leading-7 text-gray-600"
            >
              <span class="font-semibold text-gray-900">Offer Details:</span>
              {{ coupon.description }}
            </p>

            <p class="text-sm leading-7 text-gray-600">
              <span class="font-semibold text-gray-900">Expires:</span>
              {{
                coupon.expires_at ? $date(coupon.expires_at) : "No expiry date"
              }}
            </p>

            <div v-if="coupon.terms">
              <p class="text-sm font-semibold text-gray-900">Terms:</p>
              <div
                v-html="coupon.terms"
                class="text-sm text-gray-600 [&_ul]:grid [&_ul]:gap-2 [&_ul]:pl-5 [&_li]:list-disc"
              />
            </div>
          </div>

          <div class="mt-4 flex flex-wrap items-center justify-center gap-2">
            <span class="mr-2 text-sm font-semibold text-gray-800">
              Did it work?
            </span>

            <button
              type="button"
              class="flex items-center gap-2 rounded-lg bg-green-100 px-3 py-2 font-bold text-green-600 transition hover:bg-green-200"
            >
              <UIcon name="i-lucide-thumbs-up" class="size-5" />
              <span>Yes</span>
            </button>

            <button
              type="button"
              class="flex items-center gap-2 rounded-lg bg-red-100 px-3 py-2 font-bold text-red-600 transition hover:bg-red-200"
            >
              <UIcon name="i-lucide-thumbs-down" class="size-5" />
              <span>No</span>
            </button>
          </div>
        </template>
      </UModal>
    </div>
  </div>
</template>
