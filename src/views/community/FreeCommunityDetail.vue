<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import CommentSection from '@/components/community/CommentSection.vue';
import { getPost } from '@/apis/devcourse/Post/getPost';
import { devPost } from '@/types/devcourse/devPost';
import { devUser } from '@/types/devcourse/devUser';
import { devComment } from '@/types/devcourse/devComment';

const route = useRoute();
const router = useRouter();
const postId = route.params.postId as string;

// 게시글 데이터를 저장할 ref
interface parsedPostData {
  author : devUser,
  title : string,
  content : string,
  image : string,
  comments : devComment[],
  id: string
}
const post = ref<parsedPostData>();

onMounted(async () => {
  try {
    const response = (await getPost({id: postId})).post;
    const parsedTitle = JSON.parse(response.title);
    post.value = {
      author: response.author,
      title: parsedTitle.title,
      content: parsedTitle.content,
      image: response.image ?? '',
      comments: response.comments,
      id: response._id
    }
  }
  catch(e){
    console.log(e);
  }
});

// 게시글 삭제 함수 (실제 API 호출 추가 가능)
const handleDelete = async () => {
  console.log('게시글 삭제:', postId);
  router.push('/community');
};
// 댓글 삭제 함수
const handleCommentUpdate = async (index: number) => {
  const response = (await getPost({id: postId})).post;
  const parsedTitle = JSON.parse(response.title);
  post.value = {
    author: response.author,
    title: parsedTitle.title,
    content: parsedTitle.content,
    image: response.image ?? '',
    comments: response.comments,
    id: response._id
  }
};
</script>

<template>
  <div class="container my-5" v-if="post">
    <div class="row" style="align-items: flex-start;">
      <!-- 텍스트 영역 -->
      <div class="col-md-8" style="background-color: var(--gray-3); border-radius: 8px; padding: 20px;">
        <div class="d-flex align-items-center mb-4">
          <div class="me-3">
            <img
              :src="post.author.image"
              alt="user-profile"
              class="rounded-circle"
              width="50"
              height="50"
            />
          </div>
          <div>
            <h5 class="mb-1">{{ post.author.fullName }}</h5>
            <p class="text-muted mb-0">{{ post.author.email }}</p>
          </div>
        </div>
        <h2 class="mb-4 fw-bold">{{ post.title }}</h2>
        <p class="mb-4">{{ post.content }}</p>
      </div>

      <!-- 이미지 영역 및 버튼 -->
      <div class="col-md-4">
        <div style="width: 100%; position: relative; border-radius: 8px;">
          <img
            :src="post.image ?? undefined"
            alt="community-image"
            class="img-fluid"
            style="
              width: auto;
              max-width: 100%;
              height: auto;
              max-height: 800px;
              display: block;
              margin: 0 auto;
              object-fit: contain;
              box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
            "
          />
        </div>
        <div class="d-flex justify-content-center gap-2 mt-3">
          <button
            class="btn px-4 py-2 hover-effect"
            style="background-color: var(--primary-purple); color: var(--gray-1); border-radius: 30px;"
          >
            수정하기
          </button>
          <button
            class="btn px-4 py-2 hover-effect"
            style="border: 2px solid var(--primary-red); color: var(--primary-red); border-radius: 30px;"
            @click="handleDelete"
          >
            삭제하기
          </button>
        </div>
      </div>
    </div>

    <!-- 댓글 섹션 -->
    <CommentSection
      :comments="post.comments"
      :onUpdateComment="handleCommentUpdate"
      color="red"
      :postId="post.id"
    />
  </div>
</template>

<style scoped>
.hover-effect {
  transition: all 0.3s ease;
}
.hover-effect:hover {
  font-weight: 600;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}
</style>
