<script setup lang="ts">
import { useDictionaryStore } from '~/stores/dictionary/store';
import { initialRegisterState, type RegisterFormType, registerSchema } from '~/components/register/helper';
import type { FormSubmitEvent } from '#ui/types';
import type { InferType } from 'yup';

type Schema = InferType<typeof registerSchema>;

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

const tShirtSizes = ref(['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL']);

const directoryStore = useDictionaryStore();
const { data } = await useAsyncData('get-direcotry', () =>
  Promise.all([directoryStore.fetchBloodTypes(), directoryStore.fetchCitizenship(), directoryStore.fetchCountries()]),
);
console.log('data', data);

const state = reactive<RegisterFormType>(initialRegisterState);

async function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log(event.data);
}
</script>

<template>
  <div class="register-form">
    <h3 class="mb-10 text-2xl font-bold">Создать новый аккаунт</h3>

    <UForm
      :state="state"
      :schema="registerSchema"
      class="mb-8 flex flex-col gap-6"
      :validate-on="['blur', 'change']"
      @submit="onSubmit"
    >
      <p class="text-base font-semibold">Персональная информация</p>

      <div class="flex gap-6">
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
        name="sex"
      >
        <URadioGroup
          v-model="state.sex"
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
            v-model="state.emergencyPostCodeId"
            name="emergencyPostCodeId"
            :items="directoryStore.countryList"
            label-key="phone_code"
            value-key="phone_code"
            :ui="{ base: 'w-[90px]' }"
          />
          <UInput
            v-model="state.phone"
            name="phone"
            class="w-full"
          />
        </UButtonGroup>
      </UFormField>

      <div class="flex gap-6">
        <UFormField
          class="w-1/2"
          label="Дата рождения"
          name="birthday"
          required
        >
          <Datepicker
            v-model="state.birthday"
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

      <UFormField
        label="Гражданство"
        required
        name="citizenshipId"
      >
        <USelect
          v-model="state.citizenshipId"
          class="w-full"
          :items="directoryStore.citizenshipList"
          value-key="id"
          label-key="country.name_ru"
        />
      </UFormField>

      <UFormField
        label="ИИН"
        required
        name="iin"
      >
        <UInput
          v-model="state.iin"
          class="w-full"
        />
      </UFormField>

      <div class="mb-3 flex gap-6">
        <UFormField
          label="Номер паспорта"
          required
          class="w-1/2"
          name="passportNumber"
        >
          <UInput
            v-model="state.passportNumber"
            class="w-full"
          />
        </UFormField>

        <UFormField
          class="w-1/2"
          label="Срок действия"
          required
          name="expirationPassportDate"
        >
          <Datepicker
            v-model="state.expirationPassportDate"
            placeholder="ДД/ММ/ГГГГ"
          />
        </UFormField>
      </div>

      <div class="mb-3 flex flex-col gap-6">
        <p class="text-base font-semibold">Дополнительная информация</p>

        <UFormField
          label="Место проживания"
          name="address"
        >
          <UInput
            v-model="state.address"
            placeholder="Страна, город, адрес, почтовый индекс"
            class="w-full"
          />
        </UFormField>

        <div class="flex gap-6">
          <UFormField
            label="Размер футболки"
            required
            class="w-1/2"
            name="shirtSize"
          >
            <USelect
              v-model="state.shirtSize"
              class="w-full"
              :items="tShirtSizes"
            />
          </UFormField>

          <UFormField
            label="Беговой клуб"
            class="w-1/2"
            name="runningClub"
          >
            <UInput
              v-model="state.runningClub"
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

        <div class="flex gap-6">
          <UFormField
            label="Имя"
            required
            class="w-1/2"
            name="emergencyName"
          >
            <UInput
              v-model="state.emergencyName"
              class="w-full"
            />
          </UFormField>

          <UFormField
            label="Кем является"
            required
            class="w-1/2"
            name="emergencyWhoIs"
          >
            <USelect
              v-model="state.emergencyWhoIs"
              class="w-full"
            />
          </UFormField>
        </div>

        <UFormField
          label="Номер телефона"
          required
          name="emergencyPhone"
        >
          <UButtonGroup class="w-full">
            <USelect
              v-model="state.emergencyPostCodeId"
              :items="directoryStore.countryList"
              label-key="phone_code"
              value-key="phone_code"
              :ui="{ base: 'w-[90px]' }"
              name="emergencyPostCodeId"
            />
            <UInput
              v-model="state.emergencyPhone"
              class="w-full"
              name="emergencyPhone"
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
