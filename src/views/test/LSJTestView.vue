<script setup lang="ts">
import { ref } from 'vue';
import AccommodationSwiper from '@/components/travel/AccommodationSwiper.vue';
import RestaurantSwiper from '@/components/travel/RestaurantSwiper.vue';
import CultureShoppingSwiper from '@/components/travel/CultureShoppingSwiper.vue';


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


</script>

<template>
  <AccommodationSwiper :accommodations="accommodations" />
  <RestaurantSwiper :restaurants="restaurants" />
  <CultureShoppingSwiper :shopping="shopping" />
</template>
