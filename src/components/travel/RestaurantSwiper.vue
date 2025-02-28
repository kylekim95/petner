<script setup lang="ts">
import { ref } from 'vue';

import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';

interface Restaurants {
  id: number | string;
  img: string;
  type: string;
  location: string;
  path?: string;
}

const restaurants = ref<Restaurants[]>([
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
]);

function handleClick() {
  alert('path로 이동');
}
</script>

<template>
  <div class="container my-5">
    <Swiper :slides-per-view="3" :space-between="3" style="width: 100%">
      <SwiperSlide v-for="item in restaurants" :key="item.id">
        <div class="card border-0 text-center text-gray-1" @click="handleClick">
          <img
            :src="item.img"
            class="card-img-top"
            alt="이미지"
            style="width: 400px; height: 400px; object-fit: cover; border-radius: 3%"
          />
          <div class="card-img-overlay d-flex flex-column justify-content-end mb-3 ms-3">
            <div class="text-start">
              <h5
                class="card-title text-gray-1 fw-bold"
                style="font-size: 32px; font-family: 'Paperlogy-7Bold'; font-weight: 700"
              >
                {{ item.type }}
              </h5>
              <p style="font-size: 20px">{{ item.location }}</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
