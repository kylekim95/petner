<script setup lang="ts">
import CampaignCard from '@/components/common/CampaignCard.vue';
import MissingCommunityPostCard from '@/components/community/MissingCommunityPostCard.vue';
import PostCard from '@/components/community/PostCard.vue';
</script>

<template>
  <div>
    <h1>SJS Hello World!</h1>
    <br />
    <h2>CampaignCard</h2>
    <CampaignCard
      width="399px"
      height="308px"
      imageUrl="https://cdn.pixabay.com/photo/2019/11/07/08/40/puppy-4608266_1280.jpg"
    />
    <br /><br /><br /><br /><br />
    <h2>MissingCommunityPostCard</h2>
    <MissingCommunityPostCard
      width="580px"
      height="780px"
      imageHeight="560px"
      imageUrl="https://cdn.pixabay.com/photo/2024/01/15/21/16/dog-8510901_1280.jpg"
      avatarWidth="40px"
      avatarHeight="40px"
    />
  </div>
  <br /><br /><br /><br /><br />
  <h2>PostCard</h2>
  <PostCard
    width="580px"
    height="780px"
    imageHeight="560px"
    imageUrl="https://cdn.pixabay.com/photo/2024/01/15/21/16/dog-8510901_1280.jpg"
    avatarWidth="40px"
    avatarHeight="40px"
  />
  <br /><br /><br /><br /><br />
</template>
