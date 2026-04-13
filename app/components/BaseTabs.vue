<script setup>
import { ref } from "vue";

const props = defineProps({
  tabs: {
    type: Array,
    required: true,
    // Example: [{ label: 'Tab 1', slot: 'tab1' }, { label: 'Tab 2', slot: 'tab2' }]
  },
});

const activeTab = ref(0);
</script>

<template>
  <div>
    <div
      class="bg-white flex flex-wrap items-center gap-4 px-4 py-6 border border-border hover:border-primary rounded-3xl"
    >
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = index"
        class="rounded-full px-4 py-2 text-sm font-medium"
        :class="
          activeTab === index
            ? 'bg-primary border-primary text-white font-semibold'
            : 'border-transparent text-gray-500 hover:text-primary/70'
        "
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="py-4">
      <slot :name="tabs[activeTab].slot"></slot>
    </div>
  </div>
</template>

<style scoped></style>
