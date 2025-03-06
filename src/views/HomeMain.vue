<script setup lang="ts">
import MainHero from '@/components/homeMain/MainHero.vue';
import PopularTravelSwiperComponent from '@/components/homeMain/PopularTravelSwiperComponent.vue';
import PlannerBanner from '@/components/homeMain/PlannerBanner.vue';
import AbandonedBanner from '@/components/homeMain/AbandonedBanner.vue';
import PopularShoppingSwiperComponent from '@/components/homeMain/PopularShoppingSwiperComponent.vue';
import { onMounted } from 'vue';
import { getAnimalList, getAnimalListBykindCd } from '@/apis/supabase';
import { getAnimalListQuery } from '@/apis/supabase';
import { getAnimalInfo } from '@/apis/supabase';

// TEST 용 -> 이후 삭제해주세요
onMounted(async () => {
  const res = await getAnimalList(1);
  const res2 = await getAnimalListBykindCd('개', 1);
  const allConditions = await getAnimalListQuery({
    // orgName: '서울특별시',
    sexCd: 'F',
    state: true,
    page: 1,
    // kindCd: '고양이',
    // species: '한국 고양이',
    queryStart: '20250224',
    queryEnd: '20260524',
  });
  const one = await getAnimalInfo('411300202500006');
  console.log('특정 동물 조회', one);
  console.log('res 조건문 쿼리', allConditions);
  console.log('res from main', res);
  console.log('res2 from main', res2);
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
