<script setup lang="ts">
const dummyImageSrc = "https://media.istockphoto.com/id/1853686056/ko/%EC%82%AC%EC%A7%84/%EC%A7%91%EC%97%90%EC%84%9C-%ED%9C%B4%EC%8B%9D%EC%9D%84-%EC%B7%A8%ED%95%98%EB%8A%94-%EA%B3%A8%EB%93%A0-%EB%A6%AC%ED%8A%B8%EB%A6%AC%EB%B2%84.jpg?s=1024x1024&w=is&k=20&c=qrl0V8QEo7JzTYnGk7hPuSKhmryWD5vnLnrWy0C3XzU="

</script>

<template>
  <!-- 카드 리스트 섹션 -->
  <div class="cardSection d-flex flex-column gap-4">
    <!-- 작성자 및 더보기 아이콘 컨테이너 -->
    <div class="d-flex flex-row align-items-center justify-content-between">
      <div class="d-flex flex-row align-items-center gap-3">
        <!-- 이미지 -->
        <div class="postCardImg overflow-hidden" style="border-radius: 85px">
          <img
            src="https://cdn.pixabay.com/photo/2016/04/19/15/13/minion-1338858_1280.jpg"
            width="auto"
            height="100%"
            alt=""
          />
        </div>
        <!-- 내 정보 텍스 -->
        <div class="d-flex flex-column gap-2">
          <span class="postCardText">홍길동</span>
          <span class="dateText">2024.10.21</span>
        </div>
      </div>
      <i class="bi bi-three-dots" :style="{ fontSize: '30px' }"></i>
    </div>
    <!-- 메인 이미지 -->
    <div class="mainImg overflow-hidden">
      <img
        :src="dummyImageSrc"
        alt=""
        width="100%"
        height="auto"
      />
    </div>
    <!--소개글 -->
    <div class="contentText">우리 강아지 너무 귀엽지 않나요?</div>
    <!-- 좋아요, 댓글 -->
    <div class="d-flex flex-row align-items-center gap-4">
      <div class="d-flex flex-row align-items-center gap-2">
        <i class="bi bi-suit-heart commentIcon"></i>
        <span class="commentText">1,498</span>
      </div>
      <div class="d-flex flex-row align-items-center gap-2">
        <i class="bi bi-suit-heart commentIcon"></i>
        <span class="commentText"> 1,498</span>
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

.postCardText {
  font-size: 16px;
  font-weight: 700;
  color: var(--gray-10);
}
.dateText {
  font-size: 12px;
  font-weight: 500;
  color: var(--gray-7);
}
.contentText {
  font-size: 16px;
  font-weight: 700;
  color: var(--gray-10);
}

.commentIcon {
  font-size: 25px;
  color: var(--primary-red);
}
.commentText {
  font-size: 16px;
  font-weight: 700;
  color: var(--gray-7);
}

/* 카드 컴포넌트 섹션 */
.cardSection {
  padding: 30px 0;
  height: 500px;
}

/* 여행 리스트 컨테이너 여역 */
.myPostListSection {
  width: 80%;
  height: 95%;
}

/* 리스트 카드 이미지 영역 */
.postCardImg {
  width: 70px;
  height: 70px;
}

.mainImg {
  width: 100%;
  height: 256px;
  border-radius: 10px;
}
</style>
