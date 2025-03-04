import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PATH from '@/constants/path';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: PATH.root, name: 'home', component: HomeView },
    {
      path: '/KSYTestView',
      name: 'KSYTestView',
      component: () => import('../views/test/KSYTestView.vue'),
    },
    {
      path: '/CYSTestView',
      name: 'CYSTestView',
      component: () => import('../views/test/CYSTestView.vue'),
    },
    {
      path: '/LJSTestView',
      name: 'LJSTestView',
      component: () => import('../views/test/LJSTestView.vue'),
    },
    {
      path: '/SJSTestView',
      name: 'SJSTestView',
      component: () => import('../views/test/SJSTestView.vue'),
    },
    {
      path: '/LSJTestView',
      name: 'LSJTestView',
      component: () => import('../views/test/LSJTestView.vue'),
    },
    {
      path: '/HomeMain',
      name: 'HomeMain',
      component: () => import('../views/HomeMain.vue'),
    },
    {
      path: PATH.travel,
      name: 'TravelMain',
      component: () => import('../views/TravelMain.vue'),
    },
    {
      path: PATH.adoption,
      name: 'AdoptionMain',
      component: () => import('../views/AdoptionMain.vue'),
    },
    {
      path: '/TravelSearch',
      name: 'TravelSearch',
      component: () => import('../views/TravelSearch.vue'),
    },
    {
      path: '/AdoptionSearch',
      name: 'AdoptionSearch',
      component: () => import('../views/AdoptionSearch.vue'),
    },
    {
      path: '/AdoptionDetail',
      name: 'AdoptionDetail',
      component: () => import('../views/AdoptionDetail.vue'),
    },
    {
      path: PATH.travelDetail,
      name: 'TravelDetail',
      component: () => import('../views/TravelDetail.vue'),
    },
  ],
});

export default router;
