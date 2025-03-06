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

//API 테스트
import {
  COMMON,
  AREABASED,
  AREACODE,
  CATEGORY,
  IMAGE,
  INFO,
  INTRO,
  KEYWORD,
  LOCATION,
  PETTOUR,
} from '@/apis/tour/tourEndpoints';
import tourAPI from '@/config/axiosTourConfig';
import { onMounted } from 'vue';

// tourDetailCommonAPI
//   .get(tourDetailCommonAPI.detailCommon, {
//     params: {
//       numOfRows: 10,
//       pageNo: 1,
//       contentId: '1865597',
//       contentTypeId: '32',
//     },
//   })
//   .then((response) => {
//     const data = response.data;
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

onMounted(async () => {
  try {
    const response = await tourAPI.get(KEYWORD.get, {
      params: {
        contentTypeId: '32',
        listYN: 'Y',
        arrange: 'O',
        keyword: '서울',
      },
    });
    const response1 = await tourAPI.get(AREABASED.get, {
      params: {
        contentTypeId: '32',
      },
    });
    const response2 = await tourAPI.get(INTRO.get, {
      params: {
        contentTypeId: '32',
        contentId: '1865597',
      },
    });
    const response3 = await tourAPI.get(COMMON.get, {
      params: {
        contentTypeId: '32',
        contentId: '1865597',
      },
    });
    const response4 = await tourAPI.get(INFO.get, {
      params: {
        contentTypeId: '32',
        contentId: '1865597',
      },
    });
    const response5 = await tourAPI.get(IMAGE.get, {
      params: {
        contentId: '1865597',
      },
    });
    const response6 = await tourAPI.get(AREACODE.get, {
      params: {
        areaCode: '1',
      },
    });
    const response7 = await tourAPI.get(LOCATION.get, {
      params: {
        contentId: '1865597',
      },
    });
    const data = response.data;
    const data1 = response1.data;
    console.log('KEYWORD DATA');
    console.log(data);
    console.log('AREABASED DATA');
    console.log(data1);
    console.log('INTRO DATA');
    console.log(response2.data);
    console.log('COMMON DATA');
    console.log(response3.data);
    console.log('INFO DATA');
    console.log(response4.data);
    console.log('IMAGE DATA');
    console.log(response5.data);
  } catch (err: any) {
    console.log(err);
  }
});
//-------
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
    content: '문화 & 쇼핑',
  },
  {
    img: '/TravelMain/accommodation.png',
    content: '숙소',
  },
  {
    img: '/TravelMain/restaurant.png',
    content: '레스토랑',
  },
  {
    img: '/TravelMain/activity.png',
    content: '관광 & 체험',
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
function handleClick() {
  alert('PATH로 이동!');
}
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
      <MainCategoryBoxes :categories="categories" :handle-click="handleClick" />

      <CultureShoppingSwiper
        :shopping="shoppingAndCulture"
        :handle-click="handleClick"
        section-title="문화 & 쇼핑"
        section-subtitle="펫트너의 쇼핑과 문화의 만남"
      />

      <AccommodationSwiper
        :accommodations="accommodations"
        :handle-click="handleClick"
        section-title="숙소"
        section-subtitle="펫트너가 추천하는 반려동물 친화 숙소"
      />

      <RestaurantSwiper
        :restaurants="restaurants"
        :handle-click="handleClick"
        section-title="레스토랑"
        section-subtitle="펫트너의 맛있는 여정"
      />

      <div class="container" style="width: 100%; margin-bottom: 5%">
        <div class="gray-10 fw-bold mt-5" style="font-size: 36px">레스토랑</div>
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
