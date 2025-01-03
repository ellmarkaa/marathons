<script setup lang="ts">
interface CheckboxProps {
  modelValue: boolean; // Bound value for v-model
  disabled?: boolean;
  id?: string;
  label?: string;
}

const props = withDefaults(defineProps<CheckboxProps>(), {
  disabled: false,
  id: '',
  label: ''
});
const id = useId();
const emits = defineEmits(["update:modelValue"]);

const handleChange = (event: Event) => {
  event.preventDefault();
  emits("update:modelValue", (event.target as HTMLInputElement).checked);
};
</script>

<template>
  <div class="inline-flex items-center gap-2">
    <label class="flex items-center cursor-pointer relative">
      <input
        :disabled="props.disabled"
        @change="handleChange"
        type="checkbox"
        :value="modelValue"
        :checked="false"
        class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-primary-70 checked:bg-accent-50 checked:border-accent-50"
        :id="props.id || id"
        :class="{'disabled:bg-primary-90': disabled, 'disabled:cursor-not-allowed': disabled, 'disabled:checked:border-0': disabled}"
      />
      <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      <IconChecked v-if="modelValue" />
    </span>
    </label>

    <label
      v-if="!!label"
      :for="props.id || id"
      class="text-base"
      :class="{'text-neutral-0': modelValue, 'text-neutral-50': !modelValue}"
    >
      {{label}}
    </label>
  </div>
</template>

<style scoped>
</style>
