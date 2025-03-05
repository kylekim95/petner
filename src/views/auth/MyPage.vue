<script setup lang="ts">
import HeroSection from '@/components/myPage/HeroSection.vue';
import MyPlan from '@/components/myPage/MyPlan.vue';
import MyTravelCard from '@/components/myPage/MyTravelCard.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
</script>

<template>
  <div class="myPageSection" :style="{ padding: '97px 0' }">
    <div class="container" :style="{ minWidth: '1280px', width: '66%' }">
      <HeroSection style="" />
      <div class="contentSection d-flex flex-row gap-4" :style="{ marginTop: '20px' }">
        <MyPlan />

        <div class="myPost">
          <!-- 게시글, 입양신청 버튼섹션 -->
          <div class="myContentText myPostTitleSection position-relative">
            <div
              class="position-absolute d-flex flex-row gap-4"
              :style="{ left: '58px', top: '34px' }"
            >
              <span class="currentContentText">게시글</span>
              <span class="">입양신청서</span>
            </div>
          </div>
          <!-- 카드 리스트 섹션 -->
          <div class="container myPostListSection">
            <Swiper
              :direction="'vertical'"
              :slides-per-view="1"
              :space-between="10"
              :mousewheel="true"
              :pagination="{ clickable: true }"
              :navigation="true"
              class="swiper"
            >
            </Swiper>
            <SwiperSlide>
              <MyTravelCard />
            </SwiperSlide>
          </div>
        </div>
      </div>
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

.currentContentText {
  font-size: 20px;
  font-weight: 600;
  color: var(--gray-10);
}
.myContentText {
  font-size: 20px;
  font-weight: 400;
  color: var(--gray-10);
}
.postCardText {
  font-size: 16px;
  font-weight: 700;
  color: var(--gray-10);
}
.dateText {
  font-size: 12px;
  font-weight: 500;
  color: var(--gray-7);
}
/* 하단 내용 섹션 */
.myPageSection {
  background-color: var(--gray-2);
}
/* 나의 게시글 섹션 */
.myPost {
  width: 65%;
  height: 1089px;
  border-radius: 10px;
  box-shadow: 2px 6px 10px var(--gray-3);
  background-color: var(--gray-1);
}

/* 여행 리스트 컨테이너 여역 */
.myPostListSection {
  width: 85%;
  height: 90%;
}

/* 나의 여행 제목 섹션 */
.myPostTitleSection {
  height: 85px;
  border-bottom: 1px solid var(--gray-6);
}

/* 리스트 카드 이미지 영역 */
.postCardImg {
  width: 80px;
  height: 80px;
}
</style>
