<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const route = useRoute();
const auth = useAuthStore();

const headerClass = computed(() => route.meta.headerVariant || 'header-default');
</script>

<template>
  <header class="header" :class="headerClass">
    <router-link to="/" class="logo"> Petner </router-link>
    <nav class="links">
      <router-link to="adoption" class="link">유기동물 입양</router-link>
      <router-link to="travel" class="link">반려동물 동반 여행</router-link>
      <!-- <router-link to="/page3" class="link">반려용품 쇼핑</router-link> -->
      <router-link to="community" class="link">커뮤니티</router-link>
      <router-link to="community/missing" class="link">실종신고</router-link>
    </nav>
    <router-link to="/mypage" class="user-avatar" v-if="auth.isAuth">
      <div class="person-circle">
        <img :src="auth.user?.image" alt="" style="width: 100%; height: 100%; border-radius: 100%">
      </div>
      <span class="user-name" :style="{ color: 'FFFFFF' }">{{ auth.user?.fullName }}</span>
    </router-link>
    <router-link to="/login" v-if="!auth.isAuth" style="text-decoration: none;">
      <span class="user-name" :style="{ color: 'FFFFFF' }">로그인</span>
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
  overflow: hidden;
}
.logo {
  font-family: 'Paperlogy';
  font-weight: 700;
  font-size: 2rem;
  text-decoration: none;
  text-decoration: none;
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
  font-size: 1rem;
  text-decoration: none;
  flex-grow: 0;
}
.person-circle {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #cf54d3;
}

.user-name {
  font-weight: 400;
  font-size: 1.2rem;
  color: var(--gray-1);
}
</style>
