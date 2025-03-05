<script setup lang="ts">
export interface RoomItem {
  contentid: string;
  contenttypeid: string;
  roomtitle: string | null;
  roomsize1: string | null;
  roomcount: string | null;
  roomintro: string | null;
  roomimg1: string;
  roomoffseasonminfee1: string | null;
}

// 부모 컴포넌트에서 rooms 배열을 전달받음
const { rooms } = defineProps<{
  rooms: RoomItem[];
}>();
</script>

<template>
  <div class="container">
    <div class="row">
      <!-- 객실 목록 반복 렌더링 -->
      <div v-for="room in rooms" :key="room.contentid" class="d-flex align-items-center mb-3">
        <!-- 왼쪽: 객실 이미지 -->
        <img
          :src="room?.roomimg1"
          alt="Room Image"
          class="img-fluid"
          style="width: 200px; height: auto; object-fit: cover; margin-right: 1rem"
        />

        <!-- 객실 정보 -->
        <div class="row">
          <div class="">
            <h5 class="fw-bold mb-1">{{ room.roomtitle }}</h5>
            <!-- <p class="mb-0">객실 인원: {{ room.capacity }}</p> -->
            <p class="mb-0">객실 크기: {{ room.roomsize1 }}평</p>
            <p class="mb-0">객실 수: {{ room.roomcount }}</p>
            <p class="text-muted mt-2">{{ room.roomintro }}</p>
          </div>

          <!-- 오른쪽: 가격 정보 -->
          <div class="text-end" style="width: 120px">
            <span class="text-danger fw-bold"> {{ room.roomoffseasonminfee1 }}/박 </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
