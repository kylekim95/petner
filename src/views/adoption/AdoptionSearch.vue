<script setup lang="ts">
import { ref, computed } from 'vue';
import AdoptionAnimalCard from '@/components/adoption/AdoptionAnimalCard.vue';
import Pagination from '@/components/common/Pagination.vue';

const categories = ref(['전체', '개', '고양이', '기타동물']);
const activeCategory = ref('전체');

const startDate = ref('');
const endDate = ref('');

const updateEndDate = () => {
  if (endDate.value && endDate.value < startDate.value) {
    endDate.value = startDate.value;
  }
};

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
    <!-- 배너 섹션 -->

    <div
      class="banner d-flex justify-content-end align-items-center bg-cover"
      style="
        background-image: url('/PNG-Image/images/adoptionSearch.png');
        height: 575px;
        background-size: cover;
        background-position: center;
        position: relative;
      "
    >
      <div>
        <div
          class="text-end text-white px-4 py-8 position-absolute top-50 end-0 translate-middle-y pr-6"
        >
          <h2 class="fw-bold fs-1 mb-3" style="font-family: 'paperlogy'; line-height: 1.5">
            당신의 새로운 가족이 여기 있습니다! <br />
            사랑을 기다리는 반려동물들을 만나보세요.
          </h2>
          <p style="font-family: 'paperlogy'; font-size: 20px">
            지금, 그들의 미래를 바꿀 수 있는 기회가 당신에게 있습니다. 함께 할 준비가 되셨나요?
          </p>
        </div>
      </div>
    </div>

    <!-- 카테고리 메뉴 -->
    <div
      class="category-menu d-flex justify-content-between mt-5 mb-8"
      style="max-width: 1280px; margin: 0 auto; position: relative; width: 90%"
    >
      <div
        v-for="category in categories"
        :key="category"
        :class="['category-item', { active: activeCategory === category }]"
        @click="activeCategory = category"
        class="category-item py-3 px-6 rounded-full fs-6 transition-all flex flex-col items-center"
        style="flex: 1; text-align: center; margin: 0 5px"
      >
        <i
          :class="{
            'fa-solid fa-paw': category === '전체',
            'fa-solid fa-dog': category === '개',
            'fa-solid fa-cat': category === '고양이',
            'fa-solid fa-crow': category === '기타동물',
          }"
          :style="{
            color: activeCategory === category ? 'white' : 'var(--gray-)',
            backgroundColor: activeCategory === category ? 'var(--primary-green)' : 'transparent',
            padding: '15px',
            borderRadius: '50%',
            fontSize: activeCategory === category ? '40px' : '32px',
            border: activeCategory === category ? 'none' : '2px solid var(--gray-1)',
            display: 'inline-block',
            boxShadow: activeCategory === category ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
            transition:
              'background-color 0.3s ease, color 0.3s ease, border 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
            transform: activeCategory === category ? 'scale(1.1)' : 'scale(1)',
          }"
        />
        <span
          :style="{ fontWeight: activeCategory === category ? '700' : '400', fontSize: '20px' }"
          >{{ category }}</span
        >
      </div>
    </div>

    <!-- 검색창 섹션 -->
    <div class="search-bar d-flex justify-content-center mt-5 mb-12">
      <div
        class="search-container d-flex flex-column gap-4 bg-light rounded shadow-sm"
        style="max-width: 1280px; width: 100%; padding: 30px; margin-bottom: 40px"
      >
        <div class="d-flex justify-content-center gap-5">
          <div class="d-flex align-items-center gap-2 py-2">
            <div class="form-label" style="font-size: 1.2rem">지역</div>
            <select class="form-select w-auto" id="region" aria-label="지역">
              <option selected>지역을 선택하세요</option>
              <option value="1">서울</option>
              <option value="2">경기</option>
              <option value="3">부산</option>
            </select>
          </div>

          <div class="d-flex align-items-center gap-2">
            <div class="form-label" style="font-size: 1.2rem">품종</div>
            <select class="form-select w-auto" id="breed" aria-label="품종">
              <option selected>품종을 선택하세요</option>
              <option value="1">소형견</option>
              <option value="2">중형견</option>
              <option value="3">대형견</option>
            </select>
          </div>

          <div class="d-flex align-items-center gap-2">
            <div class="form-label" style="font-size: 1.2rem">성별</div>
            <select class="form-select w-auto" id="sex" aria-label="성별">
              <option selected>성별을 선택하세요</option>
              <option value="M">수컷</option>
              <option value="F">암컷</option>
            </select>
          </div>

          <div class="d-flex align-items-center gap-2">
            <div class="form-label" style="font-size: 1.2rem">상태</div>
            <select class="form-select w-auto" id="status" aria-label="상태">
              <option selected>상태를 선택하세요</option>
              <option value="1">입양가능</option>
              <option value="2">입양완료</option>
            </select>
          </div>
        </div>

        <div class="d-flex justify-content-center gap-3 py-3">
          <div class="form-label" style="font-size: 1.2rem">공고기간</div>
          <input
            class="form-control w-auto"
            type="date"
            placeholder="공고 시작일"
            v-model="startDate"
            @change="updateEndDate"
          />
          <span style="font-size: 1.5rem">~</span>

          <input
            class="form-control w-auto"
            type="date"
            placeholder="공고 종료일"
            v-model="endDate"
            :min="startDate"
          />
          <button class="btn bg-primary-green text-gray-1 px-4">조회</button>
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
  </div>
</template>

<style scoped>
.banner {
  position: relative;
  width: 100%;
  height: 575px;
  z-index: 1;
}

.category-item {
  cursor: pointer;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  transition:
    background-color 0.3s,
    color 0.3s,
    transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.category-item i {
  margin-bottom: 16px;
  background-color: transparent;
}

.category-item:hover {
  background-color: transparent;
  transform: scale(1.05);
}

.category-item:hover i {
  background-color: var(--primary-green);
  color: white;
}

.category-item.active i {
  background-color: var(--primary-green);
}

.category-item.active span {
  font-weight: bold;
}
</style>
