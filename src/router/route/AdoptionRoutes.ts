import PATH from '@/constants/path';

const ADOPTION_ROUTES = [
  { path: PATH.adoption, name: 'adoption', component: ()=>import('@/views/AdoptionMain.vue'), meta: { headerVariant: 'header-transparent' } },
];

export default ADOPTION_ROUTES;
