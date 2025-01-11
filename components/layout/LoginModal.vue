<script setup lang="ts">
const openLoginModal = ref(false);

const state = reactive({
  email: '',
  password: ''
})

const closeModal = () => {
  openLoginModal.value = false;
};

</script>

<template>
  <UModal
    v-model:open="openLoginModal as boolean"
    :ui="{
      content: 'bg-secondary-bg sm:max-w-[532px]'
    }"
  >
    <template #header>
      <div class="relative">
        <img src="/imgs/login-header.jpeg" alt="marathon" class="login-image" >
        <UButton
          variant="soft"
          icon="material-symbols:close-rounded"
          class="absolute top-2 right-2"
          @click="closeModal"
        />
      </div>
    </template>

    <template #body>
      <div class="px-10 py-8 bg-white rounded-2xl">
        <h4 class="text-xl font-semibold mb-6">Войти в аккаунт</h4>

        <UForm class="flex flex-col gap-6 mb-8" :state="state">
          <UFormField label="Электронная почта">
            <UInput class="w-full" />
          </UFormField>

          <UFormField label="Пароль">
            <InputPassword />
          </UFormField>

          <div class="flex flex-col items-end">
            <UButton block class="mb-3">Войти</UButton>
            <NuxtLink to="/" class="pr-4 py-1">Забыли пароль?</NuxtLink>
          </div>
        </UForm>

        <div class="bg-secondary-bg px-8 py-4 rounded-xl flex flex-col gap-4 items-center">
          <NuxtLink to="/" class="text-base">У вас нет аккаунта?</NuxtLink>
          <UButton variant="outline" block>Создать аккаунт</UButton>
        </div>
      </div>
    </template>

    <slot />


  </UModal>
</template>

<style scoped>
.login-image {
  height: 136px;
  border-radius: 1rem;
  width: 100%;
  object-fit: cover;
}
</style>
