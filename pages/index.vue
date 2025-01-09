<script setup lang="ts">
const filterMenu = ref(false);
</script>

<template>
  <div class="bg-main-gray">
    <Carousel>
      <CarouselItem
        v-for="slide in 5"
        :key="slide"
        :index="slide"
        country="Бостон, США"
        title="Boston Marathon"
        marathon-date="12-15 Сен, 2024 (Чт - Вс)"
      />

      <template #addons>
        <Pagination />
      </template>
    </Carousel>

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

      <div>
        <div class="flex flex-wrap items-start justify-between gap-y-8 max-xl:justify-center max-xl:gap-x-5">
          <MainCard
            v-for="num in 12"
            :key="num"
          />
        </div>

        <div class="mt-14 mb-14 flex w-full items-center justify-center">
          <UButton variant="soft">Показать еще</UButton>
        </div>
      </div>
    </UContainer>

    <section class="partners bg-accent-50 flex items-center justify-evenly max-md:flex-col max-md:gap-4">
      <a href="#"
        ><img
          src="/imgs/london.png"
          alt="London"
      ></a>
      <a href="#"
        ><img
          src="/imgs/chicago.png"
          alt="Chicago"
      ></a>
      <a href="#"
        ><img
          src="/imgs/copenhagen.png"
          alt="Copenhagen"
      ></a>
      <a href="#"
        ><img
          src="/imgs/paris.png"
          alt="Paris"
      ></a>
      <a href="#"
        ><img
          src="/imgs/berlin.png"
          alt="Berlin"
      ></a>
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
        >
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
