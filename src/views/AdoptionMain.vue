<script setup lang="ts">
import AppHeader from '@/components/common/AppHeader.vue';
import AppFooter from '@/components/common/AppFooter.vue';
import AdoptionHero from '@/components/adoption/AdoptionHero.vue';
</script>

<template>
  <div class="main-wrapper">
    <AppHeader />
    <AdoptionHero />
    <div class="main-contents">
      <div>여행</div>
    </div>
    <AppFooter />
  </div>
</template>

<style scoped>
.main-wrapper {
  width: 100vw;
}

.main-contents {
  width: 1280px;
  display: flex;
  flex-direction: column;
  margin: auto;
}
</style>
