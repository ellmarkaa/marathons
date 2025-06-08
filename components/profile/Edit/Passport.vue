<script setup lang="ts">
import type { IUserOptions } from '~/stores/auth/types';
import { useAuthStore } from '~/stores/auth/store';
import { isoToCalendarDate } from '~/utils/date';
import type { PassportState } from '~/components/profile/Edit/helper';
import { passportValSchema } from '~/components/profile/Edit/helper';
import type { FormSubmitEvent } from '#ui/types';

const emit = defineEmits<{
  (event: 'onClose'): void;
  (event: 'onEdit', values: FormSubmitEvent<PassportState>): void;
}>();
const authStore = useAuthStore();
const profile = (authStore?.user as IUser)?.options as IUserOptions;

const state = reactive<PassportState>({
  passport_surname: profile.passport_surname,
  passport_name: profile.passport_name,
  citizenship: profile.citizenship,
  IIN: profile.IIN,
  passport_series: profile.passport_series,
  passport_number: profile.passport_number,
  passport_issuer: profile.passport_issuer,
  passport_date_issue: isoToCalendarDate(profile.passport_date_issue),
  passport_validity_period: isoToCalendarDate(profile.passport_validity_period),
});
const {t} = useI18n()
</script>

<template>
  <UForm
    class="w-full rounded-xl bg-white p-8"
    :state="state"
    :schema="passportValSchema"
    :validate-on="['change']"
    @submit="(payload: FormSubmitEvent<PassportState>) => emit('onEdit', payload)"
  >
    <div class="mb-8 flex items-center justify-between">
      <h5 class="text-2xl font-bold">{{t('passport-data')}}</h5>

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
          name="passport_surname"
          required
        >
          <UInput
            v-model="state.passport_surname"
            name="passport_surname"
            class="w-full"
          />
        </UFormField>

        <UFormField
          class="w-1/2"
          :label="t('name')"
          name="passport_name"
          required
        >
          <UInput
            v-model="state.passport_name"
            name="passport_name"
            class="w-full"
          />
        </UFormField>
      </div>

      <div class="flex gap-4">
        <UFormField
          :label="t('citizenship')"
          required
          name="citizenship"
          class="w-1/2"
        >
          <USelect
            v-model="state.citizenship"
            class="w-full"
            :items="citizenshipList"
            value-key="name_en"
            label-key="name_ru"
          />
        </UFormField>

        <UFormField
          v-if="state.citizenship === CitizenValue.Kazakhstan"
          :label="t('IIN')"
          required
          name="IIN"
          class="w-1/2"
        >
          <UInput
            v-model="state.IIN"
            name="IIN"
            class="w-full"
          />
        </UFormField>

        <UFormField
          v-else
          class="w-1/2"
          :label="t('passport-series')"
          required
          name="passport_series"
        >
          <UInput
            v-model="state.passport_series"
            class="w-full"
          />
        </UFormField>
      </div>

      <div class="flex gap-4">
        <UFormField
          class="w-1/2"
          :label="t('passport-number')"
          name="passport_number"
          required
        >
          <UInput
            v-model="state.passport_number"
            class="w-full"
          />
        </UFormField>

        <UFormField
          class="w-1/2"
          :label="t('passport-issuer')"
          required
          name="passport_issuer"
        >
          <UInput
            v-model="state.passport_issuer"
            class="w-full"
          />
        </UFormField>
      </div>

      <div class="flex gap-4">
        <UFormField
          class="w-1/2"
          :label="t('date-issue')"
          name="passport_date_issue"
          required
        >
          <Datepicker
            v-model="state.passport_date_issue"
            placeholder="ДД/ММ/ГГГГ"
          />
        </UFormField>

        <UFormField
          class="w-1/2"
          :label="t('passport-validity-period')"
          required
          name="passport_validity_period"
        >
          <Datepicker
            v-model="state.passport_validity_period"
            placeholder="ДД/ММ/ГГГГ"
          />
        </UFormField>
      </div>
    </div>
  </UForm>
</template>

<style scoped></style>
