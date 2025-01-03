<script setup lang="ts"></script>

<template>
  <div>
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

    <div class="mb-16 bg-neutral-0 py-4">
      <div class="container">
        <p class="text-xl font-semibold text-white">World Marathon Majors’ Partner</p>
      </div>
    </div>

    <section class="container flex gap-x-6">
      <MainFilterBlock />

      <div>
        <div class="flex flex-wrap items-start justify-center gap-x-5 gap-y-8">
          <MainCard v-for="num in 12" :key="num" />
        </div>

        <div class="mb-14 mt-14 flex w-full items-center justify-center">
          <Button>Показать еще</Button>
        </div>
      </div>
    </section>

    <section class="partners flex items-center justify-evenly bg-accent-50">
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
      <div class="container flex flex-col items-center py-16">
        <p class="mb-5 text-center text-xl font-semibold text-neutral-60">Хотите получить консультацию?</p>
        <p class="leave-text mb-8 text-center text-4xl font-bold">
          Оставьте заявку, чтобы получить всю информацию перед принятием решения
        </p>
        <Button
          type="filled"
          icon-right
          long
          class="mb-9"
        >
          Получить консультацию <IconRight />
        </Button>
        <img
          src="/imgs/lets-go.svg"
          alt="lets go"
          class="-translate-x-1/2"
        >
      </div>
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
</style>
