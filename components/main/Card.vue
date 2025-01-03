<script setup lang="ts"></script>

<template>
  <div class="card flex flex-col gap-5 border border-primary-99 bg-white px-3 pb-4 pt-3">
    <div class="relative">
      <p class="absolute left-1.5 top-1.5 flex items-center gap-1 rounded-lg bg-white px-1.5 py-1">
        <IconStar />
        <span class="rating-text text-primary-60">5.0</span>
      </p>

      <div
        tabindex="-1"
        class="absolute right-1.5 top-1.5 cursor-pointer"
      >
        <IconFavorite />
      </div>

      <img
        height="220"
        class="w-full rounded-xl object-cover"
        src="/imgs/card.jpg"
        alt="card"
      >
    </div>

    <div class="flex flex-col gap-3">
      <h3 class="text-lg font-bold">Vestel Manisa Half Marathon - Manisa</h3>
      <p>12-15 Сен, 2024 (Чт - Вс)</p>
      <p>Бостон, США</p>
      <p>Бег 10 км, 21 км, 42,1 км</p>
    </div>

    <div class="flex justify-between align-bottom">
      <p class="textlg self-end font-bold text-neutral-10">
        <span class="text-sm font-medium text-neutral-50">от</span>
        $200
      </p>

      <Button type="outlined">Подробнее</Button>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 312px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.12);
  border-radius: 12px;
}
.rating-text {
  font-size: 10px;
}
</style>
