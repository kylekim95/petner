<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import PopularTravelCard, { type PopularTravelData } from '@/components/homeMain/PopularTravelCard.vue';

const heroImagePath = '/HomeMainHeroImg.png';
const heroLargeText = '펫트너, 사랑으로 연결되는 반려동물의 새로운 시작';
const heroSmallText = '반려동물 입양, 실종/발견 신고, 여행 서비스와 쇼핑까지! 펫트너(Petner)로 반려동물과 더 나은 삶을 만들어가세요.사랑으로, 동물들에게 기회를, 당신에게 특별한 경험을 선사합니다.'

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
  <!-- Hero -->
  <div
    class="container-fluid mb-3 p-0 hero"
    :style="{
      backgroundImage : `linear-gradient(#00000080 0 50%, #00000000), url(${heroImagePath})`,
      backgroundBlendMode : 'multiply',
      backgroundPositionX : 'center'
    }">
    <!-- Hero minus header -->
    <div class="w-100 position-absolute d-flex" style="height: 500px; top: 75px; align-items: center; padding-left: 18%;">
      <div class="" style="max-width:500px; min-width:500px;">
        <p class="hero-large-text text-gray-1">{{ heroLargeText }}</p>
        <p class="hero-small-text text-gray-1">{{ heroSmallText }}</p>
      </div>
    </div>
  </div>

  <!-- Swiper -->
  <swiper
    :slides-per-view="3"
    :loop="true"
    :scrollbar="{ el: '.swiper-scrollbar', draggable: true, enabled: true }"
    class="mb-3"
    style="height: 500px"
  >
    <swiper-slide v-for="(item, index) in dummyData" :key="index"><PopularTravelCard class="h-100" :data="item" /></swiper-slide>
  </swiper>

</template>

<style scoped>
.hero {
  background-size : cover;
  height : 575px;
  min-width : 1280px;
}
.hero-large-text {
  font-size: 48px;
  font-family: 'Paperlogy';
  font-weight: 700;
}
.hero-small-text {
  font-size: 20px;
  font-family: 'Paperlogy';
  font-weight: 500;
}
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
