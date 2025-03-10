<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import TextBlock, { type TextBlockDescriptor } from '../common/TextBlock.vue';
import { RouterLink } from 'vue-router';

const plannerIntroText : TextBlockDescriptor[][] = [
  [
    {
      content: '반려동물',
      bgColor:'var(--primary-green)', color:'var(--gray-1)', font: 'Pretendard', size:'48px', weight:700, margin:'my-0'
    },
    {
      content: ' 과 ',
      bgColor:'', color:'#4B3C3C', font: 'Pretendard', size:'48px', weight:700, margin:'my-0'
    },
  ],
  [ { content: '함께하는 특별한 여행', bgColor:'', color:'#4B3C3C', font: 'Pretendard', size:'48px', weight:700, margin:'my-0' } ],
  [
    {
      content: ' 반려동물과 함께하는 맞춤형 여행 계획을 세워보세요. 여러분의 여행 계획을 손쉽게 세우고, 특별한 추억을 만들어보세요.',
      bgColor:'', color:'#4B3C3C', font: 'Pretendard', size:'20px', weight:700, margin:'my-0'
    }
  ],
];
const auth = useAuthStore();
</script>

<template>
  <div class="container-fluid mb-5 align-content-center" style="height: 500px; min-width: 1280px; max-width: 1920px;"
    :style="{
      backgroundImage : `url(/PlannerBackgroundImg.png)`,
    }"
  >
    <div class="gap-5" :style="{ width: '67%', height: '100%', justifySelf : 'center', justifyContent: 'center', display: 'flex', flexDirection: 'row', minWidth: '1280px'}">
      <div class="d-flex flex-column" style="width: 35%; min-width: 400px; justify-content: center;">
        <div class="d-flex">
          <TextBlock :text-block="plannerIntroText[0][0]"/>
          <TextBlock :text-block="plannerIntroText[0][1]"/>
        </div>
        <div class="d-flex">
          <TextBlock :text-block="plannerIntroText[1][0]"/>
        </div>
        <div class="d-flex">
          <TextBlock :text-block="plannerIntroText[2][0]"/>
        </div>
        <button type="button" class="btn border rounded-5 mt-5 text-primary-green border-primary-green" style="width:250px; height:50px;">
          <div class="d-flex justify-content-center position-relative">
            <!-- <RouterLink v-if="auth.isAuth" to="#" style="text-decoration: none;"><div class="text-primary-green" :style="{ fontFamily:' Pretendard', fontSize: '20px', fontWeight: 500 }">시작하기</div></RouterLink> -->
            <RouterLink v-if="!auth.isAuth" to="/login" style="text-decoration: none;"><div class="text-primary-green" :style="{ fontFamily:' Pretendard', fontSize: '20px', fontWeight: 500 }">로그인하러 가기</div></RouterLink>
          </div>
        </button>
      </div>
      <div class="rounded-4 align-self-center overflow-hidden" style="width: fit-content; height: 400px;">
        <img src="/travelPlanner/planner-image.png" alt="" style="width:auto; height: 100%;">
      </div>
    </div>
  </div>
</template>
