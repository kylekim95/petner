<script setup lang="ts">
import TextBlock, {type TextBlockDescriptor} from '@/components/common/TextBlock.vue';

const PlannerText : TextBlockDescriptor[] = [
  {
    content: '여행 이름',
    color: 'var(--gray-10)', bgColor:'', font:'Pretendard', weight:700, size: '36px'
  },
];
</script>

<template>
  <div class="container-fluid p-0 d-flex" style="height: calc(100vh - 75px); margin-top: 75px;">
    <div class="h-100 p-3" style="width: 20%">
      <TextBlock :text-block="PlannerText[0]" />
      <div class="bg-primary" style="height: 500px">

      </div>
    </div>
    <div class="h-100 bg-primary" style="width: 80%"></div>
  </div>
</template>
