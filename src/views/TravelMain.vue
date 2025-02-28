<script setup lang="ts">
import AppHeader from '@/components/common/AppHeader.vue';
import AppFooter from '@/components/common/AppFooter.vue';

import AccommodationSwiper from '@/components/travel/AccommodationSwiper.vue';
import CultureShoppingSwiper from '@/components/travel/CultureShoppingSwiper.vue';
import RestaurantSwiper from '@/components/travel/RestaurantSwiper.vue';
import ExpandingMenu from '@/components/travel/ExpandingMenu.vue';
import MainCategoryBoxes from '@/components/travel/MainCategoryBoxes.vue';

import type { Category } from '@/components/travel/MainCategoryBoxes.vue';
import type { ExpandingMenuItemData } from '@/components/travel/ExpandingMenu.vue';
import type { Restaurant } from '@/components/travel/RestaurantSwiper.vue';
import type { Accommodation } from '@/components/travel/AccommodationSwiper.vue';
import type { ShoppingAndCulture } from '@/components/travel/CultureShoppingSwiper.vue';

const accommodations: Accommodation[] = [
  {
    id: 1,
    img: '/forSwipers/koreanTraditionalAccomodation.png',
    type: '한옥숙소',
    location: '서울시',
    price: '100,000 원',
  },
  {
    id: 2,
    img: '/forSwipers/swimmingPool.png',
    type: '수영장 숙소',
    location: '강원도',
    price: '100,000 원',
  },
  {
    id: 3,
    img: '/forSwipers/koreanTraditionalAccomodation2.png',
    type: '한옥숙소',
    location: '제주도',
    price: '100,000 원',
  },
  {
    id: 4,
    img: '/forSwipers/swimmingPool.png',
    type: '한옥숙소',
    location: '서울시',
    price: '100,000 원',
  },
  {
    id: 5,
    img: '/forSwipers/koreanTraditionalAccomodation2.png',
    type: '한옥숙소',
    location: '제주도',
    price: '100,000 원',
  },
];
const restaurants: Restaurant[] = [
  {
    id: 1,
    img: '/forSwipers/restaurant1.png',
    type: '바닷가카페',
    location: '제주도',
  },
  {
    id: 2,
    img: '/forSwipers/restaurant2.png',
    type: '몰디브모히또',
    location: '제주도',
  },
  {
    id: 3,
    img: '/forSwipers/restaurant3.png',
    type: '흑돼지맛집',
    location: '제주도',
  },
  {
    id: 4,
    img: '/forSwipers/restaurant1.png',
    type: '바닷가카페',
    location: '제주도',
  },
  {
    id: 5,
    img: '/forSwipers/restaurant2.png',
    type: '몰디브모히또',
    location: '제주도',
  },
];

const shoppingAndCulture: ShoppingAndCulture[] = [
  {
    id: 1,
    img: '/forSwipers/shopping1.png',
  },
  {
    id: 2,
    img: '/forSwipers/shopping2.png',
  },
  {
    id: 3,
    img: '/forSwipers/shopping3.png',
  },
  {
    id: 4,
    img: '/forSwipers/shopping4.png',
  },
  {
    id: 5,
    img: '/forSwipers/shopping5.png',
  },
  {
    id: 6,
    img: '/forSwipers/shopping1.png',
  },
  {
    id: 7,
    img: '/forSwipers/shopping2.png',
  },
  {
    id: 8,
    img: '/forSwipers/shopping3.png',
  },
  {
    id: 9,
    img: '/forSwipers/shopping4.png',
  },
  {
    id: 10,
    img: '/forSwipers/shopping5.png',
  },
];
const categories: Category[] = [
  {
    img: '/TravelMain/firework.png',
    content: '숙소',
  },
  {
    img: '/TravelMain/firework.png',
    content: '문화 & 쇼핑',
  },
  {
    img: '/TravelMain/firework.png',
    content: '레스토랑',
  },
  {
    img: '/TravelMain/firework.png',
    content: '관광 & 체험',
  },
];

const itemData: ExpandingMenuItemData[] = [
  {
    id: 0,
    bgImage: 'http://tong.visitkorea.or.kr/cms/resource/82/3364482_image2_1.JPG',
    title: 'title 1',
    content: 'content 1',
  },
  {
    id: 1,
    bgImage: 'http://tong.visitkorea.or.kr/cms/resource/82/3364482_image2_1.JPG',
    title: 'title 2',
    content: 'content 2',
  },
  {
    id: 2,
    bgImage: 'http://tong.visitkorea.or.kr/cms/resource/82/3364482_image2_1.JPG',
    title: 'title 3',
    content: 'content 3',
  },
];
</script>

<template>
  <div>
    <div class="hero-container position-relative">
      <!-- 배경 이미지 -->
      <img src="/public/TravelMainHero.png" alt="Hero background" class="hero-img w-100" />

      <div class="header-wrapper position-absolute top-0 start-0 w-100">
        <AppHeader />
      </div>

      <!-- 오버레이 텍스트 -->
      <div class="hero-text d-flex flex-column justify-content-center align-items-start">
        <h1 class="display-4 fw-bold">반려 동물과 함께 하는 특별한 여행</h1>
        <p class="fs-5">펫트너와 함께 떠나요!</p>
      </div>
    </div>
    <div class="d-flex flex-column align-items-center">
      <MainCategoryBoxes :categories="categories" />

      <CultureShoppingSwiper
        :shopping="shoppingAndCulture"
        section-title="문화 & 쇼핑"
        section-subtitle="펫트너의 쇼핑과 문화의 만남"
      />

      <AccommodationSwiper
        :accommodations="accommodations"
        section-title="숙소"
        section-subtitle="펫트너가 추천하는 반려동물 친화 숙소"
      />

      <RestaurantSwiper
        :restaurants="restaurants"
        section-title="레스토랑"
        section-subtitle="펫트너의 맛있는 여정"
      />

      <div style="width: 100%">
        <div class="gray-10 fw-bold mt-5" style="font-size: 36px">레스토랑</div>
        <div class="gray-10 text-gray-7" style="font-size: 24px">펫트너의 맛있는 여정</div>
        <div style="height: 400px">
          <ExpandingMenu :item-data="itemData" class="mt-3" />
        </div>
      </div>
    </div>
    <!-- <AppFooter /> -->
  </div>
</template>

<style scoped>
.hero-container {
  position: relative;
  height: 100vh; /* 화면 전체 높이 */
  overflow: hidden;
}

/* 배경 이미지가 컨테이너 전체를 덮도록 */
.hero-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

/* 헤더 컴포넌트를 배경 위에 겹치게 배치 */
.header-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 4; /* 변경: 기존보다 높게 설정 */
  margin: 0; /* 변경: 불필요한 마진 제거 */
  padding: 0; /* 변경: 불필요한 패딩 제거 */
  background-color: transparent !important; /* 배경 투명 */
}

/* 히어로 텍스트 오버레이: 화면 중앙 좌측에 배치 */
.hero-text {
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  z-index: 3;
  color: #fff;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
}
</style>
