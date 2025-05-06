<template>
  <img :style="style" v-if="imageUrl" :src="imageUrl" :alt="picture?.name" />
  <div v-else class="flex w-full h-full items-center justify-center">
    <Loader height="50px" width="50px" />
  </div>
<!--  <p :style="style" v-else>Загрузка изображения...</p>-->
</template>

<script setup lang="ts">
import {ref, onMounted, watch} from 'vue'
import type {CSSProperties} from 'vue'
import type {IPicture} from "~/utils/types";

const props = defineProps<{
  picture: IPicture
  style?: CSSProperties
}>()
const api = useApi();
const imageUrl = ref<string | null>(null)

const fetchImageUrl = async (path: string) => {
  try {
    const url = await api<string>(path.replace('task/', ''), { method: 'GET' })
    imageUrl.value = url || null
  } catch (e) {
    console.error('Исключение при получении изображения:', e)
  }
}

// При первом монтировании или при изменении props.picture
onMounted(() => {
  if (props.picture?.path) {
    fetchImageUrl(props.picture?.path)
  }
})

watch(() => props.picture, (picture) => {
  if (picture?.path) {
    fetchImageUrl(picture?.path)
  }
})
</script>
