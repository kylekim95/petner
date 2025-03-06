<script setup lang="ts">
import { defineProps } from 'vue';
import { dateAddBarFormatter } from '@/utils/dateFormat';
import SEX_CODE_TO_KOR from '@/constants/sexCodeMap';

const { animal } = defineProps<{
  animal: {
    popfile: string;
    kindCd: string;
    desertionNo: string;
    noticeSdt: string;
    noticeEdt: string;
    sexCd: string;
    specialMark: string;
  };
}>();

function getSexLabel(code: string): string {
  if (code === 'M' || code === 'F') {
    return SEX_CODE_TO_KOR[code as 'M' | 'F'];
  }
  return '미상';
}
</script>

<template>
  <div class="card animal-card">
    <img :src="animal.popfile" alt="animal image" class="card-img-top" />
    <div class="card-body">
      <slot name="tags">
        <!-- 유기동물찾기공고 태그 -->
      </slot>
      <h5 class="card-title">{{ animal.kindCd }}</h5>
      <div class="info-row">
        <span class="info-label">공고번호</span>
        <span class="info-value">{{ animal.desertionNo }}</span>
      </div>
      <div class="info-row">
        <span class="info-label">공고시작일</span>
        <span class="info-value">{{ dateAddBarFormatter(animal.noticeSdt.toString()) }}</span>
      </div>
      <div class="info-row">
        <span class="info-label">공고종료일</span>
        <span class="info-value">{{ dateAddBarFormatter(animal.noticeEdt.toString()) }}</span>
      </div>
      <div class="info-row">
        <span class="info-label">성별</span>
        <span class="info-value">
          <template v-if="animal.sexCd === 'M'">
            <i class="fa-solid fa-mars male-icon"></i>
          </template>
          <template v-else-if="animal.sexCd === 'F'">
            <i class="fa-solid fa-venus female-icon"></i>
          </template>
          <template v-else>
            <i class="fa-solid fa-genderless unknown-icon"></i>
          </template>
          {{ getSexLabel(animal.sexCd) }}
        </span>
      </div>
      <div class="info-row">
        <span class="info-label">특징</span>
        <span class="info-value">{{ animal.specialMark.slice(0, 20) }}</span>
      </div>
      <slot name="detail-button">
        <button class="detail-button">상세정보 확인</button>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.animal-card {
  width: 363px;
  background-color: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 0 auto;
  cursor: pointer;
}

.animal-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.card-img-top {
  height: 235px;
  width: 100%;
  object-fit: cover;
  border-bottom: 3px solid #f8f8f8;
}

.card-body {
  padding: 16px;
  background: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%);
}

.card-title {
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 8px;
  color: #333;
}

.info-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}

.info-label {
  width: 90px;
  font-size: 0.875rem;
  color: #666;
  font-weight: 500;
}

.info-value {
  font-size: 0.875rem;
  color: #444;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 4px;
}

.detail-button {
  margin-top: 12px;
  width: 100%;
  padding: 8px 0;
  border: none;
  border-radius: 8px;
  background-color: var(--primary-green);
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.detail-button:hover {
  background-color: #299843;
}

.male-icon {
  color: #007bff;
}

.female-icon {
  color: #e83e8c;
}

.unknown-icon {
  color: #6c757d;
}
</style>
