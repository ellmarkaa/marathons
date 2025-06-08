<script setup lang="ts">
const router = useRouter();
const goBack = () => {
  router.back();
};
const marathonStore = useMarathonStore()
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
          {{$t('back')}}
        </UButton>

        <RegisterForm :class="marathonStore.priceToBuy ? 'register-with-card' : ''" />

        <MarathonInfoCard :disabled="true" class="r-1" v-if="marathonStore.priceToBuy" />
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
.register-with-card {
  margin-left: 80px;
}
</style>
