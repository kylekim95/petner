<script setup lang="ts">
interface BaseDetail {
  title: string;
  addr1: string | null;
  tel: string | null;
  overview: string | null;
  homepage: string | null;
  firstimage: string | null;
  mapx: string | number | null;
  mapy: string | number | null;
}

export interface AccommodationDetail extends BaseDetail {
  contenttypeid: 32;
  roomcount: number | null;
  checkintime: string | null;
  checkouttime: string | null;
  refundregulation: string | null;
}

export interface RestaurantDetail extends BaseDetail {
  contenttypeid: 39;
  opentimefood: string | null;
  restdatefood: string | null;
  parkingfood: string | null;
  treatmenu: string | null;
  firstmenu: string | null;
}

export interface Culture extends BaseDetail {
  contenttypeid: 14;
  infocenterculture: string | null;
  usetimeculture: string | null;
  restdateculture: string | null;
  parkingculture: string | null;
  parkingfee: string | null;
}
export interface Shopping extends BaseDetail {
  contenttypeid: 38;
  infocentershopping: string | null;
  fairday: string | null;
  parkingshopping: string | null;
  restdateshopping: string | null;
}

export type DetailCard = AccommodationDetail | RestaurantDetail | Culture | Shopping;

const { detail } = defineProps<{ detail: DetailCard }>();
</script>

<template>
  <!-- 숙소 타입(contenttypeid === 32) -->
  <div v-if="detail?.contenttypeid === 32" class="container mb-5">
    <div class="row g-2">
      <h3 class="text-secondary-red fs-5" style="font-family: 'Paperlogy'; font-weight: 700">
        숙소
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
        <h2 class="mb-3 fs-5">소개</h2>

        <p class="fs-7">
          {{ detail?.overview ?? '소개글' }}
        </p>
        <div class="d-flex align-items-center justify-content-between mt-5">
          <h2 class="fs-5">문의 및 안내</h2>
          <span class="fs-6">{{ detail?.tel ?? '010-3524-6124' }}</span>
        </div>
        <div class="d-flex align-items-center justify-content-between mt-2">
          <h2 class="fs-5">객실 갯수</h2>
          <span class="fs-6">{{ (detail?.roomcount ?? '2') + '개' }}</span>
        </div>
        <div class="d-flex align-items-center justify-content-between mt-2">
          <h2 class="fs-5">체크인 / 체크아웃</h2>
          <span class="fs-6">{{
            (detail?.checkintime ?? '15:00') + ' / ' + (detail?.checkouttime ?? '10:00')
          }}</span>
        </div>
        <div class="d-flex align-items-center justify-content-between mt-2">
          <h2 class="fs-5">환불 규정</h2>
          <span class="fs-6">{{ detail.refundregulation ?? '예약 확정시 환불 불가' }}</span>
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

  <!-- 음식점 타입(contenttypeid === 39) -->
  <div v-if="detail?.contenttypeid === 39" class="container mb-5">
    <div class="row g-2">
      <h3 class="text-secondary-red fs-5" style="font-family: 'Paperlogy'; font-weight: 700">
        레스토랑
      </h3>
      <div class="d-flex align-items-center justify-content-between mb-3">
        <h1 class="mb-0 text-gray-10" style="font-family: 'Paperlogy'; font-weight: 700">
          {{ detail?.title ?? '가평카페 109' }}
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
          <h2 class="fs-5">문의 및 안내</h2>
          <span class="fs-6">{{ detail?.tel ?? '010-3524-6124' }}</span>
        </div>
        <div class="d-flex align-items-center justify-content-between mt-2">
          <h2 class="fs-5">영업시간</h2>
          <span class="fs-6">{{ detail?.opentimefood }}</span>
        </div>
        <div class="d-flex align-items-center justify-content-between mt-2">
          <h2 class="fs-5">쉬는 날</h2>
          <span class="fs-6">{{ detail.restdatefood || '연중무휴' }}</span>
        </div>
        <div class="d-flex align-items-center justify-content-between mt-2">
          <h2 class="fs-5">주차 정보</h2>
          <span class="fs-6">{{ detail.parkingfood || '유료 주차장' }}</span>
        </div>
        <div class="d-flex align-items-center justify-content-between mt-2">
          <h2 class="fs-5">취급 메뉴</h2>
          <span class="fs-6">{{ detail.treatmenu || '정보 없음' }}</span>
        </div>
        <div class="d-flex align-items-center justify-content-between mt-2">
          <h2 class="fs-5">대표 메뉴</h2>
          <span class="fs-6">{{ detail.firstmenu || '정보 없음' }}</span>
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

  <!-- 문화 & 쇼핑 (contenttyepid === 14 || 38) -->
  <div v-if="detail?.contenttypeid === 14" class="container mb-5">
    <div class="row g-2">
      <h3 class="text-secondary-red fs-5" style="font-family: 'Paperlogy'; font-weight: 700">
        문화 & 쇼핑
      </h3>
      <div class="d-flex align-items-center justify-content-between mb-3">
        <h1 class="mb-0 text-gray-10" style="font-family: 'Paperlogy'; font-weight: 700">
          {{ detail?.title ?? '가평현암 농경박물관' }}
        </h1>
        <i class="bi bi-map fa-2x text-primary-green"></i>
      </div>

      <div class="bi bi-geo-alt fa-s text-secondary-red fs-5">
        <span class="ms-1 text-gray-7"> {{ detail?.addr1 ?? '주소정보 없음' }}</span>
      </div>
      <div class="bi bi-telephone fa-s text-secondary-red fs-5">
        <span class="ms-1 text-gray-7"> {{ detail?.tel ?? '-' }}</span>
      </div>
      <div class="bi bi-house fa-s text-secondary-red fs-5">
        <span class="ms-1 text-gray-7">{{ detail?.homepage ?? '정보 없음' }}</span>
      </div>
    </div>
    <div class="row mt-3 gy-3">
      <div class="col-6">
        <h2 class="mb-3 fs-4">소개</h2>

        <p class="fs-7">
          {{ detail?.overview ?? '소개글 없음' }}
        </p>
        <div class="d-flex align-items-center justify-content-between mt-5">
          <h2 class="fs-5">문의 및 안내</h2>
          <span class="fs-6">{{ detail?.infocenterculture ?? '-' }}</span>
        </div>
        <div class="d-flex align-items-center justify-content-between mt-2">
          <h2 class="fs-5">영업시간</h2>
          <span class="fs-6">{{ detail?.usetimeculture }}</span>
        </div>
        <div class="d-flex align-items-center justify-content-between mt-2">
          <h2 class="fs-5">쉬는 날</h2>
          <span class="fs-6">{{ detail?.restdateculture || '정보 없음' }}</span>
        </div>
        <div class="d-flex align-items-center justify-content-between mt-2">
          <h2 class="fs-5">주차 정보</h2>
          <span class="fs-6">{{
            detail?.parkingculture || detail?.parkingfee
              ? `${detail?.parkingculture ?? '주차정보 없음'}/${detail?.parkingfee ?? '주차요금 정보 없음'}`
              : '주차정보 없음'
          }}</span>
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

  <div v-if="detail?.contenttypeid === 38" class="container mb-5">
    <div class="row g-2">
      <h3 class="text-secondary-red fs-5" style="font-family: 'Paperlogy'; font-weight: 700">
        문화 & 쇼핑
      </h3>
      <div class="d-flex align-items-center justify-content-between mb-3">
        <h1 class="mb-0 text-gray-10" style="font-family: 'Paperlogy'; font-weight: 700">
          {{ detail?.title ?? '가평현리 5일장' }}
        </h1>
        <i class="bi bi-map fa-2x text-primary-green"></i>
      </div>

      <div class="bi bi-geo-alt fa-s text-secondary-red fs-5">
        <span class="ms-1 text-gray-7"> {{ detail?.addr1 ?? '주소정보 없음' }}</span>
      </div>
      <div class="bi bi-telephone fa-s text-secondary-red fs-5">
        <span class="ms-1 text-gray-7"> {{ detail?.tel ?? '-' }}</span>
      </div>
      <div class="bi bi-house fa-s text-secondary-red fs-5">
        <span class="ms-1 text-gray-7">{{ detail?.homepage ?? '정보 없음' }}</span>
      </div>
    </div>
    <div class="row mt-3 gy-3">
      <div class="col-6">
        <h2 class="mb-3 fs-4">소개</h2>

        <p class="fs-7">
          {{ detail?.overview ?? '소개글 없음' }}
        </p>
        <div class="d-flex align-items-center justify-content-between mt-5">
          <h2 class="fs-5">문의 및 안내</h2>
          <span class="fs-6">{{ detail?.infocentershopping ?? '-' }}</span>
        </div>
        <div class="d-flex align-items-center justify-content-between mt-2">
          <h2 class="fs-5">영업시간</h2>
          <span class="fs-6">{{ detail?.fairday }}</span>
        </div>
        <div class="d-flex align-items-center justify-content-between mt-2">
          <h2 class="fs-5">쉬는 날</h2>
          <span class="fs-6">{{ detail?.restdateshopping || '정보 없음' }}</span>
        </div>
        <div class="d-flex align-items-center justify-content-between mt-2">
          <h2 class="fs-5">주차 정보</h2>
          <span class="fs-6">{{ detail.parkingshopping ?? '주차요금 정보 없음' }}</span>
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
  height: 630px; /* 원하는 크기로 조절 */
  background-color: #f0f0f0;
  border: 1px dashed #ccc;
}
</style>
