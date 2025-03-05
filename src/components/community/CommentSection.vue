<script setup lang="ts">
import { defineProps } from 'vue';

// 댓글 타입 정의
interface Comment {
  user: {
    username: string;
    avatar: string;
  };
  date: string;
  content: string;
}

// props 타입 정의
const props = defineProps({
  comments: {
    type: Array as () => Comment[], // 댓글 배열 타입
    required: true,
  },
  onDeleteComment: {
    type: Function,
    required: true,
  },
  color: {
    type: String,
    required: true, // 페이지 색상 red 또는 blue
  },
});

// 댓글 삭제 함수 (props로 전달받음)
const handleCommentDelete = (index: number) => {
  props.onDeleteComment(index);
};
</script>

<template>
  <div>
    <h5 class="mb-4">
      <span :style="{ color: 'var(--gray-7)' }">댓글 </span>
      <span :style="{ color: color === 'red' ? 'var(--primary-red)' : 'var(--primary-blue)' }">{{
        props.comments.length
      }}</span>
      <span :style="{ color: 'var(--gray-7)' }">개</span>
    </h5>

    <div
      v-for="(comment, index) in props.comments"
      :key="index"
      class="border p-3 mb-3 rounded-3"
      :style="{
        backgroundColor: color === 'red' ? 'var(--gray-1)' : 'var(--primary-blue-light)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        position: 'relative',
      }"
    >
      <div class="d-flex align-items-center mb-3">
        <img
          :src="comment.user.avatar"
          alt="user-profile"
          class="rounded-circle me-2"
          width="40"
          height="40"
        />
        <div>
          <p
            class="mb-0 fw-bold"
            :style="{ color: color === 'red' ? 'var(--primary-red)' : 'var(--primary-blue)' }"
          >
            {{ comment.user.username }}
          </p>
          <p class="mb-0 text-muted" style="font-size: 14px">{{ comment.date }}</p>
        </div>
      </div>
      <p class="mb-0">{{ comment.content }}</p>

      <button
        class="btn btn-sm position-absolute bottom-0 end-0 mb-2 me-2"
        @click="handleCommentDelete(index)"
        :style="{
          color: color === 'red' ? 'var(--primary-red)' : 'var(--primary-blue)',
        }"
      >
        삭제
      </button>
    </div>
  </div>
</template>

<style scoped>
/* 추가 스타일 */
</style>
