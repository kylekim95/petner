<script setup lang="ts">
export interface RoomItem {
  // detailInfo API 응답 값
  contentid: string;
  contenttypeid: string;
  roomtitle: string | null;
  roomsize1: string | null;
  roomcount: string | null;
  roomintro: string | null;
  roomimg1: string;
  roomoffseasonminfee1: string | null;
  // detailIntro API 응답 값
  accomcountlodging: string | null;
}

// 부모 컴포넌트에서 rooms 배열을 전달받음
const { rooms } = defineProps<{
  rooms: RoomItem[];
}>();

//평 -> 제곱미터
function pyeongToSquareMeter(pyeong: string | null) {
  const conversionRate = 3.3058;
  return Math.ceil(Number(pyeong) * conversionRate);
}
</script>

<template>
  <div class="container">
    <div class="row">
      <!-- 객실 목록 반복 렌더링 -->
      <div
        v-for="room in rooms"
        :key="room.contentid"
        class="d-flex align-items-start mb-4 position-relative"
      >
        <!-- 왼쪽: 객실 이미지 -->
        <div class="me-3" style="width: 300px; height: 300px; position: relative">
          <img
            v-if="room.roomimg1 && room.roomimg1.trim() !== ''"
            :src="room.roomimg1"
            alt="Room Image"
            class="img-fluid rounded-2 w-100 h-100"
          />
          <!-- Placeholder (이미지 없을 때) -->
          <div
            v-else
            class="placeholder-image rounded-3 d-flex align-items-center justify-content-center"
          >
            No Image
          </div>
        </div>
        <!-- 오른쪽: 텍스트(상단) + 가격(하단) -->
        <div class="flex-grow-1 d-flex flex-column">
          <!-- 텍스트 영역 (상단) -->
          <div>
            <h2 class="fw-bold my-2" style="font-family: 'Paperlogy'">{{ room.roomtitle }}</h2>
            <p class="mb-1 fs-6">수용 가능 인원: {{ room.accomcountlodging }}명</p>
            <p class="mb-1 fs-6">
              객실 크기: {{ room.roomsize1 }}평 ({{
                room.roomsize1 && `${pyeongToSquareMeter(room.roomsize1)}㎡`
              }})
            </p>
            <p class="mb-1 fs-6">객실 수: {{ room.roomcount }}</p>
            <p class="text-gray-7 mt-2">
              {{ room.roomintro }}
            </p>
          </div>

          <!-- 가격 영역 (하단) -->
          <div class="mt-auto text-end position-absolute" style="bottom: -1rem; right: 2rem">
            <span class="text-primary-red fs-3 fw-bold"> {{ room.roomoffseasonminfee1 }}/박 </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
