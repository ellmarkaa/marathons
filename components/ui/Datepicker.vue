<script setup lang="ts">
import { type CalendarDate, DateFormatter, getLocalTimeZone } from '@internationalized/date';

const df = new DateFormatter('ru', {
  dateStyle: 'medium',
});

const model = defineModel<CalendarDate | null>();
defineProps<{ placeholder: string }>();
</script>

<template>
  <div>
    <UPopover>
      <UInput
        :model-value="model ? df.format(model?.toDate(getLocalTimeZone())) : placeholder"
        :placeholder="placeholder"
        trailing-icon="cuida:calendar-outline"
        class="w-full"
        :ui="{
          base: 'text-left text-input-placeholder cursor-pointer',
        }"
      />

      <template #content>
        <UCalendar
          v-model="model"
          class="p-2"
        />
      </template>
    </UPopover>
  </div>
</template>

<style scoped></style>
