<script setup>
import { MdPreview } from "md-editor-v3";
import "md-editor-v3/lib/preview.css";

const props = defineProps({
  content: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <MdPreview
    :modelValue="props.content"
    previewTheme="default"
    codeTheme="github"
  />
</template>

<style scoped></style>
