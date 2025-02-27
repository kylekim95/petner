<script setup lang="ts">
import { ref } from 'vue';

import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';

const dummyItems = ref([
  {
    img: '/forSwipers/homeMainSwiper.png',
    title: '의류',
    name: '바잇미 캠핑클럽 후리스',
    content: '[20% 할인행사중🚀]]',
  },
  {
    img: '/forSwipers/homeMainSwiper.png',
    title: '하우스',
    name: '바잇미 폼폼쿠션',
    content: '[연간 판매량 1위🥇]]',
  },
  {
    img: '/forSwipers/homeMainSwiper.png',
    title: '장난감',
    name: '런치박스 플레이북',
    content: '[20% 할인 행사중]',
  },
  {
    img: '/forSwipers/homeMainSwiper.png',
    title: '의류2',
    name: '가을 신상 의류',
    content: '[10% 할인]',
  },
  {
    img: '/forSwipers/homeMainSwiper.png',
    title: '의류2',
    name: '가을 신상 의류',
    content: '[10% 할인]',
  },
]);
</script>

<template>
  <div class="container my-5">
    <Swiper :slides-per-view="3" :space-between="5" style="width: 100%">
      <SwiperSlide v-for="(item, idx) in dummyItems" :key="idx">
        <div class="card border-0 text-center text-gray-1">
          <img
            :src="item.img"
            class="card-img-top"
            alt="상품 이미지"
            style="width: 420px; height: 420px; object-fit: cover"
          />
          <div
            class="card-img-overlay d-flex flex-column justify-content-between align-items-start"
          >
            <h5 class="card-title text-gray-1 fw-bold mt-3 ms-3" style="font-size: 32px">
              {{ item.title }}
            </h5>
            <!-- 메달 이미지 -->
            <img
              src="/forSwipers/popularMedal.png"
              alt=""
              class="position-absolute top-0 end-0 mt-4 me-4"
            />
            <p
              class="card-text text-gray-1 text-start overflow-hidden mb-1 ms-1"
              style="margin-bottom: 42px; margin-left: 42px; font-size: 20px"
            >
              {{ item.name }}<br />
              {{ item.content }}
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
