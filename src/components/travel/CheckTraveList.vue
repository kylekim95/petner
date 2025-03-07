<script setup lang="ts">
import { travelListEffect } from '@/constants/travel/motion';
import { ref, onMounted, watch, computed } from 'vue';
import TravelListCard from './TravelListCard.vue';
import { fetchAreaBasedData } from '@/apis/tour/getAreaBased';
import { useFacilitiesStore } from '@/stores/facilitiesStore';

const facilitiesStore = useFacilitiesStore();
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
// 카테고리에 따른 제목을 반환하는 computed
const currentTitle = computed(() => {
  switch (facilitiesStore.contentTypeId) {
    // 숙소
    case '32':
      return '숙소';
    // 레스토랑
    case '39':
      return '레스토랑';
    // 문화 & 쇼핑
    case '38':
      return '문화 & 쇼핑';
    // 관광 & 체험
    case '28':
      return '관광 & 체험';
    // 기본값 (예시로 '문화 & 쇼핑'에 대한 데이터가 있다면 추가)
    default:
      return { title: '기본', category: '', options: [] };
  }
});
// API에서 불러온 데이터를 저장할 변수
const stayData = ref<TourData[]>([]); // 배열 형태로 데이터 저장
const isLoading = ref(false); // 로딩 상태
const pageNo = ref(1); // 페이지 번호
const observerTarget = ref<HTMLElement | null>(null); // Intersection Observer 감지 대상

// API 호출 함수
const loadStayData = async () => {
  try {
    isLoading.value = true;
    const data = await fetchAreaBasedData({
      pageNo: pageNo.value,
      contentTypeId: facilitiesStore.queryData.contentTypeId,
      areaCode: facilitiesStore.queryData.areaCode,
      cat3: facilitiesStore.queryData.typeCode,
    });
    console.log(data);
    stayData.value.push(...data); // 기존 데이터에 추가
    pageNo.value++; // ✅ 다음 페이지 증가
  } catch (error) {
    console.error('데이터 로드 실패:', error);
  } finally {
    isLoading.value = false; // 로딩 완료
  }
};

// **Intersection Observer 설정**
const setupIntersectionObserver = () => {
  if (!observerTarget.value) return;

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        loadStayData(); // ✅ 추가 데이터 로드
      }
    },
    { threshold: 1.0 },
  );

  observer.observe(observerTarget.value);
};
// Pinia 스토어의 queryData 값이 변경되면 데이터를 초기화하고 다시 로드
watch(
  () => facilitiesStore.queryData,
  () => {
    stayData.value = [];
    pageNo.value = 1;
    loadStayData();
  },
  { deep: true },
);

// 컴포넌트가 마운트될 때 데이터 로드 및 옵저버 설정
onMounted(() => {
  loadStayData();
  setupIntersectionObserver();
});
</script>

<template>
  <!-- Top 검색창, 검색 결과 -->
  <!-- 조회 리스트 -->
  <div v-motion="travelListEffect" class="mainRight">
    <!-- <div class="searchResult title" :style="{}">검색결과 : 2000개</div> -->
    <div class="searchResult title" :style="{}">{{ currentTitle }}</div>
    <!-- 카드 컴포넌트 -->
    <div v-motion="travelListEffect" v-for="(item, index) in stayData" :key="index">
      <TravelListCard :data="item" />
    </div>
    <!-- 감지용 div -->
    <div ref="observerTarget" style="height: 10px"></div>

    <!-- 로딩 상태 표시 -->
    <!-- <div v-if="isLoading" class="loading-text">데이터 로딩 중...</div> -->
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
  margin-bottom: 50px;
}

.card {
  width: 45%;
  height: 295px;
  border-radius: 15px;
}
</style>
