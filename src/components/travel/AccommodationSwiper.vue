<script setup lang="ts">
import { ref } from 'vue';

import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';

interface Accommodation {
  id: number | string;
  img: string;
  type: string;
  location: string;
  price: string;
  path?: string;
}

const accommodations = ref<Accommodation[]>([
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

function handleClick() {
  alert('path로 이동');
}
</script>

<template>
  <div class="container my-5">
    <Swiper :slides-per-view="3" :space-between="3" style="width: 100%">
      <SwiperSlide v-for="item in accommodations" :key="item.id">
        <div class="card border-0 text-center text-gray-1" @click="handleClick">
          <img
            :src="item.img"
            class="card-img-top"
            alt="숙소 이미지"
            style="width: 400px; height: 400px; object-fit: cover; border-radius: 3%"
          />
          <div class="card-img-overlay d-flex flex-column justify-content-end mt-3 ms-3">
            <div class="text-start" style="margin-bottom: -25px">
              <h5
                class="card-title text-gray-1 fw-bold"
                style="font-size: 32px; font-family: 'Paperlogy-7Bold'; font-weight: 700"
              >
                {{ item.type }}
              </h5>
              <p style="font-size: 20px">{{ item.location }}</p>
            </div>
            <p class="text-end mb-0 me-5 fw-bold" style="font-size: 36px">
              {{ item.price }}
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
