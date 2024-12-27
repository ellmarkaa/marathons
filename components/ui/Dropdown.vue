<script setup lang="ts">
import type {IDropdownItems} from "~/utils/types";

interface DropdownProps {
  items?: IDropdownItems[];
  value?: any;
  onChange?: (value: any) => void;
}

const commonClass = 'absolute z-10 overflow-auto rounded-lg border border-slate-200 bg-white p-2.5 shadow-lg shadow-sm focus:outline-none transition-opacity duration-300';
const activeClass = 'opacity-1';
const unActiveClass = 'pointer-events-none opacity-0';

const props = withDefaults(defineProps<DropdownProps>(), {
  items: () => [],
  value: null
});

const open = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);
const finalClass = computed(() => {
  const currentClass = open.value ? activeClass : unActiveClass;
  return `${commonClass} ${currentClass}`;
})

const onSlotClick = () => {
  open.value = !open.value;
};

const itemClick = (value: any) => {
  open.value = false;
  if (props.onChange) props.onChange(value);
};

// Функция для обработки кликов вне dropdown
const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    open.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div class="relative">
    <div class="inline-block" @click.stop="onSlotClick">
      <slot/>
    </div>
    <ul
      ref="dropdownRef"
      role="menu"
      data-popover="menu"
      data-popover-placement="bottom"
      :class="finalClass"
    >
      <li
        v-for="item of props.items"
        :key="item.value"
        role="menuitem"
        class="cursor-pointer text-primary-0 text-xl font-semibold flex items-center px-2 py-1 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 border-b last:border-b-0"
        :class="props.value === item.value && 'text-accent-50'"
        @click="itemClick(item.value)"
      >
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
