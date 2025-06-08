<script setup lang="ts">
const props = defineProps<{
  paymentStatus?: 'success' | 'error'
}>()
const open = ref(true)
const {t} = useI18n()
const title = props.paymentStatus === 'success' ? t('payment-success') : t('payment-error')
const description = props.paymentStatus === 'success' ? t('payment-des-success') : t('payment-des-error')

</script>

<template>
  <UModal title="" v-model:open="open">
    <template #body>
      <div class="wrapper">
        <img class="mb-3 image" v-if="paymentStatus === 'success'" src="/imgs/payment-success.png" alt="payment" />
        <img class="mb-3 image" v-else-if="paymentStatus === 'error'" src="/imgs/payment-error.png" alt="payment" />

        <h3 class="font-bold text-2xl">{{title}}</h3>
        <p class="text-base text-neutral-40 text-center">{{description}}</p>
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
