<script setup lang="ts">

const marathonStore = useMarathonStore()
const price = computed(() => marathonStore.priceToBuy);
const marathon = marathonStore.marathon;
const dateTitle = getDateTitle(marathon?.marathon_date || '', marathon?.marathon_deadline || '');
const userStore = useAuthStore()

defineProps<{
  disabled?: boolean
}>()
const drawerOpen = defineModel('drawer')

const totalPrice = computed(() => {
  if (price.value) {
    return (price.value?.hotel_number?.price || 0) + (price.value.visa?.service?.price || 0) + (price.value.visa?.consular_fees?.price || 0);
  }
  return 0;
})

const isRegistered = computed(() => userStore.isRegistered)
const isAuth = computed(() => userStore.isAuth)

const handleBuy = async () => {
  if (drawerOpen.value) drawerOpen.value = false
  if (!price.value) return null;

  if (isRegistered.value) {
    const res = await marathonStore.buyMarathon(price.value)
    if (res?.data) {
      window.open(res.data)
    }
  } else if (isAuth.value) {
    navigateTo('/register')
  } else {
    userStore.openLogin = true;
  }
}

const {t} = useI18n()
const { get } = useLocalized()

</script>
<template>
  <div class="info-card bg-white sticky top-5">
    <div class="mb-3">
      <UBadge v-if="marathon?.tag" size="lg" :label="marathon.tag.Name" />
    </div>

    <div v-if="marathon" class="mb-4 flex flex-col gap-3">
      <h4 class="text-xl font-bold">{{get(marathon, 'title')}} - {{get(marathon.city, 'name')}}</h4>
      <p>{{dateTitle}}</p>
      <p>{{get(marathon.city, 'name')}}, {{get(marathon.country, 'marathon.country')}}</p>
    </div>

    <div v-if="price" class="border-t border-neutral-90 pt-8">
      <p class="mb-5 font-semibold text-lg">{{t('cost-order')}}</p>

      <ul class="flex flex-col gap-5 pb-5 border-b">
        <li v-if="price.hotel_number" class="text-base flex justify-between"><b class="font-medium">{{get(price.hotel_number?.hotel, 'name_for_site')}}</b> <span>{{price.hotel_number?.currency?.symbol}} {{price.hotel_number?.price}}</span></li>
        <li v-if="price.visa" class="text-base flex justify-between"><b class="font-medium">{{t('visa')}} {{get(price.visa, 'name')}}</b> <span>{{price.visa?.service?.currency?.symbol}} {{price.visa?.service?.price}}</span></li>
        <li v-if="price.visa" class="text-base flex justify-between"><b class="font-medium">{{t('cons-sbor')}} {{get(price.visa, 'name')}}</b> <span>{{price.visa?.consular_fees?.currency?.symbol}} {{price.visa?.consular_fees?.price}}</span></li>
      </ul>

      <p class="flex justify-between text-lg font-semibold mt-5 mb-8">
        {{t('itogo')}}
        <span>{{price?.currency?.symbol}} {{totalPrice}}</span>
      </p>
    </div>

    <div class="flex gap-2">
      <UButton
        :disabled="disabled || !price"
        block
        :label="t('order-buy')"
        @click="handleBuy"
      />
    </div>
  </div>
</template>

<style scoped>
.info-card {
  min-width: 344px;
  padding: 24px;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);
  border: 1px solid rgb(244, 240, 240);
  border-radius: 12px;
  align-self: flex-start;
}
</style>
