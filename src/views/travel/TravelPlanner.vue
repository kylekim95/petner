<script setup lang="ts">
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import draggable from 'vuedraggable';
import TravelDestCard from '@/components/travel/planner/TravelDestCard.vue';

interface TravelDestData {
  id : number;
  name : string;
  locationX : number;
  locationY : number;
}
interface TravelData {
  title : string;
  destData : TravelDestData[][];
}
const params = useRoute().params;
const dummyData : TravelData = {
  title : '여행 이름',
  destData : [
    [ {id:0, name: '가평 카페 109', locationX: 0, locationY: 0}, {id:1, name: '가평TOP랜드 번지점프', locationX: 0, locationY: 0}, ],
    [ {id:2, name: '가평 카페 109', locationX: 0, locationY: 0}, ],
    [ {id:3, name: '가평 카페 109', locationX: 0, locationY: 0}, ],
  ]
};
const data = ref<TravelData>(dummyData);
const isDragging = ref<boolean>(false);

function AddNewDay() {
  data.value.destData.push([]);
}
function ColorChangeOnHover(e : MouseEvent) {
  const elem = e.target as HTMLElement;
  elem.classList.remove('trashcan-default');
  elem.classList.add('trashcan-danger');
}
function ColorChangeOnHoverRestore(e : MouseEvent) {
  const elem = e.target as HTMLElement;
  elem.classList.remove('trashcan-danger');
  elem.classList.add('trashcan-default');
}

// import { getChannelPosts, type GetChannelPostsRequest, type GetChannelPostsResponse } from '@/apis/devcourse/Post/getChannelPosts';
// import * as CHANID from '@/constants/communityConsts';
// const route = useRoute();
// const destData = ref<TravelDestData[]>();
// onMounted(async ()=>{
//   try{
//     const response = await getChannelPosts({channelId: CHANID.PlannerChannelId});
//     const index = response.posts.findIndex((e)=>e._id === route.params.id);
//     if(index !== -1){
//       console.log(response.posts[index]);
//     }
//   }
//   catch(e){
//     console.log(e);
//   }
// });

</script>

<template>
  <div class="container-fluid p-0 d-flex" style="height: calc(100vh - 75px);">
    <div class="d-flex flex-column pt-3 pb-0 px-3" style="width: 20%; min-width: 400px; flex: 0 auto;">
      <p class="title-text">{{ data.title }}</p>
      <div style="overflow-y: scroll; scrollbar-width: none;">

        <div
          v-for="(item, index2) in data.destData"
          :key="index2"
        >
          <div class="d-flex align-items-center justify-content-between">
            <p class="day-text my-2">Day {{ index2 + 1 }}</p>
            <i class="bi-trash transition trashcan-default" style="cursor: pointer;"
              @mouseenter="ColorChangeOnHover"
              @mouseleave="ColorChangeOnHoverRestore"
              @click="(e)=>{
                data.destData.splice(index2, 1);
              }">
            </i>
          </div>

          <draggable
            class="d-flex flex-column gap-2"
            v-model="data.destData[index2]" item-key="name"
            group="travel"
            v-bind="{
              animation: 200,
            }"
            @start="()=>{isDragging=true;}"
            @end="()=>{isDragging=false;}"
          >
            <template #item="{ element, index }">
              <TravelDestCard :name="element.name" :index="index" :id="element.id" :-delete-dest-callback="(id : number)=>{
                const temp = data.destData[index2].findIndex((e)=>e.id===id);
                const newDestData = [...data.destData[index2]];
                newDestData.splice(temp, 1);
                data.destData[index2] = newDestData;
              }"/>
            </template>
          </draggable>
        </div>

        <button type="button" class="btn rounded my-3 text-gray-7 bg-gray-3" style="width:100%; height:50px;" @click="()=>AddNewDay()">
          <div class="d-flex justify-content-center position-relative">
            <div :style="{ fontFamily:' Pretendard', fontSize: '24px', fontWeight: 500 }">+</div>
          </div>
        </button>
      </div>
    </div>
    <div class="h-100 bg-primary" style="width: 80%"></div>
  </div>
</template>

<style scoped>
.title-text {
  color: var(--gray-10);
  font-family: 'Pretendard';
  font-weight: 700;
  font-size: 32px;
}
.day-text {
  color: var(--gray-10);
  font-family: 'Pretendard';
  font-weight: 700;
  font-size: 20px;
}
.trashcan-default {
  color: var(--gray-7);
  font-size: 1.25rem;
}
.trashcan-danger {
  color: #FF4444;
  font-size: 1.25rem;
}
.transition {
  transition: color 0.25s ease-in-out;
}
</style>
