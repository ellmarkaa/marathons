<script setup lang="ts">
import { object, string } from 'yup';

interface LoginFormProps {
  onSubmit: (event: FormSubmitEvent) => Promise<void>;
  isLoading: boolean;
}

const schema = object({
  email: string().email('Не правильный формат почты').required('Обязательное поле'),
});

defineProps<LoginFormProps>();

const state = reactive<LoginFormProps>({
  email: '',
});
</script>

<template>
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
        :disabled="!state.email || isLoading"
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

<style scoped></style>
