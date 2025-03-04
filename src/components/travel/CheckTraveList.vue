<script setup lang="ts"></script>

<template>
  <!-- Top 검색창, 검색 결과 -->
  <!-- 조회 리스트 -->
  <div class="mainRight">
    <div class="searchResult title" :style="{}">검색결과 : 2000개</div>

    <!-- 카드 컴포넌트 -->
    <div
      class="d-flex flex-row gap-1 position-relative"
      :style="{ width: '100%', height: '295px', marginTop: '20px' }"
    >
      <div class="card overflow-hidden">
        <img
          src="https://cdn.pixabay.com/photo/2017/03/09/06/30/pool-2128578_1280.jpg"
          height="295px"
          alt=""
          :style="{ objectFit: 'cover' }"
        />
      </div>
      <div class="d-flex flex-column justify-content-between ms-4" :style="{ width: '55%' }">
        <!-- 카테고리 -->
        <div class="text-primary-blue" :style="{ fontSize: '16px' }">호텔</div>
        <!-- 이름 및 아이콘 -->
        <div class="d-flex flex-wrap justify-content-lg-between align-items-center">
          <div class="subTitle">소노문 단양</div>
          <div class="d-flex flex-row gap-2">
            <!-- 아이콘 -->
            <i class="bi bi-journal-plus" :style="{ fontSize: '30px' }"></i>
            <i class="bi bi-heart" :style="{ fontSize: '30px' }"></i>
          </div>
        </div>
        <!-- 주소 -->
        <div>단양군 단양읍 삼봉로 187-17</div>
        <div>02-1234-5678</div>
        <div class="" style="width: 100%">
          <p
            class="mb-0"
            style="
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 3;
              line-clamp: 3;
              overflow: hidden;
              max-width: 100%;
            "
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, corrupti? Numquam minima
            odio labore quo voluptas, sequi nam culpa delectus quod neque tempora enim, doloremque
            nostrum eos qui, sed rerum? nostrum eos qui, sed rerum?
          </p>
        </div>
        <div class="title">110000원/박</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 제목 폰트 */
.title {
  font-size: 36px;
  font-weight: 700;
}

.subTitle {
  font-size: 24px;
  font-weight: 500;
}
.mainRight {
  display: flex;
  width: 75%;
  flex-direction: column;
  align-items: start;
}

.card {
  width: 45%;
  height: 295px;
  border-radius: 15px;
}
</style>
