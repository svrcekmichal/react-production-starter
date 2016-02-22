import {
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,
  LOAD_POST_FAILURE,
  INVALIDATE_POST
} from '../../constants';
import http from '../../utils/HttpClient';

export function invalidate() {
  return {
    type: INVALIDATE_POST,
  };
}

export function shouldFetchPost(slug,state) {
  if (state.currentPost.isLoading) {
    return false;
  } else if(state.currentPost.didInvalidate) {
    return true;
  } else {
    return state.currentPost.data && state.currentPost.data.slug != slug;
  }
}

export function loadPost(slug) {
  return {
    // Types of actions to emit before and after
    types: ['LOAD_POST_REQUEST', 'LOAD_POST_SUCCESS', 'LOAD_POST_FAILURE'],

    // Check the cache (optional):
    // shouldCallAPI: (state) => shouldFetchPost(state),

    // Perform the fetching:
    callAPI: () => http.get(`/api/v0/post/${slug}`),

    // Arguments to inject in begin/end actions
    payload: { slug },
  };
}
