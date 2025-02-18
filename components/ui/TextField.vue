<script setup lang="ts">
interface TextFieldType {
  leftIcon?: boolean;
  error?: boolean;
  placeholder?: string;
}

const props = withDefaults(defineProps<TextFieldType>(), {
  leftIcon: false,
  error: false,
  placeholder: '',
});

const inputClass = computed<Record<string, boolean>>(() => ({
  'pl-3': !props.leftIcon,
  'pr-3': true,
  'pl-12': props.leftIcon,
  'error': props.error,
}));
</script>

<template>
  <div class="w-full max-w-sm min-w-[200px]">
    <div class="relative">
      <IconSearch
        v-if="leftIcon"
        :width="24"
        :height="24"
        class="absolute top-3 left-3"
        :style="{ color: props.error ? '#CB0A16' : '#323232' }"
      />

      <input
        type="text"
        class="ease input w-full bg-white shadow-sm transition duration-300 focus:shadow focus:outline-none"
        :class="inputClass"
        :placeholder="placeholder"
      >
    </div>
  </div>
</template>

<style scoped>
.input {
  color: #191c1c;
  font-size: 14px;
  line-height: 20px;
  border: 1px solid #c6c6c6;
  border-radius: 20px;
  padding-top: 13px;
  padding-bottom: 13px;
}
.input::placeholder {
  color: #777;
  font-size: 14px;
  line-height: 20px;
}
.input:hover {
  border-color: #949292;
}
.input:focus {
  border-color: #00a32e;
  box-shadow: 0 0 2px 0 rgba(0, 163, 46, 0.5);
}

.error {
  color: #cb0a16;
  border-radius: 20px;
  border-color: #cb0a16;
}
.error::placeholder {
  color: #cb0a16;
}
.error:hover {
  border-color: #cb0a16;
}
.error:focus {
  border-color: #cb0a16;
  border-width: 2px;
}
</style>
