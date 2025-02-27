<script setup lang="ts">
import PNG_IMAGES from '../../../public/PNG-Image/image';
const mockImageURL = PNG_IMAGES.cat;
</script>

<template>
  <div class="card">
    <img :src="mockImageURL" alt="card animal image" class="card-img-top" />
    <div class="card-body">
      <h4 class="card-title">눈내리는날 글램핑 다녀왔어요</h4>
      <p class="card-text">눈밭에서 뛰어놀고 쿨쿨따</p>
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
