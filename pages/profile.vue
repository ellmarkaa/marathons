<script setup lang="ts">
import type { IProfileMenu } from '~/utils/types';
definePageMeta({
  middleware: 'auth',
});

const menuList = ref<IProfileMenu[]>([
  {
    label: 'Профиль',
    icon: 'cuida:user-outline',
    isActive: true,
    name: 'profile',
  },
  {
    label: 'Мои заказы',
    icon: 'mdi:shopping-outline',
    isActive: false,
    name: 'orders',
  },
  {
    label: 'История событии',
    icon: 'icon-park-outline:map-distance',
    isActive: false,
    name: 'history',
  },
  {
    label: 'Избранное',
    icon: 'fluent:bookmark-16-regular',
    isActive: false,
    name: 'favorite',
  },
]);

const activeEl = computed(() => {
  return menuList.value.find(el => el.isActive);
});
</script>

<template>
  <div style="background-color: #f6f9fc">
    <UContainer class="flex gap-x-6 pt-18 pb-30">
      <ProfileNavigate v-model:menu="menuList" />

      <ProfileInfo v-if="activeEl?.name === 'profile'" />
    </UContainer>
  </div>
</template>

<style scoped></style>
