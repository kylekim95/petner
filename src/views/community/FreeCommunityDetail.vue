<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import CommentSection from '@/components/community/CommentSection.vue';

const route = useRoute();
const router = useRouter();
const postId = route.params.postId as string;

// 게시글 데이터를 저장할 ref
const post = ref<any>(null);

onMounted(async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/posts/${postId}`);
    let data = response.data;
    // title 필드가 JSON 문자열이라면 파싱하여 제목과 내용을 분리
    try {
      const parsed = JSON.parse(data.title);
      data.title = parsed.title;
      if (parsed.content) {
        data.content = parsed.content;
      }
    } catch (e) {
      console.error('타이틀 파싱 에러:', e);
    }
    post.value = data;
    console.log('게시글 상세 데이터:', post.value);
  } catch (error) {
    console.error('게시글 로드 에러:', error);
  }
});

// 게시글 삭제 함수 (실제 API 호출 추가 가능)
const handleDelete = async () => {
  console.log('게시글 삭제:', postId);
  router.push('/community');
};

// 댓글 삭제 함수
const handleCommentDelete = (index: number) => {
  if (post.value && post.value.comments) {
    post.value.comments.splice(index, 1);
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
            :src="post.image"
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
      :onDeleteComment="handleCommentDelete"
      color="red"
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
