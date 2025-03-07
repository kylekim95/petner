<script setup lang="ts">
import type { devPost } from '@/types/devcourse/devPost';
import dateGap from '@/utils/dateGap';
import { defineProps } from 'vue';
// Props 정의
const props = defineProps<{
  card: devPost;
}>();
const AVATAR_WIDTH = '40px';
const AVATART_HEIGHT = '40px';
const data = JSON.parse(props.card.title);
const { fullName: userName, _id: userId } = props.card.author; // 사용자 정보 가져오기
</script>
<template>
  <div class="border border-gray-7" :style="{ width: '100%', borderRadius: '10px' }">
    <!-- 이미지 영역 -->
    <div class="position-relative z-0 filter">
      <img
        :src="card.image"
        alt="강아지"
        width="100%"
        height="442px"
        :style="{ filter: 'brightness(0.7)', borderRadius: '10px 10px 0px 0px' }"
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
          fontWeight: '400',
        }"
      >
        {{ dateGap(data.date) }}
      </div>
      <div
        class="z-1 text-white position-absolute d-flex flex-column"
        :style="{ bottom: '20px', marginLeft: '20px' }"
      >
        <span class="" :style="{ fontSize: '36px', fontWeight: '700' }">{{
          data.placeFeature
        }}</span>
      </div>
    </div>
    <!-- 텍스트 영역 -->
    <div class="d-flex flex-column mt-3 ms-3 gap-3">
      <!-- 프로필 영역 -->
      <div class="d-flex flex-row align-items-center gap-3">
        <div
          class="overflow-hidden"
          :style="{ width: AVATAR_WIDTH, height: AVATART_HEIGHT, borderRadius: '40px' }"
        >
          <img
            src="https://cdn.pixabay.com/photo/2016/04/19/15/13/minion-1338858_1280.jpg"
            alt="강아지"
            :width="AVATAR_WIDTH"
            :height="AVATART_HEIGHT"
            style="filter: brightness(0.7)"
          />
        </div>
        <span class="text-gray-7 fw-medium" :style="{ fontSize: '24px', fontWeight: '500' }">{{
          userName
        }}</span>
      </div>
      <div class="fw-bold" :style="{ fontSize: '20px' }">
        {{ data.region }} / {{ data.age }}/ {{ data.species }}
      </div>
      <div class="text-gray-7" :style="{ fontSize: '16px' }">
        {{ data.feature }}
      </div>
      <!-- Chip 영역 -->
      <div class="d-flex flex-lg-row flex-column flex-wrap gap-3 pb-3">
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
          <span>{{ data.date }}</span>
        </div>
        <div
          class="bg-gray-3 d-flex flex-row align-items-center justify-content-center gap-3 text-primary-blue"
          :style="{ width: '192px', height: '30px', borderRadius: '30px', fontSize: '16px' }"
        >
          <i class="bi bi-telephone-fill" :style="{ fontSize: '20px' }"></i>
          <span>{{ data.phone }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
