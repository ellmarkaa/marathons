<script setup lang="ts">
defineEmits(['close-menu']);
const model = defineModel<boolean>({ required: true });
</script>

<template>
  <UDrawer
    v-model:open="model"
    :handle="false"
    :ui="{
      header: 'flex items-center justify-between py-3 px-4',
      content: 'gap-0',
      container: 'p-0 h-full gap-0',
      body: 'px-4 grow',
      footer: 'px-4 pt-4 pb-8',
    }"
  >
    <slot />

    <template #header>
      <p class="text-2xl font-bold">Фильтры</p>

      <UButton
        variant="soft"
        icon="material-symbols:close-rounded"
        @click="$emit('close-menu')"
      />
    </template>

    <template #body>
      <MainFilterBlock />
    </template>

    <template #footer>
      <div class="py-3">
        <UButton block>Показать</UButton>
      </div>
    </template>
  </UDrawer>
</template>

<style scoped></style>
