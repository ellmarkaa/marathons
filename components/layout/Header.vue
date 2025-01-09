<script setup lang="ts">
import type { IDropdownItems } from '~/utils/types';

const items: IDropdownItems[] = [
  {
    value: 'KZ',
    label: 'KZ',
  },
  {
    value: 'RU',
    label: 'RU',
  },
  {
    value: 'EN',
    label: 'EN',
  },
];

const lang = ref('RU');
const openMenu = ref(false);

const onChange = (value: string) => {
  lang.value = value;
};
const handleOpenMenu = () => {
  openMenu.value = true;
};
const handleCloseMenu = () => {
  openMenu.value = false;
};
</script>

<template>
  <header class="py-6 bg-white header">
    <UContainer class="flex items-center justify-between max-lg:flex-col max-lg:gap-y-3 max-md:flex-row">
      <div class="flex items-center">
        <div class="mr-14 max-sm:mr-0 max-lg:mr-7">
          <img
            src="/logo.svg"
            alt="4lmnts"
            class="logo"
          >
        </div>

        <nav class="max-md:hidden">
          <ul class="m-0 flex list-none gap-x-8 p-0 text-base">
            <li class="font-semibold">Компания</li>
            <li class="font-semibold">События</li>
            <li class="font-semibold">Виза/Страховка</li>
            <li class="font-semibold">Связаться</li>
          </ul>
        </nav>
      </div>

      <div class="flex items-center gap-x-4 self-end max-sm:gap-x-3 max-lg:self-center">
        <UButton variant="soft" icon="material-symbols:search-rounded" />
        <LayoutHeaderMenu v-model="openMenu" @close-menu="handleCloseMenu">
          <UButton
            variant="soft"
            icon="tabler:menu-deep"
            class="hidden max-md:inline-flex"
            @click="handleOpenMenu"
          />
        </LayoutHeaderMenu>
        <UButton variant="soft" class="max-sm:hidden">Войти</UButton>

        <Dropdown
          :items="items"
          value="RU"
          :on-change="onChange"
          class="max-sm:hidden"
        >
          <a
            href="#"
            class="m-0 flex cursor-pointer items-center text-xl font-semibold"
          >
            {{ lang }}
            <IconArrowDown />
          </a>
        </Dropdown>
      </div>
    </UContainer>
  </header>
</template>

<style scoped>
.header {
  box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.08);
}
@media (width < 470px) {
  .logo {
    width: 140px;
    height: auto;
  }
}
</style>
