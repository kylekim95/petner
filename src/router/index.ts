import { createRouter, createWebHistory } from 'vue-router';
import PATH from '@/constants/path';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: PATH.root, name: 'home', component: ()=>import('@/views/HomeMain.vue'), meta: { headerVariant: 'header-transparent' } },
  ],
});

export default router;
