<script setup lang="ts">
import { ref } from 'vue';
import PostCard from '@/components/community/PostCard.vue';

const filter = ref('latest'); // 초기 필터는 최신순
const currentPage = ref(1);
const cardsPerPage = 6;

// 카드 데이터 (임시로 12개의 데이터 사용)
const cards = new Array(12).fill(0).map((_, index) => ({
  imageUrl: 'https://cdn.pixabay.com/photo/2024/01/15/21/16/dog-8510901_1280.jpg',
  avatarWidth: '40px',
  avatarHeight: '40px',
}));

const handleFilterChange = (newFilter: string) => {
  filter.value = newFilter;
  // 여기에 필터링 로직 추가
};

// 페이지에 표시할 카드 계산
const startIndex = (currentPage.value - 1) * cardsPerPage;
const currentCards = cards.slice(startIndex, startIndex + cardsPerPage);
</script>

<template>
  <div class="banner-section position-relative">
    <img
      src="/PNG-Image/images/freecommunitybanner.png"
      alt="Community Banner"
      class="img-fluid"
      style="object-fit: cover; width: 100%; height: 500px"
    />
    <div class="position-absolute top-50 start-50 translate-middle text-center text-white">
      <h3 class="fw-bold mb-3" style="font-family: 'Paperlogy'; font-size: 2.5rem">
        소중한 반려동물과의 이야기, <br />
        함께 나누는 공간
      </h3>
      <p
        style="
          font-family: 'Paperlogy';
          font-size: 1.25rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        "
      >
        펫트너와 함께하는 따뜻한 커뮤니티에서, 여러분의 이야기와 정보가 큰 도움이 됩니다!
      </p>
    </div>
  </div>

  <!-- 필터 버튼 -->
  <div class="filter-section container d-flex gap-3 justify-content-start my-5">
    <button
      class="filter-button btn btn-link"
      :class="{ active: filter === 'latest' }"
      @click="handleFilterChange('latest')"
    >
      최신순
    </button>
    <button
      class="filter-button btn btn-link"
      :class="{ active: filter === 'popular' }"
      @click="handleFilterChange('popular')"
    >
      인기순
    </button>
    <button
      class="filter-button btn btn-link"
      :class="{ active: filter === 'comments' }"
      @click="handleFilterChange('comments')"
    >
      댓글순
    </button>
  </div>

  <!-- 카드 리스트 -->
  <div
    class="card-list container d-grid gap-2 mb-4 py-2"
    style="
      max-width: 1280px;
      margin: 0 auto;
      grid-template-columns: repeat(2, 1fr);
      justify-items: center;
      padding-right: 80px;
    "
  >
    <!-- 카드 표시 -->
    <div v-for="(card, index) in currentCards" :key="index" class="card-item">
      <PostCard
        width="550px"
        height="670px"
        imageHeight="430px"
        :imageUrl="card.imageUrl"
        :avatarWidth="card.avatarWidth"
        :avatarHeight="card.avatarHeight"
      />
    </div>
  </div>
</template>

<style scoped>
.filter-button {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--gray-7);
  cursor: pointer;
  font-family: 'Paperlogy';
  transition: color 0.3s;
  text-decoration: none;
}

.filter-button:hover {
  color: var(--primary-purple);
}

.filter-button.active {
  font-weight: 700;
  color: var(--primary-purple);
}

.card-item {
  margin-bottom: 25px;
}
</style>
