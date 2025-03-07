import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFacilitiesStore = defineStore('facilities', () => {
  const contentTypeId = ref('38');

  const setContentTypeIdCode = (newCode: string) => {
    contentTypeId.value = newCode;
    console.log(contentTypeId.value);
  };

  const areaCode = ref('1'); // 디폴트 서울
  const setAreaCode = (newCode: string) => {
    areaCode.value = newCode;
    console.log(areaCode.value);
  };

  const typeCode = ref('A0302');
  const setTypeCode = (newCode: string) => {
    typeCode.value = newCode;
    console.log(typeCode);
  };

  // 공용시설 정보
  const facilities = ref([
    { bbq: false },
    { beauty: false },
    { cycle: false },
    { campFire: false },
    { fitness: false },
    { spa: false },
    { sing: false },
    { seminar: false },
    { sports: false },
  ]);
  // 객실 정보
  const roomFacilities = ref([
    { tv: false },
    { pc: false },
    { internet: false },
    { clean: false },
    { sofa: false },
    { table: false },
    { dryer: false },
  ]);

  // 선택 토글 함수
  const toggleFacility = (facility: { option: string; selected: boolean }) => {
    facility.selected = !facility.selected;
  };

  const queryData = ref({
    contentTypeId: contentTypeId,
    areaCode: areaCode, // 디폴트: 서울
    typeCode: typeCode,
  });
  return {
    // contentTypeId
    contentTypeId,
    setContentTypeIdCode,
    areaCode,
    setAreaCode,
    // 시설
    typeCode,
    setTypeCode,
    // 유형
    facilities,
    roomFacilities,
    toggleFacility,
    // 총 데이터
    queryData,
  };
});
