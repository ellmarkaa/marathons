<script setup lang="ts">
import {distance, months, sports, years} from "~/components/main/filter.data";
import TextField from "~/components/ui/TextField.vue";

const sportsRef = ref(sports);
const distanceRef = ref(distance);
const yearsRef = ref(years);
const monthsRef = ref(months);
const duration = 400;
</script>

<template>
  <div class="filter-block py-6 px-4 rounded-xl	bg-white flex flex-col gap-1.5 self-baseline">
    <div class="py-1 flex gap-2 items-center flex-wrap">
      <Tag title="42.2 км" closable/>
      <Tag title="42.2 км" closable/>
      <Tag title="42.2 км" closable/>
      <span>Очистить все</span>
    </div>

    <Collapse title="Спорт" :duration="duration" open-initially>
      <ul>
        <li v-for="sport in sportsRef" class="py-2">
          <Checkbox
            :key="sport.label"
            :label="sport.label"
            v-model="sport.value"
          />
        </li>
      </ul>
    </Collapse>

    <Collapse title="Дистанция" :duration="duration" open-initially>
      <ul>
        <li v-for="distance in distanceRef" class="py-2">
          <Checkbox
            :key="distance.label"
            :label="distance.label"
            v-model="distance.value"
          />
        </li>
      </ul>
    </Collapse>

    <Collapse title="Год" :duration="duration">
      <ul>
        <li v-for="year in yearsRef" class="py-2">
          <Checkbox
            :key="year.label"
            :label="year.label"
            v-model="year.value"
          />
        </li>
      </ul>
    </Collapse>

    <Collapse title="Месяц" :duration="duration">
      <ul>
        <li v-for="sport in monthsRef" class="py-2">
          <Checkbox
            :key="sport.label"
            :label="sport.label"
            v-model="sport.value"
          />
        </li>
      </ul>
    </Collapse>

    <div>
      <h2 class="text-base font-semibold text-neutral-10 py-2 mb-1">Страна</h2>
      <TextField class="pb-3" placeholder="Страна поиска" left-icon />
    </div>
  </div>
</template>

<style scoped>
.filter-block {
  min-width: 314px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.08);
}
</style>
