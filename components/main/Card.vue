<script setup lang="ts">
type CardProps = {
  title: string;
  startDate: string;
  endDate: string;
  country: string;
  city: string;
  price: number;
  rating: number;
};

const props = defineProps<CardProps>();
const dateTitle = getDateTitle(props.startDate, props.endDate);
</script>

<template>
  <div class="card border-primary-99 flex flex-col gap-5 border bg-white px-3 pt-3 pb-4">
    <div class="relative">
      <p class="absolute top-1.5 left-1.5 flex items-center gap-1 rounded-lg bg-white px-1.5 py-1">
        <IconStar />
        <span class="rating-text text-primary-60">{{ rating.toFixed(1) }}</span>
      </p>

      <div
        tabindex="-1"
        class="absolute top-1.5 right-1.5 cursor-pointer"
      >
        <IconFavorite />
      </div>

      <img
        height="220"
        class="w-full rounded-xl object-cover"
        src="/imgs/card.jpg"
        alt="card"
      />
    </div>

    <div class="flex flex-col gap-3">
      <h3 class="text-lg font-bold">{{ title }}</h3>
      <p>{{ dateTitle }}</p>
      <p>{{ city }}, {{ country }}</p>
      <p>Бег 10 км, 21 км, 42,1 км</p>
    </div>

    <div class="flex justify-between align-bottom">
      <p class="text-neutral-10 self-end text-lg font-bold">
        <span class="text-sm font-medium text-neutral-50">от</span>
        ${{ price }}
      </p>

      <UButton variant="outline">Подробнее</UButton>
    </div>
  </div>
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
