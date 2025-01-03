<script setup lang="ts">
interface TagProps {
  title: string;
  closable?: boolean
  onClose?: () => void;
}

const props = withDefaults(defineProps<TagProps>(), {
  title: '',
  closable: false,
  onClose: undefined
});
const rightPadding = props.closable ? 'pr-2' : 'pr-3';

</script>

<template>
<span class="tag flex gap-1 pl-3 items-center text-sm" :class="rightPadding">
  {{title}}
  <span @click="props.onClose" v-if="closable" role="img" aria-label="close" tabindex="-1" class="cursor-pointer">
    <IconClear />
  </span>
</span>
</template>

<style scoped>
.tag {
  height: 32px;
  background-color: #E2F7F0;
  border-radius: 20px;
}

</style>
