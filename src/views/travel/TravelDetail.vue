<script setup lang="ts">
import PhotoGrid from '@/components/travel/travelDetail/PhotoGrid.vue';
import InfoCard from '@/components/travel/travelDetail/TravelInfoCard.vue';
import { type DetailCard } from '@/components/travel/travelDetail/TravelInfoCard.vue';
import {
  type AccommodationDetail,
  type RestaurantDetail,
} from '@/components/travel/travelDetail/TravelInfoCard.vue';

const firstImageUrl = '/travelDetail/Accommodation1.png';

// 예시 코드 (API로 받아서 contenttypeid 별로 prop을 지정해야합니다.)
// function parseDetail(apiResponse: any): DetailCard {
//   // 예를 들어, API 응답이 JSON 객체라고 가정
//   if (apiResponse.contenttypeid === 32) {
//     // 숙소 타입으로 변환
//     return {
//       contenttypeid: 32,
//       title: apiResponse.title,
//       addr1: apiResponse.addr1,
//       tel: apiResponse.tel,
//       overview: apiResponse.overview,
//       homepage: apiResponse.homepage,
//       mapx: apiResponse.mapx,
//       mapy: apiResponse.mapy,
//       // 숙소 전용 필드가 있다면 여기서 추가
//     } as AccommodationDetail;
//   } else if (apiResponse.contenttypeid === 39) {
//     // 음식점 타입으로 변환
//     return {
//       contenttypeid: 39,
//       title: apiResponse.title,
//       addr1: apiResponse.addr1,
//       tel: apiResponse.tel,
//       overview: apiResponse.overview,
//       homepage: apiResponse.homepage,
//       mapx: apiResponse.mapx,
//       mapy: apiResponse.mapy,
//       // 음식점 전용 필드가 있다면 여기서 추가
//     } as RestaurantDetail;
//   } else {
//     throw new Error('알 수 없는 contenttypeid: ' + apiResponse.contenttypeid);
//   }
// }

//이미지 API요청의의 RES
const imageArray = [
  '/travelDetail/Accommodation2.png',
  '/travelDetail/Accommodation3.png',
  '/travelDetail/Accommodation4.png',
];

const DummyAccData: AccommodationDetail = {
  contenttypeid: 32,
  title: '가람초연재',
  addr1: '경상북도 안동시 풍천면 하회종가길 76-6',
  tel: '010-2342-1256',
  overview:
    '가람초연재는 낙동강 상류가 굽이굽이 흐르는 고즈넉한 하회마을에 자리한다. 기와지붕 고택 사이에서 볏짚을 두툼하게 올려 말끔히 손질한 초가지붕의 가람초연재가 눈에 띈다. ‘가람’은 서애 류성룡의 15대손인 주인 할아버지의 호이고 ‘초연재’는 제비가 사는 초가집이란 의미로, 실제 서까래나 처마 밑에 사는 제비를 볼 수 있다. 사랑채 마루에서 안채 뒤쪽으로 넘어가는 해는 몽환적인 시간을 선사한다. 갓 만들기 및 디딜방아, 맷돌 같은 민속도구 체험을 할 수 있다.',
  homepage: '초연재.한국',
  mapx: 0,
  mapy: 0,
  roomcount: 3,
  checkintime: '15:00',
  checkouttime: '10:00',
  refundregulation: '이용일 7일전 90%, 5일전 70%, 3일전 50%, 1일전 또는 당일 20%',
};
const DummyRestaurantData: RestaurantDetail = {
  contenttypeid: 39,
  title: '가평카페109',
  addr1: '경기도 가평군 상면 축령로 109',
  tel: '010-2342-1256',
  overview:
    '야자수를 비롯한 다양한 식물들이 많은 플라워 카페이다. 꽃과 나무들이 자연스럽게 배치되어 있어 마치 숲속을 산책하는 듯한 분위기의 카페이며 사진 스폿이 많은 곳이다. 매장 안 입구에는 한옥 분위기의 매대가 있어 커피류를 비롯해서 다양한 종류의 음료와 간단한 디저트를 주문하면 된다. 건물 1, 2층으로 이루어져 있다.1층 식물원에도 좌석이 있고 분수대 위쪽 2층에는 가운데에 정원이 예쁘게 꾸며져 있고 그 가장자리에는 마루와 테이블이 놓인 좌석도 있다. 그 외에도 단체 손님을 위한 테이블이나 데이트하기 좋은 창가 쪽 테이블도 있다. 천창을 통해 들어오는 햇살 속에서 부지런히 자라는 여러 식물들과 시원한 분수대 물소리를 들으며 차분히 쉴 수 있는 곳이다.',
  homepage: '네이버에 검색하세요',
  mapx: 0,
  mapy: 0,
};
</script>

<template>
  <PhotoGrid :firstimage="firstImageUrl" :images="imageArray" />
  <InfoCard :detail="DummyAccData" />
</template>
