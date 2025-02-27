<script setup lang="ts">
import ADOPTION_ANIMAL from '@/constants/mock/adoptionAnimal.ts';
import { dateAddBarFormatter } from '@/utils/dateFormat';
import SEX_CODE_TO_KOR from '@/constants/sexCodeMap';
</script>

<template>
  <div class="card animal-card">
    <img :src="ADOPTION_ANIMAL.popfile" alt="abandoned animal image" class="card-img-top" />
    <div class="card-body d-flex flex-column gap-2">
      <slot name="tags">
        <!-- 유기동물찾기공고 태그 -->
      </slot>
      <h5 class="card-title">{{ ADOPTION_ANIMAL.kindCd }}</h5>
      <div class="d-flex gap-1">
        <span class="animal-info-property"> 공고번호</span>
        <span class="animal-info-value"> {{ ADOPTION_ANIMAL.desertionNo }}</span>
      </div>
      <div class="d-flex gap-1">
        <span class="animal-info-property"> 공고시작일</span>
        <span class="animal-info-value">
          {{ dateAddBarFormatter(ADOPTION_ANIMAL.noticeSdt.toString()) }}</span
        >
      </div>
      <div class="d-flex gap-1">
        <span class="animal-info-property"> 공고종료일</span>
        <span class="animal-info-value">
          {{ dateAddBarFormatter(ADOPTION_ANIMAL.noticeEdt.toString()) }}</span
        >
      </div>
      <div class="d-flex gap-1">
        <span class="animal-info-property"> 성별</span>
        <span class="animal-info-value"> {{ SEX_CODE_TO_KOR[ADOPTION_ANIMAL.sexCd] }}</span>
      </div>
      <div class="d-flex gap-1">
        <span class="animal-info-property"> 특징</span>
        <span class="animal-info-value"> {{ ADOPTION_ANIMAL.specialMark.slice(0, 20) }}</span>
      </div>
      <slot name="datail-button">
        <!-- 상세정보 확인 버튼 -->
      </slot>
    </div>
  </div>
</template>

<style scoped>
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
