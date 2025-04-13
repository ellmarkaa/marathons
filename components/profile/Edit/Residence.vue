<script setup lang="ts">
import { type ResidenceState, residenceValSchema } from '~/components/profile/Edit/helper';
import type { IUserOptions } from '~/stores/auth/types';
import { useAuthStore } from '~/stores/auth/store';
import type { FormSubmitEvent } from '#ui/types';

const emit = defineEmits<{
  (event: 'onClose'): void;
  (event: 'onEdit', values: FormSubmitEvent<ResidenceState>): void;
}>();
const authStore = useAuthStore();
const profile = (authStore?.user as IUser)?.options as IUserOptions;

const state = reactive<ResidenceState>({
  residence_apartment: profile.residence_apartment,
  residence_city: profile.residence_city,
  postal_code: profile.postal_code,
  residence_address: profile.residence_address,
  residence_country: profile.residence_country,
});
</script>

<template>
  <UForm
    class="w-full rounded-xl bg-white p-8"
    :state="state"
    :validate-on="['change']"
    :schema="residenceValSchema"
    @submit="(payload: FormSubmitEvent<ResidenceState>) => emit('onEdit', payload)"
  >
    <div class="mb-8 flex items-center justify-between">
      <h5 class="text-2xl font-bold">Место проживания</h5>

      <div class="flex gap-3">
        <UButton
          label="Отмена"
          variant="outline"
          :loading="authStore.userUpdateLoading"
          @click="emit('onClose')"
        />
        <UButton
          label="Сохранить"
          variant="solid"
          type="submit"
          :loading="authStore.userUpdateLoading"
        />
      </div>
    </div>

    <div class="flex flex-col gap-6">
      <div class="flex gap-6">
        <UFormField
          label="Страна"
          name="residence_country"
          required
          class="w-1/2"
        >
          <USelect
            v-model="state.residence_country"
            class="w-full"
            :items="citizenshipList"
            value-key="name_en"
            label-key="name_ru"
          />
        </UFormField>

        <UFormField
          class="w-1/2"
          label="Город"
          name="residence_city"
          required
        >
          <UInput
            v-model="state.residence_city"
            name="residence_city"
            class="w-full"
          />
        </UFormField>
      </div>

      <div class="flex gap-4">
        <UFormField
          label="Адрес"
          required
          name="residence_address"
          class="w-1/2"
        >
          <UInput
            v-model="state.residence_address"
            name="residence_address"
            class="w-full"
          />
        </UFormField>

        <UFormField
          label="Номер квартиры"
          required
          name="residence_apartment"
          class="w-1/2"
        >
          <UInput
            v-model="state.residence_apartment"
            name="residence_apartment"
            class="w-full"
          />
        </UFormField>
      </div>

      <div class="flex gap-4">
        <UFormField
          class="w-1/2"
          label="Почтовый индекс"
          name="postal_code"
          required
        >
          <UInput
            v-model="state.postal_code"
            class="w-full"
          />
        </UFormField>
      </div>
    </div>
  </UForm>
</template>

<style scoped></style>
