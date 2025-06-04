<script setup lang="ts">

const props = defineProps<{price: IPrice}>()

function formatRuMonthDay(date: string | undefined): string {
  if (!date) return '';

  const jsDate = new Date(date)

  const formatter = new Intl.DateTimeFormat('ru-RU', {
    month: 'long',
    day: 'numeric',
  })

  const [day, month] = formatter.format(jsDate).split(' ')
  let capitalizedMonth = ''

  if (month) capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1)

  return `${capitalizedMonth} ${day}`
}

const getYear = (date: string | undefined) => {
  if (!date) return '';
  const jsDate = new Date(date)
  return jsDate.getFullYear()
}
const firstDay = props.price.hotel_number?.stay_dates[0];
const lastDay = props.price.hotel_number?.stay_dates[1]
</script>

<template>
  <div class="border-neutral-80 rounded-xl border overflow-hidden">
    <div class="flex w-full bg-white">
      <div class="border-neutral-90 w-2/3 border-r p-5 pb-8">
        <h5 class="text-primary-0 mb-6 text-lg font-semibold">BASIC PACKAGE – {{price.hotel_number?.hotel?.name_for_site_ru}}</h5>

        <ul class="flex flex-col gap-3 text-base">
          <li>Дистанция: {{price.distance.distance}} км</li>
          <li>Даты: {{formatRuMonthDay(firstDay)}} – {{formatRuMonthDay(lastDay)}}, {{getYear(firstDay)}} ({{price.hotel_number?.night_count}} ночей)</li>
          <li>Отель: {{price.hotel_number?.hotel?.name_for_site_ru}}</li>
          <li>Тип размещения: {{price.hotel_number?.placement_type?.name_ru}}</li>
        </ul>
      </div>

      <div class="flex w-1/3 flex-col items-end justify-between p-5 pb-8">
        <UBadge label="Осталось 4 ВОПРОС пакета" />

        <div class="w-full text-right">
          <p class="mb-1 text-2xl font-bold">{{price.currency.symbol}} {{price.price}}</p>
          <p class="mb-3 text-xs">Слот + отель</p>
          <UButton
            label="Выбрать"
            block
          />
        </div>
      </div>
    </div>

    <UButton block label="Посмотреть детали" variant="link" class="text-neutral-20 hover:text-neutral-0" />
  </div>
</template>

<style scoped>

</style>
