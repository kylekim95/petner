import PATH from '@/constants/path';

const AUTH_ROUTES = [
  {
    path: PATH.login,
    name: 'login',
    component: () => import('@/views/LoginView.vue'),
    meta: { headerVariant: 'header-default' },
  },
  {
    path: PATH.signup,
    name: 'signup',
    component: () => import('@/views/SignupView.vue'),
    meta: { headerVariant: 'header-default' },
  },
];
export default AUTH_ROUTES;
