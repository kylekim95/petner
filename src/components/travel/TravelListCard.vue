<script setup lang="ts">
import { detailCommon } from '@/apis/tour/detailCommon';
import { ref, onMounted } from 'vue';
import PATH from '@/constants/path';
import router from '@/router';
import type { TourData } from '@/types/travelList/tourData';
import type { DetailData } from '@/types/travelList/detailData';
import { traveListImg, restaurantImg } from '@/constants/mock/travel/travelList';

const { data } = defineProps<{ data: TourData }>();

//  랜덤 이미지
const randomImg = traveListImg[Math.floor(Math.random() * traveListImg.length)].url;

// 상속받은 contentTypeId,contentId
const contentData = ref({
  contentId: data.contentid,
  contentTypeId: data.contenttypeid,
});

// detailCommon의 결과가 배열이므로, ref의 초기값은 빈 배열로 설정
const overviewData = ref<DetailData>();

// onMounted(async () => {
//   // detailCommon이 반환하는 배열을 overviewData에 할당합니다.
//   overviewData.value = await detailCommon(contentData?.value);
// });

// 카드 클릭시 해당 정보를 가진 상세 페이지 이동
const handleRouter = (contentId: string) => {
  router.push(PATH.travelDetail.replace(':contentId', contentId));
};
</script>

<template>
  <!-- 카드 컴포넌트 -->
  <div
    class="d-flex flex-row gap-2"
    :style="{ width: '100%', height: '295px', marginTop: '20px' }"
    @click="() => handleRouter(data.contentid)"
  >
    <div class="card overflow-hidden">
      <img :src="data.firstimage ? data.firstimage : randomImg" class="card-img-top" />
    </div>
    <div class="d-flex flex-column justify-content-between ms-4 cardContentSection">
      <!-- 카테고리 -->
      <div class="text-primary-blue" :style="{ fontSize: '16px' }">호텔</div>
      <!-- 이름 및 아이콘 -->
      <div class="d-flex flex-row justify-content-between align-items-center">
        <div class="subTitle">{{ data.title }}</div>
        <div class="d-flex flex-row gap-2">
          <!-- 아이콘 -->
          <i class="bi bi-journal-plus" :style="{ fontSize: '30px' }"></i>
          <i class="bi bi-heart" :style="{ fontSize: '30px' }"></i>
        </div>
      </div>
      <!-- 주소 -->
      <div>{{ data.addr1 }}</div>
      <div>{{ data.tel }}</div>
      <div class="" style="width: 100%">
        <div
          v-for="(item, index) in overviewData"
          :key="index"
          class="mb-0"
          style="
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            line-clamp: 3;
            overflow: hidden;
            max-width: 100%;
          "
        >
          <!-- {{ item.overview ? item.overview : '' }} -->
        </div>
      </div>
      <div class="title">110000원/박</div>
    </div>
  </div>
</template>

<style scoped>
/* 제목 폰트 */
.title {
  font-size: 36px;
  font-weight: 700;
}

.subTitle {
  font-size: 24px;
  font-weight: 500;
}

.card {
  width: 50%;
  height: 295px;
  border-radius: 15px;
}
.cardContentSection {
  width: 50%;
  height: 295px;
}

.card-img-top {
  height: 300px;
  object-fit: cover;
}
</style>
