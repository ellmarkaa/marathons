<script setup lang="ts">
import type { IMarathon } from '~/stores/marathon/types';
import { getDaysDifference } from '~/utils/helpers';

const route = useRoute();
const marathonStore = useMarathonStore();
const paymentStatus = computed(() => route.query.payment as undefined | 'success' | 'error');

const { data: marathon } = await useAsyncData('marathon', () =>
  marathonStore.fetchMarathonById(route.params.id as string),
);
const { data: prices } = await useAsyncData('prices', () => marathonStore.fetchPrices(route.params.id as string));
const { data: faq } = await useAsyncData('faq', () => marathonStore.fetchFAQ(route.params.id as string));
const { data: reviews = [] } = await useAsyncData('reviews', () =>
  marathonStore.fetchReviews(route.params.id as string),
);
const drawerOpen = ref(false);
const { t } = useI18n();
const { get } = useLocalized();

onUnmounted(() => {
  marathonStore.priceToBuy = null;
  marathonStore.marathon = null;
});

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
  <div>
    <UContainer
      v-if="marathon"
      class="marathon-container pt-18"
    >
      <h1 class="mb-5 text-3xl font-bold">{{ get(marathon, 'title') }}</h1>

      <div class="mb-4 flex items-center gap-1.5">
        <span class="text-base">{{ reviews?.length || 0 }} {{ t('reviews') }}</span>
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
          <p class="mb-8 text-2xl font-bold">{{ t('about-marathon') }}</p>
          <TextCollapse
            class="mb-8"
            :max-height="72"
            :row-count="3"
            :text="get(marathon, 'description') || get(marathon.marathon_name, 'description')"
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

          <ClientOnly>
            <UAlert
              icon="fluent:clock-alarm-16-regular"
              variant="outline"
              color="neutral"
              :title="`${t('close-register')} ${new Date(marathon.marathon_deadline).toLocaleDateString()} (осталось ${getDiffrence(marathon)} дня)`"
              class="mb-8"
              :ui="{
                icon: 'text-error-30',
              }"
            />
          </ClientOnly>

          <h4 class="mb-6 text-base font-semibold">{{ t('include-ticket') }}</h4>

          <ul class="flex flex-wrap gap-y-4">
            <li
              v-for="item of marathon.included_items"
              :key="item.id"
              class="flex w-1/3 items-center gap-3 text-base"
            >
              <IconCheckmark />
              {{ get(item, 'name') }}
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

          <h5 class="mb-8 text-2xl font-bold">{{ t('offers') }}</h5>

          <div class="bg-main-gray border-neutral-99 flex flex-col gap-6 rounded-xl border p-6">
            <div>
              <h5 class="mb-3 text-xl font-semibold">{{ t('ready-packet') }}</h5>
              <p class="text-neutral-20">{{ t('choose-packet') }}</p>
            </div>

            <MarathonPriceCard
              v-for="price in prices"
              :key="price.id"
              :price="price"
            />
          </div>

          <div class="border-neutral-90 my-10 border-b" />

          <div class="mb-8 flex items-center justify-between">
            <h4 class="text-2xl font-bold">{{ t('reviews') }}</h4>
            <MarathonReviewModal :marathon-id="marathon.id" />
          </div>

          <div
            v-if="!!reviews?.length"
            class="mb-4 flex flex-wrap justify-between gap-y-4"
          >
            <MainReview
              v-for="review in reviews"
              :key="review.id"
              :review="review"
            />
          </div>

          <p
            v-else
            class="text-neutral-30 mb-4 text-base"
          >
            {{ t('no-reviews') }}
          </p>
          <!--        <UButton-->
          <!--          v-if="reviews && reviews.length > 4"-->
          <!--          variant="soft"-->
          <!--          label="Посмотреть остальные отзывы"-->
          <!--        />-->

          <div class="border-neutral-90 my-10 border-b" />

          <div class="flex flex-wrap items-center gap-4 max-md:flex-col">
            <Image
              v-for="image in marathon.pictures"
              :key="image.path"
              class="marathon-info-image rounded-xl"
              :picture="image"
            />
            <p
              v-if="!marathon.pictures.length"
              class="text-neutral-30 text-base"
            >
              {{ t('no-images') }}
            </p>
          </div>

          <div class="border-neutral-90 my-10 border-b" />

          <h5 class="mb-3 text-xl font-semibold">{{ t('often-question') }}</h5>
          <ClientOnly>
            <p
              v-for="f in faq"
              :key="f.id"
              class="mb-4"
              v-html="f.profile_template"
            />
          </ClientOnly>
          <p
            v-if="!faq?.length"
            class="mb-5"
          >
            {{ t('empty') }}
          </p>
        </div>

        <MarathonInfoCard class="marathon-info-card" />
      </div>
    </UContainer>

    <div class="show-order fixed bottom-1 w-full">
      <UButton
        block
        :label="t('show-order')"
        @click="drawerOpen = true"
      />
    </div>
    <MarathonPaymentModal
      v-if="!!paymentStatus"
      :payment-status="paymentStatus"
    />

    <UDrawer v-model:open="drawerOpen">
      <template #content>
        <MarathonInfoCard
          v-model:drawer="drawerOpen"
          class="w-full"
        />
      </template>
    </UDrawer>
  </div>
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
.show-order {
  display: none;
}

@media (width < 1130px) {
  .marathon-info-card {
    display: none;
  }
  .show-order {
    display: block;
  }
}

.marathon-info-image {
  width: calc(50% - 16px);
}
@media (width < 730px) {
  .marathon-info-image {
    width: 100%;
  }
}
</style>
