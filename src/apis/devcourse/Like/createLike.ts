import { type devLike, ExtractLikeFromJson } from "@/types/devcourse/devLike";
import { LIKE } from '@/apis/endpoints';
import devAPI from "@/config/axiosDevConfig";

export interface CreateLikeRequest {
  postId : string;
}
export interface CreateLikeResponse {
  like : devLike;
}

export async function createLike(request : CreateLikeRequest) : Promise<CreateLikeResponse> {
  const response = await devAPI.post(import.meta.env.VITE_API_BASE_URL + LIKE.create, {
    ...request
  });
  console.log(response);
  return {
    like : ExtractLikeFromJson(response.data)
  }
}
