<script setup lang="ts">
import TextBlock, { type TextBlockDescriptor } from '@/components/common/TextBlock.vue'

interface GalleryItemProps {
  bgImage: string,
  title: TextBlockDescriptor[][],
}
const props = defineProps<GalleryItemProps>();
</script>

<template>
  <div class="grid-menu-item w-100 h-100 p-4 d-flex flex-column" :style="{ backgroundImage: `url(${props.bgImage})` }">
    <div v-for="(line, index) in props.title" :key="index" class="d-flex" >
      <TextBlock v-for="(block, index2) in line" :key="index + '_' + index2" :text-block="block"/>
    </div>
  </div>
</template>

<style scoped>
.grid-menu-item {
  background-color: #00000060;
  background-size: cover;
  background-blend-mode: multiply;
  background-position-x: center;
  background-position-y: center;
}
</style>
