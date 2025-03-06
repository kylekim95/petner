<script setup lang="ts">
import MainHero from '@/components/homeMain/MainHero.vue';
import PopularTravelSwiperComponent from '@/components/homeMain/PopularTravelSwiperComponent.vue';
import PlannerBanner from '@/components/homeMain/PlannerBanner.vue';
import AbandonedBanner from '@/components/homeMain/AbandonedBanner.vue';
import PopularShoppingSwiperComponent from '@/components/homeMain/PopularShoppingSwiperComponent.vue';
import GridMenu from '@/components/homeMain/GridMenu.vue';

// import { onMounted } from 'vue';
// import { getAnimalList, getAnimalListBykindCd } from '@/apis/supabase';
// import { getAnimalListQuery } from '@/apis/supabase';
// import { getAnimalInfo } from '@/apis/supabase';
// TEST 용 -> 이후 삭제해주세요
// onMounted(async () => {
//   const res = await getAnimalList(1);
//   const res2 = await getAnimalListBykindCd('개', 1);
//   const allConditions = await getAnimalListQuery({
//     // orgName: '서울특별시',
//     sexCd: 'F',
//     state: true,
//     page: 1,
//     // kindCd: '고양이',
//     // species: '한국 고양이',
//     queryStart: '20250224',
//     queryEnd: '20260524',
//   });
//   const one = await getAnimalInfo('411300202500006');
//   console.log('특정 동물 조회', one);
//   console.log('res 조건문 쿼리', allConditions);
//   console.log('res from main', res);
//   console.log('res2 from main', res2);
// });

import { ref, onMounted } from 'vue';
import { type PopularTravelData } from '@/components/homeMain/atoms/PopularTravelCard.vue';
import { detailCommon } from '@/apis/tour/detailCommon';
const popularIds = [
  ['39', '2603467'],
  ['12', '2564158'],
  ['14', '127951'],
  ['28', '2606232'],
  ['38', '1238580'],
];
const popularTravelData = ref<PopularTravelData[]>([]);
onMounted(async ()=>{
  try{
    const promises = popularIds.map((e)=>detailCommon({contentId: parseInt(e[1]), contentTypeId: parseInt(e[0])}));
    const responses = (await Promise.allSettled(promises)).filter((e)=>e.status==='fulfilled');
    console.log(responses);
    popularTravelData.value = responses.map<PopularTravelData>((e)=>{
      const item = e.value[0];
      return {
        title: item.title,
        content: item.overview,
        image: item.firstimage,
        location: item.addr1
      }
    });
    console.log(popularTravelData);
  }
  catch(e){
    console.log(e);
  }
});
</script>

<template>
  <MainHero />
  <PopularTravelSwiperComponent :data="popularTravelData" />
  <PlannerBanner />
  <AbandonedBanner />
  <GridMenu />
  <PopularShoppingSwiperComponent />
</template>
