<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
  goToPage: {
    type: Function,
    required: true,
  },
});
</script>

<template>
  <div class="pagination d-flex justify-content-center gap-3 mt-4 mb-5">
    <button
      class="btn pagination-btn arrow-btn"
      @click="goToPage(currentPage - 1)"
      :disabled="currentPage === 1"
    >
      &lt;
    </button>

    <button
      v-for="page in totalPages"
      :key="page"
      class="btn pagination-btn"
      :class="{ active: currentPage === page }"
      @click="goToPage(page)"
    >
      {{ page }}
    </button>

    <button
      class="btn pagination-btn arrow-btn"
      @click="goToPage(currentPage + 1)"
      :disabled="currentPage === totalPages"
    >
      &gt;
    </button>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 40px;
}

.pagination-btn {
  padding: 10px 18px;
  font-size: 16px;
  border-radius: 50%;
  background-color: transparent;
  color: var(--gray-7);
  border: 1px solid var(--gray-7);
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pagination-btn {
  color: var(--gray-7);
  background-color: transparent;
  border: 1px solid var(--gray-7);
}

.pagination-btn:hover,
.pagination-btn.active {
  background-color: var(--primary-green);
  color: var(--gray-1);
  font-weight: bold;
}

.pagination-btn:disabled {
  background-color: var(--gray-3);
  color: #ccc;
  cursor: not-allowed;
}

.arrow-btn {
  color: var(--gray-7);
}

.arrow-btn:hover {
  background-color: var(--primary-green);
  color: var(--gray-1);
}
</style>
