import { createReducer, on } from '@ngrx/store';
import {
  addPost,
  addPostSuccess,
  deletePost,
  deletePostSuccess,
  loadPostsSuccess,
  updatePost,
  updatePostSuccess,
} from './posts.action';
import { initialState } from './posts.state';

const _postsReducer = createReducer(
  initialState,
  on(addPostSuccess, (state, action) => {
    let post = { ...action.post };

    return {
      ...state,
      posts: [...state.posts, post],
    };
  }),
  on(updatePostSuccess, (state, action) => {
    const updatedPost = state.posts.map((post) => {
      return action.post.id === post.id ? action.post : post;
    });
    return {
      ...state,
      posts: updatedPost,
    };
  }),
  on(deletePostSuccess, (state, action) => {
    const updatedPost = state.posts.filter((post) => {
      return post.id !== action.id;
    });

    return {
      ...state,
      posts: updatedPost,
    };
  }),
  on(loadPostsSuccess, (state, action) => {
    return {
      ...state,
      posts: action.posts,
    };
  })
);

export function postsReducer(state, action) {
  return _postsReducer(state, action);
}
