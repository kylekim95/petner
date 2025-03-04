<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div>
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/KSYTestView">KSYTestView</RouterLink> |
        <RouterLink to="/LJSTestView">LJSTestView</RouterLink> |
        <RouterLink to="/CYSTestView">CYSTestView</RouterLink> |
        <RouterLink to="/SJSTestView">SJSTestView</RouterLink> |
        <RouterLink to="/LSJTestView">LSJTestView</RouterLink>
        
      </nav> -->
    </div>
  </header>
  <RouterView />
</template>
