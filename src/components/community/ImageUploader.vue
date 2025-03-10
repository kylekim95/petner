<script setup lang="ts">
import { ref, computed } from 'vue';

const image = defineModel<File | null>();
const initialImagePreview = computed(() => {
  if (image.value) {
    return image.value;
  } else {
    return '';
  }
});
const imagePreviews = ref<string | null>(initialImagePreview.value); // 이미지 미리보기 배열
// 이미지 삭제
const removeImage = () => {
  image.value = null;
  imagePreviews.value = null;
};
const handleImageChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input?.files) {
    const file = input.files[0];
    image.value = file;
    // 미리보기 배열 업데이트
    imagePreviews.value = URL.createObjectURL(file);
  }
};
</script>

<template>
  <div>
    <div class="d-flex gap-3 mb-2">
      <!-- 사진 추가 -->
      <label
        for="image-upload"
        class="d-flex justify-content-center align-items-center border rounded-3"
        style="
          width: 200px;
          height: 200px;
          cursor: pointer;
          background-color: var(--gray-3);
          border: 2px dashed var(--gray-7);
        "
      >
        <span class="text-center" style="font-size: 20px; color: #6c757d">+</span><br />
        <span style="font-size: 18px; color: #6c757d">이미지 업로드</span>
      </label>
      <input type="file" id="image-upload" @change="handleImageChange" class="d-none" multiple />
      <!-- 이미지 미리보기 -->
      <div class="position-relative" v-if="imagePreviews">
        <div class="d-flex justify-content-center align-items-center position-relative">
          <img
            :src="imagePreviews"
            alt="Image preview"
            style="width: 200px; height: 200px; object-fit: cover; border-radius: 8px"
          />
          <button
            type="button"
            class="btn btn-sm btn-danger position-absolute top-0 end-0"
            @click="removeImage()"
            style="z-index: 10; background-color: rgba(255, 255, 255, 0.5)"
          >
            X
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
