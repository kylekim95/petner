<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

const headerStyles = computed(() => {
  const path = route.path;

  switch (path) {
    case '/HomeMain':
    case '/TravelMain':
    case '/AdoptionMain':
    case '/Adoptionsearch':
    case '/MissingComunity':
    case '/FreeComunity':
      return {
        color: 'var(--gray-1)',
        borderBottom: '1px solid var(--gray-1)',
      };
    case '/TravelDetail':
    case '/TravelSearch':
    case '/TravelPlanner':
      return {
        backgroundColor: 'var(--primary-red)',
        color: 'var(--gray-1)',
        borderBottom: '1px solid var(--gray-1)',
      };
    case '/MissingComunityDetail':
    case '/MissingComunityForm':
      return {
        backgroundColor: 'var(--primary-blue)',
        color: 'var(--gray-1)',
        borderBottom: '1px solid var(--gray-1)',
      };
    case '/AdoptionDetail':
    case '/AdoptionForm':
      return {
        backgroundColor: 'var(--secondary-green)',
        color: 'var(--gray-1)',
        borderBottom: '1px solid var(--gray-1)',
      };
    case '/FreeComunityDetail':
    case '/FreeComunityForm':
      return {
        backgroundColor: 'var(--primary-purple)',
        color: 'var(--gray-1)',
        borderBottom: '1px solid var(--gray-1)',
      };
    default:
      return {
        backgroundColor: 'var(--gray-1)',
        color: 'var(--gray-10)',
        borderBottom: '1px solid var(--gray-10)',
      };
  }
});
</script>

<template>
  <header :style="headerStyles" class="header">
    <div class="logo">Petner</div>
    <nav class="links">
      <router-link to="/AdoptionMain" class="link">유기동물 입양</router-link>
      <router-link to="/TravelMain" class="link">반려동물 동반 여행</router-link>
      <router-link to="/page3" class="link">반려용품 쇼핑</router-link>
      <router-link to="/page4" class="link">커뮤니티</router-link>
      <router-link to="/page5" class="link">실종신고</router-link>
    </nav>
    <div class="user-avatar">
      <div class="person-circle"></div>
      <span class="user-name">홍길동님</span>
    </div>
  </header>
</template>

<style scoped>
.header {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 140px;
  position: absolute;
  width: 100%;
  max-width: 100%;
  height: 75px;
  position: fixed;
  left: 0;
  top: 0;
  border-bottom: 1px solid;
  z-index: 9999;
}

.logo {
  width: 165px;
  height: 72px;
  font-family: 'Paperlogy';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 150%;
  letter-spacing: -0.022em;
  color: inherit;
  flex: none;
  order: 0;
  flex-grow: 0;
}

.links {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 40px;
  width: auto;
  height: 28px;
  flex: none;
  order: 1;
  flex-grow: 0;
}

.link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 28px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: inherit;
  text-decoration: none;
  flex: none;
  order: 0;
  flex-grow: 0;
  transition:
    color 0.3s,
    transform 0.3s;
}

.user-avatar {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 10px;
  width: 108px;
  height: 28px;
  flex: none;
  order: 2;
  flex-grow: 0;
}

.person-circle {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #f3723f;
}

.user-name {
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: inherit;
  flex: none;
  order: 1;
  flex-grow: 0;
}
</style>
