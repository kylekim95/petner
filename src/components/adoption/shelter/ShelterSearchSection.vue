<script setup lang="ts">
import TitleText from '@/components/common/TitleText.vue';
import ShelterCard from './ShelterCard.vue';
import ANIMAL_SHELTERS from '@/constants/mock/animalShelter';
import { KOR_ORG, GU_ORG } from '@/constants/korOrg';
import { ref } from 'vue';

const upperOrg = ref('');
const org = ref('하위지역을 선택해 주세요');
</script>

<template>
  <div class="search-wrapper d-flex">
    <div class="side-bar">
      <TitleText size="24px" weight="600" color="gray-10">우리지역 보호소 찾기</TitleText>
      <!-- ------------- -->
      <TitleText size="20px" weight="500" color="gray-10">시/도</TitleText>
      <div>
        <button
          v-for="upperOrg of KOR_ORG"
          :key="upperOrg.orgCd"
          type="button"
          class="btn btn-light"
        >
          {{ upperOrg.orgdownNm.slice(0, 2) }}
        </button>
      </div>
      <!-- ------------- -->
      <TitleText size="20px" weight="500" color="gray-10">시군구</TitleText>
      <div>
        <div class="btn-group">
          <button
            type="button"
            class="btn dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {{ org }}
          </button>
          <ul class="dropdown-menu">
            <li v-for="orgItem of GU_ORG['6110000']" :key="org.orgCd">
              <a class="dropdown-item" href="#" @click="org.value = orgItem.orgdownNm">{{
                orgItem.orgdownNm
              }}</a>
            </li>
          </ul>
        </div>
      </div>
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

.dropdown-toggle {
  border: 1px solid var(--gray-3);
}

.dropdown-toggle:hover {
  background-color: var(--gray-3);
  color: var(--gray-10);
}

.dropdown-item:hover {
  background-color: var(--secondary-green);
}
</style>
