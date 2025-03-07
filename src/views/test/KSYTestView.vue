<script setup lang="ts">
import PlannerModal from '@/components/travel/travelDetail/PlannerModal.vue';
import { ref } from 'vue';

const visible = ref<boolean>(false);
</script>

<template>
  <div class="p-5">
    <button type="button" class="btn btn-primary m-2" @click="()=>{visible = !visible}">Click Me!</button>
    <PlannerModal :visible="visible" :position-left="'500px'" :position-top="'500px'" @toggle-visibility="visible=!visible" />
  </div>
</template>

