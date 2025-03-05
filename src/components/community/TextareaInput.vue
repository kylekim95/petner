<script setup lang="ts">
defineProps<{
  label: string;

  placeholder: string;
  ariaLabel: string;
}>();
</script>

<template>
  <label class="d-flex justify-content-between align-items-start px-3">
    <span class="fs-6 fw-bold">{{ label }}</span>
    <textarea class="form-control input-size" :placeholder="placeholder" :aria-label="ariaLabel" />
  </label>
</template>

<style scoped>
.input-size {
  width: 270px;
  height: 60px;
}
</style>
