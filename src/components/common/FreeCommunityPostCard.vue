<script setup lang="ts">
import MOCK_FREE_COMMUNITY_POST from '@/constants/mock/freeCommunityPost';
</script>

<template>
  <div class="card">
    <img :src="MOCK_FREE_COMMUNITY_POST.imageURL" alt="card animal image" class="card-img-top" />
    <div class="card-body">
      <h4 v-if="MOCK_FREE_COMMUNITY_POST.title" class="card-title">
        {{ MOCK_FREE_COMMUNITY_POST.title }}
      </h4>
      <p class="card-text">{{ MOCK_FREE_COMMUNITY_POST.content }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 305px;
}

.card-img-top {
  min-height: 305px;
  object-fit: cover;
}

.card-title {
  font-size: 20px;
}

.card-text {
  font-size: 16px;
  color: var(--gray-7);
}
</style>
