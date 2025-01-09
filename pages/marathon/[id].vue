<script setup lang="ts">

const includes = ['Медаль финишера', 'Футболка финишера', 'Фотографии', 'Вход на марафон', 'Питьевые станции', 'Трансфер', 'Медицинская помощь', 'Туалеты'];
const distanceInfo = [
  {
    distance: 10,
    distanceName: '10 км',
    price: 200
  },
  {
    distance: 21.1,
    distanceName: 'Half Marathon',
    price: 400
  },
  {
    distance: 42.1,
    distanceName: 'Marathon',
    price: 600
  },
  {
    distance: 100,
    distanceName: 'Ultra Marathon',
    price: 800
  }
]

const items = ref(['Backlog', 'Todo', 'In Progress', 'Done'])
const value = ref('')

</script>

<template>
  <UContainer class="pt-18 marathon-container">
    <h1 class="text-3xl mb-5 font-bold">Vestel Manisa Half Marathon - Manisa</h1>

    <div class="flex items-center gap-1.5 mb-4">
      <span class="inline-flex gap-0.5">
        <IconStar
          v-for="star in 5"
          :key="star"
          :width="18"
          :height="18"
        />
      </span>
      <span class="font-semibold text-base">4.95</span>
      <span class="text-base">(25 отзывов)</span>
    </div>

    <div class="mb-15">
      <img class="marathon-image" src="/imgs/marathon-main.jpeg" alt="marathon" >
    </div>

    <div class="flex gap-x-20">
      <div class="grow">
        <p class="font-bold text-2xl mb-8">Об этом марафоне</p>
        <p class="text-base text-neutral-50 description mb-3">Если, как и многие другие бегуны с севера Европы, вы ищете отличный зимний отдых и забег в красивом месте, то Maratón Málaga может быть тем, что вы ищете. Это ежегодное мероприятие по бегу по шоссе проводится в декабре в городе Малага, Испания, столице Коста-дель-Соль. Малагаский марафон и полумарафон проводятся по воскресеньям.</p>
        <div class="mb-8">
          <UButton
            variant="text"
            trailing-icon="material-symbols:keyboard-arrow-down-rounded"
            class="pl-0 py-1"
          >
            Показать все
          </UButton>
        </div>

        <div class="py-3 flex gap-4 mb-4">
          <IconRunner />
          <span class="text-base">10 км, 21 км, 42,1 км</span>
        </div>

        <p class="mb-4 flex gap-3 items-center">
          <span class="text-base font-semibold">Стартовый адрес</span> Av. de Cervantes, 4, 29016 Málaga, Spain
        </p>

        <p class="flex gap-3 items-center mb-8">
          <span class="text-base font-semibold">Финишный адрес</span> Av. de Cervantes, 4, 29016 Málaga, Spain
        </p>

        <UAlert
          icon="fluent:clock-alarm-16-regular"
          variant="outline"
          color="neutral"
          title="Регистрация закрывается 31 октября (осталось 43 дня)"
          class="mb-8"
          :ui="{
            icon: 'text-error-30'
          }"
        />

        <h4 class="text-base font-semibold mb-6">Включено в стоимость вашего билета</h4>

        <ul class="flex flex-wrap gap-y-4">
          <li v-for="title of includes" :key="title" class="flex gap-3 items-center w-1/3 text-base">
            <IconCheckmark />
            {{title}}
          </li>
        </ul>

        <div class="my-14 border-b border-neutral-90" />

        <h5 class="text-2xl font-bold mb-8">Карта маршрута</h5>
        <img src="/imgs/marathon-map.png" alt="map" class="w-full h-auto rounded-xl marathon-map" >

        <div class="my-14 border-b border-neutral-90" />

        <div class="bg-main-gray p-6 rounded-xl border border-neutral-99 mb-14">
          <h5 class="font-bold text-2xl mb-4">Доступные дистанции</h5>
          <p class="text-base text-neutral-20 mb-8">Выберите нужную вам дистанцию</p>

          <div class="flex gap-y-4 justify-between flex-wrap">
            <MarathonDistanceCard
              v-for="info of distanceInfo"
              :key="info.distance"
              :distance="info.distance"
              :distance-name="info.distanceName"
              :price="info.price"
            />
          </div>
        </div>

        <div class="p-6 bg-main-gray rounded-xl border border-neutral-99 gap-6 flex flex-col">
          <div class="p-5 bg-white rounded-xl">
            <div class="flex items-center justify-between mb-3">
              <div>
                <h4 class="font-bold text-2xl mb-2">Виза</h4>
                <p>Поможем вам получить визу</p>
              </div>
              <UButton variant="outline">Добавить</UButton>
            </div>

            <div class="flex items-end gap-4">
              <span class="font-semibold">Стоимость</span> <span class="text-xl font-semibold text-accent-50">400$</span>
            </div>

            <div class="my-6 border-b border-neutral-90" />

            <h5 class="text-base font-semibold mb-3">Шенген виза</h5>
            <p class="text-neutral-50 mb-3">В визовую услугу входит:</p>
            <ul class="text-neutral-50 visa-list">
              <li>консультация по процессу до получения визы;</li>
              <li>запись на ближайшую дату;</li>
              <!--              <li>консультация по списку необходимых документов;</li>-->
              <!--              <li>заполнение анкеты;</li>-->
              <!--              <li>подготовим и запишем на подачу;</li>-->
              <!--              <li>бронирование отелей и билетов для визы;</li>-->
              <!--              <li>оформление страховки (оплачивается отдельно).</li>-->
            </ul>
            <!--            // TODO: show more button-->
            <UButton
              variant="text"
              trailing-icon="material-symbols:keyboard-arrow-down-rounded"
              class="pl-0 py-1"
            >
              Посмотреть все
            </UButton>
          </div>

          <div class="p-5 bg-white rounded-xl">
            <h4 class="font-bold text-2xl mb-2">Виза</h4>
            <p>Выберете отель, где будете размещены</p>

            <div class="my-8 border-b border-neutral-90" />

            <div class="flex gap-6">
              <UFormField label="Отель" class="w-2/3">
                <UInputMenu v-model="value" :items="items" class="w-full" />
              </UFormField>

              <UFormField label="Количество дней" class="w-1/3">
                <UInputMenu v-model="value" :items="items" class="w-full" />
              </UFormField>
            </div>

            <div class="my-8 border-b border-neutral-90" />

            <a href="#" class="text-base flex gap-2 items-center mb-8">Подробная информация о размещении <IconRightUp /></a>

            <UButton variant="outline" disabled>Добавить</UButton>
          </div>
        </div>

        <div class="my-14 border-b border-neutral-90" />

        <h4 class="text-2xl font-bold mb-2">Отзывы</h4>
        <div class="flex gap-1.5 mb-8 items-center">
          <div class="flex">
            <IconStar v-for="index of 5" :key="index" />
          </div>

          <span class="text-xl font-semibold">4.95</span>
        </div>

        <div class="flex flex-wrap justify-between gap-y-4 mb-4">
          <MainReview v-for="index of 4" :key="index" />
        </div>

        <UButton variant="soft">Посмотреть все 25 отзывов</UButton>

        <div class="my-14 border-b border-neutral-90" />

        <h4 class="text-2xl font-bold mb-8">Бестселлеры</h4>

        <div class="flex gap-6 mb-30">
          <MainCard class="card" />
          <MainCard class="card" />
        </div>
      </div>

      <MarathonInfoCard />
    </div>
  </UContainer>
</template>

<style scoped>
.marathon-image {
  border: 1px solid #D3D9E4;
  width: 100%;
  height: 360px;
  border-radius: 12px;
  object-fit: cover;
  display: block;
}
.description {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Limit to 3 lines */
  -webkit-box-orient: vertical;
  transition: max-height 0.3s ease;
}
.marathon-container {
  max-width: 1192px;
}
.marathon-map {
  border: 1px solid rgba(0, 0, 0, 0.06);
}
.visa-list {
  list-style: inside;
  margin-left: 5px;
  margin-bottom: 24px;
}
.card {
  // TODO: think about it
  width: 334px !important;
}
</style>
