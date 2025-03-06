<script setup lang="ts">
import MainHero from '@/components/homeMain/MainHero.vue';
import PopularTravelSwiperComponent from '@/components/homeMain/PopularTravelSwiperComponent.vue';
import PlannerBanner from '@/components/homeMain/PlannerBanner.vue';
import AbandonedBanner from '@/components/homeMain/AbandonedBanner.vue';
import PopularShoppingSwiperComponent from '@/components/homeMain/PopularShoppingSwiperComponent.vue';
import { onMounted } from 'vue';
import { getAnimalList } from '@/apis/supabase';

// TEST 용 -> 이후 삭제해주세요
onMounted(async () => {
  const res = await getAnimalList();
  console.log('res from main', res);
});
</script>

<template>
  <MainHero />
  <PopularTravelSwiperComponent />
  <PlannerBanner />
  <AbandonedBanner />
  <GridMenu />
  <PopularShoppingSwiperComponent />
</template>
