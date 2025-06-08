<script setup lang="ts">
import { object, string } from 'yup';
import type { FormSubmitEvent } from '#ui/types';

interface LoginFormProps {
  onSubmit: (event: FormSubmitEvent<{ email: string }>) => Promise<void>;
  isLoading: boolean;
}
const {t} = useI18n()

const schema = object({
  email: string().email(t('incorrect-email')).required(t('required-field')),
});

defineProps<LoginFormProps>();

const state = reactive<{ email: string }>({
  email: '',
});
</script>

<template>
  <div class="rounded-2xl bg-white px-10 py-8 max-md:p-3">
    <h4 class="mb-6 text-xl font-semibold">{{t('login')}}</h4>

    <UForm
      :schema="schema"
      class="mb-10 flex flex-col gap-6"
      :state="state"
      :validate-on="['change']"
      @submit="onSubmit"
    >
      <UFormField
        :label="t('email')"
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
        :loading="isLoading"
      >
        {{t('continue')}}
      </UButton>
    </UForm>

    <p class="text-sm">
      {{t('continue-condition')}}
      <a
        class="text-accent-40"
        href="#"
      >
        {{t('user-agreement')}}
      </a>
      {{t('confirm-user')}}
      <a
        class="text-accent-40"
        href="#"
      >
        {{t('politic-user')}}
      </a>
    </p>
  </div>
</template>

<style scoped></style>
