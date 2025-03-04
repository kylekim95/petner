<script setup lang="ts">
import PATH from '@/constants/path';
import { ref } from 'vue';
const sortBy = ref<'recent' | 'comment'>('recent');
const animalType = ref<'dog' | 'cat' | 'etc'>('dog');
</script>

<template>
  <div class="wrapper">
    <!-- 배너 -->
    <div class="banner">
      <img
        src="/public/PNG-Image/images/missingCommunityBanner.png"
        class="banner-img"
        alt="missing comuunity banner image"
      />
      <div class="banner-text">
        <h1>
          동네 이웃과 함께,<br />
          유실동물을 찾아요!
        </h1>
        <h2>여러분의 작은 제보가 큰 변화를 만듭니다. 함께 힘을 모아 반려동물을 찾아요!</h2>
      </div>
    </div>
    <div class="w-100 d-flex justify-content-center">
      <div class="fitted-content">
        <div class="controls">
          <div class="sort">
            <button :class="{ dark: sortBy === 'recent' }" @click="sortBy = 'recent'">
              최신순
            </button>
            <button :class="{ dark: sortBy === 'comment' }" @click="sortBy = 'comment'">
              댓글순
            </button>
          </div>
          <div class="type">
            <button :class="{ dark: animalType === 'dog' }" @click="animalType = 'dog'">
              강아지
            </button>
            <button :class="{ dark: animalType === 'cat' }" @click="animalType = 'cat'">
              고양이
            </button>
            <button :class="{ dark: animalType === 'etc' }" @click="animalType = 'etc'">
              기타 동물
            </button>
          </div>
          <RouterLink :to="PATH.communityForm" class="write-button">
            <img
              src="/public/PNG-Image/images/car-light.png"
              alt="siren icon image"
              class="siren"
            />
            <span>글 작성하기</span>
          </RouterLink>
        </div>
        <div class="card-list-wrapper"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100vw;
  min-width: 800px;
}
.banner {
  position: relative;
}
.banner-img {
  width: 100%;
}
.banner-text {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: transparent;

  font-family: 'Paperlogy';
  text-align: center;
  color: var(--gray-1);
}

.banner-text h1 {
  font-size: 2rem;
  font-weight: 700;
  line-height: 150%;
}
.banner-text h2 {
  font-size: 1.2em;
}
.fitted-content {
  width: 66vw;
  min-width: 800px;
  max-width: 1274px;
}

.controls {
  margin: 40px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sort button {
  font-size: 24px;
  font-weight: 600;
  background-color: transparent;
  border: none;
  color: var(--gray-7);
}
.type {
  display: flex;
  gap: 12px;
}

.type button {
  height: 38px;
  padding: 7px 15px;
  background-color: var(--gray-2);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: none;
  font-weight: 600;
  color: var(--gray-7);
}

.type button:hover {
  background-color: var(--gray-3);
}

button.dark {
  color: var(--gray-10);
}

.write-button {
  height: 50px;
  padding: 15px 25px;
  background-color: var(--gray-2);
  border-radius: 4px;
  border: 2px solid var(--primary-blue);
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  font-size: 16px;
  color: var(--gray-10);
  font-weight: 600;
}
</style>
