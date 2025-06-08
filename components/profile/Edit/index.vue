<script setup lang="ts">
import { useAuthStore } from '~/stores/auth/store';
import type { MoreInfoState, PassportState, PersonalState, ResidenceState } from '~/components/profile/Edit/helper';
import type { IUser, IUserOptions } from '~/stores/auth/types';
import type { FormSubmitEvent } from '#ui/types';

const {t} = useI18n()
const authStore = useAuthStore();
const editBlock = defineModel<null | 'personal' | 'passport' | 'residence_place' | 'more_info'>('editBlock');
const profile = (authStore?.user as IUser)?.options as IUserOptions;

const onClose = () => {
  editBlock.value = null;
};
const onEdit = async (event: FormSubmitEvent<PersonalState | PassportState | ResidenceState | MoreInfoState>) => {
  try {
    await useAsyncData('update', () =>
      authStore.updateUser({
        ...profile,
        ...event.data,
      }),
    );
    editBlock.value = null;
  } catch (e: any) {
    console.error(e);
  }
};
</script>

<template>
  <div class="w-full">
    <ProfileEditPersonal
      v-if="editBlock === 'personal'"
      @on-close="onClose"
      @on-edit="onEdit"
    />
    <ProfileEditPassport
      v-else-if="editBlock === 'passport'"
      @on-close="onClose"
      @on-edit="onEdit"
    />
    <ProfileEditResidence
      v-else-if="editBlock === 'residence_place'"
      @on-close="onClose"
      @on-edit="onEdit"
    />
    <ProfileEditMore
      v-else-if="editBlock === 'more_info'"
      @on-close="onClose"
      @on-edit="onEdit"
    />
    <p v-else>{{t('something-go-wrong')}}</p>
  </div>
</template>

<style scoped></style>
