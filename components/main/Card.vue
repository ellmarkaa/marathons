<script setup lang="ts">
import { useAuthStore } from '#imports';
import type { IDistance } from '~/stores/marathon/types';

type CardProps = {
  title: string;
  startDate: string;
  endDate: string;
  country: string;
  city: string;
  slots: ISlot[];
  // rating: number;
  id: number;
  picture: IPicture | null;
  distances: IDistance[];
};
const getMinimalPrice = (slots: ISlot[]) => {
  const price = Math.min(...slots.map(slot => slot.price));
  return isFinite(price) ? price : 0;
};

// const getDistanceArr = (slots: ISlot[]) => {
//   return slots.map(slot => slot.distance).sort()
// };

const authStore = useAuthStore();

const props = defineProps<CardProps>();
const dateTitle = getDateTitle(props.startDate, props.endDate);
const minimalPrice = getMinimalPrice(props.slots);

const isFavorite = computed(() => authStore.favoriteMarathons.includes(props.id));
const { t } = useI18n();
// const distanceArr = getDistanceArr(props.slots);

const handleFavorite = () => {
  if (!authStore.userUpdateLoading) {
    authStore.handleMarathonFavorite(props.id);
  }
};
</script>

<template>
  <NuxtLink :to="{name: 'marathon-id___ru', params: {id}}" class="card border-primary-99 flex flex-col gap-5 border bg-white px-3 pt-3 pb-4 cursor-pointer">
    <div class="relative">
      <!--      <p class="absolute top-1.5 left-1.5 flex items-center gap-1 rounded-lg bg-white px-1.5 py-1">-->
      <!--        <IconStar />-->
      <!--        <span class="rating-text text-primary-60">{{ rating.toFixed(1) }}</span>-->
      <!--      </p>-->

      <div
        v-if="authStore.isAuth"
        tabindex="0"
        class="absolute top-1.5 right-1.5 cursor-pointer"
        :aria-disabled="authStore.userUpdateLoading"
        @click="handleFavorite"
      >
        <Loader
          v-if="authStore.userUpdateLoading"
          :width="28"
          :height="28"
        />
        <IconFavorite
          v-else
          :is-favorite="isFavorite"
        />
      </div>

      <Image
        v-if="picture"
        height="220"
        class="image w-full rounded-xl object-cover"
        :picture="picture"
      />
      <img
        v-else
        height="220"
        class="image w-full rounded-xl object-cover"
        src="/imgs/card.jpg"
        alt="card"
      />
    </div>

    <div class="flex flex-col gap-3">
      <h3 class="text-lg font-bold">{{ title }}</h3>
      <p>{{ dateTitle }}</p>
      <p>{{ city }}, {{ country }}</p>
      <p class="flex items-center gap-2">
        <IconDistance /> Бег {{ distances.map(dis => ` ${dis?.distance} км`).toString() }}
      </p>
    </div>

    <div class="flex justify-between align-bottom">
      <p class="text-neutral-10 self-end text-lg font-bold">
        <span class="text-sm font-medium text-neutral-50">от</span>
        ${{ minimalPrice }}
      </p>

      <UButton
        variant="outline"
        @click="navigateTo(`/marathon/${id}`)"
        >{{ t('read-more') }}</UButton
      >
    </div>
  </NuxtLink>
</template>

<style scoped>
.card {
  width: 32%;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.12);
  border-radius: 12px;
}
.rating-text {
  font-size: 10px;
}
.image {
  height: 220px;
}

@media (width < 1180px) {
  .card {
    width: 312px;
  }
}

@media (width < 676px) {
  .card {
    width: 343px;
  }
}
</style>
