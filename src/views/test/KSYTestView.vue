<script setup lang="ts">
import { ref } from 'vue';

import { useAuthStore } from '@/stores/auth';
import { signup, type SignupRequest } from '@/apis/devcourse/Auth/signup';
import { getUsers, type GetUsersRequest } from '@/apis/devcourse/User/getUsers';
import { updatePassword, type UpdatePasswordRequest } from '@/apis/devcourse/User/updatePassword';
import { updateUser, type UpdateUserRequest } from '@/apis/devcourse/User/updateUser';
import { uploadPhoto, type UploadPhotoRequest } from '@/apis/devcourse/User/uploadPhoto';
// import { deletePhoto, type DeletePhotoRequest } from '@/apis/devcourse/User/deletePhoto';
import { createChannel, type CreateChannelRequest } from '@/apis/devcourse/Channel/createChannel';
import { deleteChannel, type DeleteChannelRequest } from '@/apis/devcourse/Channel/deleteChannel';

// login test
const auth = useAuthStore();
const adminEmail = 'admin@programmers.co.kr';
const adminPw = 'programmers';
// signup test
const signupEmail = 'kylekim95@gmail.com';
const signupPw = 'qwer';
const signupFullname = 'Sang Yup Kim';
const signupRequest : SignupRequest = {
  email: signupEmail,
  password: signupPw,
  fullName: signupFullname
}
// get users test
const getUsersRequest : GetUsersRequest = {
  page: 1,
  limit: 10
}
// update password test
const updatePasswordRequest : UpdatePasswordRequest = {
  password: 'qwer'
}
// update user test
const updateUserRequest : UpdateUserRequest = {
  fullName : 'Sang Yup Park',
  username : 'Hong Gil Dong'
}
// upload photo test
const uploadPhotoRequest : UploadPhotoRequest = {
  isCover: false,
  image: null
};
// delete photo test
// const deletePhotoRequest : DeletePhotoRequest = {
//   isCover: false
// };
// create channel test
const createChannelRequestFree : CreateChannelRequest = {
  authRequired: true,
  description: '자유게시판',
  name: 'free',
}
const createChannelRequestMissing : CreateChannelRequest = {
  authRequired: true,
  description: '실종게시판',
  name: 'missing',
}

const deleteChannelRequest : DeleteChannelRequest = {
  id : '67c901aae1e6ed43d7d92437'
}

</script>

<template>
  <div class="d-flex flex-column container p-5 gap-1">
    <button class="btn bg-primary-red text-gray-1" @click="()=>auth.Login(adminEmail, adminPw)" style="width: 150px; height: 50px">LOGIN ADMIN</button>
    <button class="btn bg-primary-red text-gray-1" @click="()=>auth.Login(signupEmail, signupPw)" style="width: 200px; height: 50px">LOGIN REGULAR</button>
    <button class="btn bg-primary-red text-gray-1" @click="()=>auth.Logout()" style="width: 150px; height: 50px">LOGOUT</button>
    <button class="btn bg-primary-red text-gray-1" @click="()=>signup(signupRequest)" style="width: 150px; height: 50px">SIGN UP</button>
    <button class="btn bg-primary-red text-gray-1" @click="()=>getUsers(getUsersRequest)" style="width: 150px; height: 50px">GET USERS</button>
    <button class="btn bg-primary-red text-gray-1" @click="()=>updatePassword(updatePasswordRequest)" style="width: 200px; height: 50px">UPDATE PASSWORD</button>
    <button class="btn bg-primary-red text-gray-1" @click="()=>updateUser(updateUserRequest)" style="width: 200px; height: 50px">UPDATE USER</button>
    <hr>
    <div class="mb-3">
      <label for="formFile" class="form-label">UPLOAD PHOTO</label>
      <input class="form-control" type="file" id="formFile" accept="image/*" @change="(e)=>{
          (uploadPhotoRequest.image = e.target.files?.[0] || null);
        }"
      />
    </div>
    <button class="btn bg-primary-red text-gray-1" @click="()=>uploadPhoto(uploadPhotoRequest)" style="width: 200px; height: 50px">UPLOAD PHOTO</button>
    <!-- <button class="btn bg-primary-red text-gray-1" @click="()=>deletePhoto(deletePhotoRequest)" style="width: 200px; height: 50px">DELETE PHOTO</button> -->
    <hr>
    <button class="btn bg-primary-red text-gray-1" @click="()=>createChannel(createChannelRequestFree)" style="width: 300px; height: 50px">CREATE FREE CHANNEL</button>
    <button class="btn bg-primary-red text-gray-1" @click="()=>createChannel(createChannelRequestMissing)" style="width: 300px; height: 50px">CREATE MISSING CHANNEL</button>
    <hr>
    <button class="btn bg-primary-red text-gray-1" @click="()=>deleteChannel(deleteChannelRequest)" style="width: 300px; height: 50px">DELETE CHANNEL</button>
</div>
</template>

