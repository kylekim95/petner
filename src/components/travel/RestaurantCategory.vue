<script setup lang="ts">
import { ref } from 'vue';

// 지역 정보
const restaurant = ref([
  { id: 'total', category: '전체' },
  { id: 'Korean', category: '한식' },
  { id: 'West', category: '양식' },
  { id: 'Japan', category: '일식' },
]);
</script>

<template>
  <!-- 페이지 카테고리 -->
  <div class="title" :style="{ marginTop: '70px' }">식당유형</div>
  <div class="restaurantSection mt-4 gap-5 mb-4">
    <div v-for="item in restaurant" :key="item.id">
      <input class="me-2" type="radio" name="restaurant" id="{{ item.id  }}" checked />
      <label for="{{ item.id  }}">{{ item.category }}</label>
    </div>
  </div>
  <!-- <AppFooter /> -->
</template>

<style scoped>
/* 제목 폰트 */
.title {
  font-size: 36px;
  font-weight: 700;
}

/* 카테고리 섹션 */

.restaurantSection {
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
</style>
