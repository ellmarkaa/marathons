<script setup lang="ts">
interface ContentCollapseProps {
  maxHeight: number;
}

const props = defineProps<ContentCollapseProps>();
const open = ref(false);

const style = computed<Record<string, any>>(() => ({
  'overflow': open.value ? 'visible' : 'hidden',
  'transition': 'max-height 0.5s',
  'max-height': open.value ? `${1000}px` : `${props.maxHeight}px`,
  'transition-timing-function': 'ease-in-out',
}));

const handleButton = () => {
  open.value = !open.value;
};
</script>

<template>
  <div>
    <div
      :style="style"
      class="mb-6"
    >
      <slot />
    </div>

    <UButton
      variant="text"
      :trailing-icon="
        open ? 'material-symbols:keyboard-arrow-up-rounded' : 'material-symbols:keyboard-arrow-down-rounded'
      "
      class="py-1 pl-0"
      :label="open ? 'Скрыть' : 'Показать все'"
      @click="handleButton"
    />
  </div>
</template>

<style scoped></style>
