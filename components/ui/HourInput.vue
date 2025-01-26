<template>
  <div class="hour-input">
    <input
      v-model="hours"
      type="number"
      class="hour"
      :min="minHour"
      :max="maxHour"
      placeholder="HH"
      @input="onHourInput"
    >
    <span class="separator">:</span>
    <input
      v-model="minutes"
      type="number"
      class="minute"
      min="0"
      max="59"
      placeholder="MM"
      @input="onMinuteInput"
    >
    <div v-if="is12HourFormat" class="period">
      <button
        v-for="option in ['AM', 'PM']"
        :key="option"
        :class="{ active: period === option }"
        @click="updatePeriod(option)"
      >
        {{ option }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

// Props
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  format: {
    type: String,
    default: '24', // '12' or '24'
    validator: (value) => ['12', '24'].includes(value),
  },
});

// Emit
const emit = defineEmits(['update:modelValue', 'change']);

// States
const hours = ref('');
const minutes = ref('');
const period = ref('AM');

// Computed Properties
const is12HourFormat = computed(() => props.format === '12');
const minHour = computed(() => (is12HourFormat.value ? 1 : 0));
const maxHour = computed(() => (is12HourFormat.value ? 12 : 23));

// Watchers
watch(
  () => props.modelValue,
  (value) => {
    const [h, m] = value.split(':');
    hours.value = h ? parseInt(h) : '';
    minutes.value = m ? parseInt(m) : '';
    if (is12HourFormat.value && h) {
      period.value = parseInt(h) >= 12 ? 'PM' : 'AM';
    }
  },
  { immediate: true }
);

watch([hours, minutes, period], () => {
  const validatedHours = validateHours(hours.value);
  const validatedMinutes = validateMinutes(minutes.value);
  const finalHours =
    is12HourFormat.value && period.value === 'PM'
      ? (validatedHours % 12) + 12
      : is12HourFormat.value && validatedHours === 12 && period.value === 'AM'
        ? 0
        : validatedHours;

  const time = `${String(finalHours).padStart(2, '0')}:${String(
    validatedMinutes
  ).padStart(2, '0')}`;
  emit('update:modelValue', time);
  emit('change', time);
});

// Methods
const onHourInput = () => {
  hours.value = validateHours(hours.value);
};
const onMinuteInput = () => {
  minutes.value = validateMinutes(minutes.value);
};

const validateHours = (value) => {
  const num = parseInt(value) || 0;
  return Math.max(minHour.value, Math.min(maxHour.value, num));
};

const validateMinutes = (value) => {
  const num = parseInt(value) || 0;
  return Math.max(0, Math.min(59, num));
};

const updatePeriod = (newPeriod) => {
  period.value = newPeriod;
};
</script>

<style scoped>
.hour-input {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.hour,
.minute {
  width: 3rem;
  padding: 0.5rem;
  font-size: 1rem;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
}

.hour:focus,
.minute:focus {
  border-color: #007bff;
}

.separator {
  font-size: 1.5rem;
  font-weight: bold;
}

.period {
  display: flex;
  gap: 0.5rem;
}

.period button {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  background: #f9f9f9;
  border-radius: 4px;
  cursor: pointer;
}

.period button.active {
  border-color: #007bff;
  background: #007bff;
  color: white;
}
</style>
