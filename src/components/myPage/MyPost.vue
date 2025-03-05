<script setup lang="ts">
import MyTravelCard from '@/components/myPage/MyTravelCard.vue';
import AdoptionRequestDisplay, {
  type AdoptionRequestData,
} from '@/components/myPage/AdoptionRequestDisplay.vue';
import { ref } from 'vue';

const data: AdoptionRequestData = {
  contact: '010-1234-5678',
  email: 'abc12@email.com',
  gender: '여자',
  name: '홍길동',
  reqId: '89526750',
  questions: [
    {
      question: '입양을 원하는 이유',
      answer:
        '어렸을 때부터 반려동물과 함께 자라며, 동물에 대한 깊은 애정과 책임감을 느꼈습니다. 이번 기회에 제 삶에 새로운 가족을 맞이하고 싶습니다.',
    },
    {
      question: '키우고 있는 반려동물',
      answer:
        '현재는 반려동물을 키우고 있지 않습니다. 하지만 이전에 강아지를 키운 경험이 있으며, 반려동물을 돌보는 일에 대해 충분히 이해하고 있습니다.',
    },
    {
      question: '키우던 반려동물을 개인 사정으로 포기한 경험',
      answer:
        '아니요, 반려동물을 포기한 경험은 없습니다. 모든 상황을 고려해 충분히 책임질 수 있을 때만 입양을 결정하고 있습니다.',
    },
    {
      question: '가족 구성원',
      answer:
        '저희 가족은 총 4명입니다. 부모님, 저, 그리고 동생이 한 명 있습니다. 부모님은 모두 직장에 다니시고, 동생은 대학생입니다. 저희 가족은 모두 동물을 사랑해서, 저와 동생이 함께 반려동물 돌보는 일을 주로 합니다.',
    },
  ],
  oathDate: new Date(),
};

// 현재 선택된 콘텐츠 (게시글 / 입양신청서)
const currentContent = ref('게시글');

// 버튼 클릭 시 콘텐츠 변경 함수
const changeContent = (content: string) => {
  currentContent.value = content;
};
</script>

<template>
  <div class="myPost">
    <!-- 게시글, 입양신청 버튼섹션 -->
    <div class="myContentText myPostTitleSection position-relative">
      <div class="position-absolute d-flex flex-row gap-4" :style="{ left: '58px', top: '34px' }">
        <!-- 버튼 클릭 시 currentContent 값 변경 -->
        <span
          class="cursorPointer"
          :class="{ currentContentText: currentContent === '게시글' }"
          @click="changeContent('게시글')"
        >
          게시글
        </span>
        <span
          class="cursorPointer"
          :class="{ currentContentText: currentContent === '입양신청서' }"
          @click="changeContent('입양신청서')"
        >
          입양신청서
        </span>
      </div>
    </div>
    <!-- 카드 리스트 섹션 -->
    <div v-motion-pop class="container myPostListSection" v-if="currentContent === '게시글'">
      <MyTravelCard />
      <MyTravelCard />
    </div>
    <div v-motion-pop class="w-100" v-if="currentContent === '입양신청서'">
      <AdoptionRequestDisplay :data="data" />
    </div>
  </div>
</template>

<style scoped>
/* 텍스트 */

.currentContentText {
  font-size: 20px;
  font-weight: 600;
  color: var(--gray-10);
}
.myContentText {
  font-size: 20px;
  font-weight: 400;
  color: var(--gray-10);
}

/* 나의 게시글 섹션 */
.myPost {
  width: 65%;
  height: 1089px;
  border-radius: 10px;
  box-shadow: 2px 6px 10px var(--gray-3);
  background-color: var(--gray-1);
}

/* 여행 리스트 컨테이너 여역 */
.myPostListSection {
  width: 85%;
  height: 90%;
}

.cursorPointer:hover {
  cursor: pointer;
}

/* 나의 여행 제목 섹션 */
.myPostTitleSection {
  height: 85px;
  border-bottom: 1px solid #e6e6ea;
}
</style>
