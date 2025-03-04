<script setup lang="ts">
import PhotoGrid from '@/components/travel/travelDetail/PhotoGrid.vue';
import TravelInfo from '@/components/travel/travelDetail/TravelInfo.vue';

const firstImageUrl = '/travelDetail/Accommodation1.png';

//이미지 API요청의의 RES
const imageArray = [
  '/travelDetail/Accommodation2.png',
  '/travelDetail/Accommodation3.png',
  '/travelDetail/Accommodation4.png',
];
</script>

<template>
  <div style="margin-top: 10vh">
    <PhotoGrid :firstimage="firstImageUrl" :images="imageArray" />
    <TravelInfo />
  </div>
</template>
