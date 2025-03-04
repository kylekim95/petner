<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/KSYTestView">KSYTestView</RouterLink> |
        <RouterLink to="/LJSTestView">LJSTestView</RouterLink> |
        <RouterLink to="/CYSTestView">CYSTestView</RouterLink> |
        <RouterLink to="/SJSTestView">SJSTestView</RouterLink> |
        <RouterLink to="/LSJTestView">LSJTestView</RouterLink>
      </nav>
    </div>
  </header>
  <h1>HOME</h1>
  <h4 class="bg-primary-green">primary-green</h4>
  <h4 class="bg-secondary-green">secondary-green</h4>
  <h4 class="bg-primary-blue">primary-blue</h4>
  <h4 class="bg-secondary-blue">secondary-blue</h4>
  <h4 class="bg-primary-red">primary-red</h4>
  <h4 class="bg-primary-purple example">primary-purple</h4>
  <h4 class="bg-primary-red">secondary-red</h4>
  <h4 class="bg-gray-1">gray-1</h4>
  <h4 class="bg-gray-2">gray-2</h4>
  <h4 class="bg-gray-3">gray-3</h4>
  <h4 class="bg-gray-6">gray-6</h4>
  <h4 class="bg-gray-7">gray-7</h4>
  <h4 class="bg-gray-10">gray-10</h4>
</template>
