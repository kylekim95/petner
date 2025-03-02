import PATH from '@/constants/path';

// 입양기능과 관련된 모든 페이지 라우팅은 해당 배열에서 관리됩니다.
const ADOPTION_ROUTES = [
  {
    path: PATH.adoption,
    name: 'AdoptionMain',
    component: () => import('@/views/AdoptionMain.vue'),
  },
  {
    path: PATH.adoptionShelter,
    name: 'AdoptionShelter',
    component: () => import('@/views/ShelterSearch.vue'),
  },
];

export default ADOPTION_ROUTES;
