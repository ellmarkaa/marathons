<script setup lang="ts">
const searchMode = defineModel<boolean>({required: true});
const handleChangeMode = () => {
  searchMode.value = !searchMode.value;
};

</script>

<template>
<div class="flex justify-between items-center">
  <LayoutLogo />
  <UInput />
  <UButton @click="handleChangeMode" />
</div>
</template>

<style scoped>

</style>
