<script setup lang="ts">
import { Transition } from 'vue';
import TitleText from '@/components/common/TitleText.vue';
import ShelterCard from '@/components/adoption/shelter/ShelterCard.vue';
import ShelterModal from '@/components/adoption/shelter/ShelterModal.vue';
import { KOR_ORG, GU_ORG } from '@/constants/korOrg';
import { ref } from 'vue';

const MOCK_SHELTERLIST_RESULT = [
  {
    careRegNo: '311311201100001',
    careNm: '한국동물구조관리협회',
    orgNm: '서울특별시 은평구',
    divisionNm: '법인',
    saveTrgtAnimal: '개+고양이+기타',
    careAddr: '경기도 양주시 남면 감악산로 63-48  ',
    jibunAddr: '경기도 양주시 남면 상수리 536-11 ',
    lat: 37.870117,
    lng: 126.98354,
    dsignationDate: '2020-03-01',
    weekOprStime: '09:00',
    weekOprEtime: '18:00',
    weekCellStime: '09:00',
    weekCellEtime: '18:00',
    weekendOprStime: '09:00',
    weekendOprEtime: '16:00',
    weekendCellStime: '09:00',
    weekendCellEtime: '16:00',
    closeDay: '공휴일+일요일',
    vetPersonCnt: 1,
    specsPersonCnt: 8,
    medicalCnt: 1,
    breedCnt: 6,
    quarabtineCnt: 1,
    feedCnt: 1,
    careTel: '031-867-9119',
    dataStdDt: '2024-11-29',
  },
  {
    careRegNo: '311311201100001',
    careNm: '한국동물구조관리협회',
    orgNm: '서울특별시 은평구',
    divisionNm: '법인',
    saveTrgtAnimal: '개+고양이+기타',
    careAddr: '경기도 양주시 남면 감악산로 63-48  ',
    jibunAddr: '경기도 양주시 남면 상수리 536-11 ',
    lat: 37.870117,
    lng: 126.98354,
    dsignationDate: '2020-03-01',
    weekOprStime: '09:00',
    weekOprEtime: '18:00',
    weekCellStime: '09:00',
    weekCellEtime: '18:00',
    weekendOprStime: '09:00',
    weekendOprEtime: '16:00',
    weekendCellStime: '09:00',
    weekendCellEtime: '16:00',
    closeDay: '공휴일+일요일',
    vetPersonCnt: 1,
    specsPersonCnt: 8,
    medicalCnt: 1,
    breedCnt: 6,
    quarabtineCnt: 1,
    feedCnt: 1,
    careTel: '031-867-9119',
    dataStdDt: '2024-11-29',
  },
];

interface UpperOrgType {
  orgCd: string;
  orgdownNm: string;
}

interface OrgType {
  uprCd: string;
  orgCd: string;
  orgdownNm: string;
}

interface ShelterWithRegNo {
  careRegNo: string;
  careNm: string;
  orgNm: string;
  divisionNm: string;
  saveTrgtAnimal: string;
  careAddr: string;
  jibunAddr: string;
  lat: number;
  lng: number;
  dsignationDate: string;
  weekOprStime: string;
  weekOprEtime: string;
  weekCellStime: string;
  weekCellEtime: string;
  weekendOprStime: string;
  weekendOprEtime: string;
  weekendCellStime: string;
  weekendCellEtime: string;
  closeDay: string;
  vetPersonCnt: number;
  specsPersonCnt: number;
  medicalCnt: number;
  breedCnt: number;
  quarabtineCnt: number;
  feedCnt: number;
  careTel: string;
  dataStdDt: string;
}
const upperOrg = ref<UpperOrgType | null>({
  orgCd: '6110000',
  orgdownNm: '서울특별시',
});

const org = ref<OrgType>({
  uprCd: '',
  orgCd: '',
  orgdownNm: '하위 지역 선택',
});

const isOpenModal = ref<boolean>(false);
const shelter = ref<ShelterWithRegNo | null>(null); // 현재 보여지는 보호소 목록중 선택된 보호소정보

const handleClose = () => {
  isOpenModal.value = false;
};
const handleCardClick = (shelterItem: ShelterWithRegNo) => {
  shelter.value = shelterItem;
  isOpenModal.value = true;
};
// 보호소 목록 조회 결과 다음과 같은 정보를 줘야 함
// {
//   careRegNo:"311311201100001", // 👉 목록 조회시 얻는 데이터
//   // 📍 아래는 상세 조회시 얻는 데이터
//   "careNm": "한국동물구조관리협회",
//   "orgNm": "서울특별시 은평구",
//   "divisionNm": "법인",
//   "saveTrgtAnimal": "개+고양이+기타",
//   "careAddr": "경기도 양주시 남면 감악산로 63-48  ",
//   "jibunAddr": "경기도 양주시 남면 상수리 536-11 ",

// }
</script>

<template>
  <div class="search-wrapper d-flex flex-column flex-lg-row">
    <div class="d-flex">
      <div class="side-bar">
        <TitleText size="24px" weight="600" color="gray-10">우리지역 보호소 찾기</TitleText>
        <hr />
        <!-- 상위 시도 선택 버튼 -->
        <div>
          <TitleText size="20px" weight="600" color="gray-10">시/도</TitleText>
          <div>
            <button
              v-for="upperOrgItem of KOR_ORG"
              :key="upperOrgItem.orgCd"
              type="button"
              class="btn btn-custom"
              @click="upperOrg = upperOrgItem"
            >
              {{ upperOrgItem.orgdownNm.slice(0, 2) }}
            </button>
          </div>
        </div>
        <hr />
        <!-- 하위 시군구 드롭다운 -->
        <div>
          <TitleText size="20px" weight="600" color="gray-10">시군구</TitleText>
          <div>
            <div class="btn-group">
              <button
                type="button"
                class="btn dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ org.orgdownNm }}
              </button>
              <ul class="dropdown-menu">
                <li v-for="orgItem of GU_ORG['6110000']" :key="orgItem.orgCd">
                  <a class="dropdown-item" href="#" @click="org = orgItem">{{
                    orgItem.orgdownNm
                  }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <!-- 동물 선택 체크박스 -->
        <div>
          <TitleText size="20px" weight="600" color="gray-10">구조대상동물</TitleText>
          <div class="ps-1 mt-2 text-gray-10">
            <div class="form-check mb-2">
              <input class="form-check-input" type="checkbox" name="dog" id="dog" />
              <label class="form-check-label" for="dog"> 개 </label>
            </div>
            <div class="form-check mb-2">
              <input class="form-check-input" type="checkbox" name="cat" id="cat" />
              <label class="form-check-label" for="cat"> 고양이 </label>
            </div>
            <div class="form-check mb-2">
              <input class="form-check-input" type="checkbox" name="etc" id="etc" />
              <label class="form-check-label" for="etc"> 기타 </label>
            </div>
          </div>
        </div>
      </div>
      <div class="side-bar card-list">
        <TitleText size="16px" color="gray-6" weight="600">'서울시 강서구' 조회결과</TitleText>
        <ShelterCard
          v-for="(shelterItem, index) of MOCK_SHELTERLIST_RESULT"
          :key="index"
          :shelter="shelterItem"
          @click="handleCardClick(shelterItem)"
        />
      </div>
    </div>
    <div class="map">
      map
      <Transition name="fade">
        <ShelterModal
          v-if="shelter !== null && isOpenModal"
          :item="shelter"
          careRegNo="123"
          :onClose="handleClose"
        />
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.search-wrapper {
  width: 100vw;
  background-color: var(--gray-1);
  height: 80vh;
  max-height: 900px;
}

.side-bar {
  width: 15vw;
  min-width: 200px;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin: 0px auto;
  gap: 15px;
}

.side-bar.card-list {
  overflow-y: scroll;
}

.side-bar hr {
  margin: 0;
  color: var(--gray-6);
}

.map {
  position: relative;
  background-color: aliceblue;
  flex: 1;
}
.btn-custom {
  background-color: var(--gray-3);
  margin: 5px 3px;
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 12px;
}
.btn-custom:hover {
  background-color: var(--secondary-green);
  color: var(--gray-1);
}
.btn-custom:focus {
  background-color: var(--primary-green);
  color: var(--gray-1);
}

.dropdown-toggle {
  border: 1px solid var(--gray-3);
}

.dropdown-toggle:hover {
  background-color: var(--gray-3);
  color: var(--gray-10);
}

.dropdown-item:hover {
  background-color: var(--secondary-green);
}
.form-check-input {
  border-radius: 100%;
}

.form-check-input:checked {
  background-color: var(--primary-green);
  border: 1px solid white;
}

.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.8s;
}
.fade-enter-to {
  opacity: 1;
}
</style>
