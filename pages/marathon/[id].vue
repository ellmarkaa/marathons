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
const { data: reviews = [] } = await useAsyncData('reviews', () => marathonStore.fetchReviews(route.params.id as string));
console.log('reviews', reviews);
console.log('marathon', marathon);
console.log('prices', prices);

const getDiffrence = (marathon: IMarathon) => {
  const deadline = new Date(marathon.marathon_deadline);
  const now = new Date();
  if (deadline.getTime() > now.getTime()) {
    return getDaysDifference(deadline, now);
  }

  return 0;
};
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
            icon: 'text-error-30'
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

        <div class="border-neutral-90 my-10 border-b" />
        <!--        <img-->
        <!--          src="/imgs/marathon-map.png"-->
        <!--          alt="map"-->
        <!--          class="marathon-map h-auto w-full rounded-xl"-->
        <!--        >-->

        <!--        <div class="border-neutral-90 my-10 border-b" />-->

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

          <MarathonPriceCard v-for="price in prices" :key="price.id" :price="price" />
        </div>

        <div class="border-neutral-90 my-10 border-b" />

        <div class="flex items-center justify-between mb-8">
          <h4 class="text-2xl font-bold">Отзывы</h4>
          <UButton class="text-neutral-0 text-base hover:text-neutral-0" icon="mdi-light:pencil" label="Оставить отзыв" variant="link" />
        </div>

        <div v-if="!!reviews?.length" class="mb-4 flex flex-wrap justify-between gap-y-4">
          <MainReview
            v-for="review in reviews"
            :key="review.id"
            :review="review"
          />
        </div>

        <p v-else class="text-base text-neutral-30 mb-4" v-if="!reviews?.length">На данный момент у марафона нету отзыва</p>
        <UButton v-if="reviews && reviews.length > 4" variant="soft">Посмотреть все 25 отзывов</UButton>

        <div class="border-neutral-90 my-10 border-b" />

        <div class="flex flex-wrap gap-4 items-center">
          <Image v-for="image in marathon.pictures" :style="{width: 'calc(50% - 16px)'}" class="rounded-xl" :picture="image" />
          <p class="text-base text-neutral-30 mb-10" v-if="!marathon.pictures.length">На данный момент у марафона нету фотографий</p>
        </div>

<!--        <h4 class="mb-8 text-2xl font-bold">Бестселлеры</h4>-->

<!--        <div class="mb-30 flex gap-6">-->
<!--                    TODO: think about it-->
<!--                    <MainCard class="card" />-->
<!--                    <MainCard class="card" />-->
<!--        </div>-->
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
