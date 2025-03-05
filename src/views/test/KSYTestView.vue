<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { signup, type SignupRequest, type SignupResponse } from '@/apis/devcourse/Auth/signup';

const auth = useAuthStore();
const adminEmail = 'admin@programmers.co.kr';
const adminPw = 'programmers';

const signupEmail = 'kylekim95@gmail.com';
const signupPw = '1234';
const signupFullname = 'Sang Yup Kim';

const signupRequest : SignupRequest = {
  email: signupEmail,
  password: signupPw,
  fullName: signupFullname
}
</script>

<template>
  <div class="d-flex flex-column container p-5 gap-1">
    <button class="btn bg-primary-red text-gray-1" @click="()=>auth.Login(adminEmail, adminPw)" style="width: 150px; height: 50px">LOGIN ADMIN</button>
    <button class="btn bg-primary-red text-gray-1" @click="()=>auth.Logout()" style="width: 150px; height: 50px">LOGOUT</button>
    <button class="btn bg-primary-red text-gray-1" @click="()=>signup(signupRequest)" style="width: 150px; height: 50px">SIGN UP</button>
  </div>
</template>

