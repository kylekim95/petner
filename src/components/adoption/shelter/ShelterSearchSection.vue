<script setup lang="ts">
import TitleText from '@/components/common/TitleText.vue';
import ShelterCard from './ShelterCard.vue';
import ANIMAL_SHELTERS from '@/constants/mock/animalShelter';
</script>

<template>
  <div class="search-wrapper d-flex">
    <div class="side-bar">
      <TitleText size="24px" weight="600" color="gray-10">우리지역 보호소 찾기</TitleText>
    </div>
    <div class="side-bar">
      <ShelterCard v-for="(shelter, index) of ANIMAL_SHELTERS" :key="index" :shelter="shelter" />
    </div>
    <div class="map">map</div>
  </div>
</template>

<style scoped>
.search-wrapper {
  width: 100vw;
  background-color: var(--gray-1);
  height: 80vh;
  max-height: 900px;
}

.side-bar {
  width: 15vw;
  min-width: 200px;
  background-color: red;
  padding-top: 40px;
}

.map {
  background-color: blue;
  flex: 1;
}
</style>
