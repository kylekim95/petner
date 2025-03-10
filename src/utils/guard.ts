import { useAuthStore } from '@/stores/auth';
import type { NavigationGuardReturn } from 'vue-router';

export const isAuthenticated = (to, from): NavigationGuardReturn => {
  const auth = useAuthStore();

  if (!auth.isAuth) {
    console.log(to.fullPath);
    return { name: 'login'};
  }
  return true;
};
