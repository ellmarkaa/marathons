<script setup lang="ts">
import { type PersonalState, personalValSchema } from '~/components/profile/Edit/helper';
import type { IUser, IUserOptions } from '~/stores/auth/types';
import { useAuthStore } from '~/stores/auth/store';
import { isoToCalendarDate } from '~/utils/date';
import { getGenderRus } from '~/utils/base';
import type { FormSubmitEvent } from '#ui/types';

const emit = defineEmits<{
  (event: 'onClose'): void;
  (event: 'onEdit', values: FormSubmitEvent<PersonalState>): void;
}>();
const authStore = useAuthStore();
const directoryStore = useDictionaryStore();
const profile = (authStore?.user as IUser)?.options as IUserOptions;

const state = reactive<PersonalState>({
  phone: profile.phone,
  birthdate: isoToCalendarDate(profile.birthdate),
  country_phone_code: profile.country_phone_code,
  bloodGroupId: profile.bloodGroupId,
  gender: profile.gender,
  name: profile.name,
  surname: profile.surname,
});
const { t } = useI18n();

const countryAvatar = computed(() => countryCodes.find(item => item.value === state.country_phone_code)?.avatar);
</script>

<template>
  <UForm
    class="w-full rounded-xl bg-white p-8"
    :state="state"
    :validate-on="['change']"
    :schema="personalValSchema"
    @submit="(payload: FormSubmitEvent<PersonalState>) => emit('onEdit', payload)"
  >
    <div class="mb-8 flex items-center justify-between">
      <h5 class="text-2xl font-bold">{{ t('personal-info') }}</h5>

      <div class="flex gap-3">
        <UButton
          :label="t('cancel')"
          variant="outline"
          :loading="authStore.userUpdateLoading"
          @click="emit('onClose')"
        />
        <UButton
          :label="t('save')"
          variant="solid"
          type="submit"
          :loading="authStore.userUpdateLoading"
        />
      </div>
    </div>

    <div class="flex flex-col gap-6">
      <div class="flex gap-6">
        <UFormField
          class="w-1/2"
          :label="t('surname')"
          name="surname"
          required
        >
          <UInput
            v-model="state.surname"
            name="surname"
            class="w-full"
          />
        </UFormField>

        <UFormField
          class="w-1/2"
          :label="t('name')"
          name="name"
          required
        >
          <UInput
            v-model="state.name"
            name="name"
            class="w-full"
          />
        </UFormField>
      </div>

      <div class="flex gap-4">
        <UFormField
          :label="t('gender')"
          required
          name="gender"
          class="w-1/2"
        >
          <UInput
            class="w-full"
            :model-value="getGenderRus[state.gender]"
            disabled
          />
        </UFormField>

        <UFormField
          :label="t('phone')"
          required
          name="phone"
          class="w-1/2"
        >
          <UButtonGroup class="w-full">
            <USelect
              v-model="state.country_phone_code"
              name="country_phone_code"
              size="md"
              :avatar="countryAvatar as any"
              :items="countryCodes"
            />
            <UInput
              v-model="state.phone"
              name="phone"
              class="w-full"
            />
          </UButtonGroup>
        </UFormField>
      </div>

      <div class="flex gap-4">
        <UFormField
          class="w-1/2"
          :label="t('birthday')"
          name="birthdate"
          required
        >
          <Datepicker
            v-model="state.birthdate"
            placeholder="ДД/ММ/ГГГГ"
            disabled
          />
        </UFormField>

        <UFormField
          class="w-1/2"
          :label="t('blood-type')"
          required
          name="bloodGroupId"
        >
          <USelect
            v-model="state.bloodGroupId"
            disabled
            class="w-full"
            :items="directoryStore.bloodTypes"
            value-key="id"
            label-key="Name"
          />
        </UFormField>
      </div>
    </div>
  </UForm>
</template>

<style scoped></style>
