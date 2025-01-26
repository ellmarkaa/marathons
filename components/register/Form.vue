<script setup lang="ts">

const radioItems = ref([
  {
    label: 'Женщина',
    value: 'Женщина'
  },
  {
    label: 'Мужчина',
    value: 'Мужчина'
  }
]);

const countries = ref([
  '+7',
  '+996'
]);

const items = ref(['Test 1', 'Test 2', 'Test 3']);
</script>

<template>
  <div class="register-form">
    <h3 class="text-2xl font-bold mb-10">Создать новый аккаунт</h3>

    <div class="flex flex-col gap-6 mb-8">
      <p class="text-base font-semibold">Персональная информация</p>

      <UFormField
        label="Пол"
        required
        :ui="{label: 'text-sm', container: 'mt-4'}"
      >
        <URadioGroup :items="radioItems" />
      </UFormField>

      <div class="flex gap-6">
        <UFormField class="w-1/2" label="Имя" required>
          <UInput class="w-full" />
        </UFormField>

        <UFormField class="w-1/2" label="Фамилия" required>
          <UInput class="w-full" />
        </UFormField>
      </div>

      <UFormField label="Номер телефона" required>
        <UButtonGroup class="w-full">
          <USelect model-value="+7" :items="countries" :ui="{base: 'w-[90px]'}" />
          <UInput class="w-full"/>
        </UButtonGroup>
      </UFormField>

      <div class="flex gap-6">
        <UFormField class="w-1/2" label="Дата рождения" required>
          <Datepicker />
        </UFormField>

        <UFormField class="w-1/2" label="Группа крови" required>
          <USelect class="w-full" :items="items" />
        </UFormField>
      </div>

      <UFormField label="Гражданство" required>
        <USelect class="w-full" :items="items" />
      </UFormField>

      <UFormField label="ИИН" required>
        <UInput class="w-full" />
      </UFormField>

      <div class="flex gap-6">
        <UFormField label="Номер паспорта" required class="w-1/2">
          <UInput class="w-full" />
        </UFormField>

        <UFormField class="w-1/2" label="Срок действия" required>
          <Datepicker />
        </UFormField>
      </div>
    </div>

    <div class="flex flex-col gap-6 mb-10">
      <p class="text-base font-semibold">Дополнительная информация</p>

      <div class="flex gap-6">
        <UFormField label="Размер футболки" required class="w-1/2">
          <USelect class="w-full" />
        </UFormField>

        <UFormField label="Целевое время" required class="w-1/2">
          <UInput placeholder="00:00" class="w-full" />
        </UFormField>
      </div>
    </div>

    <div class="flex flex-col gap-6 mb-10">
      <p class="text-base font-semibold">Контактные данные для экстренных случаев</p>

      <div class="flex gap-6">
        <UFormField label="Имя" required class="w-1/2">
          <UInput class="w-full" />
        </UFormField>

        <UFormField label="Кем является" required class="w-1/2">
          <USelect class="w-full" />
        </UFormField>
      </div>

      <UFormField label="Номер телефона" required>
        <UInput class="w-full">
          <template #leading>+7</template>
        </UInput>
      </UFormField>
    </div>

    <UButton block>Создать аккаунт</UButton>
  </div>
</template>

<style scoped>
.register-form {
  background-color: #ffffff;
  border-radius: 16px;
  padding: 32px 42px;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.04);
  max-width: 534px;
  width: 100%;
}
</style>
