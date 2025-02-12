<script setup lang="ts">

const pinValue = ref([]);

</script>

<template>
  <div class="rounded-2xl bg-white px-10 py-8">
    <h4 class="mb-3 text-xl font-semibold">Отправили код на почту lmnts@gmail.com <UButton variant="link" size="2xs" class="color-[var(--color-input-placeholder)]" icon="mdi-light:pencil" /></h4>
    <p class="text-base text-neutral-40 mb-8">Введите его ниже, чтобы подтвердить вашу регистрацию</p>

    <UPinInput v-model="pinValue" otp :length="6" size="xl" type="number" />


<!--    <UForm-->
<!--      :schema="schema"-->
<!--      class="mb-10 flex flex-col gap-6"-->
<!--      :state="state"-->
<!--      :validate-on="['change']"-->
<!--      @submit="onSubmit"-->
<!--    >-->
<!--      <UFormField-->
<!--        label="Электронная почта"-->
<!--        name="email"-->
<!--      >-->
<!--        <UInput-->
<!--          v-model="state.email"-->
<!--          class="w-full"-->
<!--        />-->
<!--      </UFormField>-->

<!--      <UButton-->
<!--        block-->
<!--        :disabled="!state.email || isLoading"-->
<!--        type="submit"-->
<!--      >-->
<!--        Продолжить-->
<!--      </UButton>-->
<!--    </UForm>-->

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

<style scoped>

</style>
