<script setup lang="ts">
import { DateFormatter, type DateValue, getLocalTimeZone } from '@internationalized/date';

const df = new DateFormatter('ru', {
  dateStyle: 'medium',
});

const model = defineModel<DateValue | null>();
defineProps<{ placeholder: string; disabled?: boolean }>();

const timeZone = getLocalTimeZone();
</script>

<template>
  <div>
    <UPopover>
      <UInput
        :model-value="model ? df.format(model.toDate(timeZone)) : ''"
        :placeholder="placeholder"
        trailing-icon="cuida:calendar-outline"
        :disabled="disabled"
        class="w-full"
        :ui="{
          base: `text-left cursor-pointer ${model ? 'text-black' : 'text-input-placeholder'}`,
        }"
      />

      <template #content>
        <UCalendar
          :disabled="disabled"
          :model-value="model"
          class="p-2"
          @update:model-value="val => (model = val)"
        />
      </template>
    </UPopover>
  </div>
</template>

<style scoped></style>
