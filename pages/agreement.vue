<script setup lang="ts">
const router = useRouter();
const dictionaryStore = useDictionaryStore();
const { data: userAggreement } = await useAsyncData('slider-marathons', () => dictionaryStore.fetchUserAgreement());
const { t } = useI18n();
</script>

<template>
  <UContainer>
    <section class="agreement-page">
      <div class="relative flex flex-col items-center justify-center">
        <UButton
          variant="ghost"
          color="neutral"
          class="absolute top-0 left-0"
          leading-icon="material-symbols:arrow-back-ios-new-rounded"
          @click="router.back()"
        >
          {{ t('back') }}
        </UButton>

        <template v-if="userAggreement">
          <div class="mb-8 text-center">
            <h1 class="mb-4 text-3xl font-bold">{{ userAggreement.title }}</h1>
          </div>

          <div
            class="agreement-page__content"
            v-html="userAggreement.text"
          />
        </template>

        <div v-else>{{ t('some-wrong') }}</div>
      </div>
    </section>
  </UContainer>
</template>

<style scoped>
.agreement-page {
  padding: 60px 0 100px;
}

.agreement-page__content {
  max-width: 740px;
  display: flex;
  align-items: center;
  font-size: 16px;
}
</style>
