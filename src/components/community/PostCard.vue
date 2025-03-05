<script setup lang="ts">
import { defineProps } from 'vue';
// Props 정의
const props = defineProps<{
  imageUrl: string;
}>();
</script>
<template>
  <div

    class="overflow-hidden border border-gray-7"

    :style="{ width: '90%', height: '670px', borderRadius: '15px' }"
  >
    <!-- 이미지 영역 -->
    <div class="position-relative z-0 filter">
      <img
        :src="props.imageUrl"
        alt="강아지"
        width="100%"
        height="430px"
        style="filter: brightness(0.7)"
      />
    </div>
    <!-- 텍스트 영역 -->
    <div class="d-flex flex-column mt-3 mx-3 gap-3" :style="{ height: '100px' }">
      <!-- 프로필 영역 -->
      <div class="d-flex flex-row align-items-center gap-3">
        <div
          class="overflow-hidden"
          :style="{ width: '40px', height: '40px', borderRadius: '40px' }"
        >
          <img
            src="https://cdn.pixabay.com/photo/2016/04/19/15/13/minion-1338858_1280.jpg"
            alt="강아지"
            width="40px"
            height="40px"
            style="filter: brightness(0.7)"
          />
        </div>
        <span class="text-gray-7 fw-medium" :style="{ fontSize: '24px', fontWeight: '500' }"
          >jungseok</span
        >
      </div>
      <div class="fw-bold" :style="{ fontSize: '20px' }">저희 집 댕댕이와 캠핑 다녀왔어요</div>
      <div class="text-gray-7" :style="{ fontSize: '16px', fontWeight: '300' }">
        부산에 있는 캠피장 다녀왔는데 기대했던거 이상이에요. 꼭한번 가보시는걸 추천드려요!
      </div>
      <div class="d-flex flex-row align-content-center justify-content-between">
        <div class="d-flex flex-row align-items-center gap-3">
          <div class="d-flex flex-row align-items-center gap-1">
            <i
              class="bi bi-suit-heart-fill"
              style="color: #dc3644"
              :style="{ fontSize: '20px' }"
            ></i>
            <span :style="{ fontSize: '16px', fontWeight: '700' }">3</span>
          </div>
          <div class="d-flex flex-row align-items-center gap-1">
            <i class="bi bi-chat" :style="{ fontSize: '20px' }"></i>
            <span :style="{ fontSize: '16px', fontWeight: '700' }">4</span>
          </div>
        </div>
        <span :style="{ fontSize: '16px', fontWeight: '700' }">2시간 전</span>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
