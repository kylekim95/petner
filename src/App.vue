<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppHeader from './components/common/AppHeader.vue';
import AppFooter from './components/common/AppFooter.vue';
import '@/assets/headerVariantStyles.css';
</script>

<template>
  <AppHeader :class="$route.meta.headerVariant" />
  <RouterView />
  <AppFooter />
</template>
