<script setup lang="ts">
import CheckTraveList from '@/components/travel/CheckTraveList.vue';
import CheckTravel from '@/components/travel/CheckTravel.vue';
import { ref } from 'vue';

const currentPage = ref('문화 & 쇼핑');
</script>

<template>
  <div class="container" :style="{ minWidth: '1280px', width: '66%' }">
    <div class="main d-flex flex-row" :style="{ marginTop: '200px' }">
      <CheckTravel v-model="currentPage" />
      <CheckTraveList v-model="currentPage" />
    </div>
  </div>
</template>

<style scoped></style>
