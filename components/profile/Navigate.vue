<script setup lang="ts">
import type { IUserOptions } from '~/stores/auth/types';
import type { IProfileMenu } from '~/utils/types';

const authStore = useAuthStore();
const userOption = authStore.user?.options as IUserOptions;
const user = authStore.user;
const menu = defineModel<IProfileMenu[]>('menu', { required: true });

const handleChangeMenu = (label: string) => {
  menu.value.forEach(element => {
    element.isActive = label === element.label;
  });
};
</script>

<template>
  <div class="rounded-2xl bg-white px-6 py-10">
    <div class="border-b-input-border border-b pb-6 text-center">
      <h4 class="text-accent-50 mb-2 text-lg font-semibold">Привет, {{ userOption?.name }}!</h4>
      <p class="text-neutral-60">{{ user?.value }}</p>
    </div>

    <ul
      class="border-b-input-border border-b py-3"
      style="width: 264px"
    >
      <li
        v-for="element in menu"
        :key="element.label"
        class="flex cursor-pointer items-center gap-2 px-4 py-2"
        :class="element.isActive && 'active-item'"
        @click="handleChangeMenu(element.label)"
      >
        <UIcon
          :name="element.icon"
          class="size-5"
        />
        {{ element.label }}
      </li>
    </ul>

    <div class="mt-3">
      <UButton
        icon="material-symbols:arrow-right-alt-rounded"
        label="Выйти из аккаунта"
        variant="link"
        :ui="{
          base: ['text-neutral-10 px-4 py-2 hover:text-neutral-10 gap-2 font-normal'],
        }"
      />
    </div>
  </div>
</template>

<style scoped>
.active-item {
  background-color: #f4f8fb;
}
</style>
