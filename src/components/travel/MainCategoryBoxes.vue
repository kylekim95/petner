<script setup lang="ts">
export interface Category {
  img: string;
  content: string;
  path?: string;
}

const props = defineProps<{
  categories: Category[];
}>();

function handleClick() {
  alert('path로 이동');
}
</script>

<template>
  <div class="d-flex gap-4 justify-content-center mt-4">
    <div
      v-for="(item, idx) in props.categories"
      :key="idx"
      class="position-relative card-img-top"
      @click="handleClick"
    >
      <img :src="item.img" alt="" class="box-card-img" />
      <div
        class="box-card-text position-absolute bottom-0 start-0 p-2 text-gray-1 mb-2 ms-2"
        style="font-family: 'Paperlogy-7Bold'; font-weight: 700; font-size: 36px"
      >
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
