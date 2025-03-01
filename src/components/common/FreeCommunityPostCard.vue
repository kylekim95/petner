<script setup lang="ts">
import { defineProps } from 'vue';
interface CommunityPost {
  title: string;
  imageURL: string;
  content: string;
  author: string;
}

defineProps<{
  item: CommunityPost;
}>();
</script>

<template>
  <div class="card">
    <img :src="item.imageURL" alt="card animal image" class="card-img-top" />
    <div class="card-body">
      <h4 v-if="item.title" class="card-title">
        {{ item.title }}
      </h4>
      <p class="card-text">{{ item.content }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  min-width: 305px;
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
