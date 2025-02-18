<script setup lang="ts">
interface RadioButtonProps {
  name: string;
  radioValue: string | number;
  label?: string;
  id?: string | number;
}

defineProps<RadioButtonProps>();
const model = defineModel<string | number>({ required: true });
const randomId = useId();
</script>

<template>
  <div class="inline-flex items-center">
    <label
      class="relative flex cursor-pointer items-center"
      :for="id || randomId"
    >
      <input
        :id="id || randomId"
        :name="name"
        type="radio"
        class="peer border-neutral-0 checked:border-accent-50 size-5 cursor-pointer appearance-none rounded-full transition-all"
        :value="radioValue"
        :checked="model === radioValue"
      >
      <span
        class="bg-accent-50 absolute top-1/2 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full opacity-0 transition-opacity duration-200 peer-checked:opacity-100"
      />
    </label>

    <label
      v-if="!!label"
      class="ml-2 cursor-pointer text-sm text-slate-600"
      :for="id || randomId"
    >
      {{ label }}
    </label>
  </div>
</template>

<style scoped>
.peer {
  border-width: 2.5px;
}
</style>
