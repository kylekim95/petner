<script setup lang="ts">
import TitleText from '../common/TitleText.vue';
import TextInput from '@/components/community/TextInput.vue';
import TextareaInput from '@/components/community/TextareaInput.vue';
import SelecterInput from '@/components/community/SelecterInput.vue';
import { reactive, watch } from 'vue';
import { ANIMAL_TYPE_ARRAY, GENDER_ARRAY } from '@/constants/mock/community/formOptions';
const data = reactive({
  name: '',
  phone: '',
  species: '',
  age: '',
  furColor: '',
  RFID: '',
  feature: '',
  animalType: '',
  gender: '',
  place: '',
  date: '',
  placeFeature: '', // 실종 장소 특징
  region: '', // 관할지
});

watch(data, (newV, oldV) => {
  console.log(newV, oldV);
});

const handleSubmit = (e) => {
  // 여기에 폼 제출 로직
  e.preventDefault();
  console.log(data);
};
</script>

<template>
  <div class="container overflow-hidden border border-light px-3 m-4 py-5">
    <form class="row gx-5">
      <div class="col px-5">
        <div class="d-flex flex-column gap-4">
          <TitleText size="32px" color="gray-10" weight="600" class="mb-3">
            👤 실종 신고자 정보
          </TitleText>
          <TextInput
            label="신고자"
            type="text"
            placeholder="성/이름"
            ariaLabel="이름"
            v-model="data.name"
          />
          <TextInput
            label="연락처"
            type="text"
            placeholder="- 없이 작성"
            ariaLabel="전화번호"
            v-model="data.phone"
          />
        </div>
        <div class="d-flex flex-column gap-4 mt-5">
          <TitleText size="32px" color="gray-10" weight="600" class="mb-3">
            🐻‍❄️ 실종동물 정보
          </TitleText>
          <!-- 이미지 업로드 -->

          <SelecterInput
            label="동물분류"
            selectorLabel="동물분류를 선택해주세요"
            ariaLabel="동물 타입 선택자"
            v-model="data.animalType"
            :options="ANIMAL_TYPE_ARRAY"
          />

          <TextInput
            label="품종"
            type="text"
            placeholder="예 ) 골든리트리버"
            ariaLabel="동물 품종"
            v-model="data.species"
          />
          <SelecterInput
            label="성별"
            selectorLabel="동물성별을 선택해주세요"
            ariaLabel="동물 성별 선택자"
            v-model="data.gender"
            :options="GENDER_ARRAY"
          />
          <TextInput
            label="나이"
            type="text"
            placeholder="예 ) 7개월"
            ariaLabel="동물 나이"
            v-model="data.age"
          />
          <TextInput
            label="털색상"
            type="text"
            placeholder="예 ) 갈색"
            ariaLabel="동물 털 색상"
            v-model="data.furColor"
          />
          <TextInput
            label="마이크로칩 (RFID) 번호"
            type="text"
            placeholder="번호"
            ariaLabel="RFID 번호"
            v-model="data.RFID"
          />
          <TextareaInput
            label="특징"
            type="text"
            placeholder="실종 당시 복장 등 개체를 특정할 수 있는 정보를 알려주세요."
            ariaLabel="동물 특징 입력"
            v-model="data.feature"
          />
        </div>
      </div>
      <div class="col px-5 position-relative">
        <div class="d-flex flex-column gap-3">
          <TitleText size="32px" color="gray-10" weight="600" class="mb-3">
            📌 실종 시간 및 장소
          </TitleText>

          <div class="map">
            <span class="fs-6"> * 마커를 움직여 실종장소를 선택할 수 있어요</span>
            <div :style="{ width: '400px', height: '400px' }" class="bg-primary-blue">지도</div>
          </div>
          <TextInput
            label="실종 날짜"
            type="date"
            placeholder="실종된 날짜를 선택해주세요"
            ariaLabel="실종 날짜 입력"
            v-model="data.date"
          />
          <TextInput
            label="실종 장소 특징"
            type="text"
            placeholder="예 ) 홍대입구역 6번 출구"
            ariaLabel="실종 장소 특징 입력"
            v-model="data.placeFeature"
          />
          <TextInput
            label="관할지"
            type="text"
            placeholder="예 ) 서울 특별시 마포구"
            ariaLabel="관할지명"
            v-model="data.region"
          />
        </div>
        <div
          class="d-flex justify-content-end position-absolute bottom-0 end-0"
          :style="{ marginRight: '12%' }"
        >
          <button
            class="bg-primary-blue border border-none rounded text-white"
            :style="{ width: '120px', height: '43px' }"
            type="submit"
            @click="handleSubmit"
          >
            등록
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
