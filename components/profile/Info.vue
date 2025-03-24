<script setup lang="ts">
import Distance from '~/components/icon/Distance.vue';
</script>

<template>
  <div class="flex w-full flex-col gap-6">
    <div class="title-block px-8 py-6">
      <h4 class="text-3xl font-bold text-white">Профиль</h4>
    </div>

    <div class="flex items-center justify-between rounded-xl bg-white p-6">
      <div class="flex items-center gap-4">
        <div class="bg-success-99 distance-icon">
          <Distance style="color: #3fbea6" />
        </div>

        <div>
          <p class="mb-2 flex items-center gap-1 text-lg font-semibold">
            Мои события
            <Icon
              name="ph:info"
              class="size-4 text-neutral-50"
            />
          </p>
          <p class="text-neutral-50">0 событий</p>
        </div>
      </div>

      <UButton label="Добавить событие" />
    </div>

    <div class="flex flex-col gap-6 rounded-xl bg-white p-6">
      <div class="flex justify-between">
        <h4 class="text-xl font-semibold">Персональная информация</h4>
        <UButton
          icon="material-symbols:keyboard-arrow-down-rounded"
          variant="soft"
        />
      </div>

      <div class="flex gap-8">
        <ul class="w-1/2">
          <li class="mb-4 flex items-center gap-4 last-of-type:mb-0">
            <div class="flex w-2/3 items-end gap-1">
              <span class="text-neutral-60">Фамилия </span>
              <span class="border-neutral-70 inline-block w-full border border-dashed" />
            </div>
            <span>Маликова</span>
          </li>

          <li class="flex items-center gap-4">
            <div class="flex w-2/3 items-end gap-1">
              <span class="text-neutral-60">Пол </span>
              <span class="border-neutral-70 inline-block w-full border border-dashed" />
            </div>
            <span>Женский</span>
          </li>
        </ul>

        <ul class="w-1/2" />
      </div>

      <UButton
        class="self-end"
        label="Редактировать"
        variant="soft"
      />
    </div>
  </div>
</template>

<style scoped>
.title-block {
  background-color: #00905e;
  border-radius: 20px;
}
.distance-icon {
  width: 52px;
  height: 52px;
  padding: 13px;
  background-color: #f0fff6;
  border-radius: 50%;
}
</style>
