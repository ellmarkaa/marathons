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
const verifyModal = ref(false);
const searchMode = defineModel<boolean>({ required: true });

const openVerifyModal = () => (verifyModal.value = true);

const handleChangeMode = () => {
  searchMode.value = !searchMode.value;
};

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
  <div class="flex items-center justify-between max-lg:flex-col max-lg:gap-y-3 max-md:flex-row">
    <div class="flex items-center">
      <div class="mr-14 max-lg:mr-7 max-sm:mr-0">
        <LayoutLogo />
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

    <div class="flex items-center gap-x-4 self-end max-lg:self-center max-sm:gap-x-3">
      <UButton
        variant="soft"
        icon="material-symbols:search-rounded"
        @click="handleChangeMode"
      />
      <LayoutHeaderMenu
        v-model="openMenu"
        @close-menu="handleCloseMenu"
      >
        <UButton
          variant="soft"
          icon="tabler:menu-deep"
          class="menu-icon hidden max-md:inline-flex"
          @click="handleOpenMenu"
        />
      </LayoutHeaderMenu>

      <LayoutLoginModal
        :open-verify-modal="openVerifyModal"
        @submit-form="openVerifyModal"
      >
        <UButton
          icon="cuida:user-outline"
          variant="soft"
        />
      </LayoutLoginModal>

      <LayoutVerifyModal v-model:open="verifyModal" />

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
  </div>
</template>

<style scoped>
.menu-icon {
  transform: rotateY(-180deg);
}
</style>
