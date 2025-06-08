<script setup lang="ts">
import { useAuthStore } from '~/stores/auth/store';

type Props = {
  email: null | string;
  onVerify: (codeArr: string[]) => Promise<void>;
  backToLogin: () => void;
};

const pinValue = ref([]);
const authStore = useAuthStore();
const props = defineProps<Props>();
const tryAgain = ref(59);
const toast = useToast();
const { t } = useI18n();

const countDown = () => {
  setTimeout(() => {
    if (tryAgain.value > 0) {
      tryAgain.value = tryAgain.value - 1;
      countDown();
    }
  }, 1000);
};

onMounted(() => {
  countDown();
});

onBeforeUnmount(() => {
  tryAgain.value = 0;
});

function pad(num: number) {
  if (num <= 9) {
    return '0' + num.toString();
  }

  return num;
}

const onSubmit = () => {
  props.onVerify(pinValue.value);
};

const sendAgain = () => {
  tryAgain.value = 59;
  countDown();
  authStore.otp(props.email as string);
  toast.add({
    title: 'Отправили код на почту.',
  });
};
</script>

<template>
  <div class="rounded-2xl bg-white px-10 py-8 max-md:p-3">
    <h4 class="mb-3 text-xl font-semibold">
      {{ t('send-code') }} {{ email }}
      <UButton
        variant="link"
        size="2xs"
        class="align-middle"
        icon="mdi-light:pencil"
        color="neutral"
        @click="backToLogin"
      />
    </h4>
    <p class="text-neutral-40 mb-8 text-base">{{ t('confirm-reg') }}</p>
    <UAlert
      v-if="!!authStore.verifyError"
      class="mb-4"
      color="error"
      :title="authStore.verifyError"
    />

    <form @submit.prevent="onSubmit">
      <UFormField
        class="mb-8"
        :label="t('one-code')"
        :ui="{
          label: 'text-neutral-40',
          help: 'text-neutral-40 text-base',
        }"
      >
        <UPinInput
          v-model="pinValue"
          otp
          :length="4"
          size="xl"
          type="number"
          autofocus
        />
        <p
          v-if="tryAgain !== 0"
          class="text-neutral-40 text-base"
        >
          {{ t('send-again-sec') }} 0:{{ pad(tryAgain) }}
        </p>
        <UButton
          v-else
          class="mt-1 block p-0"
          variant="link"
          type="button"
          @click="sendAgain"
        >
          {{ t('send-again') }}
        </UButton>
      </UFormField>

      <UButton
        block
        type="submit"
        :disabled="pinValue.length !== 4"
        :loading="authStore.otpLoading"
      >
        {{ t('continue') }}
      </UButton>
    </form>
  </div>
</template>

<style scoped></style>
