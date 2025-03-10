import useFetchMissingPost from './useFetchMissingPost';
import { computed } from 'vue';
import type { LocationQueryValue } from 'vue-router';
import type { ComputedRef } from 'vue';
import type MissingAnimalDataType from '@/types/missingAnimal';

const useFetchTargetMissing = (postId: LocationQueryValue | LocationQueryValue[]) => {
  const { postCards, isLoading } = useFetchMissingPost();

  const post = computed(() => postCards.value?.posts.filter((cards) => cards._id === postId));

  if (postId !== '') {
    console.log('post', post.value);
    // title에 저장된 실종정보 파싱
    const contents: ComputedRef<MissingAnimalDataType> = computed(() => {
      if (post.value !== undefined) {
        return JSON.parse(post?.value[0].title);
      }
      return null;
    });
    return { post, isLoading, contents };
  } else {
    return { post: null, isLoading: null, contents: null };
  }
};
export default useFetchTargetMissing;
