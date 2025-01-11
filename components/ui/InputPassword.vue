<script setup lang="ts">
interface InputPasswordProps {
  label?: string;
  placeholder?: string;
}

defineProps<InputPasswordProps>();

const show = ref(false);
const model = defineModel<string>();
</script>

<template>
  <UFormField :label="label">
    <UInput
      v-model="model"
      :placeholder="placeholder"
      :type="show ? 'text' : 'password'"
      :ui="{ trailing: 'pe-3' }"
      class="w-full"
    >
      <template #trailing>
        <UButton
          color="neutral"
          variant="link"
          :icon="show ? 'i-lucide-eye-off' : 'i-lucide-eye'"
          aria-label="show ? 'Hide password' : 'Show password'"
          :aria-pressed="show"
          aria-controls="password"
          class="p-0 text-neutral-0"
          @click="show = !show"
        />
      </template>
    </UInput>
  </UFormField>
</template>

<style scoped>

</style>
