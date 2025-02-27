<script setup lang="ts">
import PNG_IMAGES from '../../../public/PNG-Image/image';
const mockImageSrc = PNG_IMAGES.cat;

// TODO : 상세보기 버튼, 유기동물 찾기 공고 slot 만들기
</script>

<template>
  <div class="card animal-card">
    <img :src="mockImageSrc" alt="abandoned animal image" class="card-img-top" />
    <div class="card-body d-flex flex-column gap-2">
      <h5 class="card-title">믹스견</h5>
      <div class="d-flex gap-1">
        <span class="animal-info-property"> 공고번호</span>
        <span class="animal-info-value"> 1234567890</span>
      </div>
      <div class="d-flex gap-1">
        <span class="animal-info-property"> 공고시작일</span>
        <span class="animal-info-value"> 2024-01-01</span>
      </div>
      <div class="d-flex gap-1">
        <span class="animal-info-property"> 공고종료일</span>
        <span class="animal-info-value"> 2025-01-01</span>
      </div>
      <div class="d-flex gap-1">
        <span class="animal-info-property"> 성별</span>
        <span class="animal-info-value"> 미상</span>
      </div>
      <div class="d-flex gap-1">
        <span class="animal-info-property"> 특징</span>
        <span class="animal-info-value"> 귀여움</span>
      </div>
    </div>
  </div>
</template>

<style>
.animal-card {
  width: 363px;
}
.card-img-top {
  height: 235px;
  width: full;
}
.animal-info-property {
  display: block;
  width: 80px;
  color: var(--gray-10);
}

.animal-info-value {
  color: var(--gray-7);
}

.card-title {
  font-weight: 700;
}
</style>
