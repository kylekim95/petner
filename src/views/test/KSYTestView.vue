<script setup lang="ts">
import { ref } from 'vue';

import { useAuthStore } from '@/stores/auth';

import { createChannel, type CreateChannelRequest } from '@/apis/devcourse/Channel/createChannel';
import { deleteChannel, type DeleteChannelRequest } from '@/apis/devcourse/Channel/deleteChannel';

// login test
const auth = useAuthStore();
const adminEmail = 'admin@programmers.co.kr';
const adminPw = 'programmers';

</script>

<template>
  <div class="d-flex flex-column container p-5 gap-1">
    <button class="btn bg-primary-red text-gray-1" @click="()=>auth.Login(adminEmail, adminPw)" style="width: 150px; height: 50px">LOGIN ADMIN</button>
    <button class="btn bg-primary-red text-gray-1" @click="()=>auth.Login(adminEmail, adminPw)" style="width: 150px; height: 50px">LOGIN ADMIN</button>
    <button class="btn bg-primary-red text-gray-1" @click="()=>auth.Login(adminEmail, adminPw)" style="width: 150px; height: 50px">LOGIN ADMIN</button>
</div>
</template>

