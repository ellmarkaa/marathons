<script setup lang="ts">
import type { IProfileMenu } from '~/utils/types';
definePageMeta({
  middleware: 'auth',
});
const { t } = useI18n();

const menuList: Ref<IProfileMenu[]> = ref([]);

onMounted(() => {
  menuList.value = [
    {
      label: t('profile'),
      icon: 'cuida:user-outline',
      isActive: true,
      name: 'profile',
    },
    {
      label: t('my-orders'),
      icon: 'mdi:shopping-outline',
      isActive: false,
      name: 'orders',
    },
    {
      label: t('favorite'),
      icon: 'fluent:bookmark-16-regular',
      isActive: false,
      name: 'favorite',
    }
  ]
})

const activeEl = computed(() => {
  return menuList.value.find(el => el.isActive);
});
</script>

<template>
  <div>adsf</div>
</template>

<style scoped></style>
