import { useMutation } from '@tanstack/vue-query';
import { createPost } from '@/apis/devcourse/Post/createPost';

const usePostMissingForm = () => {
  const postFormMutation = useMutation({
    mutationFn: createPost,
    // onSuccess -> do something
    onError: (error) => {
      console.log('plan데이터를 보내는데 실패하였습니다.', error);
    },
  });
  return { postFormMutation };
};

export default usePostMissingForm;
