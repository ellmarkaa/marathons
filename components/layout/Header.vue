<script setup lang="ts">
const searchModel = ref<boolean>(false);
</script>

<template>
  <header class="header bg-white py-6">
    <UContainer>
      <LayoutNav
        v-if="!searchModel"
        v-model="searchModel"
      />
      <LayoutSearch
        v-else
        v-model="searchModel"
      />
    </UContainer>
  </header>
</template>

<style scoped>
.header {
  box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.08);
}
</style>
