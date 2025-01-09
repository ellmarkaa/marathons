<script setup lang="ts"></script>

<template>
  <div class="review border-neutral-80 flex flex-col gap-4 rounded-xl border px-8 py-6">
    <div class="flex items-center gap-3">
      <UAvatar
        src="/imgs/avatar-example.jpeg"
        size="3xl"
      />

      <div class="flex flex-col justify-between">
        <span>Акбай Д.</span>

        <div class="flex">
          <IconStar
            v-for="index of 5"
            :key="index"
          />
        </div>
      </div>
    </div>

    <div class="text-neutral-20 flex items-center gap-3">
      <IconDistance />
      <span>42.195 km</span>
      <span>Сентябрь 2019</span>
    </div>

    <p class="comment text-base text-neutral-50">
      Участвовал в марафоне, и это было невероятное событие! Организация на высшем уровне – начиная от регистрации и
      заканчивая поддержкой на каждом этапе дистанции. Маршрут был прекрасно продуман, с живописными видами и хорошо
      обозначенными точками питания. Атмосфера заряжала энергией, все участники поддерживали друг друга, а волонтёры
      создавали позитивный настрой. Финиш был особенно эмоциональным моментом – ощущение победы над собой
      непередаваемое. Определенно рекомендую всем, кто хочет испытать свои силы и ощутить настоящую радость от
      преодоления!
    </p>

    <UButton
      variant="text"
      class="self-start py-1 pl-0"
      >Прочитать все</UButton
    >
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
