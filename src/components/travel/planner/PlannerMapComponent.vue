<script setup lang="js">
import { ref, onMounted } from 'vue';

const props = defineProps({
  data : {
    type: Object,
    default: ()=>{}
  },
});
const mapContainer = ref(null);
onMounted(() => {
  loadKakaoMap(mapContainer.value);
});
const loadKakaoMap = (container) => {
  if (window.kakao && window.kakao.maps) {
    window.kakao.maps.load(()=>{
      const defaultPosition = {lat: 37.484681, lng: 127.010839};
      const defaultOptions = { center: new window.kakao.maps.LatLng(defaultPosition.lat, defaultPosition.lng), level: 3, maxLevel : 5 };
      const defaultMarker = new window.kakao.maps.Marker({ position: new window.kakao.maps.LatLng(defaultPosition.lat, defaultPosition.lng)});
      const mapInstance = new window.kakao.maps.Map(container, defaultOptions);
      defaultMarker.setMap(mapInstance);
    });
  }
};
</script>

<template>
  <div ref="mapContainer" style="width: 100%; height: 100%"></div>
</template>
