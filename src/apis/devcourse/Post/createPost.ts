import { type devPost, ExtractPostFromJson } from '@/types/devcourse/devPost';
import { POST } from '@/apis/devcourse/endpoints';
import devAPI from '@/config/axiosDevConfig';

export interface CreatePostRequest {
  title: string;
  channelId: string;
  image?: File;
}
export interface CreatePostResponse {
  post: devPost;
}

export async function createPost(request: CreatePostRequest): Promise<CreatePostResponse> {
  const response = await devAPI.post<devPost>(POST.create, {
    ...request,
  });
  console.log(response);
  return {
    post: ExtractPostFromJson(response.data),
  };
}
