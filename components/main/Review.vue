<script setup lang="ts">

</script>

<template>
  <div class="review px-8 py-6 border border-neutral-80 rounded-xl flex flex-col gap-4">
    <div class="flex gap-3 items-center">
      <UAvatar src="/imgs/avatar-example.jpeg" size="3xl" />

      <div class="flex flex-col justify-between">
        <span>Акбай Д.</span>

        <div class="flex">
          <IconStar v-for="index of 5" :key="index" />
        </div>
      </div>
    </div>

    <div class="flex gap-3 items-center text-neutral-20">
      <IconDistance />
      <span>42.195 km</span>
      <span>Сентябрь 2019</span>
    </div>

    <p class="comment text-base text-neutral-50">Участвовал в марафоне, и это было невероятное событие! Организация на высшем уровне – начиная от регистрации и заканчивая поддержкой на каждом этапе дистанции. Маршрут был прекрасно продуман, с живописными видами и хорошо обозначенными точками питания. Атмосфера заряжала энергией, все участники поддерживали друг друга, а волонтёры создавали позитивный настрой. Финиш был особенно эмоциональным моментом – ощущение победы над собой непередаваемое. Определенно рекомендую всем, кто хочет испытать свои силы и ощутить настоящую радость от преодоления!</p>

    <UButton variant="text" class="pl-0 py-1 self-start">Прочитать все</UButton>
  </div>
</template>

<style scoped>
.review {
  width: 48%;
}
.comment {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Limit to 3 lines */
  -webkit-box-orient: vertical;
  transition: max-height 0.3s ease;
}

</style>
