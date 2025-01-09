<script setup lang="ts"></script>

<template>
  <footer class="footer pb-10 pt-14 bg-white">
    <UContainer>
      <div class="mb-4 flex justify-between max-md:flex-col max-md:gap-9 max-md:pl-3 max-md:mb-8">
        <img
          src="/imgs/logo-footer.png"
          alt="4lmnts"
          class="logo max-md:hidden"
        >
        <img src="/logo.svg" alt="4lmnts" class="hidden max-md:block" width="280" height="auto" >

        <div>
          <p class="mb-5 text-xl font-semibold">Компания</p>
          <ul class="flex list-none flex-col gap-4">
            <li>О нас</li>
            <li>Блог</li>
            <li>Пользовательское соглашение</li>
          </ul>
        </div>

        <div>
          <div class="mb-8">
            <p class="mb-5 text-xl font-semibold">Компания</p>
            <a href="tel:+77059889944">+7 705 988 99 44</a>
          </div>

          <div class="flex items-center gap-4">
            <UButton icon="line-md:instagram" variant="soft" />
            <UButton icon="ic:baseline-whatsapp" variant="soft" />
          </div>
        </div>

        <div>
          <p class="run-text font-bold uppercase text-accent-50">LET'S RUN</p>
          <p class="together-text uppercase">TOGETHER</p>
        </div>
      </div>
      <p class="text-neutral-60 max-md:pl-3">© Copyright 2024. All Right Reserved.</p>
    </UContainer>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 6px solid #000;
}
.logo {
  width: 134px;
  height: 108px;
}
.run-text {
  font-size: 42px;
}
.together-text {
  font-size: 18px;
  line-height: 0;
}

@media (width < 980px) {
  .run-text {
    font-size: 35px;
  }
  .together-text {
    font-size: 16px;
    line-height: 0;
  }
}

@media (width < 730px) {
  .run-text {
    font-size: 42px;
  }
  .together-text {
    font-size: 18px;
    line-height: 0;
  }
}
</style>
