<script setup lang="ts">
import TitleText from '@/components/common/TitleText.vue';
import ShelterCard from './ShelterCard.vue';
import ANIMAL_SHELTERS from '@/constants/mock/animalShelter';
import { KOR_ORG, GU_ORG } from '@/constants/korOrg';
</script>

<template>
  <div class="search-wrapper d-flex">
    <div class="side-bar">
      <TitleText size="24px" weight="600" color="gray-10">우리지역 보호소 찾기</TitleText>
      <!-- ------------- -->
      <TitleText size="20px" weight="500" color="gray-10">시/도</TitleText>
      <div>
        <button v-for="org of KOR_ORG" :key="org.orgCd" type="button" class="btn btn-light">
          {{ org.orgdownNm.slice(0, 2) }}
        </button>
      </div>
      <!-- ------------- -->
      <TitleText size="20px" weight="500" color="gray-10">시군구</TitleText>
      <div></div>
      <!-- ------------- -->
      <TitleText size="20px" weight="500" color="gray-10">구조대상동물</TitleText>
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
  /* background-color: red; */
  padding: 40px 10px;

  display: flex;
  flex-direction: column;
  gap: 10px;
}

.map {
  background-color: blue;
  flex: 1;
}
</style>
