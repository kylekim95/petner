<script setup lang="ts">
import FreeCommunityPostCard from '@/components/common/FreeCommunityPostCard.vue';
import MOCK_FREE_COMMUNITY_POST from '@/constants/mock/freeCommunityPost';

const mockCommunityData = Array(5).fill(MOCK_FREE_COMMUNITY_POST); // TODO : Fetch data

const CardListData = mockCommunityData.slice(0, 4);
</script>

<template>
  <div>
    <div class="mb-4">
      <span class="title">입양후기</span>
      <span class="sub-title"># 새로운 삶을 시작한 반려동물들의 이야기를 들려주세요</span>
    </div>
    <div class="cardlist-wrapper">
      <FreeCommunityPostCard v-for="(item, index) of CardListData" :key="index" :item="item" />
    </div>
  </div>
</template>

<style scoped>
.title {
  color: var(--gray-10);
  font-size: 36px;
  font-weight: 700;
  margin-right: 70px;
}

.sub-title {
  color: var(--gray-7);
  font-size: 24px;
}

.cardlist-wrapper {
  display: flex;
  gap: 20px;
  overflow: scroll;
  width: 100%;
}
</style>
