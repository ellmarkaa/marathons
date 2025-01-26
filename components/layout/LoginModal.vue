<script setup lang="ts">
const openLoginModal = ref(false);

const state = reactive({
  email: '',
  password: '',
});

const closeModal = () => {
  openLoginModal.value = false;
};
</script>

<template>
  <UModal
    v-model:open="openLoginModal"
    :ui="{ content: 'bg-secondary-bg sm:max-w-[532px]' }"
  >
    <template #header>
      <div class="relative">
        <img
          src="/imgs/login-header.jpeg"
          alt="marathon"
          class="login-image"
        >
        <UButton
          variant="soft"
          icon="material-symbols:close-rounded"
          class="absolute top-2 right-2"
          @click="closeModal"
        />
      </div>
    </template>

    <template #body>
      <div class="rounded-2xl bg-white px-10 py-8">
        <h4 class="mb-6 text-xl font-semibold">Войти в аккаунт</h4>

        <UForm
          class="mb-10 flex flex-col gap-6"
          :state="state"
        >
          <UFormField label="Электронная почта">
            <UInput class="w-full" />
          </UFormField>

          <UButton block> Продолжить </UButton>
        </UForm>

        <p class="text-sm">
          Нажимая «Продолжить», вы подтверждаете свое согласие с условиями
          <a
            class="text-accent-40"
            href="#"
            >пользовательского соглашения</a
          >
          и подтверждаете, что ознакомлены с
          <a
            class="text-accent-40"
            href="#"
            >политикой конфиденциальности</a
          >
        </p>
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
