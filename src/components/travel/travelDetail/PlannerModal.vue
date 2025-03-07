<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { watch, reactive, ref } from 'vue';
import usePlanner, { type TravelData } from '@/hooks/usePlanner';

interface PlannerModalProps{
  visible: boolean;
  positionTop: string;
  positionLeft: string;
}
const props = defineProps<PlannerModalProps>();
watch(()=>props.visible, ()=>{
  propsStyle.top = props.positionTop;
  propsStyle.left = props.positionLeft;
  propsStyle.display = props.visible ? 'block' : 'none'
});
const propsStyle = reactive({
  top: '0px',
  left: '500px',
  display: 'none',
});

const emit = defineEmits(['toggle-visibility']);

const myPlans = ref<TravelData>();
const planner =
const HandleClick(data : TravelData){
  emit('toggle-visibility');
}
</script>

<template>
  <div
    class="bg-gray-3 position-absolute p-1 rounded"
    style="width:150px;"
    :style="{...propsStyle}"
  >
    <div style="overflow: hidden; overflow-y: scroll; max-height: 200px;">
      <p class="m-0 p-1 border-bottom text-center">HeloWorld!</p>
      <p class="m-0 p-1 border-bottom text-center">HeloWorld!</p>
      <p class="m-0 p-1 border-bottom text-center">HeloWorld!</p>
      <p class="m-0 p-1 border-bottom text-center">HeloWorld!</p>
      <p class="m-0 p-1 border-bottom text-center">HeloWorld!</p>
    </div>
    <button class="btn w-100 h-100" @click="async ()=>HandleClick()">
      <i class="bi-plus-lg"></i>
    </button>
  </div>
</template>
