<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import CommentSection from '@/components/community/CommentSection.vue';

const pageColor = ref('red');

// 임시 게시글 데이터
const post = ref({
  title: '여기 화장실 너무한거 아님?',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et purus quis arcu egestas tempus non eget ex. Suspendisse commodo nulla quis dolor convallis, et fringilla velit tempus. Vestibulum placerat sollicitudin mi vitae imperdiet. Morbi molestie tortor a nisl laoreet varius ut quis felis. In scelerisque, mauris at vestibulum sodales, sem leo dapibus felis, vitae accumsan lacus metus a dui. Mauris id eros turpis. Donec facilisis pharetra justo.',
  user: {
    username: 'kylekim95',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    date: '2025년 2월 26일 11:54 AM',
  },
  image: 'https://www.w3schools.com/w3images/forest.jpg',

  comments: [
    {
      user: {
        username: 'kylekim95',
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
      },
      date: '2025/02/26 11:57',
      content: 'ㅎㅎㅎㅎ',
    },
    {
      user: {
        username: 'kylekim95',
        avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
      },
      date: '2025/02/26 11:57',
      content: 'ㅋㅋㅋㅋ',
    },
    {
      user: {
        username: 'kylekim95',
        avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
      },
      date: '2025/02/26 11:57',
      content: 'ㅋㅋㅋㅋㅋㅋㅋ',
    },
  ],
});

const route = useRoute();
const router = useRouter();
const postId = route.params.postId;

// 게시글 삭제 함수
const handleDelete = async () => {
  console.log('게시글 삭제:', postId);
  router.push('/community');
};

// 댓글 삭제 함수
const handleCommentDelete = (index: number) => {
  post.value.comments.splice(index, 1);
};
</script>

<template>
  <div class="container my-5">
    <div class="row">
      <div
        class="col-md-6"
        style="background-color: var(--gray-3); border-radius: 8px; padding: 20px"
      >
        <div class="d-flex align-items-center mb-4">
          <div class="me-3">
            <img
              :src="post.user.avatar"
              alt="user-profile"
              class="rounded-circle"
              width="50"
              height="50"
            />
          </div>

          <div>
            <h5 class="mb-1">{{ post.user.username }}</h5>
            <p class="text-muted mb-0">{{ post.user.date }}</p>
          </div>
        </div>

        <h2 class="mb-4" style="font-weight: 700">{{ post.title }}</h2>
        <p class="mb-4">{{ post.content }}</p>
      </div>

      <!-- 이미지 섹션-->
      <div class="col-md-6">
        <div
          style="
            width: 100%;
            height: 100%;
            overflow: hidden;
            position: relative;
            border-radius: 8px;
          "
        >
          <img
            :src="post.image"
            alt="community-image"
            class="img-fluid"
            style="
              object-fit: cover;
              width: 100%;
              height: 100%;
              box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
            "
          />
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-end gap-2 mt-3 mb-4">
      <button
        class="btn px-4 py-2 hover-effect"
        style="background-color: var(--primary-purple); color: var(--gray-1); border-radius: 30px"
      >
        수정하기
      </button>

      <button
        class="btn px-4 py-2 hover-effect"
        style="border: 2px solid var(--primary-red); color: var(--primary-red); border-radius: 30px"
        @click="handleDelete"
      >
        삭제하기
      </button>
    </div>

    <CommentSection
      :comments="post.comments"
      :onDeleteComment="handleCommentDelete"
      :color="pageColor"
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
