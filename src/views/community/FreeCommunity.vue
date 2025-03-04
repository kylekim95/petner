<script setup lang="ts">
import { ref } from 'vue';
import PostCard from '@/components/community/PostCard.vue';

const filter = ref('latest');
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
  <div class="container my-5">
    <div class="d-flex justify-content-center gap-5">
      <button
        class="filter-button btn"
        :class="{ active: filter === 'latest' }"
        @click="handleFilterChange('latest')"
      >
        <i class="bi bi-clock"></i> 최신순
      </button>
      <button
        class="filter-button btn"
        :class="{ active: filter === 'popular' }"
        @click="handleFilterChange('popular')"
      >
        <i class="bi bi-star"></i> 인기순
      </button>
      <button
        class="filter-button btn"
        :class="{ active: filter === 'comments' }"
        @click="handleFilterChange('comments')"
      >
        <i class="bi bi-chat"></i> 댓글순
      </button>
    </div>
  </div>

  <!-- 카드 리스트 -->
  <div class="container" style="max-width: 1280px; margin: 0 auto">
    <div class="row row-cols-1 row-cols-md-2 g-1 justify-content-center">
      <!-- 카드 표시 -->
      <div
        v-for="(card, index) in currentCards"
        :key="index"
        class="col d-flex justify-content-center"
      >
        <PostCard
          width="100%"
          height="670px"
          imageHeight="430px"
          :imageUrl="card.imageUrl"
          :avatarWidth="card.avatarWidth"
          :avatarHeight="card.avatarHeight"
          class="rounded-3 shadow-sm mb-5"
        />
      </div>
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
  transition: all 0.3s ease;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  border-radius: 8px;
}

.filter-button:hover {
  background-color: #f8f9fa;
  color: var(--primary-purple);
  transform: scale(1.05);
}

.filter-button.active {
  background-color: var(--primary-purple);
  color: white;
  font-weight: 700;
}

.filter-button i {
  font-size: 1.5rem;
}
</style>
