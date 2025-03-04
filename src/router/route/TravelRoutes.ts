import PATH from '@/constants/path';

const TRAVEL_ROUTES = [
  {
    path: PATH.travelPlanner,
    name: 'travelPlanner',
    component: () => import('@/views/TravelPlanner.vue'),
    meta: { headerVariant: 'header-red' },
  },
];
export default TRAVEL_ROUTES;
