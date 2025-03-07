<script setup lang="ts">
import { ref } from 'vue';
import FreeCommunityPostCard from '../common/FreeCommunityPostCard.vue';

const cards = ref(
  new Array(8).fill(0).map((_, i) => ({
    title: `눈내리는 날 글램핑 다녀왔어요 #${i + 1}`,
    imageURL: 'https://cdn.pixabay.com/photo/2024/01/15/21/16/dog-8510901_1280.jpg',
    content: `눈밭에서 뛰어놀고 쿨쿨 잠도 잘자네요 #${i + 1}`,
    author: '신중석',
  }))
);
</script>

<template>
  <!-- 자유 게시판 글 -->
  <div class="freePostSection">
    <div
      class="d-flex flex-row align-content-center justify-content-between post"
      :style="{ width: '100%', marginBottom: '34px' }"
    >
      <div class="title">💫 자유게시판</div>
      <div class="postNavigation d-flex flex-row justify-content-center align-items-center gap-2">
        <span style="font-weight: 600">자유게시판</span>
        <router-link to="/community/free" style="text-decoration: none;">
          <span class="text-primary-blue" style="font-weight: 700">더보기</span>
        </router-link>
      </div>
    </div>
    <div class="d-flex flex-wrap gap-2 justify-content-between">
      <div class="freePostCard" v-for="(item, index) in cards" :key="index">
        <FreeCommunityPostCard :item="item" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 자유게시판 */

.title {
  font-size: 36px;
  font-weight: 700;
  color: var(--gray-10);
}

.freePostSection {
  width: 100%;
  margin-top: 83px;
}

.postNavigation {
  width: 250px;
  height: 65px;
  border: 1px solid var(--gray-3);
  border-radius: 100px;
  font-size: 20px;
  color: var(--gray-10);
  box-shadow: 2px 6px 6px #f3f3f3;
}

.freePostCard {
  width: 305px;
}
</style>
