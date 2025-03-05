import type { devUser } from '@/types/devcourse/devUser';
import { defineStore } from 'pinia';
import { ref, onMounted } from 'vue';

import { login, type LoginRequest, type LoginResponse } from '@/apis/devcourse/Auth/login';
import { logout } from '@/apis/devcourse/Auth/logout';
import { getUser, type GetUserRequest, type GetUserResponse } from '@/apis/devcourse/User/getUser';

export const useAuthStore = defineStore('auth', ()=>{
  const user = ref<devUser | null>(null);
  const token = ref<string | null>(localStorage.getItem('jwt'));
  const userId = ref<string | null>(localStorage.getItem('uid'));
  const isAuth = ref<boolean>(false);

  async function Login(email: string, password: string){
    const request : LoginRequest = { email, password };
    const response : LoginResponse = await login(request);
    localStorage.setItem('jwt', response.token);
    localStorage.setItem('uid', response.user._id);
    user.value = response.user;
    token.value = response.token;
    userId.value = response.user._id
    isAuth.value = true;
  }
  async function Logout(){
    const response : boolean = await logout();
    if(response){
      localStorage.removeItem('jwt');
      localStorage.removeItem('uid');
      user.value = null;
      token.value = null;
      userId.value = null;
      isAuth.value = false;
    }
  }
  // 유저 아이디를 token 값에서 추출 할 수 있나?
  onMounted(async ()=>{
    if(token.value && userId.value){
      const request : GetUserRequest = { id: userId.value };
      const response : GetUserResponse = await getUser(request);
      user.value = response.user;
      isAuth.value = true;
    }
  });

  return {
    user,
    token,
    isAuth,
    Login,
    Logout
  };
});
