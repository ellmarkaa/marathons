<script setup lang="ts">
interface DistanceCardProps {
  distance: number;
  price: number;
  distanceName: string;
}
defineProps<DistanceCardProps>();
// required true
const model = defineModel<string | number>({required: false});

// Methods
// const handleRadioChange = (value) => {
//   console.log('Selected value:', value);
// };
</script>

<template>
  <div class="distance-card flex flex-col gap-4">
    <label class="flex cursor-pointer items-center justify-between">
      <span class="text-xl font-bold">{{ distanceName }}</span>
      <RadioButton
        :id="distance"
        model-value="test"
        name="distance"
        :radio-value="distance"
      />
    </label>

    <div>
      <div class="mb-3 flex items-center gap-3">
        <IconDistance />
        <span>{{ distance }} км</span>
      </div>

      <div class="flex items-center gap-3">
        <IconCalendar />
        <span>12 сентября, 2024 (Чт) – 12:00</span>
      </div>
    </div>

    <div class="flex items-center gap-4">
      <span class="font-medium">Возраст</span>
      <span>Старше 18 лет</span>
    </div>

    <div class="flex items-end gap-4">
      <span class="font-medium">Стоимость</span>
      <span class="text-accent-50 text-xl font-semibold">{{ price }}$</span>
    </div>
  </div>
</template>

<style scoped>
.distance-card {
  width: 49%;
  padding: 20px;
  border-radius: 12px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
