<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import TextBlock, { type TextBlockDescriptor } from '@/components/common/TextBlock.vue';
import PopularTravelCard, { type PopularTravelData } from '@/components/homeMain/PopularTravelCard.vue';
import MainShoppingSwiper from '@/components/homeMain/MainShoppingSwiper.vue';
import GalleryItem from '@/components/homeMain/GalleryItem.vue';

import { Line } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement, type ChartData, type ChartOptions, type Plugin as ChartPlugin } from 'chart.js';
ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale);

const heroImagePath = '/HomeMainHeroImg.png';

const heroText : TextBlockDescriptor[] = [
  {
    content: '펫트너, 사랑으로 연결되는 반려동물의 새로운 시작',
    color: 'var(--gray-1)', bgColor:'', font:'Paperlogy', weight:700, size: '48px'
  },
  {
    content: '반려동물 입양, 실종/발견 신고, 여행 서비스와 쇼핑까지! 펫트너(Petner)로 반려동물과 더 나은 삶을 만들어가세요.사랑으로, 동물들에게 기회를, 당신에게 특별한 경험을 선사합니다.',
    color: 'var(--gray-1)', bgColor:'', font:'Paperlogy', weight:500, size: '20px'
  }
];
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
const gridMenuText : TextBlockDescriptor[] = [
  {
    content: '변화를 위한 ',
    bgColor:'', color:'var(--gray-10)', font: 'Pretendard', size:'32px', weight:700, margin:'my-0'
  },
  {
    content: '첫걸음',
    bgColor:'', color:'var(--primary-red)', font: 'Pretendard', size:'32px', weight:700, margin:'my-0'
  },
  {
    content: ', 당신의 참여로 시작됩니다!',
    bgColor:'', color:'var(--gray-10)', font: 'Pretendard', size:'32px', weight:700, margin:'my-0'
  },
  {
    content: '소중한 생명을 지키는 캠패인에 동참하고, 희망을 선물해주세요.',
    bgColor:'', color:'var(--gray-6)', font: 'Pretendard', size:'24px', weight:500, margin:'mb-3'
  },
];
const shoppingText : TextBlockDescriptor[] = [
  {
    content: '반려동물도 즐거운',
    bgColor:'', color:'var(--gray-10)', font: 'Pretendard', size:'32px', weight:700, margin: 'mb-3'
  },
  {
    content: ' 쇼핑',
    bgColor:'', color:'var(--primary-red)', font: 'Pretendard', size:'32px', weight:700, margin: 'mb-3'
  },
  {
    content: ', 펫트너에서 시작하세요.',
    bgColor:'', color:'var(--gray-10)', font: 'Pretendard', size:'32px', weight:700, margin: 'mb-3'
  },
];
const abandonedText : TextBlockDescriptor[] = [
  {
    content: '2023 전국 유기동물 수수',
    color:'#8D827A', bgColor:'', font: 'Pretendard', size:'32px', weight:800, margin:'my-0'
  },
  {
    content: '11,3072마리',
    color:'var(--primary-red)', bgColor:'', font: 'Pretendard', size:'56px', weight:800, margin:'my-0'
  },
  {
    content: '1개 보호소당 관리해야하는 개체 수',
    color:'#8D827A', bgColor:'', font: 'Pretendard', size:'32px', weight:800, margin:'my-0'
  },
  {
    content: '474마리',
    color:'var(--primary-red)', bgColor:'', font: 'Pretendard', size:'56px', weight:800, margin:'my-0'
  },
  {
    content: '2023 동물 보호센터 운영 비용',
    color:'#8D827A', bgColor:'', font: 'Pretendard', size:'32px', weight:800, margin:'my-0'
  },
  {
    content: '373.9억원',
    color:'var(--primary-red)', bgColor:'', font: 'Pretendard', size:'56px', weight:800, margin:'my-0'
  },
]

const dummyData : PopularTravelData[] = [
  { image: 'https://tong.visitkorea.or.kr/cms/resource/80/3109380_image2_1.jpg', location: '웨이뷰', title: '제목제목', content: '내용내용' },
  { image: 'https://tong.visitkorea.or.kr/cms/resource/80/3109380_image2_1.jpg', location: '웨이뷰', title: '제목제목', content: '내용내용' },
  { image: 'https://tong.visitkorea.or.kr/cms/resource/80/3109380_image2_1.jpg', location: '웨이뷰', title: '제목제목', content: '내용내용' },
  { image: 'https://tong.visitkorea.or.kr/cms/resource/80/3109380_image2_1.jpg', location: '웨이뷰', title: '제목제목', content: '내용내용' },
  { image: 'https://tong.visitkorea.or.kr/cms/resource/80/3109380_image2_1.jpg', location: '웨이뷰', title: '제목제목', content: '내용내용' },
  { image: 'https://tong.visitkorea.or.kr/cms/resource/80/3109380_image2_1.jpg', location: '웨이뷰', title: '제목제목', content: '내용내용' },
];
const shoppingItems = [
  {
    id: 1,
    img: '/forSwipers/homeMainSwiper.png',
    title: '의류',
    name: '바잇미 캠핑클럽 후리스',
    content: '[20% 할인행사중🚀]',
  },
  {
    id: 2,
    img: '/forSwipers/homeMainSwiper2.png',
    title: '하우스',
    name: '바잇미 폼폼쿠션',
    content: '[연간 판매량 1위🥇]',
  },
  {
    id: 3,
    img: '/forSwipers/homeMainSwiper3.png',
    title: '장난감',
    name: '런치박스 플레이북',
    content: '[20% 할인 행사중]',
  },
  {
    id: 4,
    img: '/forSwipers/homeMainSwiper.png',
    title: '의류2',
    name: '가을 신상 의류',
    content: '[10% 할인]',
  },
  {
    id: 5,
    img: '/forSwipers/homeMainSwiper2.png',
    title: '의류2',
    name: '가을 신상 의류',
    content: '[10% 할인]',
  },
];

const gridImages = [
  '/GridImage3.png',
  '/GridImage2.png',
  '/GridImage0.png',
  '/GridImage1.png',
];
const gridItemTexts : TextBlockDescriptor[][][] = [
  [
    [
      { content:'Toss', bgColor:'', color:'#2C63F6', font: 'Pretendard', size:'32px', weight:700, margin: 'm-0' },
      { content:'Bank', bgColor:'', color:'var(--gray-1)', font: 'Pretendard', size:'32px', weight:700, margin: 'm-0' }
    ],
    [ { content:'함께 겨울나기 캠패인', bgColor:'', color:'var(--gray-1)', font: 'Pretendard', size:'20px', weight:600, margin: 'm-0' } ],
  ],
  [
    [ { content:'동물보호단체', bgColor:'', color:'var(--gray-1)', font: 'Pretendard', size:'32px', weight:200, margin: 'm-0' } ],
    [ { content:'라이프', bgColor:'', color:'var(--gray-1)', font: 'Pretendard', size:'32px', weight:800, margin: 'm-0' } ],
  ],
  [
    [ { content:'작은 손길, 큰 기쁨', bgColor:'', color:'var(--gray-1)', font: 'Pretendard', size:'20px', weight:700, margin: 'm-0' }, ],
    [ { content:'처음이라면, 이웃과 함께', bgColor:'', color:'var(--gray-1)', font: 'Pretendard', size:'20px', weight:700, margin: 'm-0' }, ],
    [ { content:'현재 모집중인 돌봄 봉사', bgColor:'', color:'var(--gray-1)', font: 'Pretendard', size:'32px', weight:700, margin: 'm-0' }, ],
  ],
  [
    [ { content:'상시모집,', bgColor:'', color:'var(--gray-6)', font: 'Pretendard', size:'18px', weight:500, margin: 'm-0' }, ],
    [ { content:'새로운 집까지 안전하게,', bgColor:'', color:'var(--gray-1)', font: 'Pretendard', size:'32px', weight:700, margin: 'm-0' }, ],
    [ { content:'해외 이동 봉사', bgColor:'', color:'var(--primary-green)', font: 'Pretendard', size:'32px', weight:700, margin: 'm-0' }, ],
  ],
];

const chartData : ChartData<'line'> = {
  labels: [2019, 2020, 2021, 2022, 2023],
  datasets: [
    {
      data: [ 46.6, 45.9, 41.5, 43.7, 45.6 ],
      label: '사망', borderColor: '#f3723f', backgroundColor: '#f3723f', tension: 0.2
    },
    {
      data: [ 26.4, 29.6, 32.1, 27.5, 24.2 ],
      label: '입양', borderColor: '#5faa68', backgroundColor: '#5faa68', tension: 0.2
    },
  ]
};
const chartOptions : ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      offset: true,
      title: {
        text: '비율(%)',
        font:{ family: 'Pretendard', size:20, weight:'bold' },
      },
      min: 20,
      max: 50,
      ticks: {
        display: true,
        font:{ family: 'Pretendard', size:20, weight:'bold' },
      }
    },
    x: {
      offset: true,
      title: {
        text: '연도',
        font:{ family: 'Pretendard', size:20, weight:'bold' },
      },
      ticks: {
        font:{
          family: 'Pretendard', size:20, weight:'bold'
        },
      }
    }
  },
  plugins: {
    legend: {
      display: true,
      position: 'top',
      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
        font: { family: 'Pretendard', size:16, weight:'bold' }
      }
    }
  },
}
const chartPlugins : ChartPlugin<'line'>[] = [
  {
    id: 'ValueAbovePoint',
    afterDatasetsDraw(chart, args, plugins) {
      const { ctx, data } = chart

      ctx.save();
      chart.getDatasetMeta(0).data.forEach((datapoint, index)=>{
        ctx.font = 'bold 24px Pretendard';
        ctx.textAlign = 'center';
        ctx.fillStyle = data.datasets[0].borderColor?.toString() ?? 'black';
        ctx.fillText(data.datasets[0].data[index]?.toString() ?? '?' , datapoint.x, datapoint.y - 20);
      });
      chart.getDatasetMeta(1).data.forEach((datapoint, index)=>{
        ctx.font = 'bold 24px Pretendard';
        ctx.textAlign = 'center';
        ctx.fillStyle = data.datasets[1].borderColor?.toString() ?? 'black';
        ctx.fillText(data.datasets[1].data[index]?.toString() ?? '?' , datapoint.x, datapoint.y - 20);
      });
    }
  }
];

</script>

<template>
  <!-- Hero -->
  <div class="container-fluid mb-5 p-0 hero"
    :style="{
      backgroundImage : `linear-gradient(#00000080 0 50%, #00000000), url(${heroImagePath})`,
      backgroundBlendMode : 'multiply',
      backgroundPositionX : 'center'
    }">
    <!-- Hero minus header -->
    <div class="w-100 position-absolute d-flex" style="height: 500px; top: 75px; align-items: center; padding-left: 18%;">
      <div class="" style="max-width:500px; min-width:500px;">
        <TextBlock :text-block="heroText[0]" />
        <TextBlock :text-block="heroText[1]" />
      </div>
    </div>
  </div>
  <!-- Swiper -->
  <swiper class="mb-5"
    :slides-per-view="3"
    :loop="true"
    :scrollbar="{ el: '.swiper-scrollbar', draggable: true, enabled: true }"
    style="height: 500px"
  >
    <swiper-slide v-for="(item, index) in dummyData" :key="index"><PopularTravelCard class="h-100" :data="item" /></swiper-slide>
  </swiper>
  <!-- 플래너 배너 -->
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
  <!-- 유기 동물 배너 -->
  <div class="container mb-5 p-2 d-flex gap-1" style="height: 575px; width: 67%; min-width: 1280px">
    <div style="width: 60%; height: 100%;">
      <Line :options="chartOptions" :data="chartData" :plugins="chartPlugins" />
    </div>
    <div class="gap-2" style="width: 40%; height: 100%; display:flex; flex-direction: column; text-align: right;">
      <TextBlock v-for="(item, index) in abandonedText" :key="'abandoned_' + index" :text-block="item"/>
      <button type="button" class="btn rounded-5 text-gray-1 align-self-end bg-primary-red" style="width:200px; height:62.5px;">
        <div class="d-flex justify-content-center position-relative">
          <div :style="{ fontFamily:' Pretendard', fontSize: '20px', fontWeight: 500 }">입양 공고 보기</div>
        </div>
      </button>
    </div>
  </div>
  <!-- 그리드 메뉴 -->
  <div class="container mb-5 d-flex flex-column" style="height: 750px; min-width: 960px;">
    <div class="d-flex">
      <TextBlock v-for="(item, index) in gridMenuText.slice(0, 3)" :key="'grid-menu-' + index" :text-block="item"/>
    </div>
    <TextBlock :text-block="gridMenuText[3]"/>
    <!-- 그리드 -->
    <div class="d-flex gap-3" style="flex: 1 1 auto">
      <div class="d-flex flex-column gap-3" style="width: 67%;">
        <div class="d-flex gap-3" style="height: 50%;">
          <div class="grid-menu-item rounded-4 overflow-hidden" style="width: 50%;">
            <GalleryItem :bg-image="gridImages[0]" :title="gridItemTexts[0]" />
          </div>
          <div class="grid-menu-item rounded-4 overflow-hidden" style="width: 50%;">
            <GalleryItem :bg-image="gridImages[1]" :title="gridItemTexts[1]" />
          </div>
        </div>
        <div class="grid-menu-item rounded-4 overflow-hidden" style="height: 50%;">
          <GalleryItem :bg-image="gridImages[2]" :title="gridItemTexts[2]" />
        </div>
      </div>
      <div class="grid-menu-item rounded-4 overflow-hidden" style="width: 33%;">
        <GalleryItem :bg-image="gridImages[3]" :title="gridItemTexts[3]" />
      </div>
    </div>
  </div>
  <!-- 쇼핑 -->
  <div class="container mb-5 d-flex flex-column" style="height: 500px">
    <div class="d-flex align-self-center">
      <TextBlock v-for="(item, index) in shoppingText" :key="index" :text-block="item"/>
    </div>
    <MainShoppingSwiper :shopping-items="shoppingItems"/>
  </div>
</template>

<style scoped>
.hero {
  background-size : cover;
  height : 575px;
  min-width : 1280px;
}
.swiper-slide {
  opacity: 75%;
  transform: scale(0.9);
  transition: all 0.5s;
}
.swiper-slide-next {
  opacity: 100%;
  transform: scale(1.0);
}
</style>
