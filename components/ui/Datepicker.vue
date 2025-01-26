<script setup lang="ts"></script>

<template>
  <div>
    <UPopover>
      <UInput
        model-value="ДД/ММ/ГГГГ"
        trailing-icon="cuida:calendar-outline"
        class="w-full"
        :ui="{
          base: 'text-left text-input-placeholder cursor-pointer',
        }"
      />

      <template #content>
        <UCalendar class="p-2" />
      </template>
    </UPopover>
  </div>
</template>

<style scoped></style>
