<script setup lang="ts">
const {t} = useI18n()
const router = useRouter();
const marathonStore = useMarathonStore();
const goBack = () => {
  router.back();
};
</script>

<template>
  <div class="bg-secondary-bg py-15">
    <UContainer>
      <div class="relative flex justify-center gap-10">
        <UButton
          variant="ghost"
          color="neutral"
          class="absolute top-0 left-0"
          leading-icon="material-symbols:arrow-back-ios-new-rounded"
          @click="goBack"
        >
          {{ t('back') }}
        </UButton>

        <RegisterForm :class="marathonStore.priceToBuy ? 'register-with-card' : ''" />

        <MarathonInfoCard
          v-if="marathonStore.priceToBuy"
          :disabled="true"
          class="r-1"
        />
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
.register-with-card {
  margin-left: 80px;
}
</style>
