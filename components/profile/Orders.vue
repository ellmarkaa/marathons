<script setup lang="ts"></script>

<template>
  <div class="flex w-full flex-col gap-6">
    <div class="title-block px-8 py-6">
      <h4 class="text-3xl font-bold text-white">Мои заказы</h4>
    </div>

    <div class="flex flex-col gap-6 rounded-2xl bg-white p-10">
      <h5 class="title-empty">Тут пока пусто..</h5>
      <div class="text-neutral-40 text-base">
        <p>Вы еще не оформили ни одного заказа.</p>
        <p>Найдите свою следующую цель и забронируйте место на старте!</p>
      </div>
      <UButton class="w-xs justify-center self-baseline">Начать поиск</UButton>
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
