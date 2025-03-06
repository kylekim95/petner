<script setup lang="ts">
import { ref } from 'vue';

import { useAuthStore } from '@/stores/auth';
import { signup, type SignupRequest } from '@/apis/devcourse/Auth/signup';
import { getUsers, type GetUsersRequest } from '@/apis/devcourse/User/getUsers';
import { updatePassword, type UpdatePasswordRequest } from '@/apis/devcourse/User/updatePassword';
import { updateUser, type UpdateUserRequest } from '@/apis/devcourse/User/updateUser';
import { uploadPhoto, type UploadPhotoRequest } from '@/apis/devcourse/User/uploadPhoto';
import { deleteUser } from '@/apis/devcourse/User/deleteUser';

// import { deletePhoto, type DeletePhotoRequest } from '@/apis/devcourse/User/deletePhoto';
import { createChannel, type CreateChannelRequest } from '@/apis/devcourse/Channel/createChannel';
import { deleteChannel, type DeleteChannelRequest } from '@/apis/devcourse/Channel/deleteChannel';
import { getChannel } from '@/apis/devcourse/Channel/getChannel';
import { getChannels } from '@/apis/devcourse/Channel/getChannels';
import { getChannelPosts } from '@/apis/devcourse/Post/getChannelPosts';
import { getAuthorPosts } from '@/apis/devcourse/Post/getAuthorPosts';
import { createPost, type CreatePostRequest } from '@/apis/devcourse/Post/createPost';
import { deletePost } from '@/apis/devcourse/Post/deletePost';
import { updatePost } from '@/apis/devcourse/Post/updatePost';

import { createLike } from '@/apis/devcourse/Like/createLike';
import { deleteLike } from '@/apis/devcourse/Like/deleteLike';

import { createComment } from '@/apis/devcourse/Comment/createComment';
import { deleteComment } from '@/apis/devcourse/Comment/deleteComment';

import { createNotification, type CreateNotificationRequest } from '@/apis/devcourse/Notification/createNotification';
import { getNotifications } from '@/apis/devcourse/Notification/getNotifications';
import { notificationsSeen } from '@/apis/devcourse/Notification/notificationsSeen';

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
  authRequired: false,
  description: '자유게시판',
  name: 'free',
}
const createChannelRequestMissing : CreateChannelRequest = {
  authRequired: false,
  description: '실종게시판',
  name: 'missing',
}
const deleteChannelRequest : DeleteChannelRequest = {
  id : '67c909eae1e6ed43d7d9244a'
}
const createPostRequest : CreatePostRequest = {
  title : '여기 화장실 너무하지 않음?',
  image : null,
  channelId : '67c909eae1e6ed43d7d9244a',
}
const updatePostRequest = {
  postId: '67c915b1e1e6ed43d7d92480',
  title : '여기 화장실 너무하지 않음?????',
  channelId : '67c909eae1e6ed43d7d9244a',
}

const createNotificationRequest : CreateNotificationRequest = {
  notificationType:'COMMENT',
  notificationTypeId : '67c92b3ad7d24f73478d342b',
  userId : '67c871e2e1e6ed43d7d9236e',
  postId : '67c915b1e1e6ed43d7d92480'
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
    <button class="btn bg-primary-red text-gray-1" @click="()=>deleteUser({id: '67c96a45d7d24f73478d3566'})" style="width: 200px; height: 50px">DELETE USER</button>
    <hr>
    <button class="btn bg-primary-red text-gray-1" @click="()=>createChannel(createChannelRequestFree)" style="width: 300px; height: 50px">CREATE FREE CHANNEL</button>
    <button class="btn bg-primary-red text-gray-1" @click="()=>createChannel(createChannelRequestMissing)" style="width: 300px; height: 50px">CREATE MISSING CHANNEL</button>
    <hr>
    <button class="btn bg-primary-red text-gray-1" @click="()=>deleteChannel(deleteChannelRequest)" style="width: 300px; height: 50px">DELETE CHANNEL</button>
    <button class="btn bg-primary-red text-gray-1" @click="()=>getChannel({ name:'free' })" style="width: 300px; height: 50px">GET CHANNEL</button>
    <button class="btn bg-primary-red text-gray-1" @click="()=>getChannels()" style="width: 300px; height: 50px">GET CHANNELS</button>
    <hr>
    <button class="btn bg-primary-red text-gray-1" @click="()=>getChannelPosts({ channelId : '67c909eae1e6ed43d7d9244a' })" style="width: 300px; height: 50px">GET CHANNEL POSTS</button>
    <button class="btn bg-primary-red text-gray-1" @click="()=>getAuthorPosts({ authorId : '67c871e2e1e6ed43d7d9236e' })" style="width: 300px; height: 50px">GET AUTHOR POSTS</button>
    <hr>
    <div class="mb-3">
      <label for="formFile" class="form-label">POST IMAGE</label>
      <input class="form-control" type="file" id="formFile" accept="image/*" @change="(e)=>{
          (createPostRequest.image = e.target.files?.[0] || null);
        }"
      />
    </div>
    <button class="btn bg-primary-red text-gray-1" @click="()=>createPost(createPostRequest)" style="width: 300px; height: 50px">CREATE POST</button>
    <button class="btn bg-primary-red text-gray-1" @click="()=>deletePost({id:'67c915b1e1e6ed43d7d92480'})" style="width: 300px; height: 50px">DELETE POST</button>

    <button class="btn bg-primary-red text-gray-1" @click="()=>updatePost(updatePostRequest)" style="width: 300px; height: 50px">UPDATE POST</button>
    <hr>
    <button class="btn bg-primary-red text-gray-1" @click="()=>createLike({postId : '67c915b1e1e6ed43d7d92480'})" style="width: 300px; height: 50px">CREATE LIKE</button>
    <button class="btn bg-primary-red text-gray-1" @click="()=>deleteLike({id : '67c921c2d7d24f73478d33d0'})" style="width: 300px; height: 50px">DELETE LIKE</button>
    <hr>
    <button class="btn bg-primary-red text-gray-1" @click="()=>createComment({postId : '67c915b1e1e6ed43d7d92480', comment: 'ㄹㅇㅋㅋ'})" style="width: 300px; height: 50px">CREATE COMMENT</button>
    <button class="btn bg-primary-red text-gray-1" @click="()=>deleteComment({id: '67c92686d7d24f73478d33f9' })" style="width: 300px; height: 50px">DELETE COMMENT</button>
    <hr>
    <button class="btn bg-primary-red text-gray-1" @click="()=>getNotifications()" style="width: 300px; height: 50px">GET NOTIFICATION</button>
    <button class="btn bg-primary-red text-gray-1" @click="()=>createNotification(createNotificationRequest)" style="width: 300px; height: 50px">CREATE NOTIFICATION</button>
    <button class="btn bg-primary-red text-gray-1" @click="()=>notificationsSeen()" style="width: 300px; height: 50px">SEEN NOTIFICATION</button>

</div>
</template>

