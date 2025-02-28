<script setup lang="ts">
import { defineProps } from 'vue';

// Props 정의
const props = defineProps<{
  width: string;
  height: string;
  imageUrl: string;
}>();
</script>

<template>
  <div
    class="ms-5 overflow-hidden"
    :style="{ width: props.width, height: props.height, borderRadius: '16px' }"
  >
    <div class="position-relative z-0 filter">
      <img
        :src="props.imageUrl"
        alt="강아지"
        :width="props.width"
        :height="props.height"
        style="filter: brightness(0.7)"
      />
      <div
        class="z-1 text-white position-absolute d-flex flex-column"
        :style="{ bottom: '20px', marginLeft: '20px' }"
      >
        <div class="" :style="{ fontSize: '2rem', fontWeight: '800' }">
          <span :style="{ color: '#2c63f6' }">Toss</span> <span>Bank</span>
        </div>
        <span class="" :style="{ fontSize: '20px', fontWeight: '600' }">함께 겨울나기 캠페인</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
