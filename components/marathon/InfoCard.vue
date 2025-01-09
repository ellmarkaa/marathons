<script setup lang="ts">

</script>

<template>
  <div class="info-card bg-white">
    <Badge color="red" class="mb-4">Последний шанс</Badge>
    <div class="flex flex-col gap-3 mb-4">
      <h4 class="font-bold text-base">Vestel Manisa Half Marathon - Manisa</h4>
      <p>12-15 Сен, 2024 (Чт - Вс)</p>
      <p>Бостон, США</p>
    </div>

    <div class="flex gap-2">
      <UButton disabled block>Оформить покупку</UButton>
      <UButton icon="fluent:bookmark-16-regular" variant="outline" />
    </div>
  </div>
</template>

<style scoped>
.info-card {
  min-width: 344px;
  padding: 24px;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);
  border: 1px solid rgb(244, 240, 240);
  border-radius: 12px;
  align-self: flex-start;
}
</style>
