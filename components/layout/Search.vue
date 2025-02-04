<script setup lang="ts">
const searchMode = defineModel<boolean>({ required: true });
const handleChangeMode = () => {
  searchMode.value = !searchMode.value;
};
</script>

<template>
  <div class="flex items-center justify-between">
    <LayoutLogo />
    <UInput />
    <UButton @click="handleChangeMode" />
  </div>
</template>

<style scoped></style>
