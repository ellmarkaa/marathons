<script setup lang="ts">
const router = useRouter();
const goBack = () => {
  router.back();
};
</script>

<template>
  <div class="bg-secondary-bg py-15">
    <UContainer>
      <div class="relative flex justify-center">
        <UButton
          variant="text"
          class="absolute top-0 left-0"
          leading-icon="material-symbols:arrow-back-ios-new-rounded"
          @click="goBack"
        >
          Назад
        </UButton>

        <RegisterForm />
      </div>
    </UContainer>
  </div>
</template>

<style scoped></style>
