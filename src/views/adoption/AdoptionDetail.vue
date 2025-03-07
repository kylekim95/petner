<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getAnimalInfo } from '@/apis/supabase';
import AdoptionAnimalCard from '@/components/adoption/AdoptionAnimalCard.vue';

// 날짜 포맷 함수: YYYYMMDD -> YYYY-MM-DD
function formatDate(dateStr: string): string {
  if (dateStr && dateStr.length === 8) {
    return `${dateStr.substring(0, 4)}-${dateStr.substring(4, 6)}-${dateStr.substring(6, 8)}`;
  }
  return dateStr;
}

const route = useRoute();
console.log('Route params:', route.params);

const animalDetail = ref<any>(null);
const rescueData = ref<any>(null);
const shelterData = ref<any>(null);
const error = ref<string | null>(null);

async function fetchAnimalDetail(id: string) {
  console.log('Fetching animal detail for id:', id);
  try {
    const data = await getAnimalInfo(id);
    console.log('API response:', data);
    if (Array.isArray(data) && data.length > 0) {
      animalDetail.value = data[0];
      console.log('Animal detail:', animalDetail.value);
      rescueData.value = {
        happenDt: formatDate(data[0].happenDt || ''),
        happenPlace: data[0].happenPlace || '',
        noticeSdt: formatDate(data[0].noticeSdt || ''),
        noticeEdt: formatDate(data[0].noticeEdt || ''),
      };
      shelterData.value = {
        careNm: data[0].careNm || '-',
        careTel: data[0].careTel || '-',
        careAddr: data[0].careAddr || '-',
        orgNm: data[0].orgNm || '-',
        chargeNm: data[0].chargeNm || '-',
        officetel: data[0].officetel || '-',
      };
      console.log('Rescue data:', rescueData.value);
      console.log('Shelter data:', shelterData.value);
    } else {
      error.value = '동물 정보를 찾을 수 없습니다.';
      console.error('No animal data found.');
    }
  } catch (err: any) {
    console.error('Error fetching animal detail:', err);
    error.value = '정보를 불러오는 도중 오류가 발생했습니다.';
  }
}

onMounted(() => {
  const id = route.params.animalId as string;
  console.log('Animal ID from route:', id);
  if (id) {
    fetchAnimalDetail(id);
  } else {
    error.value = '동물 ID가 제공되지 않았습니다.';
    console.error('No animal ID provided in route params.');
  }
});
</script>

<template>
  <div v-if="error" class="alert alert-danger">{{ error }}</div>
  <div v-else>
    <!-- 상단 배너 영역 (변경 없음) -->
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

    <!-- 동물 상세 정보 영역 -->
    <div class="container py-5" v-if="animalDetail">
      <div class="row">
        <!-- 좌측: 동물 이미지 -->
        <div class="col-md-6 mb-4">
          <div class="d-flex flex-column align-items-center">
            <img
              :src="animalDetail.popfile"
              alt="Animal Image"
              class="img-fluid rounded mb-3 shadow-sm"
              style="width: 550px; height: 420px; object-fit: cover"
            />
            <div
              class="bg-primary-green text-gray-1 p-3 my-2 text-center rounded"
              style="width: 550px"
            >
              <div class="d-flex justify-content-center align-items-center">
                <i class="fa-solid fa-heart me-3" style="font-size: 20px"></i>
                <span class="fs-6">
                  당신의 사랑을 기다리는 생명들에게 새로운 시작을 선물하세요.
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- 우측: 동물 정보 카드 -->
        <div class="col-md-6">
          <div class="card shadow-sm custom-card">
            <div class="card-header bg-primary-green text-white">
              <h4 class="mb-0" style="font-family: 'Paperlogy'; font-weight: 600">
                <i class="fa-solid fa-paw me-2"></i>동물 정보
              </h4>
            </div>
            <div class="card-body p-4">
              <div class="info-row">
                <div class="info-label">유기번호</div>
                <div class="info-value">{{ animalDetail.desertionNo }}</div>
              </div>
              <div class="info-row">
                <div class="info-label">공고번호</div>
                <div class="info-value">{{ animalDetail.noticeNo }}</div>
              </div>
              <div class="info-row">
                <div class="info-label">품종</div>
                <div class="info-value">{{ animalDetail.kindCd }}</div>
              </div>
              <div class="info-row">
                <div class="info-label">털색</div>
                <div class="info-value">{{ animalDetail.colorCd }}</div>
              </div>
              <div class="info-row">
                <div class="info-label">나이</div>
                <div class="info-value">{{ animalDetail.age }}</div>
              </div>
              <div class="info-row">
                <div class="info-label">체중</div>
                <div class="info-value">{{ animalDetail.weight }}</div>
              </div>
              <div class="info-row">
                <div class="info-label">상태</div>
                <div class="info-value">{{ animalDetail.processState }}</div>
              </div>
              <div class="info-row">
                <div class="info-label">성별</div>
                <div class="info-value">
                  <span
                    class="gender-badge"
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
                </div>
              </div>
              <div class="info-row">
                <div class="info-label">중성화</div>
                <div class="info-value">
                  {{ animalDetail.neuterYn === 'Y' ? 'O' : 'X' }}
                </div>
              </div>
              <div class="info-row">
                <div class="info-label">특징</div>
                <div class="info-value">{{ animalDetail.specialMark }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 구조 정보 섹션 -->
    <div class="container my-2" v-if="rescueData">
      <h3 class="mb-4" style="font-weight: 700">
        <i class="fa-solid fa-truck-medical me-3"></i>구조 정보
      </h3>
      <table class="table table-bordered text-center shadow-sm">
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

    <!-- 입양 신청 섹션 -->
    <div
      class="container my-5 p-5 bg-cover bg-center rounded-3 adopt-form-section"
      style="
        background-image: url('/PNG-Image/images/adoptformbtn.png');
        background-size: cover;
        background-position: center;
        height: 350px;
      "
    >
      <div class="adopt-form-content text-left text-white">
        <h3 class="fw-bold mb-4" style="font-family: 'Paperlogy'">
          입양 신청서 작성하기
          <i class="fa fa-paw" style="font-size: 2.5rem; margin-left: 10px"></i>
        </h3>
        <p style="font-weight: 300; font-size: 1.2rem; line-height: 1.8">
          사랑과 책임감을 가지고 입양을 고려해 주셔서 감사합니다.
          <br />
          반려동물은 소중한 가족입니다.
          <br />
          신중하게 결정하시고, 입양 후에도 책임감을 다해주세요.
        </p>
        <a
          href="/adotion/form"
          class="btn btn-gray-1 text-primary-green mt-3"
          style="font-size: 1.2rem"
          >바로가기</a
        >
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
          <AdoptionAnimalCard
            :animal="{
              desertionNo: '12345',
              popfile: '/PNG-Image/images/cat.png',
              kindCd: '[고양이] 한국 고양이',
              noticeSdt: '20250101',
              noticeEdt: '20250110',
              sexCd: 'F',
              specialMark: '귀여운 고양이',
            }"
          />
        </div>
        <div class="col">
          <AdoptionAnimalCard
            :animal="{
              desertionNo: '67890',
              popfile: '/PNG-Image/images/dog.png',
              kindCd: '[개] 믹스견',
              noticeSdt: '20250201',
              noticeEdt: '20250210',
              sexCd: 'M',
              specialMark: '활발한 강아지',
            }"
          />
        </div>
        <div class="col">
          <AdoptionAnimalCard
            :animal="{
              desertionNo: '54321',
              popfile: '/PNG-Image/images/cat.png',
              kindCd: '[고양이] 길고양이',
              noticeSdt: '20250301',
              noticeEdt: '20250310',
              sexCd: 'M',
              specialMark: '수줍은 고양이',
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-card {
  border-radius: 12px !important;
  border: none !important;
}
.card-header {
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  font-size: 1.2rem;
}
.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px dashed #ddd;
  font-size: 1.15rem;
}
.info-label {
  flex: 0 0 120px;
  font-weight: 600;
  color: #555;
  display: flex;
  align-items: center;
}
.info-value {
  flex: 1;
  text-align: right;
  font-weight: 500;
  color: #333;
}
.gender-badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 5px;
  text-align: center;
}
.th-gray-3 {
  background-color: var(--gray-3);
  padding: 10px;
  font-weight: 600;
  font-size: 18px;
}
.table td,
.table th {
  vertical-align: middle;
  padding: 1rem;
  font-size: 18px;
}
.shadow-sm {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
}

.adopt-form-section {
  position: relative;
  background-repeat: no-repeat;
}
.adopt-form-content {
  position: relative;
  z-index: 2;
}
</style>
