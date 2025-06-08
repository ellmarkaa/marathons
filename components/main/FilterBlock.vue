<script setup lang="ts">
import { years } from '~/utils/filter.data';
import TextField from '~/components/ui/TextField.vue';
import type { TagType } from '~/components/main/types';

// const sportsRef = ref(sports);
const store = useMarathonStore();
const directoryStore = useDictionaryStore();
const yearsRef = ref(years);
// const monthsRef = ref(months);
const duration = 400;
const { t } = useI18n();
const filterValues = reactive<TagType[]>([]);
const removeFilter = (tagValue: any) => {
  const index = filterValues.findIndex(filter => filter.value === tagValue);
  if (index >= 0) {
    filterValues.splice(index, 1);
  }
};

const addToFilter = (tag: TagType) => {
  const index = filterValues.findIndex(filter => filter.value === tag.value);

  if (index >= 0) {
    filterValues.splice(index, 1);
  } else {
    filterValues.push(tag);
  }
};

watch(filterValues, newFilter => {
  store.fetchMarathonsWithParams(newFilter);
});

const clearAll = () => {
  filterValues.splice(0, filterValues.length);
};
</script>

<template>
  <div
    class="filter-block flex flex-col gap-1.5 self-baseline rounded-xl bg-white px-4 py-6 max-lg:rounded-none max-lg:p-0"
  >
    <div class="tags flex flex-wrap items-center gap-2 py-1 max-lg:py-3">
      <Tag
        v-for="tag in filterValues"
        :key="tag.value"
        :title="tag.label"
        closable
        :on-close="() => removeFilter(tag.value)"
      />
      <UButton
        v-if="!!filterValues.length"
        variant="ghost"
        color="neutral"
        class="p-0"
        @click="clearAll"
      >
        {{ t('clean-all') }}
      </UButton>
    </div>

    <Collapse
      :title="t('distance')"
      :duration="duration"
      open-initially
    >
      <ul>
        <li
          v-for="dis in directoryStore.distances"
          :key="dis.distance"
          class="py-2"
        >
          <UCheckbox
            size="xl"
            :label="`${dis.distance} км`"
            :model-value="!!filterValues.find(el => el.value === dis.distance)"
            @change="addToFilter({ label: `${dis.distance} км`, value: dis.distance, param: 'distance' })"
          />
        </li>
      </ul>
    </Collapse>

    <Collapse
      :title="t('year')"
      :duration="duration"
    >
      <ul>
        <li
          v-for="year in yearsRef"
          :key="year.label"
          class="py-2"
        >
          <UCheckbox
            size="xl"
            :label="year.label"
            :model-value="!!filterValues.find(el => el.value === year.value)"
            @change="addToFilter({ label: year.label, value: year.value, param: 'year' })"
          />
        </li>
      </ul>
    </Collapse>

    <div>
      <h2 class="text-neutral-10 mb-1 py-2 text-base font-semibold">{{ t('country') }}</h2>
      <TextField
        class="pb-3"
        disabled
        :placeholder="t('search-country')"
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
