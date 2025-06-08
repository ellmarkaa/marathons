<script setup lang="ts">
const marathonStore = useMarathonStore();
const authStore = useAuthStore();
const {get} = useLocalized()
const {t} = useI18n()
</script>

<template>
  <div class="flex w-full flex-col gap-6">
    <div class="title-block px-8 py-6">
      <h4 class="text-3xl font-bold text-white">{{t('favorite')}}</h4>
    </div>

    <Loader v-if="marathonStore.mainLoading" />
    <div
      v-else
      class="flex flex-wrap items-start gap-x-5 gap-y-8 max-xl:justify-center"
    >
      <template
        v-for="marathon in marathonStore.mainPageMarathons"
        :key="marathon.id"
      >
        <MainCard
          v-if="authStore.favoriteMarathons.includes(marathon.id)"
          :id="marathon.id"
          :picture="marathon.pictures[0] || null"
          :distances="marathon.distances"
          :city="get(marathon.city, 'name')"
          :country="get(marathon.country, 'name')"
          :title="get(marathon, 'title')"
          :start-date="marathon.marathon_date"
          :end-date="marathon.marathon_deadline"
          :rating="5"
          :slots="marathon.slots"
        />
      </template>
    </div>
  </div>
</template>

<style scoped>
.title-block {
  background-color: #00905e;
  border-radius: 20px;
}
</style>
