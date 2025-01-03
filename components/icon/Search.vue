<script setup lang="ts">
import type {IconPropsType} from "~/utils/types";

const props = defineProps<IconPropsType>();
</script>

<template>
  <svg
    :width="props.width || 20"
    :height="props.height || 20"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    :class="props.class"
    :style="props.style"
  >
    <path
      d="M11.5648 4.76961C13.4648 6.66961 13.4648 9.75012 11.5648 11.6501C9.66478 13.5501 6.58426 13.5501 4.68426 11.6501C2.78426 9.75012 2.78426 6.66961 4.68426 4.76961C6.58426 2.8696 9.66478 2.8696 11.5648 4.76961"
      stroke="currentColor"
      stroke-width="1.46667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.53 11.679L16.2966 16.5108"
      stroke="currentColor"
      stroke-width="1.46667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
