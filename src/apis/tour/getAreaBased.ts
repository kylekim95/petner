import tourAPI from '@/config/axiosTourConfig';
import { AREABASED } from '@/apis/tour/tourEndpoints';

interface AreaData {
  pageNo?: number;
  contentTypeId?: string;
  areaCode?: number | string;
  cat3?: number | string;
  category?: number | string;
}

//검색페이지 첫 렌더링 화면(숙소 전체 불러오기,검색 페이지에서 필터 value로 areaCode, catrgory 전달)
export async function fetchAreaBasedData({
  pageNo,
  contentTypeId = '32',
  areaCode,
  category,
}: AreaData = {}) {
  try {
    const response = await tourAPI.get(AREABASED.get, {
      params: {
        contentTypeId,
        areaCode,
        cat3: category,
        pageNo: pageNo,
      },
    });
    const data = response.data.response.body.items?.item;
    // console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching tour data:', error);
    throw error;
  }
}
