<script setup lang="ts">
import { ref } from 'vue';
import AppHeader from '@/components/common/AppHeader.vue';
import AppFooter from '@/components/common/AppFooter.vue';

// 클릭한 이미지의 src를 저장할 변수
const selectedImage = ref('/PNG-Image/images/cat.png'); // 초기 큰 이미지는 첫 번째 이미지로 설정
</script>

<template>
  <div>
    <div class="container-fluid p-0">
      <AppHeader />

      <!-- 배너 섹션 -->
      <div class="banner-container position-relative">
        <div class="position-absolute top-50 start-0 translate-middle-y p-5 text-white ml-5">
          <h1 class="display-4 text-left">유기동물 조회</h1>
          <p class="lead text-left">그들의 내일을 바꿀 수 있는 사람은 바로, 당신입니다.</p>
        </div>
        <img
          src="/PNG-Image/images/adoptdetailbanner.png"
          alt="Adopt Detail Banner"
          class="img-fluid"
          style="object-fit: cover; width: 100%; height: 384px"
        />
      </div>

      <!-- 동물 상세 정보 섹션 -->
      <div class="animal-details container py-5">
        <div class="row">
          <!-- 동물 큰 이미지 -->
          <div class="col-md-6">
            <img :src="selectedImage" alt="Animal Image" class="img-fluid rounded mb-3" />
            <div class="gallery d-flex gap-3">
              <img
                src="/PNG-Image/images/cat.png"
                alt="Gallery Image"
                class="img-thumbnail"
                style="width: 100px; height: 100px; object-fit: cover"
                @click="selectedImage = '/PNG-Image/images/cat.png'"
              />
              <img
                src="/PNG-Image/images/cat.png"
                alt="Gallery Image"
                class="img-thumbnail"
                style="width: 100px; height: 100px; object-fit: cover"
                @click="selectedImage = '/PNG-Image/images/cat.png'"
              />
              <img
                src="/PNG-Image/images/dog.png"
                alt="Gallery Image"
                class="img-thumbnail"
                style="width: 100px; height: 100px; object-fit: cover"
                @click="selectedImage = '/PNG-Image/images/dog.png'"
              />
            </div>
            <!-- 텍스트 섹션 -->
            <div class="info-section p-4 my-3 text-white text-center">
              <div class="d-flex justify-content-center align-items-center">
                <i class="fa-solid fa-heart me-3" style="font-size: 30px"></i>
                <span class="fs-5">당신의 사랑을 기다리는 생명들에게 새로운 시작을 선물하세요.</span>
              </div>
            </div>
          </div>

          <!-- 동물 정보 -->
          <div class="col-md-6">
            <h3 class="mb-4">동물 정보</h3>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">공고번호: 0101234567890</li>
              <li class="list-group-item">동물 종류: 개</li>
              <li class="list-group-item">품종: 시바견</li>
              <li class="list-group-item">성별: 수컷</li>
              <li class="list-group-item">나이: 5살</li>
              <li class="list-group-item">체중: 5kg</li>
              <li class="list-group-item">상태: 입양 가능</li>
              <li class="list-group-item">공고 시작일: 2024-01-01</li>
              <li class="list-group-item">공고 종료일: 2024-12-31</li>
            </ul>
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  </div>
</template>

<style scoped>
.banner-container {
  position: relative;
  width: 100%;
  height: 384px;
}

.banner-container img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

h1,
p {
  font-family: 'Paperlogy';
}

h1 {
  font-size: 3rem;
  font-weight: 700;
}

p {
  font-size: 1.5rem;
}

.animal-details img {
  width: 100%;
  height: auto;
}

.gallery img {
  cursor: pointer;
}

.list-group-item {
  font-size: 1.1rem;
  border-bottom: 2px solid #ebeeef;
  border-left: none;
  border-right: none;
}

button {
  font-size: 1.2rem;
}

h3 {
  font-weight: bold;
}

.info-section {
  background-color: var(--secondary-green);
  border-radius: 10px;
  width: 100%;
}

.info-section i {
  object-fit: contain;
}

.info-section span {
  font-size: 1.25rem;
}

.large-image {
  max-width: 100%;
  max-height: 400px;
  object-fit: contain; 
}
</style>
