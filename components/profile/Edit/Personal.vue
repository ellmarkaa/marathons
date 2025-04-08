<script setup lang="ts">
import type { PersonalState } from '~/components/profile/Edit/helper';
import type { IUserOptions } from '~/stores/auth/types';
import { useDictionaryStore } from '~/stores/dictionary/store';
import { useAuthStore } from '~/stores/auth/store';
import { isoToCalendarDate } from '~/utils/date';
import { getGenderRus } from '~/utils/base';

const emit = defineEmits<{ (event: 'onClose'): void }>();
const authStore = useAuthStore();
const profile = authStore?.user?.options as IUserOptions;

const state = reactive<PersonalState>({
  phone: profile.phone,
  birthdate: isoToCalendarDate(profile.birthdate),
  country_phone_code: profile.country_phone_code,
  bloodGroupId: profile.bloodGroupId,
  gender: profile.gender,
  name: profile.name,
  surname: profile.surname,
});

const selectedDate = ref<string | null>(null);
watch(selectedDate, () => {
  console.log('selectedDate', selectedDate);
});

const directoryStore = useDictionaryStore();
await useAsyncData('get-blood-types', () => directoryStore.fetchBloodTypes());
console.log('directoryStore', directoryStore.fetchBloodTypes());

const countryCodes = ref([
  {
    label: '+7',
    value: '+997', // Это для отличия кода России и Казахстана. Но в будущем Кз хочет перейти на этот код
    avatar: {
      src: '/imgs/circle-kazakhstan.jpg',
      alt: 'Kazakhstan',
    },
  },
  {
    label: '+998',
    value: '+998',
    avatar: {
      src: '/imgs/circle-uzbekistan.jpg',
      alt: 'Uzbekistan',
    },
  },
  {
    label: '+7',
    value: '+7',
    avatar: {
      src: '/imgs/circle-russia.png',
      alt: 'Russia',
    },
  },
]);

const countryAvatar = computed(() => countryCodes.value.find(item => item.value === state.country_phone_code)?.avatar);
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

    <UCalendar
      v-model="selectedDate"
      :popover="{ placement: 'bottom-start' }"
      :masks="{ input: 'DD.MM.YYYY' }"
      :input-props="{ placeholder: 'ДД.ММ.ГГГГ' }"
      :first-day-of-week="1"
    />

    <div class="flex flex-col gap-6">
      <div class="flex gap-6">
        <UFormField
          class="w-1/2"
          label="Фамилия"
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
          label="Имя"
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
          label="Пол"
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
          label="Номер телефона"
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
          label="Дата рождения"
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
          label="Группа крови"
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
