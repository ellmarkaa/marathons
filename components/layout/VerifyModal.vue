<script setup lang="ts">
const open = defineModel<boolean>('open', {required: true, type: Boolean})
</script>

<template>
<UModal v-model:open="open">
  <template #body>
    fasdfsadf
  </template>
</UModal>
</template>

<style scoped>

</style>
