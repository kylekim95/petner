<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import usePlanner, { type TravelData } from '@/hooks/usePlanner';
import { useRouter } from 'vue-router';

const planner = usePlanner();
const myPlans = ref<TravelData[]>();
const router = useRouter();

onMounted(async ()=>{
  myPlans.value = await planner?.GetMyPlans();
});
watch(
  ()=>myPlans.value,
  ()=>{
    const formattedData = myPlans.value?.map((e)=>{
      const _date = new Date(e.createdAt);
      return {
        title: e.title,
        date: _date.getFullYear() + '.' + _date.getMonth() + '.' + _date.getDay(),
        id: e.id
      }
    });
    if(formattedData){
      travelPlans.value = formattedData;
    }
  }
);
const travelPlans = ref<{title: string, date: string, id: string}[]>([]);
// { title: '덕구랑 2박 3일 강원도 여행', date: '2025.10.09' },
// { title: '서울 야경 투어', date: '2025.11.15' },
// { title: '부산 해운대 여행', date: '2025.12.20' },
// { title: '제주도 힐링 여행', date: '2026.01.05' },
// { title: '부산 해운대 여행', date: '2025.12.20' },
// { title: '제주도 힐링 여행', date: '2026.01.05' },
// { title: '부산 해운대 여행', date: '2025.12.20' },
// { title: '제주도 힐링 여행', date: '2026.01.05' },
// { title: '제주도 힐링 여행', date: '2026.01.05' },
// { title: '부산 해운대 여행', date: '2025.12.20' },
// { title: '제주도 힐링 여행', date: '2026.01.05' },
</script>

<template>
  <div class="myTravelSection">
    <div class="myContentText myTravelTitleSection position-relative">
      <span class="position-absolute" :style="{ left: '58px', top: '34px' }"> 나의여행 </span>
    </div>
    <!-- 리스트 전체 영역 -->
    <div class="container myTravelContent">
      <!--  여행 리스트 -->
      <Swiper
        :direction="'vertical'"
        :slides-per-view="5"
        :space-between="10"
        style="height: 650px"
      >
        <SwiperSlide
          v-for="(plan, index) in travelPlans"
          :key="index"
          class="d-flex flex-row align-items-center myTravelList position-relative"
          @click="()=>{router.push(`/travel/planner/${plan.id}`)}"
          style="cursor: pointer;"
        >
          <img src="/public/myPage/myPlanImg.png" width="68px" height="68px" alt="" />
          <div>{{ plan.title }}</div>
          <div class="position-absolute listText" :style="{ bottom: '5px', right: '10px' }">
            {{ plan.date }}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<style scoped>
/* 텍스트 */
.title {
  font-size: 30px;
  font-weight: 700;
  color: var(--gray-10);
}

.myContentText {
  font-size: 20px;
  font-weight: 600;
  color: var(--gray-10);
}

/* 나의 여행 섹션 */
.myTravelSection {
  width: 35%;
  height: 787px;
  border-radius: 10px;
  box-shadow: 2px 6px 20px var(--gray-3);
  background-color: var(--gray-1);
}

/* 여행 리스트 컨테이너 여역 */
.myTravelContent {
  width: 80%;
  height: 650px;
}

/* 나의 여행 제목 섹션 */
.myTravelTitleSection {
  height: 85px;
  border-bottom: 1px solid #e6e6ea;
}

/* 여행 리스트 섹션  */
.myTravelList {
  height: 145px;
  border-bottom: 1px solid #e6e6ea;
}

.listText {
  font-size: 12px;
  font-weight: 500;
  color: var(--gray-7);
}

.cursorPointer:hover {
  cursor: pointer;
}
</style>
