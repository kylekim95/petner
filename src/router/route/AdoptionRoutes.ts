import PATH from '@/constants/path';

const ADOPTION_ROUTES = [
  {
    path: PATH.adoption,
    name: 'adoption',
    component: () => import('@/views/adoption/AdoptionMain.vue'),
    meta: { headerVariant: 'header-transparent' },
  },
  {
    path: PATH.adoptionShelter,
    name: 'shelter',
    component: () => import('@/views/adoption/ShelterSearch.vue'),
    meta: { headerVariant: 'header-transparent' },
  },
  {
    path: PATH.adoptionSearch,
    name: 'adoptionSearch',
    component: () => import('@/views/adoption/AdoptionSearch.vue'),
    meta: { headerVariant: 'header-transparent' },
  },
  {
    path: PATH.adoptionDetail,
    name: 'adoptionDetail',
    component: () => import('@/views/adoption/AdoptionDetail.vue'),
    meta: { headerVariant: 'header-transparent' },
  },
  // 하위 라우터 추가..
];

export default ADOPTION_ROUTES;
