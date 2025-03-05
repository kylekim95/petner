<script setup lang="ts">

const cat = ['이름', '나이', '품종', '성별', '색상', '마이크로 칩 번호'];
const missingCat = ['분실 날짜', '분실 장소', '주위의 특징적 건물', '관할지'];
const contactInfoCat = ['신고자', '연락처'];

const dummyData = {
  title : '가족을 찾습니다',
  postBy : 'kylekim95',
  createdAt : '2025.02.26 11:58',
  animalInfo :{
    name : '골 D 로져',
    age : '9',
    breed : '골든 리트리버',
    gender : '수컷',
    color : '금색 & 흰색',
    microChipId : '1234-5678',
    note : '중성화 안했고 양쪽귀 이개혈종 수술자국이 있습니다.'
  },
  missingInfo : {
    date : '2025-02-16 12시경',
    location : '전북특별자치도 무주군 설천면 신선길 48-26 구산마을',
    note : '마당앞 삼거리',
    juris : '전북특별자치도무주군',
  },
  contactInfo : {
    name : '엄희재',
    tel : '010-1234-5678',
  }
}
const animalImg = '/missingDetailMockImage.png'
</script>

<template>
  <div class="container d-flex flex-column mt-5" style="width: 67%">
    <!-- 제목 -->
    <p class="m-0 p-0 title-text text-gray-10 mb-1">{{ dummyData.title }}</p>
    <!-- 유저 아바타 & 유저 ID -->
    <div class="d-flex align-items-center mb-1 gap-2">
      <div class="bg-primary" style="height: 35px; aspect-ratio: 1/1; border-radius: 100%"></div>
      <p class="m-0 p-0 post-by-text text-gray-7">{{ dummyData.postBy }}</p>
    </div>
    <!-- 포스트 생성 날짜 & 수정/삭제 버튼 -->
    <div class="d-flex align-items-center justify-content-between mb-3">
      <p class="m-0 p-0 date-text text-gray-7">{{ dummyData.createdAt }}</p>
      <div class="d-flex gap-2">
        <div class="bg-primary-green rounded-5 d-flex align-items-center justify-content-center" style="width:100px; height: 35px">
          <p class="m-0 p-0 button-text text-gray-1">수정하기</p>
        </div>
        <div class="border border-primary-red rounded-5 d-flex align-items-center justify-content-center" style="width:100px; height: 35px">
          <p class="m-0 p-0 button-text text-primary-red">삭제하기</p>
        </div>
      </div>
    </div>
    <!-- 실종 동물 정보 -->
    <div class="d-flex justify-content-between gap-3 mb-3">
      <div class="col bg-gray-3 rounded p-0">
        <img :src="animalImg" alt="" class="w-100 h-100">
      </div>
      <div class="col bg-gray-3 rounded p-3">
        <div class="row mb-3">
          <div v-for="(item, index) in Object.values(dummyData.animalInfo).slice(0, -1)" :key="cat[index]" class="d-flex justify-content-between py-1">
            <p class="w-50 m-0 p-0 cat-text">{{ cat[index] }}</p>
            <p class="w-50 m-0 p-0 value-text">{{ item }}</p>
          </div>
        </div>
        <div class="row m-0 p-0">
          <p class="m-0 p-0 cat-text">특징</p>
          <p class="m-0 p-0 value-text">{{ dummyData.animalInfo.note }}</p>
        </div>
      </div>
    </div>
    <!-- 분실 정보 -->
    <div class="bg-gray-3 rounded mb-3 p-3">
      <div v-for="(item, index) in Object.values(dummyData.missingInfo)" :key="missingCat[index]" class="d-flex justify-content-between py-1">
        <p class="w-50 m-0 p-0 cat-text">{{ missingCat[index] }}</p>
        <p class="w-50 m-0 p-0 value-text">{{ item }}</p>
      </div>
    </div>
    <!-- 발견시 연락 정보 -->
    <div class="bg-gray-3 rounded mb-3 p-3">
      <div v-for="(item, index) in Object.values(dummyData.contactInfo)" :key="contactInfoCat[index]" class="d-flex justify-content-between py-1">
        <p class="w-50 m-0 p-0 cat-text">{{ contactInfoCat[index] }}</p>
        <p class="w-50 m-0 p-0 value-text">{{ item }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title-text {
  font-family: 'Pretendard';
  font-weight: bold;
  font-size: 36px;
}
.postBy-text {
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 24px;
}
.date-text {
  font-family: 'Pretendard';
  font-weight: 400;
  font-size: 16px;
}
.button-text {
  font-family: 'Pretendard';
  font-weight: bold;
  font-size: 16px;
}
.cat-text {
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 20px;
}
.value-text {
  font-family: 'Pretendard';
  font-weight: 400;
  font-size: 16px;
}
</style>
