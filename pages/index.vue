<script setup lang="ts">
import { useMarathonStore } from '~/stores/marathon/store';

const filterMenu = ref(false);
// const authStore = useAuthStore();
const marathonStore = useMarathonStore();
const pagination = computed(() => marathonStore.marathonPagination);
// const test = useI18n();
// console.log('test', test.fallbackLocale.value);
// setTimeout(() => {
//   test.setLocale('en');
//   console.log('test', test.fallbackLocale.value);
//   console.log('test', test.locale.value);
// }, 1000);

// await useAsyncData('get-token', () => authStore.fetchToken());
const { data: sliders } = await useAsyncData('slider-marathons', () => marathonStore.fetchSliderMarathons());
useAsyncData('main-marathons', () => marathonStore.fetchMarathons());
// const { data: aa } = await useAsyncData('main-dasda', () => marathonStore.fetchMarathonById(1244));
// console.log('aa', aa.value);
</script>

<template>
  <div class="bg-main-gray">
    <MainCarouselBlock
      :is-loading="marathonStore.sliderLoading"
      :sliders="sliders || []"
    />

    <div class="bg-neutral-0 mb-16 py-4 max-lg:mb-12">
      <UContainer>
        <p class="text-xl font-semibold text-white max-md:text-lg max-sm:text-sm">World Marathon Majors’ Partner</p>
      </UContainer>
    </div>

    <UContainer class="hidden justify-center max-lg:mb-6 max-lg:flex">
      <MainFilterMenu
        v-model="filterMenu"
        @close-menu="filterMenu = false"
      >
        <UButton
          trailing-icon="mdi:mixer-settings"
          variant="outline"
          class="filter-button"
          >Фильтры</UButton
        >
      </MainFilterMenu>
    </UContainer>

    <UContainer class="flex gap-x-6">
      <MainFilterBlock class="max-lg:hidden" />

      <div class="w-full">
        <div class="flex flex-wrap items-start gap-x-5 gap-y-8 max-xl:justify-center">
          <MainCard
            v-for="marathon in marathonStore.mainPageMarathons"
            :id="1"
            :key="marathon.title_ru"
            :city="marathon.city.name_ru"
            :country="marathon.country.name_ru"
            :title="marathon.title_ru"
            :start-date="marathon.marathon_date"
            :end-date="marathon.marathon_deadline"
            :rating="5"
            :slots="marathon.slots"
            :picture="marathon.pictures[0] || null"
            :distances="marathon.distances"
          />
        </div>

        <div class="mt-14 mb-14 flex w-full items-center justify-center">
          <UButton
            v-if="pagination.lastPage > pagination.page"
            variant="soft"
            :disabled="marathonStore.mainLoading"
            @click="marathonStore.fetchMoreMarathons"
          >
            Показать еще
          </UButton>
        </div>
      </div>
    </UContainer>

    <section class="partners bg-accent-50 flex items-center justify-evenly max-md:flex-col max-md:gap-4">
      <a href="#"
        ><img
          src="/imgs/london.png"
          alt="London"
      /></a>
      <a href="#"
        ><img
          src="/imgs/chicago.png"
          alt="Chicago"
      /></a>
      <a href="#"
        ><img
          src="/imgs/copenhagen.png"
          alt="Copenhagen"
      /></a>
      <a href="#"
        ><img
          src="/imgs/paris.png"
          alt="Paris"
      /></a>
      <a href="#"
        ><img
          src="/imgs/berlin.png"
          alt="Berlin"
      /></a>
    </section>

    <section class="bg-accent-99">
      <UContainer class="flex flex-col items-center py-16">
        <p class="text-neutral-60 mb-5 text-center text-xl font-semibold max-md:text-lg">
          Хотите получить консультацию?
        </p>
        <p class="leave-text mb-8 text-center text-4xl font-bold max-md:text-2xl">
          Оставьте заявку, чтобы получить всю информацию перед принятием решения
        </p>
        <UButton
          size="lg"
          class="mb-9"
          trailing-icon="material-symbols:arrow-right-alt-rounded"
        >
          Получить консультацию
        </UButton>
        <img
          src="/imgs/lets-go.svg"
          alt="lets go"
          class="-translate-x-1/2"
        />
      </UContainer>
    </section>
  </div>
</template>

<style scoped>
.partners {
  padding: 72px 0 72px;
}

.leave-text {
  color: #0a082c;
  max-width: 750px;
}

.filter-button {
  width: 343px;
  justify-content: center;
}

@media (width < 730px) {
  .partners {
    padding: 65px 0 65px;
  }
}
</style>
