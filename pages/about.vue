<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="about">
    <UContainer>
      <section class="mb-16 flex flex-col items-center max-md:mb-8">
        <h1 class="text-accent-50 mb-6 text-center text-lg font-semibold uppercase">{{t('about')}}</h1>
        <h3 class="about__title">{{t('step')}}</h3>
        <p class="about__description text-neutral-20">{{t('easy-on-world')}}</p>
      </section>
    </UContainer>

    <UContainer>
      <section class="mb-16 max-md:mb-8">
        <img
          src="/imgs/about-image.jpg"
          alt="about-image"
          class="w-full rounded-xl border-4 border-white"
        />
      </section>
    </UContainer>

    <UContainer>
      <section class="mb-16 flex flex-col items-center max-md:mb-8">
        <p class="text-neutral-20 about__text mb-5 text-center text-base">{{t('easy-on-world')}}</p>
        <p class="text-neutral-20 about__text text-center text-base">
          Мы стремимся сделать участие в марафонах по всему миру простым, понятным и вдохновляющим для каждого бегуна.
          Мы стремимся сделать участие в марафонах по всему миру простым, понятным и вдохновляющим для каждого бегуна.Мы
          стремимся сделать участие в марафонах по всему миру простым, понятным и вдохновляющим для каждого бегуна.
        </p>
      </section>
    </UContainer>

    <UContainer>
      <section class="mb-16 flex justify-evenly max-md:mb-8 max-md:flex-col max-md:gap-9">
        <div class="flex flex-col items-center">
          <p class="about__statistic">6</p>
          <p class="text-neutral-40 text-base">{{t('major')}}</p>
        </div>

        <div class="flex flex-col items-center">
          <p class="about__statistic">40+</p>
          <p class="text-neutral-40 text-base">{{t('marathon-internation')}}</p>
        </div>

        <div class="flex flex-col items-center">
          <p class="about__statistic">150+</p>
          <p class="text-neutral-40 text-base">{{t('runner-with-us')}}</p>
        </div>
      </section>
    </UContainer>

    <UContainer>
      <section class="about-team">
        <h5 class="mb-10 text-center text-4xl font-bold text-white">{{t('our-team')}}</h5>

        <div class="flex gap-8 max-md:flex-col">
          <div class="about__card">
            <img
              src="/imgs/ceo.jpg"
              alt="ceo"
              class="w-full rounded-xl"
            />
            <div>
              <p class="mb-1 text-xl font-semibold text-white">Жанат Тургумбаев</p>
              <p class="text-base text-white">Founder</p>
            </div>
          </div>

          <div class="about__card">
            <img
              src="/imgs/ceo.jpg"
              alt="ceo"
              class="w-full rounded-xl"
            />
            <div>
              <p class="mb-1 text-xl font-semibold text-white">Жанат Тургумбаев</p>
              <p class="text-base text-white">Founder</p>
            </div>
          </div>

          <div class="about__card">
            <img
              src="/imgs/ceo.jpg"
              alt="ceo"
              class="w-full rounded-xl"
            />
            <div>
              <p class="mb-1 text-xl font-semibold text-white">Жанат Тургумбаев</p>
              <p class="text-base text-white">Founder</p>
            </div>
          </div>
        </div>
      </section>
    </UContainer>

    <UContainer>
      <section class="about__values">
        <h5 class="mb-10 text-center text-4xl font-bold max-sm:text-xl">{{t('key-values')}}</h5>

        <div class="flex gap-8 max-md:flex-col">
          <div class="about__values-item flex flex-col items-center gap-2">
            <div class="about__text-amoji">🏃</div>
            <p class="text-xl font-semibold">{{t('run-str')}}</p>
            <p class="text-neutral-40 text-center">
              {{t('we-run-know')}}
            </p>
          </div>

          <div class="about__values-item flex flex-col items-center gap-2">
            <div class="about__text-amoji">🌍</div>
            <p class="text-xl font-semibold">{{t('world-open')}}</p>
            <p class="text-neutral-40 text-center">
              {{t('run-planet')}}
            </p>
          </div>

          <div class="about__values-item flex flex-col items-center gap-2">
            <div class="about__text-amoji">🤝</div>
            <p class="text-xl font-semibold">{{t('honest-care')}}</p>
            <p class="text-neutral-40 text-center">
              {{t('clean-conditions')}}
            </p>
          </div>
        </div>
      </section>
    </UContainer>

    <section class="about-partners bg-neutral-0 flex items-center justify-evenly max-md:flex-col max-md:gap-4">
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
          {{t('get-consultation')}}
        </p>
        <p class="leave-text mb-8 text-center text-4xl font-bold max-md:text-2xl">
{{t('leave-consultation')}}
        </p>
        <MainConsultationModal />
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
.about {
  padding-top: 72px;
}

.about__title {
  font-weight: 700;
  font-size: 56px;
  text-align: center;
  max-width: 500px;
  margin-bottom: 32px;
}

.about__text {
  max-width: 872px;
}

.about__description {
  font-size: 28px;
  font-weight: 300;
  max-width: 700px;
  text-align: center;
}

.about__statistic {
  font-size: 72px;
  font-weight: 500;
}

.about__card {
  width: 33.3%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.about-team {
  border-radius: 12px;
  padding: 64px;
  background-color: #000000;
  margin-bottom: 64px;
}

.about__values {
  padding: 64px;
  margin-bottom: 64px;
}

.about__text-amoji {
  font-size: 42px;
}

.about__values-item {
  padding: 94px 32px;
  width: 33.3%;
  border-radius: 12px;
  background-color: #f9fafb;
}

.about-partners {
  padding: 72px 0 72px;
}

.leave-text {
  color: #0a082c;
  max-width: 750px;
}

@media (width < 730px) {
  .about-partners {
    padding: 65px 0 65px;
  }
  .about-team {
    padding: 64px 16px;
    margin-bottom: 32px;
  }
  .about__card {
    width: 100%;
  }
  .about__values {
    padding: 0;
  }
  .about__values-item {
    width: 100%;
  }
}

@media (width < 470px) {
  .about__title {
    font-size: 24px;
  }
  .about__description {
    font-size: 18px;
  }
  .about {
    padding-top: 42px;
  }
}
</style>
