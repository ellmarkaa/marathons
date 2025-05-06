<script lang="ts" setup>
import type { ISliderMarathon } from '~/stores/marathon/types';

interface CarouselBlockProps {
  sliders: ISliderMarathon[];
  isLoading: boolean;
}
defineProps<CarouselBlockProps>();
</script>

<template>
  <Carousel>
    <div
      v-if="isLoading"
      style="height: 500px"
      class="flex w-full items-center justify-center"
    >
      <Loader
        :height="60"
        :width="200"
      />
    </div>

    <template v-else>
      <CarouselItem
        v-for="slide in sliders"
        :id="slide.marathon.id"
        :key="slide.marathon.id"
        :index="slide.marathon.id"
        :country="slide.marathon.country.name_ru"
        :title="slide.marathon.title_ru"
        :marathon-start="slide.start_date"
        :marathon-end="slide.end_date"
        :image-path="slide.pictures[0]?.path || ''"
        :city="slide.marathon.city.name_ru"
      />
    </template>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<style></style>
