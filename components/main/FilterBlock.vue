<script setup lang="ts">
import { distance, months, sports, years } from '~/utils/filter.data';
import TextField from '~/components/ui/TextField.vue';

const sportsRef = ref(sports);
const distanceRef = ref(distance);
const yearsRef = ref(years);
const monthsRef = ref(months);
const duration = 400;
</script>

<template>
  <div
    class="filter-block flex flex-col gap-1.5 self-baseline rounded-xl bg-white px-4 py-6 max-lg:rounded-none max-lg:p-0"
  >
    <div class="tags flex flex-wrap items-center gap-2 py-1 max-lg:py-3">
      <Tag
        title="42.2 км"
        closable
      />
      <Tag
        title="42.2 км"
        closable
      />
      <Tag
        title="42.2 км"
        closable
      />
      <span>Очистить все</span>
    </div>

    <Collapse
      title="Спорт"
      :duration="duration"
      open-initially
    >
      <ul>
        <li
          v-for="sport in sportsRef"
          :key="sport"
          class="py-2"
        >
          <Checkbox
            :key="sport.label"
            v-model="sport.value"
            :label="sport.label"
          />
        </li>
      </ul>
    </Collapse>

    <Collapse
      title="Дистанция"
      :duration="duration"
      open-initially
    >
      <ul>
        <li
          v-for="distance in distanceRef"
          :key="distance"
          class="py-2"
        >
          <Checkbox
            :key="distance.label"
            v-model="distance.value"
            :label="distance.label"
          />
        </li>
      </ul>
    </Collapse>

    <Collapse
      title="Год"
      :duration="duration"
    >
      <ul>
        <li
          v-for="year in yearsRef"
          :key="year"
          class="py-2"
        >
          <Checkbox
            :key="year.label"
            v-model="year.value"
            :label="year.label"
          />
        </li>
      </ul>
    </Collapse>

    <Collapse
      title="Месяц"
      :duration="duration"
    >
      <ul>
        <li
          v-for="sport in monthsRef"
          :key="sport"
          class="py-2"
        >
          <Checkbox
            :key="sport.label"
            v-model="sport.value"
            :label="sport.label"
          />
        </li>
      </ul>
    </Collapse>

    <div>
      <h2 class="text-neutral-10 mb-1 py-2 text-base font-semibold">Страна</h2>
      <TextField
        class="pb-3"
        placeholder="Страна поиска"
        left-icon
      />
    </div>
  </div>
</template>

<style scoped>
.filter-block {
  min-width: 314px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.08);
}

@media (width < 1015px) {
  .filter-block {
    min-width: 280px;
  }
}

@media (width < 980px) {
  .filter-block {
    box-shadow: none;
  }
  .tags {
    border-top: 1px solid #edf2f7;
    border-bottom: 1px solid #edf2f7;

    margin-right: -16px;
    margin-left: -16px;

    padding-right: 16px;
    padding-left: 16px;
  }
}
</style>
