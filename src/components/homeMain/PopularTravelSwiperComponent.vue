<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import PopularTravelCard, { type PopularTravelData } from '@/components/homeMain/atoms/PopularTravelCard.vue';

const dummyData : PopularTravelData[] = [
  { image: 'https://tong.visitkorea.or.kr/cms/resource/80/3109380_image2_1.jpg', location: '웨이뷰', title: '제목제목', content: '내용내용' },
  { image: 'https://tong.visitkorea.or.kr/cms/resource/80/3109380_image2_1.jpg', location: '웨이뷰', title: '제목제목', content: '내용내용' },
  { image: 'https://tong.visitkorea.or.kr/cms/resource/80/3109380_image2_1.jpg', location: '웨이뷰', title: '제목제목', content: '내용내용' },
  { image: 'https://tong.visitkorea.or.kr/cms/resource/80/3109380_image2_1.jpg', location: '웨이뷰', title: '제목제목', content: '내용내용' },
  { image: 'https://tong.visitkorea.or.kr/cms/resource/80/3109380_image2_1.jpg', location: '웨이뷰', title: '제목제목', content: '내용내용' },
  { image: 'https://tong.visitkorea.or.kr/cms/resource/80/3109380_image2_1.jpg', location: '웨이뷰', title: '제목제목', content: '내용내용' },
];
</script>

<template>
    <swiper class="mb-5"
    :slides-per-view="3"
    :loop="true"
    :scrollbar="{ el: '.swiper-scrollbar', draggable: true, enabled: true }"
    style="height: 500px"
  >
    <swiper-slide v-for="(item, index) in dummyData" :key="index"><PopularTravelCard class="h-100" :data="item" /></swiper-slide>
  </swiper>
</template>

<style scoped>
.swiper-slide {
  opacity: 75%;
  transform: scale(0.9);
  transition: all 0.5s;
}
.swiper-slide-next {
  opacity: 100%;
  transform: scale(1.0);
}
</style>
