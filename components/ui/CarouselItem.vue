<script setup lang="ts">
interface ICarouselItem {
  index: number;
  title?: string;
  imageUrl?: string;
  country?: string;
  marathonDate?: string;
}
const props = defineProps<ICarouselItem>();
</script>

<template>
  <Slide :index="props.index">
    <div class="slider">
      <div class="flex flex-col justify-center">
        <div class="mb-8 text-white">
          <h3 class="title mb-3.5 font-bold">{{ title }}</h3>
          <p class="mb-3.5 text-base">{{ country }}</p>
          <p class="text-sm">{{ marathonDate }}</p>
        </div>

        <Button
          long
          class="self-center"
          >Подробнее</Button
        >
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
</style>
