<script setup lang="ts">
const editBlock = defineModel<null | 'personal' | 'passport' | 'residence_place' | 'more_info'>('editBlock');
console.log('editBlock', editBlock.value);
const onClose = () => {
  editBlock.value = null;
};
</script>

<template>
  <div class="w-full">
    <ProfileEditPersonal
      v-if="editBlock === 'personal'"
      @on-close="onClose"
    />
    <p v-else>asdfaf</p>
  </div>
</template>

<style scoped></style>
