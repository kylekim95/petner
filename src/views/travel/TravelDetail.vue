<script setup lang="ts">
import PhotoGrid from '@/components/travel/travelDetail/PhotoGrid.vue';

const firstImageUrl = '/travelDetail/Accommodation1.png';

//이미지 API요청의의 RES
const imageArray = [
  '/travelDetail/Accommodation2.png',
  '/travelDetail/Accommodation3.png',
  '/travelDetail/Accommodation4.png',
];
</script>

<template>
  <PhotoGrid :firstimage="firstImageUrl" :images="imageArray" />
</template>
