<script setup lang="ts">
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

const handleClick = () => {
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
  <div class="rounded-2xl bg-white px-10 py-8">
    <h4 class="mb-3 text-xl font-semibold">
      Отправили код на почту {{ email }}
      <UButton
        variant="link"
        size="2xs"
        class="align-middle"
        icon="mdi-light:pencil"
        color="neutral"
        @click="backToLogin"
      />
    </h4>
    <p class="text-neutral-40 mb-8 text-base">Введите его ниже, чтобы подтвердить вашу регистрацию</p>
    <UAlert
      v-if="!!authStore.verifyError"
      class="mb-4"
      color="error"
      :title="authStore.verifyError"
    />

    <UFormField
      class="mb-8"
      label="Одноразовый код"
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
      />
      <p
        v-if="tryAgain !== 0"
        class="text-neutral-40 text-base"
      >
        Отправить еще раз через 0:{{ pad(tryAgain) }}
      </p>
      <UButton
        v-else
        class="mt-1 block p-0"
        variant="link"
        @click="sendAgain"
      >
        Отправить еще раз
      </UButton>
    </UFormField>

    <UButton
      block
      type="button"
      :disabled="pinValue.length !== 4"
      @click="handleClick"
    >
      Продолжить
    </UButton>
  </div>
</template>

<style scoped></style>
