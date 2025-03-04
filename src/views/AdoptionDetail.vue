<script setup lang="ts">
import { ref } from 'vue';
import AppHeader from '@/components/common/AppHeader.vue';
import AppFooter from '@/components/common/AppFooter.vue';
import ANIMAL_DETAIL from '@/constants/mock/animalDetail';

// 클릭한 이미지의 src를 저장할 변수
const selectedImage = ref('/PNG-Image/images/cat.png');


const animalData = ANIMAL_DETAIL;
</script>

<template>
  <div>
    <div class="container-fluid p-0">
      <AppHeader />

      <!-- 배너 섹션 -->
      <div class="position-relative">
        <div class="position-absolute top-50 start-0 translate-middle-y p-5 text-white ms-5">
          <h1 class="display-4 text-start">유기동물 조회</h1>
          <p class="lead text-start">그들의 내일을 바꿀 수 있는 사람은 바로, 당신입니다.</p>
        </div>
        <img
          src="/PNG-Image/images/adoptdetailbanner.png"
          alt="Adopt Detail Banner"
          class="img-fluid"
          style="object-fit: cover; width: 100%; height: 384px"
        />
      </div>

      <!-- 동물 상세 정보 섹션 -->
      <div class="container py-5">
        <div class="row">
          <!-- 동물 큰 이미지 -->
          <div class="col-md-6 mb-4">
            <img :src="selectedImage" alt="Animal Image" class="img-fluid rounded mb-3" />
            <div class="d-flex gap-3">
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
            <div class="bg-success text-white p-3 my-3 text-center rounded">
              <div class="d-flex justify-content-center align-items-center">
                <i class="fa-solid fa-heart me-3" style="font-size: 20px"></i>
                <span class="fs-6">
                  당신의 사랑을 기다리는 생명들에게 새로운 시작을 선물하세요.
                </span>
              </div>
            </div>
          </div>

          <!-- 동물 정보 -->
          <div class="col-md-6">
            <h3 class="mb-4">동물 정보</h3>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                유기번호 <span class="fw-bold">{{ animalData.desertionNo }}</span>
              </li>
              <li class="list-group-item">
                공고번호 <span class="fw-bold">{{ animalData.noticeNo }}</span>
              </li>
              <li class="list-group-item">
                동물 종류 <span class="fw-bold">{{ animalData.kindCd }}</span>
              </li>
              <li class="list-group-item">
                성별 <span class="fw-bold">{{ animalData.sexCd === 'M' ? '수컷' : '암컷' }}</span>
              </li>
              <li class="list-group-item">
                나이 <span class="fw-bold">{{ animalData.age }}</span>
              </li>
              <li class="list-group-item">
                체중 <span class="fw-bold">{{ animalData.weight }}</span>
              </li>
              <li class="list-group-item">
                상태 <span class="fw-bold">{{ animalData.processState }}</span>
              </li>
              <li class="list-group-item">
                공고 시작일 <span class="fw-bold">{{ animalData.noticeSdt }}</span>
              </li>
              <li class="list-group-item">
                공고 종료일 <span class="fw-bold">{{ animalData.noticeEdt }}</span>
              </li>
              <li class="list-group-item">
                특징 <span class="fw-bold">{{ animalData.specialMark }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 구조 정보 표 -->
      <div class="container my-5">
        <h3 class="mb-4">구조 정보</h3>
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
        <div class="d-flex align-items-center text-muted">
          <i class="bi bi-exclamation-circle-fill me-2" style="font-size: 1.5rem"></i>
          유기동물 문의는 보호센터에 연락하시기 바랍니다.
        </div>
      </div>

      <!-- 동물 보호소 정보 표 -->
      <div class="container my-5">
        <h3 class="mb-4">동물 보호소 정보</h3>
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
      <div
        class="container my-5 p-5 bg-cover bg-center rounded-3"
        style="background-image: url('/PNG-Image/images/adoptformbtn.png')"
      >
        <div class="adopt-form-content">
          <h3 class="text-white">
            입양 신청서 작성하기
            <i class="fa fa-paw" style="font-size: 2.5rem; margin-left: 10px"></i>
          </h3>

          <p class="text-white">
            사랑과 책임감을 가지고 입양을 고려해 주셔서 감사합니다.<br />
            반려동물은 오랜 시간 동안 함께할 소중한 가족이자 친구입니다.<br />
            신중하게 결정하시고, 입양 후에도 끝까지 책임을 다할 준비가 되어 있으신지 다시 한 번
            생각해 주세요.
          </p>
          <p class="text-white">아래 버튼을 클릭하여 입양신청서를 작성해 주세요.</p>
          <a href="your-adopt-form-url" class="btn btn-light text-success">바로가기</a>
        </div>
      </div>

      <AppFooter />
    </div>
  </div>
</template>

<style scoped></style>
