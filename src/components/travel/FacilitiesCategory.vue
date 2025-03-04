<script setup lang="ts">
import { ref } from 'vue';

// 공용시설 정보
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
// 객실 정보
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

const handleFacilities = (facility: { option: string; selected: boolean }) => {
  facility.selected = !facility.selected;
};
</script>

<template>
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
</template>

<style scoped>
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

/* 카테고리 섹션 */

.staySection {
  margin-left: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
label {
  color: var(--gray-7);
}

/* 시설 버튼 */
.facilitiesContainer {
  display: block;
  width: 100%;
}

/* 지역 버튼 */
.facilities {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  margin: 10px 10px 10px 0px; /* 버튼 간격 */
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
