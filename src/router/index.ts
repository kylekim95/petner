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
  ],
});

export default router;
