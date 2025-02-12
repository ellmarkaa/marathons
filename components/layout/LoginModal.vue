<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types';
import { useAuthStore } from '~/stores/auth/store';

const authStore = useAuthStore();

const openLoginModal = ref(false);
const verifyMode = ref(false);

const closeModal = () => {
  openLoginModal.value = false;
};

async function onSubmit(event: FormSubmitEvent) {
  const { data } = await useAsyncData('otp', () => authStore.otp(event.data.email));
  if (data.value === 200) {
    verifyMode.value = true;
  }
}
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
          :disabled="authStore.otpLoading"
          @click="closeModal"
        />
      </div>
    </template>

    <template #body>
      <LayoutVerifyForm v-if="verifyMode" />
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
