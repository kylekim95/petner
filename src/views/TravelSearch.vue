<script setup lang="ts">
import AppHeader from '@/components/common/AppHeader.vue';
import AppFooter from '@/components/common/AppFooter.vue';
import { ref } from 'vue';

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

const facilities = ref([
  { option: '바비큐', selected: false },
  { option: '뷰티시설', selected: false },
  { option: '자전거 대여', selected: false },
  { option: '캠프파이어', selected: false },
  { option: '휘트니스', selected: false },
  { option: '사우나', selected: false },
  { option: '노래방', selected: false },
  { option: '세미나실', selected: false },
  { option: '스포츠시설', selected: false },
]);

const roomFacilities = ref([
  { option: 'TV', selected: false },
  { option: 'PC', selected: false },
  { option: '인터넷', selected: false },
  { option: '세면도구', selected: false },
  { option: '소파', selected: false },
  { option: '취사용품', selected: false },
  { option: '테이블', selected: false },
  { option: '드라이기', selected: false },
]);

const currentArea = ref('서울');
const handleArea = (selected: string) => {
  currentArea.value = selected;
};
const handleFacilities = (facility: { option: string; selected: boolean }) => {
  facility.selected = !facility.selected;
};
</script>

<template>
  <AppHeader />
  <div class="main mx-5" :style="{ marginTop: '215px' }">
    <div class="mainLeft">
      <!-- search -->
      <div class="searchSection position-relative">
        <input class="searchInput" type="text" placeholder="검색어를 입력해주세요" />
        <i class="bi bi-search position-absolute searchIcon"></i>
      </div>
      <!-- 카테고리 -->
      <div class="title" :style="{ marginTop: '70px' }">카테고리</div>
      <div class="categorySection mt-4 gap-5">
        <div>
          <input class="me-2" type="radio" name="category" id="cultureAndShopping" checked />
          <label for="cultureAndShopping">문화 & 쇼핑</label>
        </div>
        <div>
          <input class="me-2" type="radio" name="category" id="stay" />
          <label for="stay">숙소</label>
        </div>
        <div>
          <input class="me-2" type="radio" name="category" id="restaurant" />
          <label for="restaurant">레스토랑</label>
        </div>
        <div>
          <input class="me-2" type="radio" name="category" id="activity" />
          <label for="activity">관광 & 체험</label>
        </div>
      </div>
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
      <!-- 숙소 유형 -->
      <div class="title" :style="{ marginTop: '70px' }">숙소</div>
      <div class="categorySection mt-4 gap-5">
        <div>
          <input class="me-2" type="radio" name="category" id="total" checked />
          <label for="total">전체</label>
        </div>
        <div>
          <input class="me-2" type="radio" name="category" id="motel" />
          <label for="motel">모텔</label>
        </div>
        <div>
          <input class="me-2" type="radio" name="category" id="resort" />
          <label for="resort">호텔,리조트</label>
        </div>
        <div>
          <input class="me-2" type="radio" name="category" id="homeHouse" />
          <label for="homeHouse">펜션</label>
        </div>

        <div>
          <input class="me-2" type="radio" name="category" id="traditionalHouse" />
          <label for="traditionalHouse">한옥</label>
        </div>
      </div>
      <!-- 시설 옵션 -->
      <div class="title" :style="{ marginTop: '70px' }">시설</div>
      <div class="facilitiesContainer ms-1">
        <div class="mb-1 mt-4" :style="{ fontSize: '16px' }">공용시설</div>
        <div
          class="facilities"
          v-for="(item, index) in facilities"
          :key="index"
          :class="{ selectedButton: item.selected }"
          @click="handleFacilities(item)"
        >
          <span>{{ item.option }}</span>
        </div>
      </div>
      <div class="facilitiesContainer mt-4 ms-1">
        <div class="mb-1 mt-4" :style="{ fontSize: '16px' }">객실 시설</div>
        <span
          class="facilities"
          v-for="(item, index) in roomFacilities"
          :key="index"
          :class="{ selectedButton: item.selected }"
          @click="handleFacilities(item)"
        >
          {{ item.option }}
        </span>
      </div>
    </div>
    <div class="mainRight"></div>
  </div>
  <!-- <AppFooter /> -->
</template>

<style scoped>
.mainLeft {
  display: flex;
  width: 579px;
  flex-direction: column;
  align-items: start;
}

/* 제목 폰트 */
.title {
  font-size: 36px;
  font-weight: 700;
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

/* 검색 바 */

.searchSection {
  width: 461px;
  height: 29px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.searchInput {
  width: 401px;
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
  right: 80px;
  font-size: 24px;
  color: var(--gray-7);
}

/* 카테고리 섹션 */

.categorySection {
  margin-left: 20px;
  width: 461px;
  display: flex;
  flex-direction: column;
}
label {
  color: var(--gray-7);
}
/* 지역 버튼 */
.areaContainer {
  display: block;
  width: 461px;
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

/* 시설 버튼 */
.facilitiesContainer {
  display: block;
  width: 461px;
}

/* 지역 버튼 */
.facilities {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  margin: 10px 5px; /* 버튼 간격 */
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
