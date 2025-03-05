<script setup lang="ts">
import { ref, computed } from 'vue';
import axios from 'axios';

const title = ref('');
const content = ref('');
const images = ref<File[]>([]); // 이미지 담을 배열
const imagePreviews = ref<string[]>([]); // 이미지 미리보기 배열

// 파일 선택 후 미리보기 업데이트
const handleImageChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input?.files) {
    const files = Array.from(input.files);
    images.value = [...images.value, ...files];

    // 미리보기 배열 업데이트
    imagePreviews.value = [
      ...imagePreviews.value,
      ...files.map((file) => URL.createObjectURL(file)),
    ];
  }
};

// 이미지 삭제
const removeImage = (index: number) => {
  images.value.splice(index, 1);
  imagePreviews.value.splice(index, 1);
};

// "등록하기" 버튼 활성화 여부 계산
const isFormValid = computed(() => {
  return title.value.trim() !== '' && content.value.trim() !== '' && images.value.length > 0;
});

// 폼 제출
const handleSubmit = async () => {
  // Form 데이터 준비
  const formData = new FormData();
  formData.append('title', title.value);
  formData.append('content', content.value);

  // 이미지 데이터를 formData에 추가
  images.value.forEach((image) => {
    formData.append('images', image);
  });

  // POST 요청 보내기
  try {
    const response = await axios.post('API_ENDPOINT_URL', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('성공:', response.data);
  } catch (error) {
    console.error('에러:', error);
  }
};
</script>

<template>
  <div>
    <!-- 배너 섹션 -->
    <div
      class="banner d-flex justify-content-center align-items-center bg-cover"
      style="background-image: url('/PNG-Image/images/FreeCommunityForm.png'); height: 384px; background-size: cover; background-position: center; position: relative;"
    >
      <div class="container text-start">
        <div class="text-white px-4 py-8" style="max-width: 1280px; margin: 0 auto">
          <h2 class="fw-bold fs-1 mb-3" style="font-family: 'paperlogy'; line-height: 1.5">
            펫트너 자유게시판, <br />
            반려동물과 <span style="color: var(--gray-10)">함께하는 이야기</span>를 나눠요!
          </h2>
          <p style="font-family: 'paperlogy'; font-size: 20px">
            반려동물의 일상, 꿀팁, 자랑거리 등 무엇이든 자유롭게 나눠보세요!
          </p>
        </div>
      </div>
    </div>

    <div class="my-5 py-2 text-center">
      <h2 style="font-weight: 700">게시글 작성</h2>
    </div>

    <!-- 게시글 작성 폼 -->
    <div class="container" style="max-width: 1280px; margin: 0 auto">
      <div class="my-5">
        <!-- 제목 입력 -->
        <div class="mb-4">
          <label for="title" class="form-label" style="font-size: 20px">제목</label>
          <input
            type="text"
            id="title"
            v-model="title"
            class="form-control"
            placeholder="게시글 제목을 입력하세요"
          />
        </div>

        <!-- 내용 입력 -->
        <div class="mb-4">
          <label for="content" class="form-label" style="font-size: 20px">내용</label>
          <textarea
            id="content"
            v-model="content"
            class="form-control"
            rows="20"
            placeholder="게시글 내용을 입력하세요"
          ></textarea>
        </div>

        <!-- 사진 첨부 -->
        <div class="mb-5">
          <label for="images" class="form-label" style="font-size: 20px">사진 첨부</label>
          <div class="d-flex gap-3 mb-2">
            <!-- 사진 추가 -->
            <label
              for="image-upload"
              class="d-flex justify-content-center align-items-center border rounded-3"
              style="width: 200px; height: 200px; cursor: pointer; background-color: var(--gray-3); border: 2px dashed var(--gray-7);"
            >
              <span class="text-center" style="font-size: 20px; color: #6c757d">+</span><br />
              <span style="font-size: 18px; color: #6c757d">이미지 업로드</span>
            </label>
            <input
              type="file"
              id="image-upload"
              @change="handleImageChange"
              class="d-none"
              multiple
            />
            <!-- 이미지 미리보기 -->
            <div v-for="(preview, index) in imagePreviews" :key="index" class="position-relative">
              <div class="d-flex justify-content-center align-items-center position-relative">
                <img
                  :src="preview"
                  alt="Image preview"
                  style="width: 200px; height: 200px; object-fit: cover; border-radius: 8px"
                />
                <button
                  type="button"
                  class="btn btn-sm btn-danger position-absolute top-0 end-0"
                  @click="removeImage(index)"
                  style="z-index: 10; background-color: rgba(255, 255, 255, 0.5)"
                >
                  X
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 등록하기 버튼 -->
        <div class="d-flex justify-content-center">
          <button
            @click="handleSubmit"
            class="btn btn-primary text-white px-5 py-3 rounded-5"
            style="background-color: var(--primary-purple); border: none"
            :disabled="!isFormValid"
          >
            등록하기
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#image-upload {
  display: none;
}
</style>
