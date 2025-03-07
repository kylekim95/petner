<script setup lang="ts">
import { ref } from 'vue';
import AccommodationSwiper from '@/components/travel/AccommodationSwiper.vue';
import RestaurantSwiper from '@/components/travel/RestaurantSwiper.vue';
import CultureShoppingSwiper from '@/components/travel/CultureShoppingSwiper.vue';
import { fetchPetTourData } from '@/apis/tour/detailPetTour';
import { fetchTourImageData } from '@/apis/tour/detailImage';
import { fetchDetailInfoData } from '@/apis/tour/detailInfo';
import { fetchAreaBasedData } from '@/apis/tour/getAreaBased';
//API 테스트

import { onMounted } from 'vue';

const accommodations = ref([
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
]);
const restaurants = [
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

const shopping = ref([
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
]);
onMounted(async () => {
  fetchPetTourData({ contentId: 1720749 });
  fetchAreaBasedData({ areaCode: 1 ,});
  fetchTourImageData({ contentId: 1720749 });
  fetchDetailInfoData({ contentId: 1865597, contentTypeId: 32 });
});

// onMounted(async () => {
//   try {
//     const response = await tourAPI.get(KEYWORD.get, {
//       params: {
//         contentTypeId: '32',
//         listYN: 'Y',
//         arrange: 'O',
//         keyword: '서울',
//       },
//     });
// const response1 = await tourAPI.get(AREABASED.get, {
//   params: {
//     contentTypeId: '32',
//   },
// });
// const response2 = await tourAPI.get(INTRO.get, {
//   params: {
//     contentTypeId: '32',
//     contentId: '1865597',
//   },
// });
// const response3 = await tourAPI.get(COMMON.get, {
//   params: {
//     contentTypeId: '32',
//     contentId: '1865597',
//   },
// });
// const response4 = await tourAPI.get(INFO.get, {
//   params: {
//     contentTypeId: '32',
//     contentId: '1865597',
//   },
// });
// const response5 = await tourAPI.get(IMAGE.get, {
//   params: {
//     contentId: '1865597',
//   },
// });
// });
// const data = response.data;
// console.log('KEYWORD DATA');
// console.log(data);
// console.log('AREABASED DATA');
// console.log(data1);
// console.log('INTRO DATA');
// console.log(response2.data);
// console.log('COMMON DATA');
// console.log(response3.data);
// console.log('INFO DATA');
// console.log(response4.data);
// console.log('IMAGE DATA');
// console.log(response5.data);
//   } catch (err: any) {
//     console.log(err);
//   }
// });
//-------
</script>

<template>
  <div>hello</div>
  <AccommodationSwiper :accommodations="accommodations" />
  <RestaurantSwiper :restaurants="restaurants" />
  <CultureShoppingSwiper :shopping="shopping" />
</template>
