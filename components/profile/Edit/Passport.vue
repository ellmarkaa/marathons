<script setup lang="ts">
import type { IUserOptions } from '~/stores/auth/types';
import { useAuthStore } from '~/stores/auth/store';
import { isoToCalendarDate } from '~/utils/date';
import type { PassportState } from '~/components/profile/Edit/helper';

const emit = defineEmits<{ (event: 'onClose'): void }>();
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
</script>

<template>
  <UForm
    class="w-full rounded-xl bg-white p-8"
    :state="state"
    :validate-on="['change']"
  >
    <div class="mb-8 flex items-center justify-between">
      <h5 class="text-2xl font-bold">Персональная информация</h5>

      <div class="flex gap-3">
        <UButton
          label="Отмена"
          variant="outline"
          @click="emit('onClose')"
        />
        <UButton
          label="Сохранить"
          variant="solid"
        />
      </div>
    </div>

    <div class="flex flex-col gap-6">
      <div class="flex gap-6">
        <UFormField
          class="w-1/2"
          label="Фамилия"
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
          label="Имя"
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
          label="Гражданство"
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
          label="ИИН"
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
          label="Серия паспорта"
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
          label="Номер паспорта"
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
          label="Кем выдано"
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
          label="Дата выдачи"
          name="passport_date_issue"
          required
        >
          <Datepicker
            v-model="state.passport_date_issue"
            placeholder="ДД/ММ/ГГГГ"
            disabled
          />
        </UFormField>

        <UFormField
          class="w-1/2"
          label="Срок действия"
          required
          name="passport_validity_period"
        >
          <Datepicker
            v-model="state.passport_validity_period"
            placeholder="ДД/ММ/ГГГГ"
            disabled
          />
        </UFormField>
      </div>
    </div>
  </UForm>
</template>

<style scoped></style>
