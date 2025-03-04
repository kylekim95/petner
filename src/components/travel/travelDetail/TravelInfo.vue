<script setup lang="ts">
export interface DetailCard {
  contenttypeid: number;
  title: string;
  addr1: string;
  tel: string;
  overview: string;
  homepage: string | null;
  mapx: string | number;
  mapy: string | number;
}
const { detail } = defineProps<{ detail: DetailCard }>();
</script>

<template>
  <div class="container mb-5">
    <div class="row g-2">
      <h3 class="text-secondary-red fs-5" style="font-family: 'Paperlogy'; font-weight: 700">
        {{ detail?.contenttypeid ?? '숙소' }}
      </h3>
      <div class="d-flex align-items-center justify-content-between mb-3">
        <h1 class="mb-0 text-gray-10" style="font-family: 'Paperlogy'; font-weight: 700">
          {{ detail?.title ?? '가람초연재' }}
        </h1>
        <i class="bi bi-map fa-2x text-primary-green"></i>
      </div>

      <div class="bi bi-geo-alt fa-s text-secondary-red fs-5">
        <span class="ms-1 text-gray-7">
          {{ detail?.addr1 ?? '경상북도 안동시 풍천면 하회종가길 76-6' }}</span
        >
      </div>
      <div class="bi bi-telephone fa-s text-secondary-red fs-5">
        <span class="ms-1 text-gray-7"> {{ detail?.tel ?? '연락처' }}</span>
      </div>
      <div class="bi bi-house fa-s text-secondary-red fs-5">
        <span class="ms-1 text-gray-7">{{ detail?.homepage ?? '홈페이지' }}</span>
      </div>
    </div>
    <div class="row mt-3 gy-3">
      <div class="col-6">
        <h2 class="mb-3 fs-4">소개</h2>

        <p class="fs-7">
          {{ detail?.overview ?? '소개글' }}
        </p>
        <div class="d-flex align-items-center justify-content-between mt-5">
          <h2 class="mb-3 fs-4">문의 및 안내</h2>
          <span class="fs-6">{{ detail?.tel ?? '010-3524-6124' }}</span>
        </div>
        <div class="d-flex align-items-center justify-content-between mt-5">
          <h2 class="mb-3 fs-4">체크인 / 체크아웃</h2>
          <span class="fs-6">15:00 / 10:00</span>
        </div>
        <div class="d-flex align-items-center justify-content-between mt-5">
          <h2 class="mb-3 fs-4">환불 규정</h2>
          <span class="fs-6">이용일 7일전 90%, 5일전 70%, 3일전 50%, 1일전 또는 당일 20%</span>
        </div>
      </div>

      <!-- 오른쪽: 지도 Placeholder -->
      <div class="col-6">
        <div class="map-placeholder d-flex align-items-center justify-content-center rounded-4">
          <span class="text-muted">지도 영역 (Placeholder)</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 지도 Placeholder 스타일 */
.map-placeholder {
  width: 100%;
  height: 600px; /* 원하는 크기로 조절 */
  background-color: #f0f0f0;
  border: 1px dashed #ccc;
}
</style>
