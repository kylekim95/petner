<script setup lang="ts">
import { ref, computed } from 'vue';
import AppHeader from '@/components/common/AppHeader.vue';
import AppFooter from '@/components/common/AppFooter.vue';
import AdoptionAnimalCard from '@/components/adoption/AdoptionAnimalCard.vue';
import Pagination from '@/components/common/Pagination.vue';

const categories = ref(['전체', '개', '고양이', '기타동물']);
const activeCategory = ref('전체');

// 동물 카드 데이터 예시
const animalCards = ref([
  {
    name: '토끼',
    imgSrc: '/path/to/image1.jpg',
    desertionNo: '0101234566897',
    noticeSdt: '2024.01.01',
    noticeEdt: '2025.01.01',
    sexCd: 'M',
    specialMark: '귀여움',
  },
  {
    name: '고양이',
    imgSrc: '/path/to/image2.jpg',
    desertionNo: '0101234566897',
    noticeSdt: '2024.01.01',
    noticeEdt: '2025.01.01',
    sexCd: 'F',
    specialMark: '귀여움',
  },
  {
    name: '고양이',
    imgSrc: '/path/to/image2.jpg',
    desertionNo: '0101234566897',
    noticeSdt: '2024.01.01',
    noticeEdt: '2025.01.01',
    sexCd: 'F',
    specialMark: '귀여움',
  },
  {
    name: '고양이',
    imgSrc: '/path/to/image2.jpg',
    desertionNo: '0101234566897',
    noticeSdt: '2024.01.01',
    noticeEdt: '2025.01.01',
    sexCd: 'F',
    specialMark: '귀여움',
  },
  {
    name: '고양이',
    imgSrc: '/path/to/image2.jpg',
    desertionNo: '0101234566897',
    noticeSdt: '2024.01.01',
    noticeEdt: '2025.01.01',
    sexCd: 'F',
    specialMark: '귀여움',
  },
  {
    name: '고양이',
    imgSrc: '/path/to/image2.jpg',
    desertionNo: '0101234566897',
    noticeSdt: '2024.01.01',
    noticeEdt: '2025.01.01',
    sexCd: 'F',
    specialMark: '귀여움',
  },
  {
    name: '고양이',
    imgSrc: '/path/to/image2.jpg',
    desertionNo: '0101234566897',
    noticeSdt: '2024.01.01',
    noticeEdt: '2025.01.01',
    sexCd: 'F',
    specialMark: '귀여움',
  },
  {
    name: '고양이',
    imgSrc: '/path/to/image2.jpg',
    desertionNo: '0101234566897',
    noticeSdt: '2024.01.01',
    noticeEdt: '2025.01.01',
    sexCd: 'F',
    specialMark: '귀여움',
  },
  {
    name: '고양이',
    imgSrc: '/path/to/image2.jpg',
    desertionNo: '0101234566897',
    noticeSdt: '2024.01.01',
    noticeEdt: '2025.01.01',
    sexCd: 'F',
    specialMark: '귀여움',
  },
  {
    name: '고양이',
    imgSrc: '/path/to/image2.jpg',
    desertionNo: '0101234566897',
    noticeSdt: '2024.01.01',
    noticeEdt: '2025.01.01',
    sexCd: 'F',
    specialMark: '귀여움',
  },
]);

// 페이지네이션 기능
const currentPage = ref(1);
const itemsPerPage = 9;
const totalPages = Math.ceil(animalCards.value.length / itemsPerPage);

const paginatedCards = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = currentPage.value * itemsPerPage;
  return animalCards.value.slice(start, end);
});

const goToPage = (page: number) => {
  if (page >= 1 && page <= totalPages) {
    currentPage.value = page;
  }
};
</script>

<template>
  <div>
    <AppHeader />

    <!-- 배너 섹션 -->
    <div
      class="banner d-flex justify-content-end align-items-center bg-cover"
      style="
        background-image: url('/PNG-Image/images/adoptionSearch.png');
        height: 575px;
        background-size: cover;
        background-position: center;
      "
    >
      <div>
        <div
          class="text-end text-white px-4 py-16 position-absolute top-50 end-0 translate-middle-y pr-6"
        >
          <h2 class="fw-bold fs-1 mb-3" style="font-family: 'paperlogy'; line-height: 1.5">
            당신의 사랑을 기다리는 생명들에게 <br />
            새로운 시작을 선물하세요.
          </h2>
          <p style="font-family: 'paperlogy'; font-size: 20px">
            그들의 내일을 바꿀 수 있는 사람은 바로 당신입니다.
          </p>
        </div>
      </div>
    </div>

    <!-- 카테고리 메뉴 -->
    <div
      class="category-menu d-flex justify-content-center gap-3 mt-5 mb-8"
      style="max-width: 1280px; margin: 0 auto; position: relative"
    >
      <div
        v-for="category in categories"
        :key="category"
        :class="['category-item', { active: activeCategory === category }]"
        @click="activeCategory = category"
        class="py-2 px-4 rounded-3 fs-5 transition-all"
      >
        {{ category }}
      </div>
    </div>

    <!-- 검색창 섹션 -->
    <div class="search-bar d-flex justify-content-center mt-5 mb-12">
      <div
        class="search-container d-flex flex-column gap-3 bg-light rounded shadow-sm"
        style="max-width: 1280px; width: 100%; padding: 30px; margin-bottom: 40px"
      >
        <div class="d-flex justify-content-center gap-3">
          <!-- 라벨과 셀렉트박스를 수평으로 정렬 -->
          <div class="d-flex align-items-center gap-2 py-2">
            <div class="form-label" style="font-size: 1.1rem">지역</div>
            <select class="form-select w-auto" id="region" aria-label="지역">
              <option selected>지역을 선택하세요</option>
              <option value="1">서울</option>
              <option value="2">경기</option>
              <option value="3">부산</option>
            </select>
          </div>

          <div class="d-flex align-items-center gap-2">
            <div class="form-label" style="font-size: 1.1rem">품종</div>
            <select class="form-select w-auto" id="breed" aria-label="품종">
              <option selected>품종을 선택하세요</option>
              <option value="1">소형견</option>
              <option value="2">중형견</option>
              <option value="3">대형견</option>
            </select>
          </div>

          <div class="d-flex align-items-center gap-2">
            <div class="form-label" style="font-size: 1.1rem">성별</div>
            <select class="form-select w-auto" id="sex" aria-label="성별">
              <option selected>성별을 선택하세요</option>
              <option value="M">수컷</option>
              <option value="F">암컷</option>
            </select>
          </div>

          <div class="d-flex align-items-center gap-2">
            <div class="form-label" style="font-size: 1.1rem">상태</div>
            <select class="form-select w-auto" id="status" aria-label="상태">
              <option selected>상태를 선택하세요</option>
              <option value="1">입양가능</option>
              <option value="2">입양완료</option>
            </select>
          </div>
        </div>

        <div class="d-flex justify-content-center gap-3 py-3">
          <!-- py-4로 위아래 여백 늘림 -->
          <div class="form-label" style="font-size: 1.1rem">공고기간</div>
          <input class="form-control w-auto" type="date" placeholder="공고 시작일" />
          <span>~</span>
          <input class="form-control w-auto" type="date" placeholder="공고 종료일" />
          <button class="btn bg-primary-green text-gray-1">조회</button>
        </div>
      </div>
    </div>

    <!-- 입양공고중인 동물 및 정렬 버튼 -->
    <div
      class="info-section d-flex justify-content-between px-5 py-3"
      style="max-width: 1280px; margin: 0 auto"
    >
      <h3 class="fs-3 fw-bold">입양공고중인 유기동물</h3>
      <div class="sort-dropdown">
        <select class="form-select">
          <option>최신등록순</option>
          <option>공고일마감순</option>
        </select>
      </div>
    </div>

    <div
      class="card-list d-grid gap-4 mb-5 px-5 py-4"
      style="
        max-width: 1280px;
        margin: 0 auto;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
      "
    >
      <AdoptionAnimalCard v-for="(card, index) in paginatedCards" :key="index" :animal="card" />
    </div>

    <!-- 페이지네이션 섹션 -->
    <Pagination :currentPage="currentPage" :totalPages="totalPages" :goToPage="goToPage" />

    <AppFooter />
  </div>
</template>

<style scoped>
.banner {
  position: relative;
}
.category-item {
  cursor: pointer;
}
.category-item.active {
  background-color: var(--primary-green);
  color: white;
}
</style>
