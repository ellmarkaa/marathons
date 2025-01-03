<script setup lang="ts">

</script>

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

  <div class="bg-neutral-0 py-4 mb-16">
    <div class="container">
      <p class="font-semibold text-xl text-white">World Marathon Majors’ Partner</p>
    </div>
  </div>

  <section class="container flex gap-x-6">
    <MainFilterBlock />

    <div>
      <div class="flex gap-x-5 gap-y-8 flex-wrap items-start justify-center">
        <MainCard v-for="num in 12" />
      </div>

      <div class="w-full mt-14 mb-14 flex items-center justify-center">
        <Button>Показать еще</Button>
      </div>
    </div>
  </section>

  <section class="bg-accent-50 partners flex items-center justify-evenly">
    <a href="#"><img src="/imgs/london.png" alt="London" /></a>
    <a href="#"><img src="/imgs/chicago.png" alt="Chicago" /></a>
    <a href="#"><img src="/imgs/copenhagen.png" alt="Copenhagen" /></a>
    <a href="#"><img src="/imgs/paris.png" alt="Paris" /></a>
    <a href="#"><img src="/imgs/berlin.png" alt="Berlin" /></a>
  </section>

  <section class="bg-accent-99">
    <div class="container flex flex-col py-16 items-center">
      <p class="mb-5 text-xl text-neutral-60 font-semibold text-center">Хотите получить консультацию?</p>
      <p class="mb-8 text-4xl	font-bold text-center leave-text">Оставьте заявку, чтобы получить всю информацию перед принятием решения</p>
      <Button
        type="filled"
        icon-right
        long
        class="mb-9"
      >
        Получить консультацию <IconRight />
      </Button>
      <img src="/imgs/lets-go.svg" alt="lets go" class="-translate-x-1/2" />

    </div>
  </section>

</div>
</template>

<style scoped>
.partners {
  padding: 72px 0 72px;
}

.leave-text {
  color: #0A082C;
  max-width: 750px;
}
</style>
