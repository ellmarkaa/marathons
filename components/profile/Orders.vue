<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div class="flex w-full flex-col gap-6">
    <div class="title-block px-8 py-6">
      <h4 class="text-3xl font-bold text-white">{{ t('my-orders') }}</h4>
    </div>

    <div class="flex flex-col gap-6 rounded-2xl bg-white p-10">
      <h5 class="title-empty">{{ t('tut-empty') }}</h5>
      <div class="text-neutral-40 text-base">
        <p>{{ t('no-orders') }}</p>
        <p>{{ t('find-cell') }}</p>
      </div>
      <UButton class="w-xs justify-center self-baseline">{{ t('start-search') }}</UButton>
    </div>
  </div>
</template>

<style scoped>
.title-block {
  background-color: #00905e;
  border-radius: 20px;
}

.title-empty {
  font-size: 28px;
  font-weight: 400;
}
</style>
