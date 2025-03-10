<script setup lang="ts">
import { useAuthStore } from '~/stores/auth/store';
import type { FormSubmitEvent } from '#ui/types';

const authStore = useAuthStore();

const openLoginModal = ref(false);
const verifyMode = ref(false);
const verifyEmail = ref<null | string>(null);

const closeModal = () => {
  openLoginModal.value = false;
};

async function onSubmit(event: FormSubmitEvent<{ email: string }>) {
  const { data } = await useAsyncData('otp', () => authStore.otp(event.data.email));
  if (data.value === 200) {
    verifyEmail.value = event.data.email;
    verifyMode.value = true;
  }
}

async function onVerify(codeArr: string[]) {
  if (verifyEmail.value) {
    let code = '';
    codeArr.forEach(el => (code = code + el));

    const { data } = await useAsyncData('verify', () =>
      authStore.verify({
        code: parseInt(code, 10),
        email: verifyEmail.value as string,
      }),
    );

    if (data.value?.value === verifyEmail.value) {
      closeModal();
      if (!data.value?.options.is_registered) navigateTo('/register');
    }
  }
}

const backToLogin = () => {
  verifyMode.value = false;
};
</script>

<template>
  <UModal
    v-model:open="openLoginModal"
    :ui="{ content: 'bg-secondary-bg sm:max-w-[532px]' }"
  >
    <template #header>
      <div class="relative w-full">
        <img
          src="/imgs/login-header.jpeg"
          alt="marathon"
          class="login-image"
        />
        <UButton
          variant="soft"
          icon="material-symbols:close-rounded"
          class="absolute top-2 right-2"
          :disabled="authStore.otpLoading"
          @click="closeModal"
        />
      </div>
    </template>

    <template #body>
      <LayoutVerifyForm
        v-if="verifyMode"
        :email="verifyEmail"
        :on-verify="onVerify"
        :back-to-login="backToLogin"
      />
      <LayoutLoginForm
        v-else
        :is-loading="authStore.otpLoading"
        :on-submit="onSubmit"
      />
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
