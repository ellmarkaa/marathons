<script setup lang="ts">
import type { ICommonItem } from '~/utils/types';

type Props = {
  title: string;
  firstList: ICommonItem[];
  secondList: ICommonItem[];
  subData?: {
    subTitle: string;
    subFirstList: ICommonItem[];
    subSecondList: ICommonItem[];
  };
  defaultOpen?: boolean;
};

defineProps<Props>();
const emit = defineEmits<{ (event: 'onEdit'): void }>();
const { t } = useI18n();
</script>

<template>
  <UCollapsible
    class="flex flex-col gap-6 rounded-xl bg-white p-6"
    :default-open="defaultOpen || false"
  >
    <div class="flex justify-between">
      <h4 class="text-xl font-semibold">{{ title }}</h4>
      <UButton
        icon="material-symbols:keyboard-arrow-down-rounded"
        variant="soft"
      />
    </div>

    <template #content>
      <div class="flex flex-col gap-6">
        <div class="flex gap-8">
          <ul class="flex w-1/2 flex-col gap-4">
            <li
              v-for="item in firstList"
              :key="item.label"
              class="flex items-center gap-4 last-of-type:mb-0"
            >
              <div class="flex w-2/3 items-end gap-1">
                <span class="text-neutral-60 text-nowrap">{{ item.label }} </span>
                <span class="border-neutral-70 inline-block w-full border border-dashed" />
              </div>
              <span>{{ item.value }}</span>
            </li>
          </ul>

          <ul class="flex w-1/2 flex-col gap-4">
            <li
              v-for="item in secondList"
              :key="item.label"
              class="flex items-center gap-4 last-of-type:mb-0"
            >
              <div class="flex w-2/3 items-end gap-1">
                <span class="text-neutral-60 text-nowrap">{{ item.label }} </span>
                <span class="border-neutral-70 inline-block w-full border border-dashed" />
              </div>
              <span>{{ item.value }}</span>
            </li>
          </ul>
        </div>

        <div v-if="subData">
          <h4 class="mb-4 text-base font-medium">{{ subData.subTitle }}</h4>

          <div class="flex gap-8">
            <ul class="flex w-1/2 flex-col gap-4">
              <li
                v-for="item in subData.subFirstList"
                :key="item.label"
                class="flex items-center gap-4 last-of-type:mb-0"
              >
                <div class="flex w-2/3 items-end gap-1">
                  <span class="text-neutral-60 text-nowrap">{{ item.label }} </span>
                  <span class="border-neutral-70 inline-block w-full border border-dashed" />
                </div>
                <span>{{ item.value }}</span>
              </li>
            </ul>

            <ul class="flex w-1/2 flex-col gap-4">
              <li
                v-for="item in subData.subSecondList"
                :key="item.label"
                class="flex items-center gap-4 last-of-type:mb-0"
              >
                <div class="flex w-2/3 items-end gap-1">
                  <span class="text-neutral-60 text-nowrap">{{ item.label }} </span>
                  <span class="border-neutral-70 inline-block w-full border border-dashed" />
                </div>
                <span>{{ item.value }}</span>
              </li>
            </ul>
          </div>
        </div>

        <UButton
          class="mb-1 self-end"
          :label="t('edit')"
          variant="soft"
          @click="emit('onEdit')"
        />
      </div>
    </template>
  </UCollapsible>
</template>

<style scoped></style>
