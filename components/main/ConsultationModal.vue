<script setup lang="ts">
import type { ConsultationForm } from '~/components/main/helper';
import { consultationSchema, initialConsultation } from '~/components/main/helper';
import type { FormSubmitEvent } from '#ui/types';
import type { ICreateConsultation } from '~/stores/dictionary/types';

const isOpen = ref(false);

const dictionaryStore = useDictionaryStore();
const state = reactive<ConsultationForm>(initialConsultation);
const countryAvatar = computed(() => countryCodes.find(item => item.value === state.country_phone_code)?.avatar);

async function onSubmit(event: FormSubmitEvent<ConsultationForm>) {
  const body: ICreateConsultation = {
    comment: event.data.comment,
    name: event.data.name,
  };
  if (event.data.type === 'phone') {
    body.phone = event.data.country_phone_code + (event.data.phone as string);
  } else {
    body.email = event.data.email;
  }

  await useAsyncData('consultation', () => dictionaryStore.sendConsultation(body));
  isOpen.value = false;
}
const { t } = useI18n();
</script>

<template>
  <UModal
    v-model:open="isOpen"
    :ui="{ content: 'bg-secondary-bg sm:max-w-[532px]', body: 'max-md:p-4 max-md:pt-0', header: 'max-md:p-4' }"
  >
    <template #header>
      <div class="relative w-full">
        <img
          src="/imgs/login-header.jpeg"
          alt="marathon"
          class="header-image"
        />
        <UButton
          variant="soft"
          icon="material-symbols:close-rounded"
          class="absolute top-2 right-2"
          @click="isOpen = false"
        />
      </div>
    </template>

    <template #body>
      <UForm
        class="rounded-2xl bg-white p-8 max-md:p-3"
        :state="state"
        :schema="consultationSchema"
        @submit="onSubmit"
      >
        <h5 class="mb-3 text-2xl font-bold">{{ t('leave-con') }}</h5>
        <p class="text-neutral-40 mb-6 text-base font-medium">
          {{ t('fill-form') }}
        </p>

        <div class="mb-6 flex flex-col gap-4">
          <UFormField
            :label="t('your-name')"
            name="name"
          >
            <UInput
              v-model="state.name"
              class="w-full"
            />
          </UFormField>

          <UFormField
            :label="t('type-sviz')"
            name="type"
          >
            <USelect
              v-model="state.type"
              name="type"
              :items="[
                {
                  value: 'phone',
                  label: t('phone-call'),
                },
                {
                  value: 'email',
                  label: t('email'),
                },
              ]"
              class="w-full"
            />
          </UFormField>

          <UFormField
            v-if="state.type === 'phone'"
            :label="t('phone')"
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

          <UFormField
            v-else
            label="Email"
            name="email"
          >
            <UInput
              v-model="state.email"
              class="w-full"
            />
          </UFormField>

          <UFormField
            :label="t('comment')"
            name="comment"
          >
            <UTextarea
              v-model="state.comment"
              class="w-full"
              rows="4"
            />
          </UFormField>
        </div>

        <UButton
          type="submit"
          block
          >{{ t('get-con') }}</UButton
        >
      </UForm>
    </template>

    <UButton
      id="consultation-button"
      size="lg"
      class="mb-9"
      trailing-icon="material-symbols:arrow-right-alt-rounded"
      @click="isOpen = true"
    >
      {{ t('get-con') }}
    </UButton>
  </UModal>
</template>

<style scoped>
.header-image {
  height: 136px;
  border-radius: 1rem;
  width: 100%;
  object-fit: cover;
}
</style>
