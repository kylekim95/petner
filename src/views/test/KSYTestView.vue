<script setup lang="ts">
import { ref } from 'vue';

import { useAuthStore } from '@/stores/auth';

import { createChannel } from '@/apis/devcourse/Channel/createChannel';
import { deleteChannel } from '@/apis/devcourse/Channel/deleteChannel';
import { createPost } from '@/apis/devcourse/Post/createPost';

// login test
const auth = useAuthStore();
const adminEmail = 'admin@programmers.co.kr';
const adminPw = 'programmers';

const avatar

</script>

<template>
  <div class="d-flex flex-column container p-5 gap-1">
    <div class="d-flex gap-1">
      <button class="btn bg-primary-red text-gray-1" @click="()=>auth.Login(adminEmail, adminPw)" style="width: 200px; height: 50px">LOGIN ADMIN</button>
    </div>
    <hr>
    <div class="d-flex gap-1">
      <button class="btn bg-primary-red text-gray-1" @click="()=>createChannel({
        authRequired:false,
        description:'플래너',
        name:'planner'
      })" style="width: 200px; height: 50px">CREATE CHANNEL</button>
      <button class="btn bg-primary-red text-gray-1" @click="()=>deleteChannel({
        id: ''
      })" style="width: 200px; height: 50px">DELETE CHANNEL</button>
    </div>
    <hr>
    <div class="d-flex gap-1">
      <button class="btn bg-primary-red text-gray-1" @click="()=>1" style="width: 200px; height: 50px">CREATE CHANNEL</button>
      <button class="btn bg-primary-red text-gray-1" @click="()=>1" style="width: 200px; height: 50px">DELETE CHANNEL</button>
    </div>
    <hr>
  </div>
</template>

