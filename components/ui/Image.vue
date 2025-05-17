<template>
  <img
    v-if="imageUrl"
    :style="style"
    :class="imageClass"
    :src="imageUrl"
    :alt="picture?.name"
  />
  <div
    v-else
    class="flex h-full w-full items-center justify-center"
  >
    <Loader
      height="50px"
      width="50px"
    />
  </div>
  <!--  <p :style="style" v-else>Загрузка изображения...</p>-->
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import type { CSSProperties } from 'vue';
import type { IPicture } from '~/utils/types';

const props = defineProps<{
  picture?: IPicture;
  style?: CSSProperties;
  imageClass?: string;
  secondUrl?: string;
}>();
const api = useApi();
const imageUrl = ref<string | null>(null);

const fetchImageUrl = async (path: string) => {
  try {
    const url = await api<string>(path.replace('task/', ''), { method: 'GET' });
    imageUrl.value = url || null;
  } catch (e) {
    imageUrl.value = props.secondUrl || null;
    console.error('Исключение при получении изображения:', e);
  }
};

// При первом монтировании или при изменении props.picture
onMounted(() => {
  if (props.picture?.path) {
    fetchImageUrl(props.picture?.path);
  } else {
    imageUrl.value = props.secondUrl || null;
  }
});

watch(
  () => props.picture,
  picture => {
    if (picture?.path) {
      fetchImageUrl(picture?.path);
    }
  },
);
</script>
