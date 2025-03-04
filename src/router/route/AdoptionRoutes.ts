import PATH from '@/constants/path';

const ADOPTION_ROUTES = [
  {
    path: PATH.adoption,
    name: 'adoption',
    component: () => import('@/views/AdoptionMain.vue'),
    meta: { headerVariant: 'header-transparent' },
  },
  {
    path: PATH.adoptionShelter,
    name: 'shelter',
    component: () => import('@/views/ShelterSearch.vue'),
    meta: { headerVariant: 'header-transparent' },
  },

  // 하위 라우터 추가..
];

export default ADOPTION_ROUTES;
