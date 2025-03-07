<script setup lang="ts">
import { defineProps, computed } from 'vue';

const { currentPage, totalPages, goToPage } = defineProps<{
  currentPage: number;
  totalPages: number;
  goToPage: (page: number) => void;
}>();

const visiblePages = computed(() => {
  const maxVisible = 5;
  const total = totalPages;
  const current = currentPage;

  if (total <= maxVisible) {
    // totalPages가 5 이하이면 1부터 totalPages까지 모두 보여줌
    return Array.from({ length: total }, (_, i) => i + 1);
  } else {
    if (current <= 3) {
      // 초기 상태: 1,2,3,4,5
      return [1, 2, 3, 4, 5];
    } else if (current >= total - 2) {
      // 끝쪽: 마지막 5개
      return [total - 4, total - 3, total - 2, total - 1, total];
    } else {
      // 중간: current를 중앙에 두고 5개 번호 표시
      return [current - 2, current - 1, current, current + 1, current + 2];
    }
  }
});
</script>

<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <!-- Previous 버튼 -->
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="goToPage(currentPage - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>

      <!-- 페이지 번호 버튼 -->
      <li
        v-for="page in visiblePages"
        :key="page"
        class="page-item"
        :class="{ active: currentPage === page }"
      >
        <a class="page-link" href="#" @click.prevent="goToPage(page)">
          {{ page }}
        </a>
      </li>

      <!-- Next 버튼 -->
      <li class="page-item" :class="{ disabled: currentPage === totalPages }">
        <a class="page-link" href="#" aria-label="Next" @click.prevent="goToPage(currentPage + 1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.pagination .page-item.active .page-link {
  background-color: var(--primary-green) !important;
  border-color: var(--primary-green) !important;
  color: var(--gray-1) !important;
}

.pagination .page-link:hover {
  background-color: var(--primary-green);
  border-color: var(--primary-green);
  color: var(--gray-1);
}
</style>
