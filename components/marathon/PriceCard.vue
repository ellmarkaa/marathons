<script setup lang="ts">
import type { IPrice } from "~/stores/marathon/types";
import { formatRuMonthDay, getYear } from "~/utils/date";

const props = defineProps<{ price: IPrice }>();
const marathonStore = useMarathonStore()

const handleChoose = () => {
  if (marathonStore.priceToBuy?.id === props.price.id) {
    marathonStore.priceToBuy = null;
  } else {
    marathonStore.priceToBuy = props.price;
  }
}

const firstDay = props.price.hotel_number?.stay_dates[0];
const lastDay = props.price.hotel_number?.stay_dates[1];
const {t} = useI18n()
const {get} = useLocalized()
</script>

<template>
  <div class="border-neutral-80 overflow-hidden rounded-xl border">
    <div class="flex w-full bg-white max-md:flex-col">
      <div class="border-neutral-90 w-2/3 border-r p-5 pb-8 max-md:w-full" v-if="price.hotel_number">
        <h5 class="text-primary-0 mb-6 text-lg font-semibold">
          PACKAGE {{ get(price.hotel_number?.hotel, 'name_for_site') }}
        </h5>

        <ul class="flex flex-col gap-3 text-base">
          <li>{{t('distance')}}: {{ price.distance.distance }} км</li>
          <li>
            {{t('dates')}}: {{ formatRuMonthDay(firstDay) }} – {{ formatRuMonthDay(lastDay) }}, {{ getYear(firstDay) }} ({{
              price.hotel_number?.night_count
            }}
            {{t('nights')}})
          </li>
          <li>{{t('hotel')}}: {{ price.hotel_number?.hotel?.name_for_site_ru }}</li>
          <li>{{t('type-sleep')}}: {{ price.hotel_number?.placement_type?.name_ru }}</li>
        </ul>
      </div>

      <div class="flex w-1/3 flex-col items-end justify-between p-5 pb-8 max-md:w-full">
        <UBadge :label="`${t('left')} ${price.total_count} ${t('packet')}`" />

        <div class="w-full text-right">
          <p class="mb-1 text-2xl font-bold">{{ price.currency.symbol }} {{ price.price }}</p>
          <p class="mb-3 text-xs">{{t('slot-hotel')}}</p>
          <UButton
            :label="marathonStore.priceToBuy?.id === price.id ? t('cancel') : t('choose')"
            @click="handleChoose"
            block
          />
        </div>
      </div>
    </div>

    <UCollapsible>
      <template #content>
        <div class="p-6 bg-white border-neutral-90 border-t" v-if="price.hotel_number">
          <ul>
            <li class="text-base flex justify-between"><b class="font-medium">{{get(price.hotel_number?.hotel, 'name_for_site')}}</b> <span>{{price.hotel_number?.currency?.symbol}} {{price.hotel_number?.price}}</span></li>
            <li v-if="price.visa" class="text-base flex justify-between"><b class="font-medium">{{t('visa')}} {{get(price.visa, 'name')}}</b> <span>{{price.visa?.service?.currency?.symbol}} {{price.visa?.service?.price}}</span></li>
            <li v-if="price.visa" class="text-base flex justify-between"><b class="font-medium">{{t('cons-sbor')}} {{get(price.visa, 'name')}}</b> <span>{{price.visa?.consular_fees?.currency?.symbol}} {{price.visa?.consular_fees?.price}}</span></li>
          </ul>
        </div>
      </template>

      <UButton
        block
        :label="t('see-detail')"
        variant="link"
        class="text-neutral-20 hover:text-neutral-0"
      />
    </UCollapsible>
  </div>
</template>

<style scoped></style>
