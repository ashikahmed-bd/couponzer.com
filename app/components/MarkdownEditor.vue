<script setup>
import { computed } from "vue";
import { MdEditor } from "md-editor-v3";
import "md-editor-v3/lib/style.css";

const props = defineProps({
  label: { type: String, default: "" },
  modelValue: { type: String, default: "" },
  required: { type: Boolean, default: false },
  placeholder: { type: String, default: "Write something..." },
  readOnly: { type: Boolean, default: false },
  error: { type: String, default: "" },
});

const emit = defineEmits(["update:modelValue"]);

const text = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
</script>

<template>
  <div class="relative block mb-2">
    <label v-if="label" class="block mb-2 capitalize">
      {{ label }} <span v-if="required" class="text-red-500">*</span>
    </label>

    <MdEditor
      v-model="text"
      language="en-US"
      :placeholder="placeholder"
      :readOnly="readOnly"
    />

    <p v-if="error" class="mt-1 text-sm text-red-500">
      {{ error }}
    </p>
  </div>
</template>

<style scoped></style>
