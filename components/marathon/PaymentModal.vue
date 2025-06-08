<script setup lang="ts">
const props = defineProps<{
  paymentStatus?: 'success' | 'error';
}>();
const open = ref(true);
const { t } = useI18n();
const title = props.paymentStatus === 'success' ? t('payment-success') : t('payment-error');
const description = props.paymentStatus === 'success' ? t('payment-des-success') : t('payment-des-error');
</script>

<template>
  <UModal
    v-model:open="open"
    title=""
  >
    <template #body>
      <div class="wrapper">
        <img
          v-if="paymentStatus === 'success'"
          class="image mb-3"
          src="/imgs/payment-success.png"
          alt="payment"
        />
        <img
          v-else-if="paymentStatus === 'error'"
          class="image mb-3"
          src="/imgs/payment-error.png"
          alt="payment"
        />

        <h3 class="text-2xl font-bold">{{ title }}</h3>
        <p class="text-neutral-40 text-center text-base">{{ description }}</p>
        <UButton
          :label="t('go-main')"
          @click="navigateTo('/')"
        />
      </div>
    </template>
  </UModal>
</template>

<style scoped>
.wrapper {
  max-width: 468px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
}

.image {
  width: 100px;
  height: 100px;
}
</style>
