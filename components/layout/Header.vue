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
const onChange = (value: string) => {
  lang.value = value;
};
</script>

<template>
  <header class="container flex items-center justify-between py-6">
    <div class="flex items-center">
      <div class="mr-14">
        <img
          src="/logo.svg"
          alt="4lmnts"
        >
      </div>

      <nav>
        <ul class="m-0 flex list-none gap-x-8 p-0">
          <li class="text-base font-semibold">Компания</li>
          <li class="text-base font-semibold">События</li>
          <li class="text-base font-semibold">Виза/Страховка</li>
          <li class="text-base font-semibold">Связаться</li>
        </ul>
      </nav>
    </div>

    <div class="flex items-center gap-x-4 self-end">
      <Button icon-only>
        <IconSearch />
      </Button>

      <Button> Войти </Button>

      <Dropdown
        :items="items"
        value="RU"
        :on-change="onChange"
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
  </header>
</template>

<style scoped></style>
