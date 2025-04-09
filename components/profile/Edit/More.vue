<script setup lang="ts">
import { type MoreInfoState, moreValSchema } from '~/components/profile/Edit/helper';
import type { IUserOptions } from '~/stores/auth/types';
import { useAuthStore } from '~/stores/auth/store';
import type { FormSubmitEvent } from '#ui/types';

const emit = defineEmits<{
  (event: 'onClose'): void;
  (event: 'onEdit', values: FormSubmitEvent<MoreInfoState>): void;
}>();
const authStore = useAuthStore();
const profile = (authStore?.user as IUser)?.options as IUserOptions;

const emergencyCountryAvatar = computed(
  () => countryCodes.find(item => item.value === state.emergency_contact_phone_code)?.avatar,
);

const state = reactive<MoreInfoState>({
  't-shirt_size': profile['t-shirt_size'],
  'running_club': profile.running_club || '',
  'emergency_contact_name': profile.emergency_contact_name,
  'emergency_contact_phone': profile.emergency_contact_phone,
  'emergency_contact_phone_code': profile.emergency_contact_phone_code,
  'emergency_contact_role': profile.emergency_contact_role,
});
</script>

<template>
  <UForm
    class="w-full rounded-xl bg-white p-8"
    :state="state"
    :validate-on="['change']"
    :schema="moreValSchema"
    @submit="(payload: FormSubmitEvent<MoreInfoState>) => emit('onEdit', payload)"
  >
    <div class="mb-8 flex items-center justify-between">
      <h5 class="text-2xl font-bold">Дополнительная информация</h5>

      <div class="flex gap-3">
        <UButton
          label="Отмена"
          variant="outline"
          @click="emit('onClose')"
        />
        <UButton
          label="Сохранить"
          variant="solid"
          type="submit"
        />
      </div>
    </div>

    <div class="flex flex-col gap-6">
      <div class="flex gap-6">
        <UFormField
          label="Размер футболки"
          required
          class="w-1/2"
          name="t-shirt_size"
        >
          <USelect
            v-model="state['t-shirt_size']"
            class="w-full"
            :items="tShirtSizes"
          />
        </UFormField>

        <UFormField
          label="Беговой клуб"
          class="w-1/2"
          name="running_club"
        >
          <UInput
            v-model="state.running_club"
            class="w-full"
          />
        </UFormField>
      </div>

      <div class="mb-3 flex flex-col gap-6">
        <p class="text-base font-semibold">Контактные данные для экстренных случаев</p>

        <div class="flex gap-4">
          <UFormField
            label="Имя"
            required
            class="w-1/2"
            name="emergency_contact_name"
          >
            <UInput
              v-model="state.emergency_contact_name"
              class="w-full"
            />
          </UFormField>

          <UFormField
            label="Кем является"
            required
            class="w-1/2"
            name="emergency_contact_role"
          >
            <UInput
              v-model="state.emergency_contact_role"
              class="w-full"
            />
          </UFormField>
        </div>

        <UFormField
          label="Номер телефона"
          required
          name="emergency_contact_phone"
        >
          <UButtonGroup class="w-full">
            <USelect
              v-model="state.emergency_contact_phone_code"
              :items="countryCodes"
              name="emergency_contact_phone_code"
              :avatar="emergencyCountryAvatar as any"
            />
            <UInput
              v-model="state.emergency_contact_phone"
              class="w-full"
              name="emergency_contact_phone"
            />
          </UButtonGroup>
        </UFormField>
      </div>
    </div>
  </UForm>
</template>

<style scoped></style>
