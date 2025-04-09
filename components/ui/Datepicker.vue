<script setup lang="ts">
import type { DateValue } from '@internationalized/date';
import { df } from '~/utils/date';

const model = defineModel<DateValue | null>();
defineProps<{ placeholder: string; disabled?: boolean }>();
</script>

<template>
  <div>
    <UPopover>
      <div
        class="datepicker-input flex h-12 w-full cursor-pointer items-center justify-between py-3.5 pr-3 pl-4"
        role="button"
        :tabindex="0"
      >
        <span :class="model ? 'text-black' : 'text-input-placeholder'">{{
          model ? df.format(model.toDate()) : placeholder
        }}</span>
        <UIcon
          name="cuida:calendar-outline"
          class="size-6"
        />
      </div>

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

<style scoped>
.datepicker-input {
  border: 1px solid #c6c6c6;
  border-radius: 20px;
}
</style>
