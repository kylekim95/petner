<script setup lang="ts">
import { defineProps } from 'vue';
interface CommunityPost {
  imageURL: string;
  lostLocation: string;
  areaLocation: string;
  breed: string;
  age: string;
  feature: string;
}

defineProps<{
  item: CommunityPost;
}>();
</script>

<template>
  <div class="card">
    <img :src="item.imageURL" alt="card animal image" class="card-img-top position-relative" />
    <div class="titleSection position-absolute container" :style="{ bottom: '90px' }">
      <span class="title" :style="{ padding: '5px 7px' }">#강아지를 찾습니다</span>
      <div>{{ item.lostLocation }}</div>
    </div>
    <div class="card-body">
      <h4 v-if="item.lostLocation" class="card-title">
        {{ item.areaLocation }} / {{ item.age }} / {{ item.breed }}
      </h4>
      <p class="card-text">{{ item.feature }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  min-width: 300px;
}

.card-img-top {
  height: 300px;
  object-fit: cover;
}

.card-title {
  font-size: 20px;
}

.card-text {
  font-size: 16px;
  color: var(--gray-7);
}

.titleSection {
  font-size: 26px;
  font-weight: 700;
  color: var(--gray-1);
}

.title {
  background-color: var(--primary-red);
}
</style>
