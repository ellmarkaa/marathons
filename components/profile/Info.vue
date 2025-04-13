<script setup lang="ts">
import Distance from '~/components/icon/Distance.vue';
import { df } from '~/utils/date';
import { useDictionaryStore } from '~/stores/dictionary/store';
import { getRusCitizenName } from '~/stores/auth/utils';

const authStore = useAuthStore();
const directoryStore = useDictionaryStore();
const profile = computed(() => authStore.profile);
useAsyncData<IBloodType[]>('get-blood-types', () => directoryStore.fetchBloodTypes());

const editBlock = ref<null | 'personal' | 'passport' | 'residence_place' | 'more_info'>(null);
</script>

<template>
  <div
    v-if="!editBlock && profile"
    class="flex w-full flex-col gap-6"
  >
    <div class="title-block px-8 py-6">
      <h4 class="text-3xl font-bold text-white">Профиль</h4>
    </div>

    <div class="flex items-center justify-between rounded-xl bg-white p-6">
      <div class="flex items-center gap-4">
        <div class="bg-success-99 distance-icon">
          <Distance style="color: #3fbea6" />
        </div>

        <div>
          <p class="mb-2 flex items-center gap-1 text-lg font-semibold">
            Мои события
            <Icon
              name="ph:info"
              class="size-4 text-neutral-50"
            />
          </p>
          <p class="text-neutral-50">0 событий</p>
        </div>
      </div>

      <UButton label="Добавить событие" />
    </div>

    <ProfileCollapse
      v-if="profile"
      :default-open="true"
      title="Персональная информация"
      :first-list="[
        {
          label: 'Фамилия',
          value: profile.surname,
        },
        {
          label: 'Пол',
          value: getGenderRus[profile.gender],
        },
        {
          label: 'Дата рождения',
          value: df.format(new Date(profile.birthdate)),
        },
      ]"
      :second-list="[
        {
          label: 'Имя',
          value: profile.name,
        },
        {
          label: 'Номер телефона',
          value: getFullNumber(profile.country_phone_code, profile.phone),
        },
        {
          label: 'Группа крови',
          value: directoryStore.bloodTypes.find(type => type.id === profile?.bloodGroupId)?.Name || '',
        },
      ]"
      @on-edit="() => (editBlock = 'personal')"
    />

    <ProfileCollapse
      v-if="profile"
      title="Паспортные данные"
      :first-list="[
        {
          label: 'Фамилия',
          value: profile.passport_surname,
        },
        {
          label: 'Гражданство',
          value: getRusCitizenName[profile.citizenship],
        },
        {
          label: 'Номер паспорта',
          value: profile.passport_number,
        },
        {
          label: 'Дата выдачи',
          value: df.format(new Date(profile.passport_date_issue)),
        },
      ]"
      :second-list="[
        {
          label: 'Имя',
          value: profile.passport_name,
        },
        {
          label: 'ИИН',
          value: profile.IIN,
        },
        {
          label: 'Кем выдано',
          value: profile.passport_issuer,
        },
        {
          label: 'Срок действия',
          value: df.format(new Date(profile.passport_validity_period)),
        },
      ]"
      @on-edit="() => (editBlock = 'passport')"
    />

    <ProfileCollapse
      v-if="profile"
      title="Место проживания"
      :first-list="[
        {
          label: 'Страна',
          value: profile.residence_country,
        },
        {
          label: 'Адрес',
          value: profile.residence_address,
        },
        {
          label: 'Почтовый индекс',
          value: profile.postal_code,
        },
      ]"
      :second-list="[
        {
          label: 'Город',
          value: profile.residence_city,
        },
        {
          label: 'Номер квартиры',
          value: profile.residence_apartment,
        },
      ]"
      @on-edit="() => (editBlock = 'residence_place')"
    />

    <ProfileCollapse
      v-if="profile"
      title="Дополнительная информация"
      :first-list="[
        {
          label: 'Размер футболки',
          value: profile['t-shirt_size'],
        },
      ]"
      :second-list="[
        {
          label: 'Беговой клуб',
          value: profile.running_club || 'Нет данных',
        },
      ]"
      :sub-data="{
        subTitle: 'Контакт для экстренных случаев ',
        subFirstList: [
          {
            label: 'Имя',
            value: profile.emergency_contact_name,
          },
          {
            label: 'Номер телефона',
            value: getFullNumber(profile.emergency_contact_phone_code, profile.emergency_contact_phone),
          },
        ],
        subSecondList: [
          {
            label: 'Кем является',
            value: profile.emergency_contact_role,
          },
        ],
      }"
      @on-edit="() => (editBlock = 'more_info')"
    />
  </div>

  <ProfileEdit
    v-else
    v-model:edit-block="editBlock"
  />
</template>

<style scoped>
.title-block {
  background-color: #00905e;
  border-radius: 20px;
}
.distance-icon {
  width: 52px;
  height: 52px;
  padding: 13px;
  background-color: #f0fff6;
  border-radius: 50%;
}
</style>
