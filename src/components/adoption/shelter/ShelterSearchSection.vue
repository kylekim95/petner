<script setup lang="ts">
import ShelterCard from './ShelterCard.vue';
import ANIMAL_SHELTERS from '@/constants/mock/animalShelter';
</script>

<template>
  <div class="search-wrapper d-flex">
    <div class="side-bar">
      <ShelterCard v-for="(shelter, index) of ANIMAL_SHELTERS" :key="index" :shelter="shelter" />
    </div>
    <div>map</div>
  </div>
</template>

<style scoped>
.search-wrapper {
  width: 100vw;
  background-color: var(--gray-1);
}

.side-bar {
  width: 300px;
}
</style>
