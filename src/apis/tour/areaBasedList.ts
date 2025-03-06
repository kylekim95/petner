import tourAPI from '@/config/axiosTourConfig';

//API 테스트
import { COMMON, INTRO, KEYWORD } from '@/apis/tour/tourEndpoints';

// 숙소정보

interface KeywordItem {
  contentTypeId: number;
  areaCode: number;
  keyword: string;
}

interface DataId {
  contentTypeId: number;
  contentId: number;
}

// 키워드 검색
export async function fetchKeywordData(item: KeywordItem) {
  console.log(item);
  try {
    const response = await tourAPI.get(KEYWORD.get, {
      params: {
        contentTypeId: item.contentTypeId,
        areaCode: item.areaCode,
        listYN: 'Y',
        arrange: 'O',
        keyword: item.keyword,
      },
    });
    console.log(response.data.response.body.items.item);
    // return response.data.response.body.items.item; // API 응답 데이터를 반환
  } catch (error) {
    console.error('Error fetching tour data:', error);
    throw error; // 호출한 곳에서 에러를 처리할 수 있도록 예외 던지기
  }
}

// 공통정보 조회
export async function fetchCommonData(dataId: DataId) {
  try {
    const response = await tourAPI.get(COMMON.get, {
      params: {
        contentId: dataId.contentId,
        contentTypeId: dataId.contentTypeId,
        defaultYN: 'Y',
        firstImageYN: 'Y',
        areacodeYN: 'Y',
        catcodeYN: 'Y',
        addrinfoYN: 'Y',
        mapinfoYN: 'Y',
        overviewYN: 'Y',
      },
    });

    console.log(response.data.response.body.items.item);
    // return response; // API 응답 데이터를 반환
  } catch (error) {
    console.error('Error fetching tour data:', error);
    throw error; // 호출한 곳에서 에러를 처리할 수 있도록 예외 던지기
  }
}
// 소개정보조회 조회
export async function fetchIntroData(dataId: DataId) {
  try {
    const response = await tourAPI.get(INTRO.get, {
      params: {
        contentId: dataId.contentId,
        contentTypeId: dataId.contentTypeId,
      },
    });

    console.log(response.data.response.body.items.item); // API 응답 데이터를 반환
    // return response.data.response.body.items.item; // API 응답 데이터를 반환
  } catch (error) {
    console.error('Error fetching tour data:', error);
    throw error; // 호출한 곳에서 에러를 처리할 수 있도록 예외 던지기
  }
}
