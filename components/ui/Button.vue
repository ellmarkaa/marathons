<script setup lang="ts">
import type { ButtonTypes } from '~/utils/types';
import type { PaddingType } from '~/utils/padding';

interface ButtonProps {
  type?: ButtonTypes;
  disabled?: boolean;
  iconOnly?: boolean;
  onClick?: (e: MouseEvent) => void;
  long?: boolean;
  iconRight?: boolean;
}

const typeStyles: Record<ButtonTypes, string> = {
  filled: 'bg-primary-0 text-white filled',
  outlined:
    'border border-neutral-60 text-neutral-0 shadow-sm hover:shadow-lg disabled:shadow-none hover:text-accent-50 hover:border-accent-50 focus:border-accent-0 focus:text-accent-0 focus:bg-accent-0 active:border-primary-50 active:text-accent-0 disabled:text-neutral-50 outlined',
  tonal:
    'bg-primary-80 text-primary-0 shadow-md hover:shadow-lg focus:shadow-none active:shadow-none disabled:shadow-none tonal',
};
const paddings: PaddingType = {
  left: 6,
  right: 6,
  top: 3,
  bottom: 3,
};

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'tonal',
  disabled: false,
  iconOnly: false,
  onClick: undefined,
  long: false,
  iconRight: false,
});
let additionalClasses = '';

if (props.iconOnly) {
  paddings.bottom = 3;
  paddings.top = 3;
  paddings.right = 3;
  paddings.left = 3;
} else if (props.long) {
  paddings.right = 8;
  paddings.left = 8;

  if (props.iconRight) paddings.right = 6;
}

if (props.iconRight) {
  paddings.right = 6;
  additionalClasses = additionalClasses + 'flex items-center gap-2';
}

const buttonClass = `${typeStyles[props.type]} ${paddingToClass(paddings)} ${additionalClasses}`;
</script>
<template class="">
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
  background-color: #e1e1e2;
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

.filled {
}
.filled:hover {
  background-color: #4d505a;
  box-shadow: 0px 1px 2px 0px #000000;
  cursor: pointer;
}
.filled:focus {
  background-color: #63676f;
}
.filled:active {
  background-color: #64666f;
}
.filled:disabled {
  color: #8b91a5;
  background-color: #dee0e5;
}
</style>
