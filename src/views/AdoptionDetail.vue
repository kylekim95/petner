<script setup lang="ts">
import AppHeader from '@/components/common/AppHeader.vue';
import AppFooter from '@/components/common/AppFooter.vue';
</script>

<template>
  <div>
    <div class="container-fluid p-0">
      <AppHeader />

      <!-- 배너 섹션 -->
      <div class="banner-container position-relative">
        <div class="position-absolute top-50 start-0 translate-middle-y p-3 text-white ml-5"> <!-- ml-5 추가 -->
          <h1 class="display-4 text-left">유기동물 조회</h1>
          <p class="lead text-left">상세내용</p>
        </div>
        <img
          src="/PNG-Image/images/adoptdetailbanner.png"
          alt="Adopt Detail Banner"
          class="img-fluid"
          style="object-fit: cover; width: 100%; height: 384px;"
        />
      </div>

      <AppFooter />
    </div>
  </div>
</template>

<style scoped>
.banner-container {
  position: relative;
  width: 100%;
  height: 384px;
}

.banner-container img {
  object-fit: cover;
  width: 100%; 
  height: 100%; 
}

h1, p {
  font-family: 'Paperlogy'; 
}

h1 {
  font-size: 3rem; 
}

p {
  font-size: 1.5rem;
}
</style>
