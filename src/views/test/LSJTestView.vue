<script setup lang="ts">
import { ref } from 'vue';
import MainShoppingSwiper from '@/components/homeMain/MainShoppingSwiper.vue';
import AccommodationSwiper from '@/components/travel/AccommodationSwiper.vue';
import RestaurantSwiper from '@/components/travel/RestaurantSwiper.vue';
import CultureShoppingSwiper from '@/components/travel/CultureShoppingSwiper.vue';

const shoppingItems = ref([
  {
    id: 1,
    img: '/forSwipers/homeMainSwiper.png',
    title: '의류',
    name: '바잇미 캠핑클럽 후리스',
    content: '[20% 할인행사중🚀]',
  },
  {
    id: 2,
    img: '/forSwipers/homeMainSwiper2.png',
    title: '하우스',
    name: '바잇미 폼폼쿠션',
    content: '[연간 판매량 1위🥇]',
  },
  {
    id: 3,
    img: '/forSwipers/homeMainSwiper3.png',
    title: '장난감',
    name: '런치박스 플레이북',
    content: '[20% 할인 행사중]',
  },
  {
    id: 4,
    img: '/forSwipers/homeMainSwiper.png',
    title: '의류2',
    name: '가을 신상 의류',
    content: '[10% 할인]',
  },
  {
    id: 5,
    img: '/forSwipers/homeMainSwiper2.png',
    title: '의류2',
    name: '가을 신상 의류',
    content: '[10% 할인]',
  },
]);
</script>

<template>
  <MainShoppingSwiper :shopping-items="shoppingItems" />
  <AccommodationSwiper />
  <RestaurantSwiper />
  <CultureShoppingSwiper />
</template>
