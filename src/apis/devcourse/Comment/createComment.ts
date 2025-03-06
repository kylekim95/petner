import { type devComment, ExtractCommentFromJson } from '@/types/devcourse/devComment';
import { COMMENT } from '@/apis/endpoints';
import devAPI from '@/config/axiosDevConfig';

export interface CreateCommentRequest {
  postId: string;
  comment : string;
}
export interface CreateCommentResponse {
  comment : devComment;
}

export async function createComment(request : CreateCommentRequest) : Promise<CreateCommentResponse> {
  const response = await devAPI.post(import.meta.env.VITE_API_BASE_URL + COMMENT.create, {
    ...request
  });
  console.log(response);
  return {
    comment : ExtractCommentFromJson(response.data)
  }
}
