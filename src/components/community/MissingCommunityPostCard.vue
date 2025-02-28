<script setup lang="ts">
import { defineProps } from 'vue';

// Props 정의
const props = defineProps<{
  width: string;
  height: string;
  imageHeight: string;
  imageUrl: string;
  avatarWidth: string;
  avatarHeight: string;
}>();
</script>

<template>
  <div
    class="ms-5 overflow-hidden border border-gray-7"
    :style="{ width: props.width, height: props.height, borderRadius: '10px' }"
  >
    <!-- 이미지 영역 -->
    <div class="position-relative z-0 filter">
      <img
        :src="props.imageUrl"
        alt="강아지"
        :width="props.width"
        :height="props.imageHeight"
        style="filter: brightness(0.7)"
      />
      <div
        class="position-absolute bg-white text-center"
        :style="{
          width: '70px',
          height: '30px',
          fontSize: '1.25rem',
          top: '20px',
          marginLeft: '20px',
          borderRadius: '40px',
          boxShadow: '2px 4px 0px #333333',
          fontFamily: 'Paperlogy-7Bold',
          fontWeight: '500',
        }"
      >
        D+20
      </div>

      <div
        class="z-1 text-white position-absolute d-flex flex-column"
        :style="{ bottom: '20px', marginLeft: '20px' }"
      >
        <span class="" :style="{ fontSize: '36px', fontWeight: '700' }">구산 마을 삼거리</span>
      </div>
    </div>
    <!-- 텍스트 영역 -->
    <div class="d-flex flex-column mt-3 ms-3 gap-3" :style="{ height: '100px' }">
      <!-- 프로필 영역 -->
      <div class="d-flex flex-row align-items-center gap-3">
        <div
          class="overflow-hidden"
          :style="{ width: props.avatarWidth, height: props.avatarHeight, borderRadius: '40px' }"
        >
          <img
            src="https://cdn.pixabay.com/photo/2016/04/19/15/13/minion-1338858_1280.jpg"
            alt="강아지"
            width="40px"
            height="40px"
            style="filter: brightness(0.7)"
          />
        </div>
        <span class="text-gray-7 fw-medium" :style="{ fontSize: '24px', fontWeight: '500' }"
          >jungseok</span
        >
      </div>
      <div class="fw-bold" :style="{ fontSize: '20px' }">전북 무주군 / 9살 / 골든리트리버</div>
      <div class="text-gray-7" :style="{ fontSize: '16px' }">
        중성화 수술 안되어있고, 귀 안쪽에 이계혈종있음
      </div>
      <!-- Chip 영역 -->
      <div class="d-flex flex-row gap-3">
        <div
          class="bg-gray-3 d-flex flex-row align-items-center justify-content-center gap-2 text-primary-blue"
          :style="{ width: '73px', height: '30px', borderRadius: '30px', fontSize: '16px' }"
        >
          <i class="bi bi-pencil" :style="{ fontSize: '20px' }"></i>
          <span>3</span>
        </div>
        <div
          class="bg-gray-3 d-flex flex-row align-items-center justify-content-center gap-3 text-primary-blue"
          :style="{ width: '180px', height: '30px', borderRadius: '30px', fontSize: '16px' }"
        >
          <i class="bi bi-calendar-check" :style="{ fontSize: '20px' }"></i>
          <span>2025-02-16</span>
        </div>
        <div
          class="bg-gray-3 d-flex flex-row align-items-center justify-content-center gap-3 text-primary-blue"
          :style="{ width: '192px', height: '30px', borderRadius: '30px', fontSize: '16px' }"
        >
          <i class="bi bi-telephone-fill" :style="{ fontSize: '20px' }"></i>
          <span>010-1234-5678</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
