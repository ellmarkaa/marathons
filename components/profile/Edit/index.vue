<script setup lang="ts">
const editBlock = defineModel<null | 'personal' | 'passport' | 'residence_place' | 'more_info'>('editBlock');

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
    <ProfileEditPassport
      v-else-if="editBlock === 'passport'"
      @on-close="onClose"
    />
    <ProfileEditResidence
      v-else-if="editBlock === 'residence_place'"
      @on-close="onClose"
    />
    <ProfileEditMore
      v-else-if="editBlock === 'more_info'"
      @on-close="onClose"
    />
    <p v-else>Ой! Что-то пошло не так</p>
  </div>
</template>

<style scoped></style>
