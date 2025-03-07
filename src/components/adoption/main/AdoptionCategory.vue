<script setup lang="ts">
import { useRouter } from 'vue-router';
import PATH from '@/constants/path';

const animalCategory = [
  {
    name: '개',
    imageURL: '/PNG-Image/images/dog.png',
    imageALT: 'dog image',
    category: 'dog',
  },
  {
    name: '고양이',
    imageURL: '/PNG-Image/images/category-cat.png',
    imageALT: 'cat image',
    category: 'cat',
  },
  {
    name: '기타 동물들',
    imageURL: '/PNG-Image/images/animalEtc.png',
    imageALT: 'etc animal image',
    category: 'etc',
  },
];

const router = useRouter();
const handleCategoryClick = (category: string) => {
  router.push({ path: PATH.adoptionSearch, query: { category } });
};
</script>

<template>
  <div class="category-background">
    <div class="category-wrapper">
      <div class="category-title">새로운 가족을 찾고 있어요.</div>
      <div class="category-button-wrapper d-flex justify-content-between">
        <button
          class="category-button"
          v-for="item of animalCategory"
          :key="item.name"
          @click="handleCategoryClick(item.category)"
        >
          <img
            :src="item.imageURL"
            :alt="item.imageALT"
            :stlye="{ width: '330px', height: '330px' }"
          />
          <span> {{ item.name }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style setup>
.category-background {
  background-color: var(--gray-2);
  padding: 40px 0px;
  width: 100vw;
}

.category-wrapper {
  width: 1280px;
  min-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: auto;
}

.category-title {
  font-size: 36px;
  font-weight: 700;
  color: vat(--gray-10);
  text-align: center;
  margin-bottom: 36px;
}

.category-button {
  background: none;
  border-radius: 100%;
  border: none;
  position: relative;
  width: 330px;
  height: 330px;
}

.category-button span {
  position: absolute;
  width: 100%;
  bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 36px;
  font-weight: 700;
  color: var(--gray-1);
}
</style>
