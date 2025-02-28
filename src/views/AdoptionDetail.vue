<script setup lang="ts">
import AppHeader from '@/components/common/AppHeader.vue';
import AppFooter from '@/components/common/AppFooter.vue';
</script>

<template>
  <div>
    <div class="container-fluid p-0">
      <AppHeader />

      <div class="banner-container position-relative">
        <div class="position-absolute top-50 start-0 translate-middle-y p-3 text-white">
          <h1 class="display-4">유기동물 조회</h1>
          <p class="lead">상세내용</p>
        </div>
        <img
          src="/PNG-Image/images/adoptdetailbanner.png"
          alt="Adopt Detail Banner"
          class="img-fluid"
          style="max-height: 384px"
        />
      </div>

      <AppFooter />
    </div>
  </div>
</template>
