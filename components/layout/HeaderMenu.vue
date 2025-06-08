<script setup lang="ts">
defineEmits(['close-menu']);
const model = defineModel<boolean>({ required: true });
const contactClick = () => {
  setTimeout(() => {
    const button = document.querySelector('#consultation-button');
    model.value = false;
    if (button) {
      button?.click();
    }
  }, 500);
};
const { t } = useI18n();
</script>

<template>
  <UDrawer
    v-model:open="model"
    :handle="false"
    :ui="{
      header: 'flex items-center justify-between py-3 px-4',
      content: 'gap-0 h-4/5',
      container: 'p-0 h-full',
      body: 'px-4 pt-6 bg-main-gray grow',
      footer: 'px-4 pt-4 pb-8',
    }"
  >
    <slot />

    <template #header>
      <NuxtLink
        to="/"
        @click="$emit('close-menu')"
      >
        <img
          src="/logo.svg"
          alt="4lmnts"
          class="logo"
        />
      </NuxtLink>

      <UButton
        variant="soft"
        icon="material-symbols:close-rounded"
        @click="$emit('close-menu')"
      />
    </template>

    <template #body>
      <ul class="m-0 flex list-none flex-col gap-5 p-0 text-base">
        <li
          class="font-semibold"
          @click="model = false"
        >
          <NuxtLink to="/about">{{ t('about') }}</NuxtLink>
        </li>
        <li
          class="font-semibold"
          @click="model = false"
        >
          <NuxtLink to="/agreement">{{ t('agreement') }}</NuxtLink>
        </li>
        <li
          class="font-semibold"
          @click="contactClick"
        >
          <NuxtLink to="/">{{ t('contact') }}</NuxtLink>
        </li>
      </ul>
    </template>

    <template #footer>
      <div class="border-main-gray border-b pb-4">
        <a
          href="tel:+77059889944"
          class="text-lg font-semibold"
          >+7 705 988 99 44</a
        >
      </div>

      <div class="mt-4">
        <div class="langs">
          <span
            tabindex="-1"
            class="lang"
            >KZ</span
          >
          <span
            tabindex="-1"
            class="lang text-accent-50"
            >RU</span
          >
          <span
            tabindex="-1"
            class="lang"
            >EN</span
          >
        </div>
      </div>
    </template>
  </UDrawer>
</template>

<style scoped>
.langs {
  border-radius: 8px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12);
  padding: 10px;
  display: inline-flex;
}
.lang {
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  padding: 2px 6px;
  border-right: 1px solid rgba(0, 0, 0, 0.05);
}
.lang:last-child {
  border-right: none;
}
</style>
