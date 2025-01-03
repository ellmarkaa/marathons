<script setup lang="ts">
interface TextFieldType {
  leftIcon?: boolean;
  error?: boolean;
  placeholder?: string;
}

const props = withDefaults(defineProps<TextFieldType>(), {
  leftIcon: false,
  error: false,
  placeholder: ''
});

const inputClass = computed<Record<string, boolean>>(() => ({
  'pl-3': !props.leftIcon,
  'pr-3': true,
  'pl-12': props.leftIcon,
  error: props.error
}));

</script>

<template>
  <div class="w-full max-w-sm min-w-[200px]">
    <div class="relative">
      <IconSearch
        :width="24"
        :height="24"
        class="absolute top-3 left-3"
        v-if="leftIcon"
        :style="{color: props.error ? '#CB0A16' : '#323232'}"
      />

      <input
        type="text"
        class="w-full bg-white transition duration-300 ease focus:outline-none shadow-sm focus:shadow input"
        :class="inputClass"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>

<style scoped>
.input {
  color: #191C1C;
  font-size: 14px;
  line-height: 20px;
  border: 1px solid #C6C6C6;
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
  border-color: #00A32E;
  box-shadow: 0 0 2px 0 rgba(0, 163, 46, 0.50);
}

.error {
  color: #CB0A16;
  border-radius: 20px;
  border-color: #CB0A16;
}
.error::placeholder {
  color: #CB0A16;
}
.error:hover {
  border-color: #CB0A16;
}
.error:focus {
  border-color: #CB0A16;
  border-width: 2px;
}
</style>
