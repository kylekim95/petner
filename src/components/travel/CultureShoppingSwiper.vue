<script setup lang="ts">
import { ref } from 'vue';

import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';

interface Shopping {
  id: number | string;
  img: string;
  path?: string;
}

const restaurants = ref<Shopping[]>([
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

function handleClick() {
  alert('path로 이동');
}
</script>

<template>
  <div class="container my-5">
    <Swiper :slides-per-view="5" :space-between="3" style="width: 100%">
      <SwiperSlide v-for="item in restaurants" :key="item.id">
        <div class="card border-0 text-center text-gray-1" @click="handleClick">
          <img
            :src="item.img"
            class="card-img-top"
            alt="이미지"
            style="width: 240px; height: 240px; object-fit: cover; border-radius: 50%"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
