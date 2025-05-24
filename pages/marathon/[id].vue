<script setup lang="ts">
import type { IMarathon } from '~/stores/marathon/types';
import { getDaysDifference } from '~/utils/helpers';

const route = useRoute();
const marathonStore = useMarathonStore();
console.log(route.params.id);

const { data: marathon } = await useAsyncData('marathon', () =>
  marathonStore.fetchMarathonById(route.params.id as string),
);
const { data: prices } = await useAsyncData('prices', () => marathonStore.fetchPrices(route.params.id as string));
console.log('marathon', marathon);
console.log('prices', prices);

// const includes = [
//   'Медаль финишера',
//   'Футболка финишера',
//   'Фотографии',
//   'Вход на марафон',
//   'Питьевые станции',
//   'Трансфер',
//   'Медицинская помощь',
//   'Туалеты',
// ];
// const distanceInfo = [
//   {
//     distance: 10,
//     distanceName: '10 км',
//     price: 200,
//   },
//   {
//     distance: 21.1,
//     distanceName: 'Half Marathon',
//     price: 400,
//   },
//   {
//     distance: 42.1,
//     distanceName: 'Marathon',
//     price: 600,
//   },
//   {
//     distance: 100,
//     distanceName: 'Ultra Marathon',
//     price: 800,
//   },
// ];

const getDiffrence = (marathon: IMarathon) => {
  const deadline = new Date(marathon.marathon_deadline);
  const now = new Date();
  if (deadline.getTime() > now.getTime()) {
    return getDaysDifference(deadline, now);
  }

  return 0;
};

// const items = ref(['Backlog', 'Todo', 'In Progress', 'Done']);
// const value = ref('');
</script>

<template>
  <UContainer
    v-if="marathon"
    class="marathon-container pt-18"
  >
    <h1 class="mb-5 text-3xl font-bold">{{ marathon.title_ru }}</h1>

    <div class="mb-4 flex items-center gap-1.5">
      <span class="inline-flex gap-0.5">
        <IconStar
          v-for="star in 5"
          :key="star"
          :width="18"
          :height="18"
        />
      </span>
      <span class="text-base font-semibold">4.95</span>
      <span class="text-base">(25 отзывов)</span>
    </div>

    <div class="mb-15">
      <Image
        image-class="marathon-image"
        :picture="marathon.pictures[0]"
        second-url="/imgs/marathon-main.jpeg"
      />
      <!--      <img-->
      <!--        class="marathon-image"-->
      <!--        src="/imgs/marathon-main.jpeg"-->
      <!--        :alt="marathon.title_ru"-->
      <!--      >-->
    </div>

    <div class="flex gap-x-20">
      <div class="grow">
        <p class="mb-8 text-2xl font-bold">Об этом марафоне</p>
        <TextCollapse
          class="mb-8"
          :max-height="72"
          :row-count="3"
          :text="marathon.description_ru"
        />

        <div class="mb-4 flex gap-4 py-3">
          <IconRunner />
          <span class="text-base">{{ marathon.distances.map(dis => ` ${dis?.distance} км`).toString() }}</span>
        </div>

        <!--        <p class="mb-4 flex items-center gap-3">-->
        <!--          <span class="text-base font-semibold">Стартовый адрес</span> Av. de Cervantes, 4, 29016 Málaga, Spain-->
        <!--        </p>-->

        <!--        <p class="mb-8 flex items-center gap-3">-->
        <!--          <span class="text-base font-semibold">Финишный адрес</span> Av. de Cervantes, 4, 29016 Málaga, Spain-->
        <!--        </p>-->

        <UAlert
          icon="fluent:clock-alarm-16-regular"
          variant="outline"
          color="neutral"
          :title="`Регистрация закрывается ${new Date(marathon.marathon_deadline).toLocaleDateString()} (осталось ${getDiffrence(marathon)} дня)`"
          class="mb-8"
          :ui="{
            icon: 'text-error-30',
          }"
        />

        <h4 class="mb-6 text-base font-semibold">Включено в стоимость вашего билета</h4>

        <ul class="flex flex-wrap gap-y-4">
          <li
            v-for="item of marathon.included_items"
            :key="item.id"
            class="flex w-1/3 items-center gap-3 text-base"
          >
            <IconCheckmark />
            {{ item.name_ru }}
          </li>
        </ul>

        <div class="border-neutral-90 my-14 border-b" />
        <!--        <img-->
        <!--          src="/imgs/marathon-map.png"-->
        <!--          alt="map"-->
        <!--          class="marathon-map h-auto w-full rounded-xl"-->
        <!--        >-->

        <!--        <div class="border-neutral-90 my-14 border-b" />-->

        <!--        <div class="bg-main-gray border-neutral-99 mb-14 rounded-xl border p-6">-->
        <!--          <h5 class="mb-4 text-2xl font-bold">Доступные дистанции</h5>-->
        <!--          <p class="text-neutral-20 mb-8 text-base">Выберите нужную вам дистанцию</p>-->

        <!--          <div class="flex flex-wrap justify-between gap-y-4">-->
        <!--            <MarathonDistanceCard-->
        <!--              v-for="info of distanceInfo"-->
        <!--              :key="info.distance"-->
        <!--              :distance="info.distance"-->
        <!--              :distance-name="info.distanceName"-->
        <!--              :price="info.price"-->
        <!--            />-->
        <!--          </div>-->
        <!--        </div>-->

        <h5 class="mb-8 text-2xl font-bold">Предложения</h5>

        <div class="bg-main-gray border-neutral-99 flex flex-col gap-6 rounded-xl border p-6">
          <div>
            <h5 class="mb-3 text-xl font-semibold">Готовые пакеты</h5>
            <p class="text-neutral-20">Выберите подходящий для вас вариант</p>
          </div>

          <div class="border-neutral-80 rounded-xl border">
            <div class="flex w-full">
              <div class="border-neutral-90 w-2/3 border-r p-5 pb-8">
                <h5 class="text-primary-0 mb-6 text-lg font-semibold">BASIC PACKAGE – Rixos Hotel</h5>

                <ul class="flex flex-col gap-3 text-base">
                  <li>Дистанция: 42.195 км</li>
                  <li>Даты: Февраль 26 – Март 3, 2025 (5 ночей)</li>
                  <li>Отель: Rixos Hotel</li>
                  <li>Тип размещения: Twin - 2 single beds</li>
                </ul>
              </div>

              <div class="flex w-1/3 flex-col items-end justify-between p-5 pb-8">
                <UBadge label="Осталось 4 пакета" />

                <div class="w-full text-right">
                  <p class="mb-1 text-2xl font-bold">KZT 216 900</p>
                  <p class="mb-3 text-xs">Слот + отель</p>
                  <UButton
                    label="Выбрать"
                    block
                  />
                </div>
              </div>
            </div>
          </div>

          <!--          <div class="rounded-xl bg-white p-5">-->
          <!--            <div class="mb-3 flex items-center justify-between">-->
          <!--              <div>-->
          <!--                <h4 class="mb-2 text-2xl font-bold">Виза</h4>-->
          <!--                <p>Поможем вам получить визу</p>-->
          <!--              </div>-->
          <!--              <UButton variant="outline">Добавить</UButton>-->
          <!--            </div>-->

          <!--            <div class="flex items-end gap-4">-->
          <!--              <span class="font-semibold">Стоимость</span>-->
          <!--              <span class="text-accent-50 text-xl font-semibold">400$</span>-->
          <!--            </div>-->

          <!--            <div class="border-neutral-90 my-6 border-b" />-->

          <!--            <h5 class="mb-3 text-base font-semibold">Шенген виза</h5>-->
          <!--            <p class="mb-3 text-neutral-50">В визовую услугу входит:</p>-->

          <!--            <ContentCollapse :max-height="40">-->
          <!--              <ul class="visa-list text-neutral-50">-->
          <!--                <li>консультация по процессу до получения визы;</li>-->
          <!--                <li>запись на ближайшую дату;</li>-->
          <!--                <li>консультация по списку необходимых документов;</li>-->
          <!--                <li>заполнение анкеты;</li>-->
          <!--                <li>подготовим и запишем на подачу;</li>-->
          <!--                <li>бронирование отелей и билетов для визы;</li>-->
          <!--                <li>оформление страховки (оплачивается отдельно).</li>-->
          <!--              </ul>-->
          <!--            </ContentCollapse>-->
          <!--          </div>-->

          <!--          <div class="rounded-xl bg-white p-5">-->
          <!--            <h4 class="mb-2 text-2xl font-bold">Виза</h4>-->
          <!--            <p>Выберете отель, где будете размещены</p>-->

          <!--            <div class="border-neutral-90 my-8 border-b" />-->

          <!--            <div class="flex gap-6">-->
          <!--              <UFormField-->
          <!--                label="Отель"-->
          <!--                class="w-2/3"-->
          <!--              >-->
          <!--                <UInputMenu-->
          <!--                  v-model="value"-->
          <!--                  :items="items"-->
          <!--                  class="w-full"-->
          <!--                />-->
          <!--              </UFormField>-->

          <!--              <UFormField-->
          <!--                label="Количество дней"-->
          <!--                class="w-1/3"-->
          <!--              >-->
          <!--                <UInputMenu-->
          <!--                  v-model="value"-->
          <!--                  :items="items"-->
          <!--                  class="w-full"-->
          <!--                />-->
          <!--              </UFormField>-->
          <!--            </div>-->

          <!--            <div class="border-neutral-90 my-8 border-b" />-->

          <!--            <a-->
          <!--              href="#"-->
          <!--              class="mb-8 flex items-center gap-2 text-base"-->
          <!--            >Подробная информация о размещении <IconRightUp-->
          <!--            /></a>-->

          <!--            <UButton-->
          <!--              variant="outline"-->
          <!--              disabled-->
          <!--            >Добавить</UButton-->
          <!--            >-->
          <!--          </div>-->
        </div>

        <div class="border-neutral-90 my-14 border-b" />

        <h4 class="mb-2 text-2xl font-bold">Отзывы</h4>
        <div class="mb-8 flex items-center gap-1.5">
          <div class="flex">
            <IconStar
              v-for="index of 5"
              :key="index"
            />
          </div>

          <span class="text-xl font-semibold">4.95</span>
        </div>

        <div class="mb-4 flex flex-wrap justify-between gap-y-4">
          <MainReview
            v-for="index of 4"
            :key="index"
          />
        </div>

        <UButton variant="soft">Посмотреть все 25 отзывов</UButton>

        <div class="border-neutral-90 my-14 border-b" />

        <h4 class="mb-8 text-2xl font-bold">Бестселлеры</h4>

        <div class="mb-30 flex gap-6">
          <!--          TODO: think about it-->
          <!--          <MainCard class="card" />-->
          <!--          <MainCard class="card" />-->
        </div>
      </div>

      <MarathonInfoCard />
    </div>
  </UContainer>
</template>

<style scoped>
.marathon-image {
  border: 1px solid #d3d9e4;
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
}
.card {
  width: 334px !important;
}
</style>
