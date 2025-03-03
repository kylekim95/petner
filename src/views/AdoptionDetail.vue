<script setup lang="ts">
import { ref } from 'vue';
import AppHeader from '@/components/common/AppHeader.vue';
import AppFooter from '@/components/common/AppFooter.vue';

// 클릭한 이미지의 src를 저장할 변수
const selectedImage = ref('/PNG-Image/images/cat.png');
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
            <img
              :src="selectedImage"
              alt="Animal Image"
              class="img-fluid rounded mb-3 large-image"
            />
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
            <div class="info-section p-3 my-3 text-white text-center">
              <div class="d-flex justify-content-center align-items-center">
                <i class="fa-solid fa-heart me-3" style="font-size: 20px"></i>
                <span class="fs-6"
                  >당신의 사랑을 기다리는 생명들에게 새로운 시작을 선물하세요.</span
                >
              </div>
            </div>
          </div>

          <!-- 동물 정보 -->
          <div class="col-md-6">
            <h3 class="mb-4">동물 정보</h3>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">공고번호 <span>0101234567890</span></li>
              <li class="list-group-item">동물 종류 <span>0101234567890</span></li>
              <li class="list-group-item">품종 <span>0101234567890</span></li>
              <li class="list-group-item">성별 <span>0101234567890</span></li>
              <li class="list-group-item">나이 <span>0101234567890</span></li>
              <li class="list-group-item">체중 <span>0101234567890</span></li>
              <li class="list-group-item">상태 <span>0101234567890</span></li>
              <li class="list-group-item">공고 시작일 <span>0101234567890</span></li>
              <li class="list-group-item">공고 종료일 <span>0101234567890</span></li>
              <li class="list-group-item">특징 <span>0101234567890</span></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 구조 정보 표 -->
      <div class="container my-5">
        <h3 class="mb-4 title">구조 정보</h3>
        <table class="table table-bordered">
          <tbody>
            <tr>
              <th scope="row">구조 접수일</th>
              <td class="text-center">2025-02-24</td>
            </tr>
            <tr>
              <th scope="row">구조 장소</th>
              <td class="text-center">진주시 미번천 항로 370번길 88</td>
            </tr>
            <tr>
              <th scope="row">공고 기간</th>
              <td class="text-center">2025-02-24 - 2025-03-06</td>
            </tr>
          </tbody>
        </table>
        <div class="d-flex align-items-center" style="color: var(--gray-7)">
          <i class="bi bi-exclamation-circle-fill me-2" style="font-size: 1.5rem"></i>
          유기동물 문의는 보호센터에 연락하시기 바랍니다.
        </div>
      </div>

      <!-- 동물 보호소 정보 표 -->
      <div class="container my-5">
        <h3 class="mb-4 title">동물 보호소 정보</h3>
        <table class="table table-bordered">
          <tbody>
            <tr>
              <th scope="row">보호소명</th>
              <td class="text-center">이기사항수의과병원</td>
            </tr>
            <tr>
              <th scope="row">보호소 전화번호</th>
              <td class="text-center">02-1234-5678</td>
            </tr>
            <tr>
              <th scope="row">보호소 장소</th>
              <td class="text-center">충청남도 공주시 팀병리7 (반죽동)</td>
            </tr>
            <tr>
              <th scope="row">관할 기관</th>
              <td class="text-center">충청남도 공주시</td>
            </tr>
            <tr>
              <th scope="row">담당자</th>
              <td class="text-center">홍길동</td>
            </tr>
            <tr>
              <th scope="row">담당자 연락처</th>
              <td class="text-center">010-1234-5678</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 입양 신청서 작성하기 섹션 -->
      <div class="adopt-form-container container my-5">
        <div class="adopt-form-content">
          <h3>
            입양 신청서 작성하기
            <i class="fa fa-paw" style="font-size: 2.5rem; margin-left: 10px"></i>
          </h3>

          <p>
            사랑과 책임감을 가지고 입양을 고려해 주셔서 감사합니다.<br />
            반려동물은 오랜 시간 동안 함께할 소중한 가족이자 친구입니다.<br />
            신중하게 결정하시고, 입양 후에도 끝까지 책임을 다할 준비가 되어 있으신지 다시 한 번
            생각해 주세요.
          </p>
          <p>아래 버튼을 클릭하여 입양신청서를 작성해 주세요.</p>
          <a href="your-adopt-form-url" class="btn btn-primary">바로가기</a>
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
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.list-group-item span {
  margin-left: 20px;
  font-weight: bold;
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

.large-image {
  max-width: 100%;
  max-height: 400px;
  object-fit: contain;
}

.title {
  font-weight: bold;
  display: flex;
}

.table th {
  background: var(--gray-3);
  text-align: center;
  padding: 15px;
  border-left: none;
}
.table td {
  text-align: center;
  padding: 15px;
  border-right: none;
}

.table th {
  width: 25%;
}

.adopt-form-container {
  background-image: url('/PNG-Image/images/adoptformbtn.png');
  background-size: cover;
  background-position: center;
  max-width: 1280px;
  padding: 30px;
  height: 440px;
  display: flex;
  justify-content: start;
  align-items: center;
  color: white;
  border-radius: 15px;
}

.adopt-form-content {
  padding: 50px;
}

.adopt-form-content h3 {
  font-size: 40px;
  margin-bottom: 40px;
  text-align: start;
}

.adopt-form-content p {
  font-size: 16px;
  margin-bottom: 20px;
  line-height: 1.8;
  text-align: start;
  font-family: 'Pretendard';
  font-weight: 300;
}

.adopt-form-content .btn {
  font-size: 16px;
  padding: 10px 30px;
  background-color: var(--gray-1);
  color: var(--primary-green);
  text-decoration: none;
  border-radius: 30px;
  transition: background-color 0.2s ease;
}

.adopt-form-content .btn:hover {
  background-color: var(--primary-green);
  color: var(--gray-1);
}
</style>
