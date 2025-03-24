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

    <div class="rounded-xl bg-white p-6">
      <div>
        <h4 />
        <UButton />
      </div>
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
