<script setup lang="ts">
import AppHeader from '@/components/common/AppHeader.vue';
import AppFooter from '@/components/common/AppFooter.vue';
</script>

<template>
  <div>

    <AppHeader />
    

    <div class="banner">
      <div class="banner-text">
        당신의 사랑을 기다리는 생명들에게
        <br />
        새로운 시작을 선물하세요.
      </div>
    </div>


    <AppFooter />
  </div>
</template>

<style scoped>

.banner {
  background-image: url('/PNG-Image/images/adoptionSearch.png'); 
  background-size: cover;
  height: 575px;
  display: flex;
  justify-content: right;
  align-items: right;
  position: relative;
  z-index: 0; 
}

.banner-text {
  font-size: 24px;
  color: white;
  text-align: right;
  font-family: 'Pretendard', sans-serif;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 0 20px;}
</style>
