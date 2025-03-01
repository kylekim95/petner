<script setup lang="ts">
export interface PopularTravelData {
  image: string;
  location: string;
  title: string;
  content: string;
}
interface PopularTravelCardProps {
  data: PopularTravelData;
}
const props = defineProps<PopularTravelCardProps>();
</script>

<template>
  <div
    class="rounded-top-5 align-content-end"
    style="height: 70%;"
    :style="{
      backgroundColor : '#00000080',
      backgroundImage : `url(${props.data.image})`,
      backgroundBlendMode : 'multiply',
      backgroundPositionX : 'center',
      backgroundSize : 'cover',
    }">
    <p class="px-4 my-1 overflow-hidden location-text text-gray-1">{{ props.data.location }}</p>
  </div>
  <div class="pb-4 bg-gray-3 w-100 rounded-bottom-5" style="height: fit-content;">
    <p class="px-4 my-1 overflow-hidden title-text">{{ props.data.title }}</p>
    <p class="px-4 my-1 overflow-hidden content-text">{{ props.data.content }}</p>
  </div>
</template>

<style scoped>
.location-text {
  font-family: 'Paperlogy';
  font-weight: 700;
  font-size: 48px;
}
.title-text {
  font-family: 'Paperlogy';
  font-weight: 700;
  font-size: 36px;
  color: #78563E;
}
.content-text {
  font-family: 'Paperlogy';
  font-weight: 700;
  font-size: 20px;
  color: #BC8661;
}
</style>
