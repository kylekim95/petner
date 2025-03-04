<script setup lang="ts"></script>

<template>
  <header class="header">
    <div class="logo">Petner</div>
    <nav class="links">
      <router-link to="/AdoptionMain" class="link">유기동물 입양</router-link>
      <router-link to="/TravelMain" class="link">반려동물 동반 여행</router-link>
      <router-link to="/page3" class="link">반려용품 쇼핑</router-link>
      <router-link to="/page4" class="link">커뮤니티</router-link>
      <router-link to="/page5" class="link">실종신고</router-link>
    </nav>
    <router-link to="/mypage" class="user-avatar">
      <div class="person-circle"></div>
      <span class="user-name" :style="{ color: headerStyles.userColor }">홍길동님</span>
    </router-link>
  </header>
</template>

<style scoped>
.header {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  width: 100%;
  height: 75px;
  top: 0;
  background-color: var(--gray-1);
  border-bottom: 1px solid var(--gray-10);
  z-index: 9999;
  overflow: hidden;
}
.logo {
  font-family: 'Paperlogy';
  font-weight: 700;
  font-size: 2rem;
  color: var(--gray-10);
  flex-grow: 0;
  margin-right: 50px;
}
.links {
  display: flex;
  gap: 50px;
  flex-grow: 1;
  justify-content: flex-start;
  margin: 0 20px;
}
.link {
  font-family: 'Pretendard';
  font-size: 1.2rem;
  font-weight: 400;
  color: inherit;
  text-decoration: none;
  transition:
    color 0.3s,
    transform 0.3s;
}

.link:hover {
  transform: scale(1.05);
}

.link:active {
  transform: scale(0.98);
}
.user-avatar {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Pretendard';
  font-size: 1rem;
  color: var(--gray-10);
  text-decoration: none;
  flex-grow: 0;
}
.person-circle {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #cf54d3;
  /* margin-left: 250px; */
}
.user-name {
  font-weight: 400;
  font-size: 1.2rem;
}
</style>
