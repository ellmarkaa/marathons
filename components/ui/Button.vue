<script setup lang="ts">
import type { ButtonTypes } from '~/utils/types';

interface ButtonProps {
  type?: ButtonTypes;
  disabled?: boolean;
  iconOnly?: boolean;
  onClick?: (e: MouseEvent) => void;
}

const typeStyles: Record<ButtonTypes, string> = {
  filled: '',
  outlined:
    'border border-neutral-60 text-neutral-0 shadow-sm hover:shadow-lg disabled:shadow-none hover:text-accent-50 hover:border-accent-50 focus:border-accent-0 focus:text-accent-0 focus:bg-accent-0 active:border-primary-50 active:text-accent-0 disabled:text-neutral-50 outlined',
  tonal:
    'bg-primary-80 text-primary-0 shadow-md hover:shadow-lg focus:shadow-none active:shadow-none disabled:shadow-none tonal',
};
let paddings = 'px-6 py-3';

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'tonal',
  disabled: false,
  iconOnly: false,
  onClick: undefined,
});

if (props.iconOnly) {
  paddings = 'py-3 px-3';
}
const buttonClass = `${typeStyles[props.type]} ${paddings}`;
</script>
<template>
  <button
    type="button"
    :disabled="disabled"
    class="button rounded-xl text-center text-sm font-medium transition-all disabled:cursor-not-allowed"
    :class="buttonClass"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<style scoped>
.button {
}

.tonal {
}
.tonal:hover {
  background-color: #1d192b14;
}
.tonal:focus {
  background-color: rgba(29, 25, 43, 0.12);
}
.tonal:disabled {
  background-color: rgba(29, 27, 32, 0.12);
  opacity: 0.38;
}

.outlined {
}
.outlined:focus {
  background-color: #6076981f;
}
.outlined:active {
  background-color: #6076981f;
}
.outlined:disabled {
  border-color: rgba(0, 15, 60, 0.12);
  opacity: 0.38;
}
</style>
