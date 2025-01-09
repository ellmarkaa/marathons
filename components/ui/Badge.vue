<script setup lang="ts">
type BadgeColors = 'red' | 'black' | 'green' | 'blue' | 'orange';
interface BadgeProps {
  color: BadgeColors;
}

const badgeStyles: Record<BadgeColors, string> = {
  black: 'badge-black',
  blue: 'badge-blue',
  green: 'badge-green',
  red: 'badge-red',
  orange: 'badge-orange',
};

defineProps<BadgeProps>();
</script>

<template>
  <span
    class="inline-block rounded-lg px-2.5 py-1.5 font-medium text-white"
    :class="badgeStyles[color]"
  >
    <slot />
  </span>
</template>

<style scoped>
.badge-black {
  background: linear-gradient(90deg, rgb(9, 22, 45), rgb(99, 98, 98) 100%);
}
.badge-blue {
  background: linear-gradient(90deg, rgb(27, 106, 238), rgb(18, 162, 252) 100%);
}
.badge-green {
  background: linear-gradient(90deg, rgb(64, 189, 168), rgb(28, 206, 114) 100%);
}
.badge-red {
  background: linear-gradient(270deg, rgb(199, 25, 17), rgb(253, 13, 13) 100%);
}
.badge-orange {
  background: linear-gradient(90deg, rgb(239, 124, 62) 4.615%, rgb(253, 160, 5) 55.646%, rgb(236, 220, 38) 100%);
}
</style>
