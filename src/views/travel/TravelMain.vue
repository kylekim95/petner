<script setup lang="ts">
import MainCategoryBoxes from '@/components/travel/MainCategoryBoxes.vue';
import AccommodationSwiper from '@/components/travel/AccommodationSwiper.vue';
import CultureShoppingSwiper from '@/components/travel/CultureShoppingSwiper.vue';
import RestaurantSwiper from '@/components/travel/RestaurantSwiper.vue';
import ExpandingMenu from '@/components/travel/ExpandingMenu.vue';

import type { Category } from '@/components/travel/MainCategoryBoxes.vue';
import type { ExpandingMenuItemData } from '@/components/travel/ExpandingMenu.vue';
import type { Restaurant } from '@/components/travel/RestaurantSwiper.vue';
import type { Accommodation } from '@/components/travel/AccommodationSwiper.vue';
import type { ShoppingAndCulture } from '@/components/travel/CultureShoppingSwiper.vue';
import PATH from '@/constants/path';

const categories: Category[] = [
  {
    img: '/TravelMain/Firework.jpg',
    content: '문화 & 쇼핑',
    path: PATH.travelSearch.replace(':category', '38'),
  },
  {
    img: '/TravelMain/Accommodation.jpg',
    content: '숙소',
    path: PATH.travelSearch.replace(':category', '32'),
  },
  {
    img: '/TravelMain/Restaurant.jpg',
    content: '레스토랑',
    path: PATH.travelSearch.replace(':category', '39'),
  },
  {
    img: '/TravelMain/Activity.jpg',
    content: '관광 & 체험',
    path: PATH.travelSearch.replace(':category', '28'),
  },
];

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
    id: 3432213,
    img: 'http://tong.visitkorea.or.kr/cms/resource/56/3431756_image2_1.jpg',
    path: PATH.travelDetail.replace(':contentId', '3432213'),
  },
  {
    id: 2609837,
    img: 'http://tong.visitkorea.or.kr/cms/resource/92/3085092_image2_1.JPG',
    path: PATH.travelDetail.replace(':contentId', '2609837'),
  },
  {
    id: 2437611,
    img: 'http://tong.visitkorea.or.kr/cms/resource/12/2437612_image2_1.jpg',
    path: PATH.travelDetail.replace(':contentId', '2437611'),
  },
  {
    id: 2639878,
    img: 'http://tong.visitkorea.or.kr/cms/resource/66/3336266_image2_1.jpg',
    path: PATH.travelDetail.replace(':contentId', '2639878'),
  },
  {
    id: 2553929,
    img: 'http://tong.visitkorea.or.kr/cms/resource/67/3340967_image2_1.jpg',
    path: PATH.travelDetail.replace(':contentId', '2553929'),
  },
  {
    id: 2756702,
    img: 'http://tong.visitkorea.or.kr/cms/resource/97/2756897_image2_1.jpg',
    path: PATH.travelDetail.replace(':contentId', '2756702'),
  },

  {
    id: 1754453,
    img: 'http://tong.visitkorea.or.kr/cms/resource/28/3465428_image2_1.jpg',
    path: PATH.travelDetail.replace(':contentId', '1754453'),
  },
];

const itemData: ExpandingMenuItemData[] = [
  {
    id: 0,
    bgImage: 'http://tong.visitkorea.or.kr/cms/resource/82/3364482_image2_1.JPG',
    title: '둘레길 트래킹 ',
    content: '제주도',
  },
  {
    id: 1,
    bgImage: 'http://tong.visitkorea.or.kr/cms/resource/82/3364482_image2_1.JPG',
    title: '둘레길 트래킹',
    content: '제주도',
  },
  {
    id: 2,
    bgImage: 'http://tong.visitkorea.or.kr/cms/resource/82/3364482_image2_1.JPG',
    title: '둘레길 트래킹',
    content: '제주도',
  },
];
</script>

<template>
  <div>
    <div class="hero-container">
      <div class="header-wrapper"></div>

      <!-- 오버레이 텍스트 -->
      <div class="hero-text position-absolute top-50 start-0 translate-middle-y w-100">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1 style="font-family: paperlogy; font-weight: 700; font-size: 48px">
                반려 동물과 함께 하는 <span class="text-primary-red">특별한</span> 여행
              </h1>
              <p style="font-family: paperlogy; font-weight: 700; font-size: 48px">
                펫트너와 함께 떠나요!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex flex-column align-items-center mt-4">
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

      <div class="container" style="width: 100%; margin-bottom: 5%">
        <div class="gray-10 fw-bold mt-5" style="font-size: 36px">관광 & 체험</div>
        <div class="gray-10 text-gray-7" style="font-size: 24px">펫트너의 맛있는 여정</div>
        <div style="height: 400px; margin-left: -2%">
          <ExpandingMenu :item-data="itemData" class="mt-3" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-container {
  position: relative;
  height: 575px;
  background-image: url('/public/TravelMainHero.png');
  background-size: cover;
  background-position: center;
  margin: 0;
  padding: 0;
  z-index: 12;
}

.header-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  background-color: transparent;
  margin: 0;
  padding: 0;
}

::v-deep header {
  background-color: transparent !important;
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  z-index: 2;
  color: #fff;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
}
</style>
