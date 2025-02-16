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
import { JWT_COOKIE } from '~/utils/const';

const cookie = useCookie(JWT_COOKIE);
console.log('ke', cookie);
</script>
