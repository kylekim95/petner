<script setup lang="ts">
import CommunityPosts from '@/components/travel/travelDetail/CommunityPosts.vue';
import DetailInfoComponent, { type DetailInfoData } from '@/components/travel/travelDetail/DetailInfoComponent.vue';

const rawDummyData = {
  "response": {
    "header": {
      "resultCode": "0000",
      "resultMsg": "OK"
    },
    "body": {
      "items": {
        "item": [
          {
              "contentid": "2024432",
              "contenttypeid": "12",
              "serialnum": "0",
              "infoname": "개방 구간",
              "infotext": "저두 출렁다리 : 438m / 도보 10분 소요 <br />\n망호 출렁다리 : 716m /  도보 15분 소요",
              "fldgubun": "1"
          },
          {
              "contentid": "2024432",
              "contenttypeid": "12",
              "serialnum": "1",
              "infoname": "등산로",
              "infotext": "\"함께해(海)길\"(2.5Km) / 도보1시간 ~ 1시간 30분 소요",
              "fldgubun": "1"
          },
          {
              "contentid": "2024432",
              "contenttypeid": "12",
              "serialnum": "2",
              "infoname": "이용가능시설",
              "infotext": "[기반시설] 청자타워(짚트랙), 낚시공원, 출렁다리 등<br />\n[편의시설] 화장실 2개소(저두쪽, 망호쪽), 슈퍼 2개 등",
              "fldgubun": "3"
          }
        ]
      },
      "numOfRows": 3,
      "pageNo": 1,
      "totalCount": 3
    }
  }
}
const rawDummyString = JSON.stringify(rawDummyData);
const dummyData = JSON.parse(rawDummyString).response.body.items.item;
const data : DetailInfoData[] = dummyData.map((e)=>{
  return {
    infoname: e.infoname,
    infotext: e.infotext,
  }
});
</script>

<template>
  <div>
    <div class="container p-5" style="width: 67%; min-width: 1280px;">
      <DetailInfoComponent :data="data"/>
    </div>
  </div>
</template>

