<script setup lang="ts">
import ExpandingMenu from '@/components/travel/ExpandingMenu.vue';
import type { ExpandingMenuItemData } from '@/components/travel/ExpandingMenu.vue';

const itemData : ExpandingMenuItemData[] = [
  { id:0, bgImage:'http://tong.visitkorea.or.kr/cms/resource/82/3364482_image2_1.JPG', title:'title 1', content:'content 1' },
  { id:1, bgImage:'http://tong.visitkorea.or.kr/cms/resource/82/3364482_image2_1.JPG', title:'title 2', content:'content 2' },
  { id:2, bgImage:'http://tong.visitkorea.or.kr/cms/resource/82/3364482_image2_1.JPG', title:'title 3', content:'content 3' },
];
</script>

<template>
  <div>
    <div style="height:400px; width:1000px">
      <ExpandingMenu :item-data="itemData"/>
    </div>
  </div>
</template>
