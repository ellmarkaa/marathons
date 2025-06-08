<script setup lang="ts">
import type { IDropdownItems } from '~/utils/types';
import type { DropdownMenuItem } from "#ui/components/DropdownMenu.vue";

// const items: IDropdownItems[] = [
//   {
//     value: 'KZ',
//     label: 'KZ',
//   },
//   {
//     value: 'RU',
//     label: 'RU',
//   },
//   {
//     value: 'EN',
//     label: 'EN',
//   },
// ];
const { locales, setLocale, locale } = useI18n()
console.log('locales', locales.value);
const items = computed<DropdownMenuItem[]>(() => locales.value.map(l => ({
  label: l.name,
  value: l.code,
  onSelect: () => setLocale(l.code)
})))

const authStore = useAuthStore();
const lang = ref('RU');
const openMenu = ref(false);
// const searchMode = defineModel<boolean>({ required: true });
// const handleChangeMode = () => {
//   searchMode.value = !searchMode.value;
// };

const onChange = (value: string) => {
  lang.value = value;
};
const handleOpenMenu = () => {
  openMenu.value = true;
};
const handleCloseMenu = () => {
  openMenu.value = false;
};
const contactClick = () => {
  setTimeout(() => {
    const button = document.querySelector('#consultation-button')
    if (button) {
      button?.click()
    }
  }, 500)
}
const {t} = useI18n()
</script>

<template>
  <div class="flex items-center justify-between max-lg:flex-col max-lg:gap-y-3 max-md:flex-row">
    <div class="flex items-center">
      <div class="mr-14 max-lg:mr-7 max-sm:mr-0">
        <LayoutLogo />
      </div>

      <nav class="max-md:hidden">
        <ul class="m-0 flex list-none gap-x-8 p-0 text-base">
          <li class="font-semibold"><NuxtLink to="/about">{{t('about')}}</NuxtLink></li>
          <li class="font-semibold"><NuxtLink to="/agreement">{{t('agreement')}}</NuxtLink></li>
          <li class="font-semibold" @click="contactClick"><NuxtLink to="/">{{t('contact')}}</NuxtLink></li>
        </ul>
      </nav>
    </div>

    <div class="flex items-center gap-x-4 self-end max-lg:self-center max-sm:gap-x-3">
      <!--      <UButton-->
      <!--        variant="soft"-->
      <!--        icon="material-symbols:search-rounded"-->
      <!--        @click="handleChangeMode"-->
      <!--      />-->
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

      <LayoutLoginModal v-if="!authStore.user" v-model:open="authStore.openLogin">
        <UButton
          icon="cuida:user-outline"
          variant="soft"
        />
      </LayoutLoginModal>
      <UButton
        v-else
        icon="cuida:user-outline"
        class="bg-accent-50 hover:bg-accent-50"
        @click="navigateTo('/profile')"
      />

      <UDropdownMenu
        :items="items"
        :content="{
          align: 'start',
          side: 'bottom',
          sideOffset: 8
        }"
        :ui="{content: 'w-48'}"
      >
        <UButton
          size="xl"
          :label="locale.toUpperCase()"
          trailing-icon="material-symbols:keyboard-arrow-down-rounded"
          variant="link"
          :ui="{label: 'font-bold text-primary-0', trailingIcon: 'text-primary-0'}"
        />
      </UDropdownMenu>
    </div>
  </div>
</template>

<style scoped>
.menu-icon {
  transform: rotateY(-180deg);
}
</style>
