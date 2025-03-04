<script setup lang="ts">
import { ref } from 'vue';
import ANIMAL_DETAIL from '@/constants/mock/animalDetail';
import ANIMAL_RESCUE from '@/constants/mock/animalRescue';
import ANIMAL_SHELTERINFO from '@/constants/mock/animalShelterInfo';
import AdoptionAnimalCard from '@/components/adoption/AdoptionAnimalCard.vue';

// 클릭한 이미지의 src를 저장할 변수
const selectedImage = ref('/PNG-Image/images/cat.png');

const animalData = ANIMAL_DETAIL;
const RescueData = ANIMAL_RESCUE;
const SehlterData = ANIMAL_SHELTERINFO;
</script>

<template>
  <div>
    <div class="container-fluid p-0">
      <!-- 배너 섹션 -->
      <div class="position-relative">
        <div class="position-absolute top-50 start-0 translate-middle-y p-5 text-white ms-5">
          <h1 class="display-4 text-start" style="font-family: 'Paperlogy'; font-weight: 600">
            유기동물 조회
          </h1>
          <p class="lead text-start" style="font-family: 'Paperlogy'">
            그들의 내일을 바꿀 수 있는 사람은 바로, 당신입니다.
          </p>
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
            <img
              :src="selectedImage"
              alt="Animal Image"
              class="img-fluid rounded mb-3"
              style="max-width: 100%; height: 420px; object-fit: cover"
            />
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
            <div class="bg-secondary-green text-gray-1 p-3 my-3 text-center rounded">
              <div class="d-flex justify-content-center align-items-center">
                <i class="fa-solid fa-heart me-3" style="font-size: 20px"></i>
                <span class="fs-6 text-center">
                  당신의 사랑을 기다리는 생명들에게 새로운 시작을 선물하세요.
                </span>
              </div>
            </div>
          </div>

          <!-- 동물 정보 -->
          <div class="col-md-6">
            <h3 class="mb-4" style="font-family: 'Paperlogy'; font-weight: 600">동물 정보</h3>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                유기번호
                <span
                  class="fw-bold text-center"
                  style="display: inline-block; text-align: center"
                  >{{ animalData.desertionNo }}</span
                >
              </li>
              <li class="list-group-item">
                공고번호
                <span
                  class="fw-bold text-center"
                  style="display: inline-block; text-align: center"
                  >{{ animalData.noticeNo }}</span
                >
              </li>
              <li class="list-group-item">
                동물 종류
                <span
                  class="fw-bold text-center"
                  style="display: inline-block; text-align: center"
                  >{{ animalData.kindCd }}</span
                >
              </li>
              <li class="list-group-item">
                성별
                <span
                  class="fw-bold text-center"
                  :style="{
                    color:
                      animalData.sexCd === 'M'
                        ? 'var(--primary-blue)'
                        : animalData.sexCd === 'F'
                          ? 'var(--primary-red)'
                          : animalData.sexCd === 'Q'
                            ? 'var(--gray-1)'
                            : 'var(--primary-red)',
                    backgroundColor:
                      animalData.sexCd === 'M'
                        ? 'var(--secondary-blue)'
                        : animalData.sexCd === 'F'
                          ? 'var(--secondary-red)'
                          : animalData.sexCd === 'Q'
                            ? 'var(--secondary-green)'
                            : 'var(--primary-green)',
                    padding: '2px 8px',
                    borderRadius: '5px',
                    marginLeft: '10px',
                  }"
                >
                  {{
                    animalData.sexCd === 'M'
                      ? '수컷'
                      : animalData.sexCd === 'F'
                        ? '암컷'
                        : animalData.sexCd === 'Q'
                          ? '미상'
                          : ''
                  }}
                </span>
              </li>

              <li class="list-group-item">
                중성화
                <span
                  class="fw-bold text-center"
                  style="display: inline-block; text-align: center"
                  >{{ animalData.neuterYn === 'N' ? 'X' : 'O' }}</span
                >
              </li>
              <li class="list-group-item">
                나이
                <span
                  class="fw-bold text-center"
                  style="display: inline-block; text-align: center"
                  >{{ animalData.age }}</span
                >
              </li>
              <li class="list-group-item">
                체중
                <span
                  class="fw-bold text-center"
                  style="display: inline-block; text-align: center"
                  >{{ animalData.weight }}</span
                >
              </li>
              <li class="list-group-item">
                상태
                <span
                  class="fw-bold text-center"
                  style="display: inline-block; text-align: center"
                  >{{ animalData.processState }}</span
                >
              </li>
              <li class="list-group-item">
                공고 시작일
                <span
                  class="fw-bold text-center"
                  style="display: inline-block; text-align: center"
                  >{{ animalData.noticeSdt }}</span
                >
              </li>
              <li class="list-group-item">
                공고 종료일
                <span
                  class="fw-bold text-center"
                  style="display: inline-block; text-align: center"
                  >{{ animalData.noticeEdt }}</span
                >
              </li>
              <li class="list-group-item">
                특징
                <span
                  class="fw-bold text-center"
                  style="display: inline-block; text-align: center"
                  >{{ animalData.specialMark }}</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 구조 정보 표 -->
      <div class="container my-2">
        <h3 class="mb-4" style="font-weight: 700">구조 정보</h3>
        <table class="table table-bordered text-center">
          <tbody>
            <tr>
              <th scope="row" class="th-gray-3">구조 접수일</th>
              <td>{{ RescueData.happenDt }}</td>
            </tr>
            <tr>
              <th scope="row" class="th-gray-3">구조 장소</th>
              <td>{{ RescueData.happenPlace }}</td>
            </tr>
            <tr>
              <th scope="row" class="th-gray-3">공고 기간</th>
              <td>{{ RescueData.noticeSdt }} - {{ RescueData.noticeEdt }}</td>
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
        <h3 class="mb-4" style="font-weight: 700">동물 보호소 정보</h3>
        <table class="table table-bordered text-center">
          <tbody>
            <tr>
              <th scope="row" class="th-gray-3">보호소명</th>
              <td>{{ SehlterData.careNm }}</td>
            </tr>
            <tr>
              <th scope="row" class="th-gray-3">보호소 전화번호</th>
              <td>{{ SehlterData.cardTel }}</td>
            </tr>
            <tr>
              <th scope="row" class="th-gray-3">보호소 장소</th>
              <td>{{ SehlterData.cardAddr }}</td>
            </tr>
            <tr>
              <th scope="row" class="th-gray-3">관할 기관</th>
              <td>{{ SehlterData.ornNm }}</td>
            </tr>
            <tr>
              <th scope="row" class="th-gray-3">담당자</th>
              <td>{{ SehlterData.chargeNm }}</td>
            </tr>
            <tr>
              <th scope="row" class="th-gray-3">담당자 연락처</th>
              <td>{{ SehlterData.officetel }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 입양 신청서 작성하기 섹션 -->
      <div
        class="container my-5 p-5 bg-cover bg-center rounded-3"
        style="
          background-image: url('/PNG-Image/images/adoptformbtn.png');
          background-size: cover;
          background-position: center;
          height: 350px;
          margin-top: 100px !important;
        "
      >
        <div class="adopt-form-content">
          <h3 class="text-gray-1 fw-bold mb-4">
            입양 신청서 작성하기
            <i class="fa fa-paw" style="font-size: 2.5rem; margin-left: 10px"></i>
          </h3>

          <p class="text-gray-1" style="font-weight: 300; line-height: 1.6">
            사랑과 책임감을 가지고 입양을 고려해 주셔서 감사합니다.<br />
            반려동물은 오랜 시간 동안 함께할 소중한 가족이자 친구입니다.<br />
            신중하게 결정하시고, 입양 후에도 끝까지 책임을 다할 준비가 되어 있으신지 다시 한 번
            생각해 주세요.
          </p>
          <p class="text-gray-1 mb-4" style="font-weight: 300">
            아래 버튼을 클릭하여 입양신청서를 작성해 주세요.
          </p>
          <a href="your-adopt-form-url" class="btn btn-gray-1 text-primary-green">바로가기</a>
        </div>
      </div>

      <!-- 다른 입양 대기 중인 동물들 섹션 -->
      <div class="container my-5 px-4" :style="{ marginTop: '100px !important' }">
        <h5 class="text-start mb-2" style="font-weight: 700; color: #003459">
          다른 입양 대기 중인 동물들도 여러분을 기다리고 있어요<br />
        </h5>

        <h4 class="text-start text-gray-7 mb-4">입양 가능한 친구들을 만나보세요 🐾</h4>

        <!-- 카드 리스트 -->
        <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
          <div class="col">
            <AdoptionAnimalCard />
          </div>
          <div class="col">
            <AdoptionAnimalCard />
          </div>
          <div class="col">
            <AdoptionAnimalCard />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list-group-item {
  padding-top: 15px;
  padding-bottom: 15px;
}
span {
  padding-left: 10px;
}

.btn-gray-1 {
  background-color: var(--gray-1);
  padding: 10px 40px;
  border-radius: 30px;
  font-weight: 600;
  transition:
    background-color 0.2s,
    color 0.2s;
}

.btn-gray-1:hover {
  background-color: var(--primary-green);
  color: var(--gray-1) !important;
}

.th-gray-3 {
  background-color: var(--gray-3);
  padding: 10px;
}
td {
  padding: 10px;
}
</style>
