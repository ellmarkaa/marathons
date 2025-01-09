<script setup lang="ts">
interface RadioButtonProps {
  name: string;
  radioValue: string | number;
  label?: string;
  id?: string | number;
}

defineProps<RadioButtonProps>();
const model = defineModel<string | number>({required: true});
const randomId = useId();
</script>

<template>
  <div class="inline-flex items-center">
    <label class="relative flex items-center cursor-pointer" :for="id || randomId">
      <input
        :id="id || randomId"
        :name="name"
        type="radio"
        class="peer size-6 cursor-pointer appearance-none rounded-full border-neutral-0 checked:border-accent-50 transition-all"
        :value="radioValue"
        :checked="model === radioValue"
      >
      <span class="absolute bg-accent-50 size-3.5 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
    </label>

    <label
      v-if="!!label"
      class="ml-2 text-slate-600 cursor-pointer text-sm"
      :for="id || randomId"
    >
      {{label}}
    </label>
  </div>
</template>

<style scoped>
.peer {
  border-width: 2.5px;
}
</style>
