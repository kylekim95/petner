<script setup lang="ts">
import AppHeader from '@/components/common/AppHeader.vue';
import AppFooter from '@/components/common/AppFooter.vue';
import CheckTraveList from '@/components/travel/CheckTraveList.vue';
import CheckTravel from '@/components/travel/\bCheckTravel.vue';
</script>

<template>
  <AppHeader />
  <!-- Top 검색창, 검색 결과 -->
  <div class="container" :style="{ minWidth: '1280px', width: '66%' }">
    <div class="main d-flex flex-row" :style="{ marginTop: '200px' }">
      <CheckTravel />
      <CheckTraveList />
    </div>
  </div>
  <!-- <AppFooter /> -->
</template>

<style scoped></style>
