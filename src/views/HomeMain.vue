<script setup lang="ts">
import AppHeader from '@/components/common/AppHeader.vue';
import AppFooter from '@/components/common/AppFooter.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { type TravelPopularItemData } from '@/components/homeMain/TravelPopularSwiperSlide.vue'
import TravelPopularSwiperSlide from '@/components/homeMain/TravelPopularSwiperSlide.vue';

const heroLargeText = '펫트너, 사랑으로 연결되는 반려동물의 새로운 시작';
const heroSmallText = '반려동물 입양, 실종/발견 신고, 여행 서비스와 쇼핑까지!펫트너(Petner)로 반려동물과 더 나은 삶을 만들어가세요.사랑으로, 동물들에게 기회를, 당신에게 특별한 경험을 선사합니다.'

const plannerIntroTitle = ['반려동물', ' 과', '함께하는 특별한 여행'];
const plannerIntroContent = '반려동물과 함께하는 맞춤형 여행 계획을 세워보세요. 여러분의 여행 계획을 손쉽게 세우고, 특별한 추억을 만들어보세요.';

const dummyData : TravelPopularItemData[] = [
  { id:0, content:'자연광이 좋구,,커피가 맛있구,,어쩌구..', img: '/MainPopularTravelSwiperImage.png', location: '서울숲 히릿', title: '반려동물과 떠나는 식도락 여행' },
  { id:1, content:'자연광이 좋구,,커피가 맛있구,,어쩌구..', img: '/MainPopularTravelSwiperImage.png', location: '서울숲 히릿', title: '반려동물과 떠나는 식도락 여행' },
  { id:2, content:'자연광이 좋구,,커피가 맛있구,,어쩌구..', img: '/MainPopularTravelSwiperImage.png', location: '서울숲 히릿', title: '반려동물과 떠나는 식도락 여행' },
  { id:3, content:'자연광이 좋구,,커피가 맛있구,,어쩌구..', img: '/MainPopularTravelSwiperImage.png', location: '서울숲 히릿', title: '반려동물과 떠나는 식도락 여행' },
  { id:4, content:'자연광이 좋구,,커피가 맛있구,,어쩌구..', img: '/MainPopularTravelSwiperImage.png', location: '서울숲 히릿', title: '반려동물과 떠나는 식도락 여행' },
  { id:5, content:'자연광이 좋구,,커피가 맛있구,,어쩌구..', img: '/MainPopularTravelSwiperImage.png', location: '서울숲 히릿', title: '반려동물과 떠나는 식도락 여행' },
];
</script>

<template>
  <AppHeader />
  <!-- Hero -->
  <div class="container-fluid hero d-flex align-items-center mb-3">
    <div class="container-fluid d-flex flex-column" style="margin-left: 20%; width: 30%; min-width: 550px; gap: 30px;">
      <span class="hero-large-text text-gray-1">{{ heroLargeText }}</span>
      <span class="hero-small-text text-gray-1">{{ heroSmallText }}</span>
    </div>
  </div>

  <!-- Swiper -->
  <div class="container-fluid d-flex test mb-3" style="aspect-ratio: 5/1.2; min-width: 1200px;">
    <div class="container-fluid d-flex h-100 gap-1 p-2">
      <swiper
        :slides-per-view="3"
        :space-between="20"
        :loop="true"
        style="width: 100%; height: 100%;"
      >
        <swiper-slide v-for="item in dummyData" :key="item.id" style="width: 33%;">
          <TravelPopularSwiperSlide :data="item" />
        </swiper-slide>
      </swiper>
    </div>
  </div>

  <!-- planner banner -->
  <div class="container-fluid bg-gray-3 d-flex align-content-center p-2" style="height:500px;">
    <div class="container d-flex p-2">
      <div class="h-100 align-content-center" style="width: 40%">
        <span class="planner-intro-title bg-primary-green text-gray-1" >{{ plannerIntroTitle[0] }}</span>
        <span class="planner-intro-title" >{{ plannerIntroTitle[1] }}</span> <br>
        <span class="planner-intro-title" >{{ plannerIntroTitle[2] }}</span> <br>
        <span class="planner-intro-content" >{{ plannerIntroContent }}</span>
      </div>
      <div class="h-100 bg-primary" style="width: 50%"></div>
    </div>
  </div>

  <!-- 유기동물 통계 배너 -->
  <div class="container-fluid" style="height:500px">
    <span></span>
  </div>

  <!-- 유기동물 통계 배너 -->
  <div class="container-fluid bg-primary" style="height:500px">
    <span></span>
  </div>

  <AppFooter />
</template>

<style scoped>
.hero {
  background-image: linear-gradient(#00000080 0 25%, #00000000), url('./HomeMainHeroImg.png');
  background-blend-mode: multiply;
  background-size : cover;
  background-position-x: center;
  background-repeat: no-repeat;
  height: 575px;
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
.test {
  align-items: center;
}
.swiper-slide {
  transform: scale(0.9);
  opacity: 75%;
}
.swiper-slide-next {
  transform: scale(1);
  opacity: 100%;
  transition: all .75s;
  z-index: 1;
}
.planner-intro-title {
  font-family: 'Pretendard';
  font-weight: 700;
  font-size: 45px;
}
.planner-intro-content {
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 20px;
}
</style>
