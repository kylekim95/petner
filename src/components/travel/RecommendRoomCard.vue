<script setup lang="ts">
import PNG_IMAGES from '../../../public/PNG-Image/image.ts';

const mockupImageURL = PNG_IMAGES.recommendRoom;
</script>

<template>
  <div class="d-flex gap-3 card-wrapper">
    <img :src="mockupImageURL" />
    <div class="room-info d-flex flex-column justify-content-between">
      <div class="d-flex flex-column gap-1">
        <div class="room-info-title">별채 A</div>
        <div>
          <span class="room-info-property"> 객실 인원 : </span>
          <span>
            <i v-for="i of 4" :key="i" class="bi bi-person red"></i>
            <i v-for="i of 3" :key="i" class="bi bi-person"></i>
          </span>
        </div>
        <div>
          <span class="room-info-property"> 객실 크기 : </span>
          <span> 5평 (17m2)</span>
        </div>
        <div>
          <span class="room-info-property"> 객실 수 : </span>
          <span> 0 </span>
        </div>
        <div class="room-info-notice text-gray-7">
          ※ 위 정보는 2024년 10월에 작성된 정보로(정상요금), 해당 숙박시설 이용요금이 수시로
          변동됨에 따라 이용요금 및 기타 자세한 사항은 홈페이지 참조 요망
        </div>
        <div>
          <i v-for="i of 7" :key="i" class="bi bi-house"></i>
        </div>
      </div>
      <div class="room-info-price">100000 / 박</div>
    </div>
  </div>
</template>

<style>
.card-wrapper {
  width: 1280px;
  height: 400px;
}

.room-info {
  font-size: 20px;
}

.room-info-property {
  font-weight: 600;
}

.room-info-notice {
  font-size: 16px;
}

.room-info-title {
  font-size: 36px;
  font-family: 'Paperlogy-8ExtraBold';
}

.room-info-price {
  color: #f3723f;
  font-size: 36px;
  font-weight: 600;
  text-align: end;
}
.bi-person.red {
  color: #f3723f;
}
</style>
