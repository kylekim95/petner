import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_BASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_SERVICE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
const PAGE_SIZE = 9;

// 동물 종류 관계없이 전체 조회
export async function getAnimalList(page: number) {
  const { data, error } = await supabase
    .from('Animal')
    .select('*')
    .range((page - 1) * PAGE_SIZE, page * PAGE_SIZE - 1);
  console.log('supabase data', data);
  return data ? data : error;
}

// 동물 종류별 조회
type KindCdType = '개' | '고양이' | '기타축종';
export async function getAnimalListBykindCd(kindCd: KindCdType, page: number) {
  const { data, error } = await supabase
    .from('Animal')
    .select('*')
    .ilike('kindCd', `[${kindCd}]%`)
    .range((page - 1) * PAGE_SIZE, page * PAGE_SIZE - 1);
  console.log('supabase data', data);
  return data ? data : error;
}
// 공고 올라온 지역명으로 조회 -> orgNm(관활기관) 컬럼에서 조회
type OrgNameType = '서울특별시' | '인천광역시' | '대구광역시' | '부산광역시';
export async function getAniamlListByOrg(orgName: OrgNameType, page: number) {
  const { data, error } = await supabase
    .from('Animal')
    .select('*')
    .ilike('orgNm', `${orgName}%`)
    .range((page - 1) * PAGE_SIZE, page * PAGE_SIZE - 1);
  console.log('supabase data', data);
  return data ? data : error;
}

// 성별로 조회
type SexType = 'M' | 'F';
export async function getAnimalListBySex(sexCd: SexType, page: number) {
  const { data, error } = await supabase
    .from('Animal')
    .select('*')
    .eq('sexCd', sexCd)
    .range((page - 1) * PAGE_SIZE, page * PAGE_SIZE - 1);

  console.log('supabase data', data);
  return data ? data : error;
}

// 입양 상태로 조회
// state이 true이면 입양 가능한 상태의 동물만 반환
// state이 false이면 입양 불가능한 상태의 동물만 반환 (종료/반환상태) -> 자연사 상태는 리턴하지 않음
export async function getAnimalListByState(state: boolean, page: number) {
  const adoptionState = state ? '보호중' : '종료(반환)';

  const { data, error } = await supabase
    .from('Animal')
    .select('*')
    .eq('processState', adoptionState)
    // 예를들어 해당 함수에 sexCd인자가 주어진다면
    //.eq('sexCd', sexCd) 이 코드 줄을 추가
    .range((page - 1) * PAGE_SIZE, page * PAGE_SIZE - 1);

  console.log('supabase data', data);
  return data ? data : error;
}

// 유기동물 코드(desertionNo)로 특정 동물 조회
export async function getAnimalInfo(code: string) {
  const { data, error } = await supabase.from('Animal').select('*').eq('desertionNo', code);

  return data ? data : error;
}

// 쿼리로 조회
interface GetAnimalListParams {
  kindCd?: KindCdType; // 개, 동물, 기타 축종
  orgName?: OrgNameType;
  sexCd?: SexType;
  state?: boolean; // true: 입양 가능, false: 입양 불가능
  species?: string;
  page: number;
  queryStart?: string; // 조회를 시작하려는 날짜
  queryEnd?: string; // 조회를 마치려는 날짜
}

export async function getAnimalListQuery(params: GetAnimalListParams) {
  const { orgName, sexCd, state, page, queryStart, queryEnd, species, kindCd } = params;
  const adoptionState = state !== undefined ? (state ? '보호중' : '종료(반환)') : undefined;

  let query = supabase.from('Animal').select('*');

  // 축종 조건 추간
  if (kindCd) {
    query = query.ilike('kindCd', `[${kindCd}]%`);
  }

  // 품종 조건 추가
  if (species) {
    query = query.ilike('kindCd', `%${species}%`);
  }

  // orgName 조건 추가
  if (orgName) {
    query = query.ilike('orgNm', `${orgName}%`);
  }

  // sexCd 조건 추가
  if (sexCd) {
    query = query.eq('sexCd', sexCd);
  }

  // processState 조건 추가
  if (adoptionState) {
    query = query.eq('processState', adoptionState);
  }

  // 조회 날짜 조건 추가
  if (queryStart && queryEnd) {
    query = query.gte('noticeSdt', queryStart); // noticeSdt가 queryStart보다 크거나 같은지
    query = query.lte('noticeEdt', queryEnd);
  }

  // 페이지네이션 처리
  query = query.range((page - 1) * PAGE_SIZE, page * PAGE_SIZE - 1);

  const { data, error } = await query;

  console.log('supabase data', data);
  return data ? data : error;
}
