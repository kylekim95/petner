<script setup lang="js">
import { ref, onMounted, watch } from 'vue';

const props = defineProps({
  travelData : {
    type: Object,
    default: ()=>{}
  },
  currentFocused : {
    type: Object,
    default: ()=>{}
  },
  currentFocusedDay : {
    type: Number,
    default: -1
  }
});
const mapContainer = ref(null);
let mapInstance = undefined;

watch(
  ()=>props,
  ()=>{
    const destArr = props.travelData.destData[props.currentFocusedDay];
    if(destArr.length <= 0) return;
    if(mapInstance !== undefined){
      if(props.currentFocused.contentid === '')
        mapInstance.panTo(new window.kakao.maps.LatLng(destArr[0].mapy, destArr[0].mapx));
      else
        mapInstance.panTo(new window.kakao.maps.LatLng(props.currentFocused.mapy, props.currentFocused.mapx));
      const markers = destArr.map((e)=>{
        return (new window.kakao.maps.Marker({ position: new window.kakao.maps.LatLng(e.mapy, e.mapx)}));
      });
      console.log(markers);
      for(let i = 0; i < markers.length; i++){
        markers[i].setMap(mapInstance);
      }
    }
  }, {deep:true}
);
onMounted(() => {
  const defaultPosition = {lat: 37.484681, lng: 127.010839};
  const defaultOptions = { center: new window.kakao.maps.LatLng(defaultPosition.lat, defaultPosition.lng), level: 3, maxLevel : 5 };
  loadKakaoMap(mapContainer.value, [defaultPosition], defaultOptions);
});
const loadKakaoMap = (container, positions, options) => {
  if (window.kakao && window.kakao.maps) {
    window.kakao.maps.load(()=>{
      const markers = positions.map((e)=>{
        return (new window.kakao.maps.Marker({ position: new window.kakao.maps.LatLng(e.lat, e.lng)}));
      });
      mapInstance = new window.kakao.maps.Map(container, options);
      for(let i = 0; i < markers.length; i++){
        markers[i].setMap(mapInstance);
      }
    });
  }
};
</script>

<template>
  <div ref="mapContainer" style="width: 100%; height: 100%"></div>
</template>
