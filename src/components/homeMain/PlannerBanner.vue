<script setup lang="ts">
import TextBlock, { type TextBlockDescriptor } from '../common/TextBlock.vue';

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
</script>

<template>
  <div class="container-fluid mb-5 align-content-center" style="height: 500px; min-width: 1280px; max-width: 1920px;"
    :style="{
      backgroundImage : `url(/PlannerBackgroundImg.png)`,
    }"
  >
    <div class="gap-1" :style="{ width: '67%', height: '100%', justifySelf : 'center', justifyContent: 'center', display: 'flex', flexDirection: 'row'}">
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
             <div :style="{ fontFamily:' Pretendard', fontSize: '20px', fontWeight: 500 }">시작하기</div>
          </div>
        </button>
      </div>
      <div class="w-50 bg-secondary opacity-50 rounded-4 align-self-center" style="height: 450px; min-width: 500px;"></div>
    </div>
  </div>
</template>
