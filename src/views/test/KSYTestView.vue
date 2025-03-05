<script setup lang="ts">
import AdoptionRequestDisplay, { type AdoptionRequestData } from '@/components/myPage/AdoptionRequestDisplay.vue';

const data : AdoptionRequestData = {
  contact: '010-1234-5678',
  email : 'abc12@email.com',
  gender : '여자',
  name : '홍길동',
  reqId : '89526750',
  questions : [
    {question: '입양을 원하는 이유', answer: '어렸을 때부터 반려동물과 함께 자라며, 동물에 대한 깊은 애정과 책임감을 느꼈습니다. 이번 기회에 제 삶에 새로운 가족을 맞이하고 싶습니다.'},
    {question: '키우고 있는 반려동물', answer: '현재는 반려동물을 키우고 있지 않습니다. 하지만 이전에 강아지를 키운 경험이 있으며, 반려동물을 돌보는 일에 대해 충분히 이해하고 있습니다.'},
    {question: '키우던 반려동물을 개인 사정으로 포기한 경험', answer: '아니요, 반려동물을 포기한 경험은 없습니다. 모든 상황을 고려해 충분히 책임질 수 있을 때만 입양을 결정하고 있습니다.'},
    {question: '가족 구성원', answer: '저희 가족은 총 4명입니다. 부모님, 저, 그리고 동생이 한 명 있습니다. 부모님은 모두 직장에 다니시고, 동생은 대학생입니다. 저희 가족은 모두 동물을 사랑해서, 저와 동생이 함께 반려동물 돌보는 일을 주로 합니다.'},
  ],
  oathDate : new Date()
}
</script>

<template>
  <div class="container p-5" style="width:800px">
    <AdoptionRequestDisplay :data="data" />
  </div>
</template>

