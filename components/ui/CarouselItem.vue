<script setup lang="ts">
interface ICarouselItem {
  index: number;
  title?: string;
  imageUrl?: string;
  country?: string;
  marathonStart: string;
  marathonEnd: string;
  id: number | string;
}
const props = defineProps<ICarouselItem>();

const dateTitle = getDateTitle(props.marathonStart, props.marathonEnd);
</script>

<template>
  <Slide :index="index">
    <div class="slider">
      <div class="flex flex-col justify-center">
        <div class="mb-8 text-white max-sm:mb-10">
          <h3 class="title mb-3.5 font-bold max-sm:mb-2.5">{{ title }}</h3>
          <p class="mb-3.5 text-base max-sm:mb-2">{{ country }}</p>
          <p class="text-sm">{{ dateTitle }}</p>
        </div>

        <UButton
          size="lg"
          class="self-center"
          variant="soft"
          :to="`/marathon/${id}`"
        >
          Подробнее
        </UButton>
      </div>
    </div>
  </Slide>
</template>

<style scoped>
.slider {
  height: 500px;
  width: 100%;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%), url('/imgs/banner.jpeg');
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-content: center;
}

.title {
  font-size: 56px;
  line-height: 64px;
}

@media (width < 730px) {
  .title {
    font-size: 42px;
    line-height: 48px;
  }
}

@media (width < 470px) {
  .title {
    font-size: 22px;
    line-height: 26px;
  }
}
</style>
