<script setup lang="ts">

export interface TravelPopularItemData {
  id: number,
  img : string;
  location : string;
  title : string;
  content : string;
}
interface TravelPopularSwiperSlideProps{
  data : TravelPopularItemData;
}
const props = defineProps<TravelPopularSwiperSlideProps>();
</script>

<template>
  <div class="h-75 rounded-top card d-flex px-4" :style="{backgroundImage : `url(${props.data.img})`}">
    <span class="text-gray-1 location-text">{{ props.data.location }}</span>
  </div>
  <div class="h-25 bg-gray-3 d-flex flex-column p-2 px-4">
    <span class="title-text">{{ props.data.title }}</span>
    <span class="content-text">{{ props.data.content }}</span>
  </div>
</template>

<style scoped>
.card {
  background-color: #00000080;
  background-size: cover;
  background-blend-mode: multiply;
  background-position-x: center;
  overflow: hidden;
}
.location-text {
  font-size: 24px;
  font-family: 'Paperlogy';
  font-weight: 600;
  position: absolute;
  bottom: 8px;
}
.title-text {
  font-size: 36px;
  font-family: 'Paperlogy';
  font-weight: 700;
  color: #78563E;
}
.content-text {
  font-size: 20px;
  font-family: 'Paperlogy';
  font-weight: 700;
  color: #BC8661;
}
</style>
