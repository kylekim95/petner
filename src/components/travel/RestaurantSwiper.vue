<script setup lang="ts">
import { defineProps } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';

export interface Restaurant {
  id: number | string;
  img: string;
  type: string;
  location: string;
  path?: string;
}
const props = defineProps<{
  restaurants: Restaurant[];
  sectionTitle?: string;
  sectionSubtitle?: string;
  handleClick?: () => void;
}>();
</script>

<template>
  <div class="container my-4">
    <div class="gray-10 fw-bold mt-5" style="font-size: 36px; align-self: flex-start">
      {{ sectionTitle }}
    </div>
    <div class="gray-10 text-gray-7" style="font-size: 24px; align-self: flex-start">
      {{ sectionSubtitle }}
    </div>
    <Swiper :slides-per-view="3" :space-between="3" style="width: 100%" class="mt-3">
      <SwiperSlide v-for="item in props.restaurants" :key="item.id">
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
