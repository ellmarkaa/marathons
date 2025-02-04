<script lang="ts" setup>
import type {ISliderMarathon} from "~/stores/marathon/types";

interface CarouselBlockProps {
  sliders: ISliderMarathon[];
}

defineProps<CarouselBlockProps>();

</script>

<template>
  <Carousel>
    <CarouselItem
      v-for="slide in sliders"
      :id="slide.id"
      :key="slide.id"
      :index="slide.id"
      :country="slide.country.scalar"
      :title="slide['title.ru']"
      :marathon-start="slide.start_date"
      :marathon-end="slide.start_date"
    />

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<style>

</style>
