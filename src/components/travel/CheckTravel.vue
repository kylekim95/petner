<script setup lang="ts">
import StayCategory from './FacilitiesCategory.vue';
import FacilitiesCategory from './FacilitiesCategory.vue';
import RestaurantCategory from './RestaurantCategory.vue';
import RadioCategory from './RadioCategory.vue';
import { computed, ref } from 'vue';

import { travelCategoryEffect } from '@/motion';

// 지역 정보
const area = ref([
  '서울',
  '인천',
  '대전',
  '대구',
  '광주',
  '부산',
  '울산',
  '세종',
  '경기',
  '강원',
  '충북',
  '충남',
  '경북',
  '경남',
  '전북',
  '전남',
  '제주',
]);

// 현재 페이지
const pageCategoryData = ref({
  title: '카테고리',
  options: ['문화 & 쇼핑', '숙소', '레스토랑', '관광 & 체험'],
});

const currentPage = ref('문화 & 쇼핑');

// 지역
const currentArea = ref('서울');
const handleArea = (selected: string) => {
  currentArea.value = selected;
};

// 유형 정보
// 숙소 옵션

const stayCategoryData = ref({
  category: '숙소',
  title: '숙소 유형',
  options: ['전체', '모텔', '호텔,리조트', '펜션', '한옥'],
});

// 식당
const restaurantCategoryData = ref({
  category: '레스토랑',
  title: '음식 유형',
  options: ['전체', '한식', '양식', '일식', '중식', '이색', '카페'],
});

// 쇼핑
const shoppingCategoryData = ref({
  category: '문화 & 쇼핑',
  title: '쇼핑 유형',
  options: [
    '전체',
    '5일장',
    '시장',
    '백화점',
    '면세점',
    '대형마트',
    '전문매장',
    '공예 / 공방',
    '특산물 판매점',
    '사후 면세점',
  ],
});

// 레포츠
const reportsCategoryData = ref({
  category: '관광 & 체험',
  title: '레포츠 유형',
  options: ['전체', '육상', '수상', '항공'],
});

// 현재 페이지에 따른 카테고리 데이터를 반환하는 computed
const currentCategoryData = computed(() => {
  switch (currentPage.value) {
    case '숙소':
      return stayCategoryData.value;
    case '레스토랑':
      return restaurantCategoryData.value;
    case '문화 & 쇼핑':
      return shoppingCategoryData.value;
    case '관광 & 체험':
      return reportsCategoryData.value;
    // 기본값 (예시로 '문화 & 쇼핑'에 대한 데이터가 있다면 추가)
    default:
      return { title: '기본', category: '', options: [] };
  }
});
</script>

<template>
  <AppHeader />
  <!-- Top 검색창, 검색 결과 -->
  <div v-motion="travelCategoryEffect" class="mainLeft container position-sticky-top">
    <!-- search -->
    <div class="searchSection position-relative">
      <input class="searchInput" type="text" placeholder="키워드 검색" />
      <i class="bi bi-search position-absolute searchIcon"></i>
    </div>
    <!-- 페이지 카테고리 -->
    <RadioCategory v-model="pageCategoryData" v-model:selectedCategory="currentPage" />

    <!-- 지역 -->
    <div class="title" :style="{ marginTop: '70px' }">지역</div>
    <div class="areaContainer mt-4">
      <div
        class="areaButton"
        v-for="(item, index) in area"
        :key="index"
        :class="{ selectedButton: currentArea === item }"
        @click="handleArea(item)"
      >
        <span>{{ item }}</span>
      </div>
    </div>

    <!-- 시설 정보 및 유형 -->
    <div v-motion-pop>
      <!-- key 속성을 사용하여 currentPage가 변경될 때 컴포넌트를 강제로 재렌더링 -->
      <RadioCategory
        :key="currentPage"
        v-model="currentCategoryData"
        v-model:selectedCategory="currentPage"
      />
      <!-- 숙소 시설 유형 -->
      <div v-if="currentPage === '숙소'">
        <FacilitiesCategory />
      </div>
    </div>
  </div>

  <!-- <AppFooter /> -->
</template>

<style scoped>
.mainLeft {
  display: flex;
  width: 25%;
  min-width: 250px;
  flex-direction: column;
  align-items: start;
}

/* 제목 폰트 */
.title {
  font-size: 36px;
  font-weight: 700;
}

/* 검색 바 */

.searchSection {
  width: 95%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.searchInput {
  width: 100%;
  height: 29px;
  padding: 30px;
  border: none;
  border-radius: 20px;
  color: var(--gray-6);
  font-size: 24px;
  font-weight: 400;
  background-color: var(--gray-3);
}

.searchIcon {
  right: 10%;
  font-size: 24px;
  color: var(--gray-7);
}

/* 카테고리 섹션 */

.PageCategorySection {
  margin-left: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

label {
  color: var(--gray-7);
}

input[type='radio'] {
  appearance: none;
  width: 15px;
  height: 15px;
  border: 2px solid #ccc; /* 기본 테두리 */
  border-radius: 50%;
  display: inline-block;
  position: relative;
  cursor: pointer;
  color: var(--gray-6);
}

/* radio check 색상 */
input[type='radio']:checked {
  background-color: var(--secondary-red); /* 체크된 배경색 변경 */
  border-color: var(--gray-6); /* 체크된 테두리 색 변경 */
}

/* 지역 버튼 */
.areaContainer {
  display: block;
  width: 100%;
}

/* 지역 버튼 */
.areaButton {
  display: inline-block;
  padding: 10px 20px;
  margin: 5px; /* 버튼 간격 */
  color: var(--gray-7);
  border: 1px solid var(--gray-6);
  border-radius: 25px;
  cursor: pointer;
}

.selectedButton {
  background-color: var(--secondary-red);
  color: white;
}
</style>
