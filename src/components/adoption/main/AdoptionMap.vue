<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import type { CSSProperties } from 'vue';
import SouthKoreaMap from '@/assets/southKoreaHigh.svg';
import PATH from '@/constants/path';
import { ANIMAL_SHELTERS } from '@/constants/mock/animalShelter';
import ShelterCard from './ShelterCard.vue';

const selectedRegion = ref('');
const tooltipText = ref('');
const tooltipStyle = ref<CSSProperties>({
  position: 'absolute',
  top: '0px',
  left: '0px',
  background: 'var(--secondary-green)',
  padding: '6px 12px', 
  borderRadius: '6px',
  fontSize: '16px',
  color: 'var(--gray-1)',
  pointerEvents: 'none',
  zIndex: '10',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)', 
  transition: 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out',
  opacity: '0',
});

const attachRegionEvents = () => {
  nextTick(() => {
    const svgElement = document.querySelector('svg');
    if (!svgElement) return;
    const paths = svgElement.querySelectorAll('path[data-region]');
    paths.forEach((path) => {
      path.addEventListener('click', () => {
        const region = path.getAttribute('data-region');
        if (region) {
          selectedRegion.value = region;
          paths.forEach((p) => {
            p.setAttribute(
              'fill',
              p.getAttribute('data-region') === region ? 'var(--primary-red)' : '#ddd',
            );
          });
        }
      });
      path.addEventListener('mouseenter', (e: Event) => {
        const mouseEvent = e as MouseEvent;
        const region = path.getAttribute('data-region') || '';
        tooltipText.value = region;
        tooltipStyle.value.left = mouseEvent.pageX + 'px';
        tooltipStyle.value.top = mouseEvent.pageY - 40 + 'px';
        tooltipStyle.value.opacity = '1';
        if (region !== selectedRegion.value) {
          path.setAttribute('fill', '#ffcccc');
        }
      });
      path.addEventListener('mousemove', (e: Event) => {
        const mouseEvent = e as MouseEvent;
        tooltipStyle.value.left = mouseEvent.pageX + 'px';
        tooltipStyle.value.top = mouseEvent.pageY - 40 + 'px';
      });
      path.addEventListener('mouseleave', () => {
        tooltipText.value = '';
        tooltipStyle.value.opacity = '0';
        if (path.getAttribute('data-region') !== selectedRegion.value) {
          path.setAttribute('fill', '#ddd');
        }
      });
    });
  });
};

onMounted(() => {
  attachRegionEvents();
});
</script>

<template>
  <div class="wrapper">
    <div id="tooltip" v-if="tooltipText" :style="tooltipStyle">
      {{ tooltipText }}
    </div>

    <div class="title d-flex justify-content-between align-items-center">
      <span>사랑을 기다리는 아이들, 보호소에서 만나보세요!</span>
      <router-link :to="PATH.adoptionShelter">더보기</router-link>
    </div>
    <div class="d-flex justify-content-between">
      <div class="map">
        <SouthKoreaMap width="100%" height="125%" />
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
            v-for="shelter in ANIMAL_SHELTERS"
            :key="shelter.careNm"
            :shelter="shelter"
          />
        </div>
      </div>
    </div>
    <!-- <div class="mt-4 text-center">
      <span v-if="selectedRegion">선택된 지역: {{ selectedRegion }}</span>
      <span v-else>지역을 클릭해 선택해주세요.</span>
    </div> -->
  </div>
</template>

<style scoped>
.wrapper {
  margin: 100px 0;
}
.title span {
  font-size: 36px;
  font-weight: 700;
}
.title a {
  font-size: 16px;
  font-weight: 600;
  color: var(--primary-blue);
  text-decoration: none;
}
.title {
  margin-bottom: 42px;
}
.map {
  width: 580px;
  height: 645px;
  transform: translateY(-160px);
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
