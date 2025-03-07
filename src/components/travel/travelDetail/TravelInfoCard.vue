<script setup lang="ts">
import ShelterKakaoMap from '@/components/adoption/shelter/ShelterKakaoMap.vue';

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
  contenttypeid: '32';
  roomcount: number | null;
  checkintime: string | null;
  checkouttime: string | null;
  refundregulation: string | null;
}
export interface RestaurantDetail extends BaseDetail {
  contenttypeid: '39';
  opentimefood: string | null;
  restdatefood: string | null;
  parkingfood: string | null;
  treatmenu: string | null;
  firstmenu: string | null;
}
export interface CultureDetail extends BaseDetail {
  contenttypeid: '14';
  infocenterculture: string | null;
  usetimeculture: string | null;
  restdateculture: string | null;
  parkingculture: string | null;
  parkingfee: string | null;
}
export interface ShoppingDetail extends BaseDetail {
  contenttypeid: '38';
  infocentershopping: string | null;
  fairday: string | null;
  parkingshopping: string | null;
  restdateshopping: string | null;
}
export interface TourSpotDetail extends BaseDetail {
  contenttypeid: '12';
  infocenter: string | null;
  restdate: string | null;
  expguide: string | null;
  parking: string | null;
  usetime: string | null;
}
export interface ActivitiesDetail extends BaseDetail {
  contenttypeid: '28';
  infocenterleports: string | null;
  restdateleports: string | null;
  usetimeleports: string | null;
  parkingleports: string | null;
  usefeeleports: string | null;
}
export type DetailCard =
  | AccommodationDetail
  | RestaurantDetail
  | CultureDetail
  | ShoppingDetail
  | TourSpotDetail
  | ActivitiesDetail;

const { detail } = defineProps<{ detail: DetailCard }>();

// HTML 태그 제거 함수
function stripHtmlTags(str: string) {
  return str.replace(/<[^>]*>/g, '');
}
</script>

<template>
  <!-- 숙소 타입(contenttypeid === 32) -->
  <div v-if="detail?.contenttypeid === '32'" class="container">
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
        <span class="ms-1 text-gray-7">{{
          detail?.homepage ? stripHtmlTags(detail.homepage) : '-'
        }}</span>
      </div>
    </div>
    <div class="row mt-3 gy-3">
      <div class="col-6">
        <h2 class="mb-3 fs-5">소개</h2>

        <p class="fs-7" v-if="detail?.overview" v-html="detail.overview"></p>
        <p class="fs-7" v-else>정보가 없습니다.</p>
        <div class="d-flex align-items-center justify-content-between mt-5">
          <h2 class="fs-5">문의 및 안내</h2>
          <span class="fs-6" v-if="detail?.tel">{{ detail.tel }}</span>
          <span class="fs-6" v-else>010-3524-6124</span>
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
        <div class="row mt-2">
          <div class="col-auto">
            <h2 class="fs-5">환불 규정</h2>
          </div>
          <div class="col text-end">
            <span
              class="fs-6"
              v-if="detail?.refundregulation"
              v-html="detail.refundregulation"
            ></span>
            <span class="fs-6" v-else>예약 확정시 환불 불가</span>
          </div>
        </div>
      </div>

      <!-- 오른쪽: 지도 Placeholder -->
      <div class="col-6">
        <div class="map-placeholder d-flex align-items-center justify-content-center rounded-4">
          <ShelterKakaoMap :lat="detail.mapy" :lng="detail.mapx" />
        </div>
      </div>
    </div>
  </div>

  <!-- 음식점 타입(contenttypeid === 39) -->
  <div v-if="detail?.contenttypeid === '39'" class="container">
    <div class="row g-2">
      <h3 class="text-secondary-red fs-5" style="font-family: 'Paperlogy'; font-weight: 700">
        레스토랑 & 카페
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
        <span class="ms-1 text-gray-7">{{
          detail?.homepage ? stripHtmlTags(detail.homepage) : '-'
        }}</span>
      </div>
    </div>
    <div class="row mt-3 gy-3">
      <div class="col-6">
        <h2 class="mb-3 fs-4">소개</h2>

        <p class="fs-7">
          {{ detail?.overview ? stripHtmlTags(detail.overview) : '-' }}
        </p>
        <div class="d-flex align-items-center justify-content-between mt-5">
          <h2 class="fs-5">문의 및 안내</h2>
          <span class="fs-6">{{ detail?.tel ?? '010-3524-6124' }}</span>
        </div>
        <div class="d-flex align-items-center justify-content-between mt-2">
          <h2 class="fs-5">영업시간</h2>
          <span class="fs-6">{{
            detail?.opentimefood ? stripHtmlTags(detail.opentimefood) : '-'
          }}</span>
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
          <ShelterKakaoMap :lat="detail.mapy" :lng="detail.mapx" />
        </div>
      </div>
    </div>
  </div>

  <!-- 문화  (contenttypeid === 14) -->
  <div v-if="detail?.contenttypeid === '14'" class="container">
    <div class="row g-2">
      <h3 class="text-secondary-red fs-5" style="font-family: 'Paperlogy'; font-weight: 700">
        문화 & 쇼핑
      </h3>
      <div class="d-flex align-items-center justify-content-between mb-3">
        <h1 class="mb-0 text-gray-10" style="font-family: 'Paperlogy'; font-weight: 700">
          {{ detail?.title ?? '-' }}
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
        <span class="ms-1 text-gray-7">{{
          detail?.homepage ? stripHtmlTags(detail.homepage) : '-'
        }}</span>
      </div>
    </div>
    <div class="row mt-3 gy-3">
      <div class="col-6">
        <h2 class="mb-3 fs-4">소개</h2>

        <p class="fs-7">
          {{ detail?.overview ? stripHtmlTags(detail.overview) : '-' }}
        </p>
        <div class="d-flex align-items-center justify-content-between mt-5">
          <h2 class="fs-5">문의 및 안내</h2>
          <span
            class="fs-6"
            style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis"
            >{{ detail?.infocenterculture ? stripHtmlTags(detail.infocenterculture) : '-' }}</span
          >
        </div>
        <div class="row mt-2">
          <!-- 왼쪽 레이블: col-auto로 레이블 길이에 맞게 폭을 결정 -->
          <div class="col-auto">
            <h2 class="fs-5 mb-0">영업시간</h2>
          </div>

          <!-- 오른쪽 텍스트: 나머지 공간을 차지, 오른쪽 정렬, 길면 잘림 -->
          <div
            class="col text-end fs-6"
            style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis"
          >
            {{ detail?.usetimeculture ? stripHtmlTags(detail.usetimeculture) : '-' }}
          </div>
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
          <ShelterKakaoMap :lat="detail.mapy" :lng="detail.mapx" />
        </div>
      </div>
    </div>
  </div>

  <!-- 쇼핑 contenttypeid === 38 -->
  <div v-if="detail?.contenttypeid === '38'" class="container">
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
        <span class="ms-1 text-gray-7"> {{ detail?.addr1 ?? '-' }}</span>
      </div>
      <div class="bi bi-telephone fa-s text-secondary-red fs-5">
        <span class="ms-1 text-gray-7"> {{ detail?.tel ?? '-' }}</span>
      </div>
      <div class="bi bi-house fa-s text-secondary-red fs-5">
        <span class="ms-1 text-gray-7">
          <!-- detail?.homepage가 있으면 stripHtmlTags로 태그 제거 후 표시, 없으면 "정보 없음" -->
          {{ detail?.homepage ? stripHtmlTags(detail.homepage) : '-' }}
        </span>
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
          <span class="fs-6">{{
            detail?.infocentershopping ? stripHtmlTags(detail.infocentershopping) : '정보 없음'
          }}</span>
        </div>
        <div class="d-flex align-items-center justify-content-between mt-2">
          <h2 class="fs-5">영업시간</h2>
          <span class="fs-6">{{ detail?.fairday ? stripHtmlTags(detail.fairday) : '-' }}</span>
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
          <ShelterKakaoMap :lat="detail.mapy" :lng="detail.mapx" />
        </div>
      </div>
    </div>
  </div>

  <!-- 관광 contenttypeid === 12 -->
  <div v-if="detail?.contenttypeid === '12'" class="container">
    <div class="row g-2">
      <h3 class="text-secondary-red fs-5" style="font-family: 'Paperlogy'; font-weight: 700">
        관광 & 체험
      </h3>
      <div class="d-flex align-items-center justify-content-between mb-3">
        <h1 class="mb-0 text-gray-10" style="font-family: 'Paperlogy'; font-weight: 700">
          {{ detail?.title ?? '가우도' }}
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
        <span class="ms-1 text-gray-7">{{
          detail?.homepage ? stripHtmlTags(detail.homepage) : '-'
        }}</span>
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
          <span class="fs-6">{{ detail?.infocenter ?? '-' }}</span>
        </div>
        <div class="d-flex align-items-center justify-content-between mt-2">
          <h2 class="fs-5">영업시간</h2>
          <span class="fs-6">{{ detail?.usetime ? stripHtmlTags(detail.usetime) : '-' }}</span>
        </div>
        <div class="d-flex align-items-center justify-content-between mt-2">
          <h2 class="fs-5">쉬는 날</h2>
          <span class="fs-6">{{ detail?.restdate || '-' }}</span>
        </div>
        <div class="d-flex align-items-center justify-content-between mt-2">
          <h2 class="fs-5">주차 정보</h2>
          <span class="fs-6">{{ detail.parking ?? '-' }}</span>
        </div>
        <div class="d-flex align-items-center justify-content-between mt-2">
          <h2 class="fs-5">체험 안내</h2>
          <span class="fs-6">{{ detail.expguide ? stripHtmlTags(detail.usetime) : '-' }}</span>
        </div>
      </div>

      <!-- 오른쪽: 지도 Placeholder -->
      <div class="col-6">
        <div class="map-placeholder d-flex align-items-center justify-content-center rounded-4">
          <ShelterKakaoMap :lat="detail.mapy" :lng="detail.mapx" />
        </div>
      </div>
    </div>
  </div>
  <!-- 레포츠 contenttypeid === 28 -->
  <div v-if="detail?.contenttypeid === '28'" class="container">
    <div class="row g-2">
      <h3 class="text-secondary-red fs-5" style="font-family: 'Paperlogy'; font-weight: 700">
        관광 & 체험
      </h3>
      <div class="d-flex align-items-center justify-content-between mb-3">
        <h1 class="mb-0 text-gray-10" style="font-family: 'Paperlogy'; font-weight: 700">
          {{ detail?.title ?? '가우도' }}
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
        <span class="ms-1 text-gray-7">{{
          detail?.homepage ? stripHtmlTags(detail.homepage) : '-'
        }}</span>
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
          <span class="fs-6">{{ detail?.infocenterleports ?? '-' }}</span>
        </div>
        <div class="d-flex align-items-center justify-content-between mt-2">
          <h2 class="fs-5">영업시간</h2>
          <span class="fs-6">{{
            detail?.usetimeleports ? stripHtmlTags(detail.usetimeleports) : '-'
          }}</span>
        </div>
        <div class="d-flex align-items-center justify-content-between mt-2">
          <h2 class="fs-5">쉬는 날</h2>
          <span class="fs-6">{{ detail?.restdateleports || '-' }}</span>
        </div>
        <div class="d-flex align-items-center justify-content-between mt-2">
          <h2 class="fs-5">주차 정보</h2>
          <span class="fs-6">{{ detail.parkingleports ?? '-' }}</span>
        </div>
        <div class="d-flex align-items-center justify-content-between mt-2">
          <h2 class="fs-5">입장료</h2>
          <span class="fs-6">{{ detail.usefeeleports ?? '-' }}</span>
        </div>
      </div>

      <!-- 오른쪽: 지도 Placeholder -->
      <div class="col-6">
        <div class="map-placeholder d-flex align-items-center justify-content-center rounded-4">
          <ShelterKakaoMap :lat="detail.mapy" :lng="detail.mapx" />
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
