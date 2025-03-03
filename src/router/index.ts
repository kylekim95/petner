import { createRouter, createWebHistory } from 'vue-router';
import PATH from '@/constants/path';
import ADOPTION_ROUTES from './route/AdoptionRoutes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: PATH.root, name: 'home', component: ()=>import('@/views/HomeMain.vue'), meta: { headerVariant: 'header-transparent' } },
    { path: PATH.login, name: 'login', component: ()=>import('@/views/LoginView.vue'), meta: { headerVariant: 'header-default' } },
    { path: PATH.signup, name: 'signup', component: ()=>import('@/views/SignupView.vue'), meta: { headerVariant: 'header-default' } },
    ...ADOPTION_ROUTES
  ],
});

export default router;
