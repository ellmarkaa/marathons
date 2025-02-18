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
  label: '',
});
const random = useId();
const emits = defineEmits(['update:modelValue']);

const handleChange = (event: Event) => {
  event.preventDefault();
  emits('update:modelValue', (event.target as HTMLInputElement).checked);
};
</script>

<template>
  <div class="inline-flex items-center gap-2">
    <label class="relative flex cursor-pointer items-center">
      <input
        :id="props.id || random"
        :disabled="props.disabled"
        type="checkbox"
        :value="modelValue"
        :checked="false"
        class="peer border-primary-70 checked:border-accent-50 checked:bg-accent-50 h-5 w-5 cursor-pointer appearance-none rounded border shadow transition-all hover:shadow-md"
        :class="{
          'disabled:bg-primary-90': disabled,
          'disabled:cursor-not-allowed': disabled,
          'disabled:checked:border-0': disabled,
        }"
        @change="handleChange"
      >
      <span
        class="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white opacity-0 peer-checked:opacity-100"
      >
        <IconChecked v-if="modelValue" />
      </span>
    </label>

    <label
      v-if="!!label"
      :for="props.id || id"
      class="text-base"
      :class="{ 'text-neutral-0': modelValue, 'text-neutral-50': !modelValue }"
    >
      {{ label }}
    </label>
  </div>
</template>

<style scoped></style>
