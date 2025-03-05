<script setup lang="ts">
import CommunityMainFindCard from '@/components/community/CommunityMainFindCard.vue';

import { ref } from 'vue';

const cards = ref(
  new Array(8).fill(0).map(() => ({
    imageURL: 'https://cdn.pixabay.com/photo/2020/06/30/22/34/dog-5357794_1280.jpg',
    lostLocation: '홍대입구 6번 출구 근처',
    areaLocation: '서울시 마포구',
    breed: '토이푸들',
    age: ' 12세',
    feature: '초록색 목줄',
  })),
);
</script>

<template>
  <div class="freePostSection">
    <div
      class="d-flex flex-row align-content-center justify-content-between post"
      :style="{ width: 100, marginBottom: '34px' }"
    >
      <div class="title">🚨 반려동물을 찾아주세요</div>
      <div class="postNavigation d-flex flex-row justify-content-center align-items-center gap-2">
        <span style="font-weight: 600">반려동물 찾기 게시판 </span>
        <span class="text-primary-blue" style="font-weight: 700">더보기</span>
      </div>
    </div>
    <div class="d-flex flex-wrap gap-2 justify-content-between">
      <div class="freePostCard" v-for="(item, index) in cards" :key="index">
        <CommunityMainFindCard :item="item" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 36px;
  font-weight: 700;
  color: var(--gray-10);
}

/* 실종 게시판 */
.freePostSection {
  width: 100%;
  margin: 83px 0;
}

.freePostCard {
  width: 305px;
}
</style>
