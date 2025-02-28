<script setup lang="ts">
import AppHeader from '@/components/common/AppHeader.vue';
import AppFooter from '@/components/common/AppFooter.vue';
import AdoptionHero from '@/components/adoption/main/AdoptionHero.vue';
import AdoptionGraph from '@/components/adoption/main/AdoptionGraph.vue';
import AdoptionCategory from '@/components/adoption/main/AdoptionCategory.vue';
</script>

<template>
  <div class="main-wrapper">
    <AppHeader />
    <AdoptionHero />
    <div class="fitted-contents">
      <AdoptionGraph />
    </div>
    <AdoptionCategory />
    <AdoptionCategory />
    <AdoptionCategory />
    <div class="fitted-contents"></div>
    <AppFooter />
  </div>
</template>

<style scoped>
.main-wrapper {
  width: 100vw;
}

.fitted-contents {
  width: 1280px;
  min-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: auto;
}
</style>
