<script setup lang="ts">
interface TextCollapseProps {
  maxHeight: number;
  rowCount: number;
  text: string;
}

const props = defineProps<TextCollapseProps>();
const open = ref(false);
const showButton = ref(true);
const paragraph = ref<HTMLParagraphElement>();

onMounted(() => {
  if (paragraph.value) {
    if (paragraph.value?.clientHeight < props.maxHeight) showButton.value = false;
  }
});

const style = {
  'overflow': 'hidden',
  'display': '-webkit-box',
  '-webkit-line-clamp': props.rowCount,
  '-webkit-box-orient': 'vertical',
  'transition': 'max-height 0.3s ease',
  'max-height': `${props.maxHeight}px`,
};

const handleButton = () => {
  open.value = !open.value;
};
</script>

<template>
  <div>
    <p
      ref="paragraph"
      class="mb-3 text-base text-neutral-50"
      :style="open ? null : style"
    >
      {{ text }}
    </p>

    <UButton
      v-if="showButton"
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
