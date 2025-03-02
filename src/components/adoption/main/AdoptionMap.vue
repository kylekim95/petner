<script setup lang="ts">
import PATH from '@/constants/path';
import { ANIMAL_SHELTERS } from '@/constants/mock/animalShelter';
import ShelterCard from './ShelterCard.vue';
</script>

<template>
  <div class="wrapper">
    <div class="title d-flex justify-content-between align-items-center">
      <span>사랑을 기다리는 아이들, 보호소에서 만나보세요!</span>
      <router-link :to="PATH.adoptionShelter">더보기</router-link>
    </div>
    <div class="d-flex justify-content-between">
      <div class="map">
        <img src="/public/PNG-Image/images/adoption-map.png" alt="korea map image" />
      </div>
      <div class="shelter-info-wrapper">
        <div class="shelter-title-card mb-3">
          <span
            >동물보호센터 <em>{{ ANIMAL_SHELTERS.length }}</em
            >개소</span
          >
        </div>
        <div class="overflow-scroll">
          <ShelterCard
            v-for="shelter of ANIMAL_SHELTERS"
            :key="shelter.careNm"
            :shelter="shelter"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  margin: 100px 0px;
}

.title span {
  font-size: 36px;
  font-weight: 700;
}

.title a {
  font-size: 16px;
  font-weight: 600;
  color: var(--primary-blue);
  border: none;
  text-decoration: none;
  background-color: transparent;
}

.title {
  margin-bottom: 42px;
}

.map {
  width: 580px;
  height: 645px;
}

.shelter-info-wrapper {
  width: 664px;
  height: 645px;
}

.shelter-title-card {
  width: 100%;
  height: 100px;
  border-radius: 17px;
  background-color: var(--gray-2);
  display: flex;
  justify-content: center;
  align-items: center;
}

.shelter-title-card span {
  font-size: 36px;
  font-weight: 600;
}

.shelter-title-card span em {
  font-style: normal;
  color: var(--primary-red);
}
</style>
