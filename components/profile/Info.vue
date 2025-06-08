<script setup lang="ts">
import Distance from '~/components/icon/Distance.vue';
import { df } from '~/utils/date';
import { useDictionaryStore } from '~/stores/dictionary/store';
import { getRusCitizenName } from '~/stores/auth/utils';

const authStore = useAuthStore();
const directoryStore = useDictionaryStore();
const profile = computed(() => authStore.profile);
useAsyncData<IBloodType[]>('get-blood-types', () => directoryStore.fetchBloodTypes());
const {t} = useI18n()

const editBlock = ref<null | 'personal' | 'passport' | 'residence_place' | 'more_info'>(null);
</script>

<template>
  <div
    v-if="!editBlock && profile"
    class="flex w-full flex-col gap-6"
  >
    <div class="title-block px-8 py-6">
      <h4 class="text-3xl font-bold text-white">{{t('profile')}}</h4>
    </div>

    <div class="flex items-center justify-between rounded-xl bg-white p-6">
      <div class="flex items-center gap-4">
        <div class="bg-success-99 distance-icon">
          <Distance style="color: #3fbea6" />
        </div>

        <div>
          <p class="mb-2 flex items-center gap-1 text-lg font-semibold">
            {{t('my-events')}}
            <Icon
              name="ph:info"
              class="size-4 text-neutral-50"
            />
          </p>
          <p class="text-neutral-50">0 {{t('events')}}</p>
        </div>
      </div>

      <UButton :label="t('add-event')" />
    </div>

    <ProfileCollapse
      v-if="profile"
      :default-open="true"
      :title="t('personal-info')"
      :first-list="[
        {
          label: t('surname'),
          value: profile.surname,
        },
        {
          label: t('gender'),
          value: getGenderRus[profile.gender],
        },
        {
          label: t('birthday'),
          value: df.format(new Date(profile.birthdate)),
        },
      ]"
      :second-list="[
        {
          label: t('name'),
          value: profile.name,
        },
        {
          label: t('phone'),
          value: getFullNumber(profile.country_phone_code, profile.phone),
        },
        {
          label: t('blood-type'),
          value: directoryStore.bloodTypes.find(type => type.id === profile?.bloodGroupId)?.Name || '',
        },
      ]"
      @on-edit="() => (editBlock = 'personal')"
    />

    <ProfileCollapse
      v-if="profile"
      :title="t('passport-data')"
      :first-list="[
        {
          label: t('surname'),
          value: profile.passport_surname,
        },
        {
          label: t('citizenship'),
          value: getRusCitizenName[profile.citizenship],
        },
        {
          label: t('passport-number'),
          value: profile.passport_number,
        },
        {
          label: t('date-issue'),
          value: df.format(new Date(profile.passport_date_issue)),
        },
      ]"
      :second-list="[
        {
          label: t('name'),
          value: profile.passport_name,
        },
        {
          label: 'ИИН',
          value: profile.IIN,
        },
        {
          label: t('passport-issuer'),
          value: profile.passport_issuer,
        },
        {
          label: t('passport-validity-period'),
          value: df.format(new Date(profile.passport_validity_period)),
        },
      ]"
      @on-edit="() => (editBlock = 'passport')"
    />

    <ProfileCollapse
      v-if="profile"
      :title="t('live-place')"
      :first-list="[
        {
          label: t('country'),
          value: profile.residence_country,
        },
        {
          label: t('address'),
          value: profile.residence_address,
        },
        {
          label: t('postal_code'),
          value: profile.postal_code,
        },
      ]"
      :second-list="[
        {
          label: t('city'),
          value: profile.residence_city,
        },
        {
          label: t('number-home'),
          value: profile.residence_apartment,
        },
      ]"
      @on-edit="() => (editBlock = 'residence_place')"
    />

    <ProfileCollapse
      v-if="profile"
      :title="t('more-info')"
      :first-list="[
        {
          label: t('shirt-size'),
          value: profile['t-shirt_size'],
        },
      ]"
      :second-list="[
        {
          label: t('runner-club'),
          value: profile.running_club || t('no-data'),
        },
      ]"
      :sub-data="{
        subTitle: t('contact-for-eks'),
        subFirstList: [
          {
            label: t('name'),
            value: profile.emergency_contact_name,
          },
          {
            label: t('phone'),
            value: getFullNumber(profile.emergency_contact_phone_code, profile.emergency_contact_phone),
          },
        ],
        subSecondList: [
          {
            label: t('who-is'),
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
