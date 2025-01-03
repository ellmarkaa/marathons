<script setup lang="ts">
import type {IconPropsType} from "~/utils/types";

const props = defineProps<IconPropsType>();
</script>

<template>
  <svg
    :width="props.width || 18"
    :height="props.height || 18"
    stroke="currentColor"
    :class="props.class"
    :style="props.style"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.25 9H3.75" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10.5 12.75L14.25 9" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10.5 5.25L14.25 9" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<style scoped>

</style>
