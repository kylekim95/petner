<script setup lang="ts"></script>

<template>
  <div class="heroSection overflow-hidden position-relative z-0">
    <!-- 아바타 이미지 -->
    <div
      class="position-absolute overflow-hidden z-1"
      :style="{ top: '155px', left: '79px' }"
      style="border-radius: 85px"
    >
      <img
        src="https://cdn.pixabay.com/photo/2016/04/19/15/13/minion-1338858_1280.jpg"
        width="180px"
        height="180px"
        alt=""
      />
    </div>
    <!-- 상단 백그라운드 이미지 -->
    <img src="/public/myPageBackground.png" alt="" width="100%" height="280px" />
    <!-- 내 정보 텍스트 섹션 -->
    <div class="myInformation position-relative">
      <!-- 왼쪽 텍스 -->
      <div
        class="d-flex flex-column gap-1 position-absolute"
        :style="{ top: '44px', left: '237px' }"
      >
        <div class="d-flex flex-row align-items-center gap-2">
          <span class="title">홍길동</span>
          <span class="myInfoText">abc@gmail.com</span>
        </div>
        <div class="myInfoText">개 산책시키는 사람</div>
      </div>
      <!-- 오른쪽 버튼 -->
      <div class="d-flex flex-row gap-5 position-absolute" :style="{ top: '44px', right: '64px' }">
        <button class="editButton">Edit Profile</button>
        <button class="logoutButton">Log Out</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 텍스트 */
.title {
  font-size: 30px;
  font-weight: 700;
  color: var(--gray-10);
}

.myInfoText {
  font-size: 16px;
  font-weight: 400;
  color: var(--gray-6);
}
/* 내 정보 전체 섹션 */
.heroSection {
  width: 100%;
  height: 446px;
  border-radius: 10px;
  box-shadow: 2px 6px 20px var(--gray-3);
}

/* 내 정보 텍스트 섹션 */
.myInformation {
  width: 100%;
  height: 166px;
  background-color: var(--gray-1);
}

/*  버튼 */
.editButton {
  width: 172px;
  height: 45px;
  border: 1px solid var(--gray-7);
  border-radius: 10px;
  background-color: var(--gray-1);
  color: var(--gray-7);
}

.logoutButton {
  width: 172px;
  height: 45px;
  border: 1px solid var(--primary-red);
  border-radius: 10px;
  background-color: var(--gray-1);
  color: var(--primary-red);
}
</style>
