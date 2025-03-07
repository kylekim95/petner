<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import PostCard from '@/components/community/PostCard.vue';

const router = useRouter();
const filter = ref('latest');
const currentPage = ref(1);
const cardsPerPage = 6;

// ---------- programmers api ----------
import {
  getChannelPosts,
  type GetChannelPostsResponse,
} from '@/apis/devcourse/Post/getChannelPosts';
import * as CHANID from '@/constants/communityConsts';
const postsData = ref<GetChannelPostsResponse>();
console.log(postsData);
onMounted(async () => {
  postsData.value = await getChannelPosts({ channelId: CHANID.FreeChannelId, limit: 6, offset: 0 });
  console.log(postsData.value.posts);
});
// ---------- programmers api ----------

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

const handleWriteButton = () => {
  router.push('/community/free/form');
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
      <h3 class="fw-bold mb-4" style="font-family: 'Paperlogy'; font-size: 2.5rem">
        소중한 반려동물과의 이야기, <br />
        함께 나누는 공간
      </h3>
      <p
        style="
          font-family: 'Paperlogy';
          font-size: 1.5rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        "
      >
        펫트너와 함께하는 따뜻한 커뮤니티에서, 여러분의 이야기와 정보가 큰 도움이 됩니다!
      </p>
    </div>
  </div>

  <!-- 필터 & 글 작성 헤더 -->
  <div class="container my-5 header-row">
    <div class="d-flex flex-wrap justify-content-between align-items-center">
      <div class="filter-group d-flex gap-3">
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
      <button class="write-button btn" @click="handleWriteButton">
        <i class="bi bi-pencil-square"></i> 글 작성하기
      </button>
    </div>
  </div>

  <!-- 카드 리스트 -->
  <div class="container" style="max-width: 1280px; margin: 0 auto">
    <div class="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
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
.header-row {
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 15px;
  margin-bottom: 30px;
}

.filter-button {
  font-size: 1rem;
  font-weight: 500;
  color: var(--gray-7);
  cursor: pointer;
  font-family: 'Paperlogy';
  transition: all 0.3s ease;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 6px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
}

.filter-button:hover {
  background-color: #f8f9fa;
  color: var(--primary-purple);
  transform: scale(1.05);
}

.filter-button.active {
  background-color: var(--primary-purple);
  color: #fff;
  border-color: var(--primary-purple);
  font-weight: 700;
}

.filter-button i {
  font-size: 1.25rem;
}

.write-button {
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Paperlogy';
  padding: 10px 20px;
  border-radius: 6px;
  border: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: var(--primary-purple);
  color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.write-button:hover {
  opacity: 0.9;
}

.write-button i {
  font-size: 1.25rem;
}
</style>
