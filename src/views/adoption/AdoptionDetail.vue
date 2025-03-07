<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
// supabase.ts 파일에 정의된 getAnimalInfo 함수를 import 합니다.
import { getAnimalInfo } from '@/apis/supabase';

const route = useRoute();
const animalDetail = ref<any>(null);
const rescueData = ref<any>(null);
const shelterData = ref<any>(null);
const error = ref<string | null>(null);

async function fetchAnimalDetail(id: string) {
  try {
    // supabase를 통해 동물 상세 정보를 가져옴 (반환값은 배열로 가정)
    const data = await getAnimalInfo(id);
    if (Array.isArray(data) && data.length > 0) {
      animalDetail.value = data[0];
      // 데이터에 구조 정보와 보호소 정보가 포함되어 있다고 가정하여 분리
      rescueData.value = {
        happenDt: data[0].happenDt || '',
        happenPlace: data[0].happenPlace || '',
        noticeSdt: data[0].noticeSdt || '',
        noticeEdt: data[0].noticeEdt || ''
      };
      shelterData.value = {
        careNm: data[0].careNm || '',
        cardTel: data[0].cardTel || '',
        cardAddr: data[0].cardAddr || '',
        ornNm: data[0].ornNm || '',
        chargeNm: data[0].chargeNm || '',
        officetel: data[0].officetel || ''
      };
    } else {
      error.value = '동물 정보를 찾을 수 없습니다.';
    }
  } catch (err: any) {
    console.error(err);
    error.value = '정보를 불러오는 도중 오류가 발생했습니다.';
  }
}

onMounted(() => {
  const id = route.params.id as string;
  if (id) {
    fetchAnimalDetail(id);
  }
});
</script>

<template>
  <div v-if="error" class="alert alert-danger">{{ error }}</div>
  <div v-else>
    <!-- 동물 상세 페이지 상단 배너 -->
    <div class="container-fluid p-0">
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
    </div>

    <!-- Supabase로 받아온 동물 상세 정보 표시 -->
    <div class="container py-5" v-if="animalDetail">
      <div class="row">
        <!-- 동물 큰 이미지 섹션 -->
        <div class="col-md-6 mb-4">
          <img
            :src="animalDetail.imageUrl || '/PNG-Image/images/cat.png'"
            alt="Animal Image"
            class="img-fluid rounded mb-3"
            style="max-width: 100%; height: 420px; object-fit: cover"
          />
          <div class="d-flex gap-3">
            <!-- 갤러리 이미지 클릭 시 이미지 변경 -->
            <img
              src="/PNG-Image/images/cat.png"
              alt="Gallery Image"
              class="img-thumbnail"
              style="width: 100px; height: 100px; object-fit: cover"
              @click="animalDetail.imageUrl = '/PNG-Image/images/cat.png'"
            />
            <img
              src="/PNG-Image/images/cat.png"
              alt="Gallery Image"
              class="img-thumbnail"
              style="width: 100px; height: 100px; object-fit: cover"
              @click="animalDetail.imageUrl = '/PNG-Image/images/cat.png'"
            />
            <img
              src="/PNG-Image/images/dog.png"
              alt="Gallery Image"
              class="img-thumbnail"
              style="width: 100px; height: 100px; object-fit: cover"
              @click="animalDetail.imageUrl = '/PNG-Image/images/dog.png'"
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

        <!-- 동물 정보 섹션 -->
        <div class="col-md-6">
          <h3 class="mb-4" style="font-family: 'Paperlogy'; font-weight: 600">동물 정보</h3>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              유기번호
              <span class="fw-bold text-center">{{ animalDetail.desertionNo }}</span>
            </li>
            <li class="list-group-item">
              공고번호
              <span class="fw-bold text-center">{{ animalDetail.noticeNo }}</span>
            </li>
            <li class="list-group-item">
              동물 종류
              <span class="fw-bold text-center">{{ animalDetail.kindCd }}</span>
            </li>
            <li class="list-group-item">
              성별
              <span
                class="fw-bold text-center"
                :style="{
                  color:
                    animalDetail.sexCd === 'M'
                      ? 'var(--primary-blue)'
                      : animalDetail.sexCd === 'F'
                        ? 'var(--primary-red)'
                        : 'var(--gray-1)',
                  backgroundColor:
                    animalDetail.sexCd === 'M'
                      ? 'var(--secondary-blue)'
                      : animalDetail.sexCd === 'F'
                        ? 'var(--secondary-red)'
                        : 'var(--secondary-green)',
                  padding: '2px 8px',
                  borderRadius: '5px',
                  marginLeft: '10px'
                }"
              >
                {{
                  animalDetail.sexCd === 'M'
                    ? '수컷'
                    : animalDetail.sexCd === 'F'
                      ? '암컷'
                      : '미상'
                }}
              </span>
            </li>
            <li class="list-group-item">
              특징
              <span class="fw-bold text-center">{{ animalDetail.specialMark }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 구조 정보 섹션 -->
    <div class="container my-2" v-if="rescueData">
      <h3 class="mb-4" style="font-weight: 700">구조 정보</h3>
      <table class="table table-bordered text-center">
        <tbody>
          <tr>
            <th scope="row" class="th-gray-3">구조 접수일</th>
            <td>{{ rescueData.happenDt }}</td>
          </tr>
          <tr>
            <th scope="row" class="th-gray-3">구조 장소</th>
            <td>{{ rescueData.happenPlace }}</td>
          </tr>
          <tr>
            <th scope="row" class="th-gray-3">공고 기간</th>
            <td>{{ rescueData.noticeSdt }} - {{ rescueData.noticeEdt }}</td>
          </tr>
        </tbody>
      </table>
      <div class="d-flex align-items-center text-muted">
        <i class="bi bi-exclamation-circle-fill me-2" style="font-size: 1.5rem"></i>
        유기동물 문의는 보호센터에 연락하시기 바랍니다.
      </div>
    </div>

    <!-- 보호소 정보 섹션 -->
    <div class="container my-5" v-if="shelterData">
      <h3 class="mb-4" style="font-weight: 700">동물 보호소 정보</h3>
      <table class="table table-bordered text-center">
        <tbody>
          <tr>
            <th scope="row" class="th-gray-3">보호소명</th>
            <td>{{ shelterData.careNm }}</td>
          </tr>
          <tr>
            <th scope="row" class="th-gray-3">보호소 전화번호</th>
            <td>{{ shelterData.cardTel }}</td>
          </tr>
          <tr>
            <th scope="row" class="th-gray-3">보호소 장소</th>
            <td>{{ shelterData.cardAddr }}</td>
          </tr>
          <tr>
            <th scope="row" class="th-gray-3">관할 기관</th>
            <td>{{ shelterData.ornNm }}</td>
          </tr>
          <tr>
            <th scope="row" class="th-gray-3">담당자</th>
            <td>{{ shelterData.chargeNm }}</td>
          </tr>
          <tr>
            <th scope="row" class="th-gray-3">담당자 연락처</th>
            <td>{{ shelterData.officetel }}</td>
          </tr>
        </tbody>
      </table>
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
