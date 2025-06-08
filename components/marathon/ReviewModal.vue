<script setup lang="ts">
const props = defineProps<{marathonId: number}>()
const title = ref('')
const openModal = ref(false)
const marathonStore = useMarathonStore()

const onSubmit = async () => {
  const item = await marathonStore.createReview(title.value, props.marathonId)
  openModal.value = false
}
const {t} = useI18n()
</script>

<template>
  <UModal v-model:open="openModal" :title="t('review')">
    <UButton
      class="text-neutral-0 hover:text-neutral-0 text-base"
      icon="mdi-light:pencil"
      :label="t('leave-review')"
      variant="link"
    />

    <template #body>
      <p class="mb-1.5">{{t('your-review')}}</p>
      <UTextarea v-model="title" :rows="4" class="w-full" />
    </template>

    <template #footer>
      <UButton
        block
        :disabled="!title"
        :label="t('leave-review')"
        @click="onSubmit"
      />
    </template>
  </UModal>
</template>

<style scoped></style>
