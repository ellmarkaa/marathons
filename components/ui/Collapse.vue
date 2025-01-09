<script setup lang="ts">
import ArrowDown from '~/components/icon/ArrowDown.vue';

interface CollapseProps {
  openInitially?: boolean; // Whether the collapse is open initially
  duration?: number; // Animation duration in milliseconds
  title: string;
}

const props = withDefaults(defineProps<CollapseProps>(), {
  openInitially: false,
  duration: 300,
});

const isOpen = ref(props.openInitially);

// Toggle the collapse state
const toggleCollapse = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="w-full">
    <!-- Trigger Button -->
    <div
      tabindex="-1"
      class="flex w-full cursor-pointer items-center justify-between py-2"
      @click="toggleCollapse"
    >
      <p class="text-neutral-10 text-base font-semibold">{{ title }}</p>
      <ArrowDown
        :style="{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }"
        class="text-accent-50 transition-transform duration-300"
      />
    </div>

    <div
      class="overflow-hidden transition-all ease-in-out"
      :style="{
        maxHeight: isOpen ? '1000px' : '0px',
        transitionDuration: `${props.duration}ms`,
      }"
    >
      <slot>This is the collapsible content.</slot>
    </div>
  </div>
</template>

<style scoped>
button {
  display: flex;
  align-items: center;
}
</style>
