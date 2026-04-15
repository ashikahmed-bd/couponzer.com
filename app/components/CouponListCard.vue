<script setup>
defineProps({
  coupon: {
    type: Object,
    required: true,
  },
  store: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="space-y-4">
    <div
      class="rounded-2xl border border-border bg-white p-5 hover:border-primary"
    >
      <div
        class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between"
      >
        <div class="flex-1 md:pr-6">
          <div class="flex flex-wrap items-center gap-2">
            <span
              v-if="coupon.is_verified"
              class="inline-flex items-center gap-2 rounded-lg border border-border bg-sky-50 px-3 py-1.5 text-sm font-medium text-sky-600"
            >
              <UIcon name="i-lucide-badge-check" class="size-4" />
              Verified
            </span>

            <span
              v-if="coupon.is_featured"
              class="inline-flex items-center gap-2 rounded-lg border border-yellow-300 bg-yellow-50 px-3 py-1.5 text-sm font-medium text-yellow-600"
            >
              <UIcon name="i-lucide-star" class="size-4" />
              Featured
            </span>

            <span
              v-if="coupon.expires_at"
              class="inline-flex items-center gap-2 rounded-lg border border-orange-300 bg-orange-50 px-3 py-1.5 text-sm font-medium text-orange-500"
            >
              <UIcon name="i-lucide-calendar-days" class="size-4" />
              Expires: {{ $date(coupon.expires_at) ?? "N/A" }}
            </span>
          </div>

          <h3 class="mt-4 text-2xl font-bold leading-tight text-accent">
            {{ coupon.title }}
          </h3>

          <p v-if="coupon.summary" class="mt-2 text-sm leading-6 text-body">
            {{ coupon.summary }}
          </p>

          <div class="mt-4 flex flex-wrap items-center gap-3">
            <span
              class="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-600"
            >
              {{ coupon.discount_text || "Special Offer" }}
            </span>

            <span
              v-if="coupon.is_exclusive"
              class="inline-flex items-center rounded-full bg-purple-50 px-3 py-1 text-sm font-medium text-purple-600"
            >
              Exclusive
            </span>

            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-mouse-pointer-click" class="size-4" />
              <span>{{ coupon.click_count }} Clicks</span>
            </div>
          </div>
        </div>

        <div
          class="border-border border-t py-4 md:border-l md:border-t-0 md:pl-6"
        >
          <div class="flex flex-col items-center text-center">
            <a
              :href="coupon.affiliate_url ?? coupon.deal_url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-base font-semibold text-success"
            >
              <UIcon name="i-lucide-share-2" class="size-4" />
              Share & Earn
            </a>

            <p class="mt-3 text-sm text-body mb-3">
              Grab this latest offer now
            </p>

            <UModal
              :title="coupon.title"
              :ui="{
                content: 'w-full max-w-2xl',
              }"
              :close="{
                color: 'primary',
                variant: 'outline',
                class: 'rounded-full',
              }"
            >
              <button
                @click="handleClick(coupon.affiliate_url ?? coupon.deal_url)"
                class="relative w-full flex items-center justify-between rounded-full border border-dashed border-primary py-2"
              >
                <span
                  class="absolute cursor-pointer flex items-center justify-center w-[85%] group-hover:w-[80%] h-full rounded-full bg-primary text-white transition-all duration-500 ease-out z-20"
                >
                  {{ coupon.code ? "Show Code" : "Get Deal" }}
                </span>
                <span
                  class="w-full flex items-center justify-end font-semibold text-orange-600 px-4"
                >
                  {{ coupon.code ?? "Get Deal" }}
                </span>
              </button>
              <template #body>
                <div class="flex flex-col items-center gap-3">
                  <div class="w-full px-2 md:px-0 flex justify-center">
                    <div class="w-full max-w-xs">
                      <div
                        class="flex w-full overflow-hidden rounded-full border border-dashed border-orange-300 bg-orange-50"
                      >
                        <input
                          type="text"
                          :value="coupon.code"
                          readonly
                          class="w-full bg-transparent px-6 py-2 text-sm font-bold tracking-wider text-primary outline-none"
                        />

                        <button
                          class="shrink-0 rounded-full bg-primary px-10 py-2 text-sm font-bold text-white transition hover:bg-primary-hover"
                        >
                          Copy
                        </button>
                      </div>
                    </div>
                  </div>

                  <p class="text-center text-sm font-medium text-body py-2">
                    Continue to
                    <a
                      :href="coupon.affiliate_url ?? coupon.deal_url"
                      target="_blank"
                      rel="nofollow sponsored noopener"
                      class="font-semibold text-primary hover:text-primary-hover"
                    >
                      {{ store?.name ?? "Visit Store" }}
                    </a>
                    •

                    <a
                      v-if="coupon.slug"
                      :href="coupon.affiliate_url"
                      class="font-semibold text-body hover:text-primary-hover"
                    >
                      View Terms & Conditions
                    </a>
                  </p>
                </div>

                <div class="grid gap-2 border-y border-border p-4">
                  <div class="block">
                    <p class="text-sm font-semibold text-body">Terms:</p>
                    <div
                      v-html="coupon.terms"
                      class="text-sm [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2"
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
              </template>
            </UModal>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
