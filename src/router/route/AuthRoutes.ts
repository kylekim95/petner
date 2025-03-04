import PATH from '@/constants/path';

const AUTH_ROUTES = [
  {
    path: PATH.login,
    name: 'login',
    component: () => import('@/views/auth/LoginView.vue'),
    meta: { headerVariant: 'header-default' },
  },
  {
    path: PATH.signup,
    name: 'signup',
    component: () => import('@/views/auth/SignupView.vue'),
    meta: { headerVariant: 'header-default' },
  },
];
export default AUTH_ROUTES;
