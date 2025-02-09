<script setup lang="ts">
import type { InferType } from 'yup';
import { object, string } from 'yup';
import type { FormSubmitEvent } from '#ui/types';
import { useAuthStore } from '~/stores/auth/store';

const schema = object({
  email: string().email('Не правильный формат почты').required('Обязательное поле'),
});
type Schema = InferType<typeof schema>;

const authStore = useAuthStore();
const emit = defineEmits(['submit-form']);

const openLoginModal = ref(false);
const state = reactive({
  email: '',
});
console.log('authStore.otpLoading', authStore.otpLoading);

const closeModal = () => {
  openLoginModal.value = false;
};

async function onSubmit(event: FormSubmitEvent<Schema>) {
  const { data } = await useAsyncData('otp', () => authStore.otp(event.data.email));
  if (data.value === 200) {
    closeModal();
    emit('submit-form');
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
      <div class="rounded-2xl bg-white px-10 py-8">
        <h4 class="mb-6 text-xl font-semibold">Войти в аккаунт</h4>

        <UForm
          :schema="schema"
          class="mb-10 flex flex-col gap-6"
          :state="state"
          :validate-on="['change']"
          @submit="onSubmit"
        >
          <UFormField
            label="Электронная почта"
            name="email"
          >
            <UInput
              v-model="state.email"
              class="w-full"
            />
          </UFormField>

          <UButton
            block
            :disabled="!state.email || authStore.otpLoading"
            type="submit"
          >
            Продолжить
          </UButton>
        </UForm>

        <p class="text-sm">
          Нажимая «Продолжить», вы подтверждаете свое согласие с условиями
          <a
            class="text-accent-40"
            href="#"
          >
            пользовательского соглашения
          </a>
          и подтверждаете, что ознакомлены с
          <a
            class="text-accent-40"
            href="#"
          >
            политикой конфиденциальности
          </a>
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
