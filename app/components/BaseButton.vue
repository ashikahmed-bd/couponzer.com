<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "submit",
  },
  loading: {
    type: Boolean,
    default: false,
  },

  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button
    :disabled="disabled || loading"
    :type="type"
    :class="[
      disabled || loading ? 'cursor-not-allowed opacity-70' : 'cursor-pointer',
      'w-full flex items-center justify-center px-4 py-2 rounded font-body text-gray-100 bg-primary hover:opacity-90 focus:outline-none focus:ring-0',
    ]"
  >
    <template v-if="loading">
      <UIcon name="i-lucide-loader" class="size-5 animate-spin mr-2" />
      Processing...
    </template>
    <template v-else>
      <slot />
    </template>
  </button>
</template>

<style scoped></style>
