import {
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE
} from '../../constants';

import http from '../../utils/HttpClient';

// Caching logic
export function shouldFetchPosts(state) {
  if (state.posts.data.length != 0) {
    return false;
  } else if (state.posts.isLoading) {
    return false;
  } else {
    return true;
  }
}

export function loadPosts() {
  return {
    // Types of actions to emit before and after
    types: [LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE],

    // Check the cache (optional):
    // shouldCallAPI: (state) => state.posts.data.length === 0 && !state.posts.isLoading,

    // Perform the fetching:
    callAPI: () => http.get('/api/v0/posts'),

    // Arguments to inject in begin/end actions
    payload: {},
  };
}
