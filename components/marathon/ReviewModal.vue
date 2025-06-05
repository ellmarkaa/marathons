<script setup lang="ts">
const props = defineProps<{marathonId: number}>()
const title = ref('')
const openModal = ref(false)
const marathonStore = useMarathonStore()

const onSubmit = async () => {
  const item = await marathonStore.createReview(title.value, props.marathonId)
  console.log('item', item);
  openModal.value = false
}
</script>

<template>
  <UModal v-model:open="openModal" title="Отзыв">
    <UButton
      class="text-neutral-0 hover:text-neutral-0 text-base"
      icon="mdi-light:pencil"
      label="Оставить отзыв"
      variant="link"
    />

    <template #body>
      <p class="mb-1.5">Ваш отзыв</p>
      <UTextarea v-model="title" :rows="4" class="w-full" />
    </template>

    <template #footer>
      <UButton
        block
        :disabled="!title"
        label="Оставить отзыв"
        @click="onSubmit"
      />
    </template>
  </UModal>
</template>

<style scoped></style>
