<script setup lang="ts">
import type { IReview } from '~/stores/marathon/types';

defineProps<{ review: IReview }>();
const openModal = ref(false);
function formatMonthYearRu(dateStr: string): string {
  const date = new Date(dateStr);

  const formatter = new Intl.DateTimeFormat('ru-RU', {
    month: 'long',
    year: 'numeric',
  });

  const formatted = formatter.format(date); // например: "сентябрь 2019"

  // Разделим и сделаем первую букву месяца заглавной
  const [month, year] = formatted.split(' ');

  let capitalizedMonth = '';
  if (month) {
    capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);
  }

  return `${capitalizedMonth} ${year}`;
}
</script>

<template>
  <div
    class="review border-neutral-80 flex cursor-pointer flex-col gap-4 rounded-xl border px-8 py-6"
    @click="openModal = true"
  >
    <div class="flex items-center justify-between">
      <p class="text-base font-bold capitalize">
        {{ review.created_by.options.name }} {{ review.created_by.options.surname[0] }}.
      </p>
      <span class="text-neutral-20">{{ formatMonthYearRu(review.created_at) }}</span>
    </div>

    <p class="comment text-base text-neutral-50">
      {{ review.value }}
    </p>
  </div>

  <UModal
    v-model:open="openModal"
    title="Отзыв"
    :dismissible="true"
  >
    <template #body>
      <div class="border-neutral-80 rounded-xl border p-6">
        <div class="mb-4 flex items-center justify-between">
          <p class="text-base font-bold capitalize">
            {{ review.created_by.options.name }} {{ review.created_by.options.surname[0] }}.
          </p>
          <span class="text-neutral-20">{{ formatMonthYearRu(review.created_at) }}</span>
        </div>

        <p class="comment text-base">
          {{ review.value }}
        </p>
      </div>
    </template>
  </UModal>
</template>

<style scoped>
.review {
  width: 48%;
}
.comment {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Limit to 3 lines */
  -webkit-box-orient: vertical;
  transition: max-height 0.3s ease;
}
</style>
