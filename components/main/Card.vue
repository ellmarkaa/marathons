<script setup lang="ts">

</script>

<template>
  <div class="px-3 pt-3 pb-4 card border border-primary-99 bg-white flex flex-col gap-5">
    <div class="relative">
      <p class="bg-white rounded-lg	px-1.5 py-1 items-center flex gap-1 absolute top-1.5 left-1.5">
        <IconStar />
        <span class="text-primary-60 rating-text">5.0</span>
      </p>

      <div tabindex="-1" class="absolute right-1.5 top-1.5 cursor-pointer">
        <IconFavorite />
      </div>

      <img height="220" class="rounded-xl w-full object-cover" src="/imgs/card.jpg"  alt="card" />
    </div>

    <div class="flex flex-col gap-3">
      <h3 class="text-lg font-bold">Vestel Manisa Half Marathon - Manisa</h3>
      <p>12-15 Сен, 2024 (Чт - Вс)</p>
      <p>Бостон, США</p>
      <p>Бег 10 км, 21 км, 42,1 км</p>
    </div>

    <div class="flex justify-between align-bottom">
      <p class="textlg font-bold text-neutral-10 self-end">
        <span class="font-medium text-sm text-neutral-50">от</span>
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
