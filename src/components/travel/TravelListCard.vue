<script setup lang="ts">
import { detailCommon } from '@/apis/tour/detailCommon';
import { ref, onMounted } from 'vue';
interface TourData {
  addr1: string;
  addr2: string;
  areacode: string;
  cat1: string;
  cat2: string;
  cat3: string;
  contentid: string;
  contenttypeid: string;
  cpyrhtDivCd: string;
  createdtime: string;
  firstimage: string;
  firstimage2: string;
  mapx: string;
  mapy: string;
  mlevel: string;
  modifiedtime: string;
  sigungucode: string;
  tel: string;
  title: string;
  zipcode: string;
}

interface DetailData {
  addr1: string;
  addr2: string;
  areacode: string;
  cat1: string;
  cat2: string;
  cat3: string;
  contentid: string;
  contenttypeid: string;
  cpyrhtDivCd: string;
  createdtime: string;
  firstimage: string;
  firstimage2: string;
  homepage: string;
  mapx: string;
  mapy: string;
  mlevel: string;
  modifiedtime: string;
  overview?: string;
  sigungucode: string;
  tel: string;
  telname: string;
  title: string;
  zipcode: string;
}

const { data } = defineProps<{ data: TourData }>();

const contentData = ref({
  contentId: data.contentid,
  contentTypeId: data.contenttypeid,
});

// detailCommon의 결과가 배열이므로, ref의 초기값은 빈 배열로 설정
const overviewData = ref<DetailData>();

onMounted(async () => {
  // detailCommon이 반환하는 배열을 overviewData에 할당합니다.
  overviewData.value = await detailCommon(contentData.value);
  console.log(overviewData.value);
});
</script>

<template>
  <!-- 카드 컴포넌트 -->
  <div
    class="d-flex flex-row gap-1 position-relative"
    :style="{ width: '100%', height: '295px', marginTop: '20px' }"
  >
    <div class="card overflow-hidden">
      <img :src="data.firstimage" class="card-img-top" />
    </div>
    <div class="d-flex flex-column justify-content-between ms-4" :style="{ width: '55%' }">
      <!-- 카테고리 -->
      <div class="text-primary-blue" :style="{ fontSize: '16px' }">호텔</div>
      <!-- 이름 및 아이콘 -->
      <div class="d-flex flex-wrap justify-content-lg-between align-items-center">
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
        <p
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
          {{ overviewData[0] ? overviewData[0].overview : '' }}
        </p>
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
.mainRight {
  display: flex;
  width: 75%;
  flex-direction: column;
  align-items: start;
}

.card {
  width: 45%;
  height: 295px;
  border-radius: 15px;
}

.card-img-top {
  height: 300px;
  object-fit: cover;
}
</style>
