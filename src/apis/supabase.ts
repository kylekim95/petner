import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_BASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_SERVICE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// count 갯수의 유기동물 정보를 가져옵니다.
export async function getAnimalList(count: number) {
  const { data, error } = await supabase.from('Animal').select('*').limit(count);

  console.log('supabase data', data);
  return data ? data : error;
}
