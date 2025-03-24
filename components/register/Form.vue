<script setup lang="ts">
import { useDictionaryStore } from '~/stores/dictionary/store';
import {
  type CitizenshipType,
  CitizenValue,
  initialRegisterState,
  type RegisterFormType,
  registerSchema,
} from '~/components/register/helper';
import type { FormSubmitEvent } from '#ui/types';
import { useAuthStore } from '~/stores/auth/store';

const sexRadio = ref([
  {
    label: 'Женщина',
    value: 'female',
  },
  {
    label: 'Мужчина',
    value: 'male',
  },
]);

const state = reactive<RegisterFormType>(initialRegisterState);

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

const citizenshipList = ref<CitizenshipType[]>([
  {
    name_en: CitizenValue.Kazakhstan,
    name_ru: 'Казахстан',
    name_kz: 'Қазақстан',
  },
  {
    name_en: CitizenValue.Uzbekistan,
    name_ru: 'Узбекистан',
    name_kz: 'Өзбекстан',
  },
  {
    name_en: CitizenValue.Russia,
    name_ru: 'Россия',
    name_kz: 'Россия',
  },
]);

const countryAvatar = computed(() => countryCodes.value.find(item => item.value === state.country_phone_code)?.avatar);
const emergencyCountryAvatar = computed(
  () => countryCodes.value.find(item => item.value === state.emergency_contact_phone_code)?.avatar,
);

const tShirtSizes = ref(['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL']);

const authStore = useAuthStore();

const directoryStore = useDictionaryStore();
await useAsyncData('get-direcotry', () =>
  Promise.all([directoryStore.fetchBloodTypes(), directoryStore.fetchCitizenship(), directoryStore.fetchCountries()]),
);

watch(directoryStore.citizenshipList, () => {
  console.log('directoryStore', directoryStore.citizenshipList);
});

async function onSubmit(event: FormSubmitEvent<RegisterFormType>) {
  const { data } = await useAsyncData('register', () => authStore.registerUser(event.data));
  if (data.value?.options.is_registered) {
    navigateTo('/');
  }
  console.log(data);
}
</script>

<template>
  <div class="register-form">
    <h3 class="mb-8 text-2xl font-bold">Создать новый аккаунт</h3>
    <UAlert
      title="Заполните анкету внимательно"
      description="Эти данные нужны для дальнейшей регистрации на марафоны"
      color="info"
      icon="carbon:warning-hex"
      class="mb-6"
      :ui="{ icon: 'text-accent-40' }"
    />

    <UForm
      :state="state"
      :schema="registerSchema"
      class="mb-8 flex flex-col gap-y-6"
      :validate-on="['blur', 'change', 'input']"
      @submit="onSubmit"
    >
      <p class="text-xl font-semibold">Персональная информация</p>

      <div class="flex gap-4">
        <UFormField
          class="w-1/2"
          label="Фамилия"
          required
          name="surname"
        >
          <UInput
            v-model="state.surname"
            class="w-full"
          />
        </UFormField>

        <UFormField
          class="w-1/2"
          label="Имя"
          required
          name="name"
        >
          <UInput
            v-model="state.name"
            class="w-full"
          />
        </UFormField>
      </div>

      <UFormField
        label="Пол"
        required
        :ui="{ label: 'text-sm', container: 'mt-4' }"
        name="gender"
      >
        <URadioGroup
          v-model="state.gender"
          :items="sexRadio"
        />
      </UFormField>

      <UFormField
        label="Номер телефона"
        required
        name="phone"
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
            class="w-full"
            :items="directoryStore.bloodTypes"
            value-key="id"
            label-key="Name"
          />
        </UFormField>
      </div>

      <div class="mt-5">
        <p class="mb-3 text-xl font-semibold">Персональная информация</p>
        <p class="text-neutral-50">Введите данные как в документах</p>
      </div>

      <UFormField
        label="Гражданство"
        required
        name="citizenship"
      >
        <USelect
          v-model="state.citizenship"
          class="w-full"
          :items="citizenshipList"
          value-key="name_en"
          label-key="name_ru"
        />
      </UFormField>

      <div class="flex gap-4">
        <UFormField
          v-if="state.citizenship === CitizenValue.Kazakhstan"
          label="ИИН"
          required
          name="IIN"
        >
          <UInput
            v-model="state.IIN"
            class="w-full"
          />
        </UFormField>

        <UFormField
          v-else
          label="Серия паспорта"
          required
          name="passport_series"
        >
          <UInput
            v-model="state.passport_series"
            class="w-full"
          />
        </UFormField>

        <UFormField
          label="Номер паспорта"
          required
          class="w-1/2"
          name="passport_number"
        >
          <UInput
            v-model="state.passport_number"
            class="w-full"
          />
        </UFormField>
      </div>

      <UFormField
        label="Кем выдано"
        required
        class="w-full"
        name="passport_issuer"
      >
        <UInput
          v-model="state.passport_issuer"
          class="w-full"
        />
      </UFormField>

      <div class="mb-3 flex gap-4">
        <UFormField
          class="w-1/2"
          label="Дата выдачи"
          required
          name="passport_date_issue"
        >
          <Datepicker
            v-model="state.passport_date_issue"
            placeholder="ДД/ММ/ГГГГ"
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
          />
        </UFormField>
      </div>

      <div class="mb-3 flex flex-col gap-6">
        <p class="text-base font-semibold">Дополнительная информация</p>

        <UFormField
          label="Место проживания"
          name="residence_place"
          required
        >
          <UInput
            v-model="state.residence_place"
            placeholder="Страна, город, адрес, почтовый индекс"
            class="w-full"
          />
        </UFormField>

        <div class="flex gap-4">
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

          <!--        <UFormField-->
          <!--          label="Целевое время"-->
          <!--          required-->
          <!--          class="w-1/2"-->
          <!--        >-->
          <!--          <UInput-->
          <!--            placeholder="00:00"-->
          <!--            class="w-full"-->
          <!--            v-model="state.shirtSize"-->
          <!--          />-->
          <!--        </UFormField>-->
        </div>
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

      <UButton
        type="submit"
        block
        @click="console.log('123', state)"
      >
        Создать аккаунт
      </UButton>
    </UForm>
  </div>
</template>

<style scoped>
.register-form {
  background-color: #ffffff;
  border-radius: 16px;
  padding: 32px 42px;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.04);
  max-width: 534px;
  width: 100%;
}
</style>
