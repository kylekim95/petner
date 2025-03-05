<script setup lang="ts">
import CommunityPosts from '@/components/travel/travelDetail/CommunityPosts.vue';

const dummyData = {
  name : '가람초연재'
}
</script>

<template>
  <div>
    <div class="container p-5" style="width: 67%; min-width: 1280px;">
      <CommunityPosts :name="dummyData.name" :data="[]" />
    </div>
  </div>
</template>

