<template>
  <UApp>
    <NuxtLayout>
      <main class="text-sm">
        <NuxtPage />
      </main>
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
const authStore = useAuthStore();

useAsyncData('initial-fetch', () => authStore.initUserFetch());
</script>
