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
    <div class="flex justify-center flex-col">
      <div class="text-white mb-8">
        <h3 class="font-bold title mb-3.5">{{ title }}</h3>
        <p class="text-base mb-3.5">{{country}}</p>
        <p class="text-sm">{{marathonDate}}</p>
      </div>

      <Button>
        Подробнее
      </Button>
    </div>
  </div>
</Slide>
</template>

<style scoped>
.slider {
  height: 500px;
  width: 100%;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url("/imgs/banner.jpeg");
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-content: center;
}

.title {
  font-size: 56px;
  line-height: 64px;
}
</style>
