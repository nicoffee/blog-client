import {normalize} from 'normalizr';
import {postListSchema} from './schema';
import * as types from '../types';

export const fetchPostsRequest = () => ({
  type: types.FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = data => ({
  type: types.FETCH_POSTS_SUCCESS,
  payload: normalize(data, postListSchema),
});

export const fetchPostsError = error => ({
  type: types.FETCH_POSTS_FAILURE,
  payload: error.message,
});

export const fetchPostInfoRequest = postId => ({
  type: types.POST_INFO_REQUEST,
  id: postId,
});

export const fetchPostInfoSuccess = data => ({
  type: types.POST_INFO_SUCCESS,
  payload: data,
});

export const fetchPostInfoError = error => ({
  type: types.POST_INFO_FAILURE,
  payload: error.message,
});

export const editPostInfoRequest = (postId, data) => ({
  type: types.EDIT_POST_REQUEST,
  id: postId,
  data,
});

export const editPostInfoSuccess = data => ({
  type: types.EDIT_POST_SUCCESS,
  payload: data,
});

export const editPostInfoError = error => ({
  type: types.EDIT_POST_FAILURE,
  payload: error.message,
});

export const createPostRequest = data => ({
  type: types.CREATE_POST_REQUEST,
  data,
});

export const createPostSuccess = data => ({
  type: types.CREATE_POST_SUCCESS,
  payload: data,
});

export const createPostError = error => ({
  type: types.CREATE_POST_FAILURE,
  payload: error.message,
});

export const fetchPostCommentsRequest = postId => ({
  type: types.POST_COMMENTS_REQUEST,
  id: postId,
});

export const fetchPostCommentsSuccess = data => ({
  type: types.POST_COMMENTS_SUCCESS,
  payload: data,
});

export const fetchPostCommentsError = error => ({
  type: types.POST_COMMENTS_FAILURE,
  payload: error,
});

export const fetchLoginRequest = data => ({
  type: types.FETCH_LOGIN_REQUEST,
  payload: data,
});

export const fetchLoginSuccess = data => ({
  type: types.FETCH_LOGIN_SUCCESS,
  payload: data,
});

export const fetchLoginError = error => ({
  type: types.FETCH_LOGIN_FAILURE,
  payload: error.message,
});

export const createUserRequest = data => ({
  type: types.CREATE_USER_REQUEST,
  payload: data,
});

export const createUserSuccess = data => ({
  type: types.CREATE_USER_SUCCESS,
  payload: data,
});

export const createUserError = error => ({
  type: types.CREATE_USER_SUCCESS,
  payload: error.message,
});

export const toggleLikeRequest = data => ({
  type: types.TOGGLE_LIKE_REQUEST,
  payload: data,
});

export const toggleLikeSuccess = data => ({
  type: types.TOGGLE_LIKE_SUCCESS,
  payload: data,
});

export const openModal = () => ({
  type: types.OPEN_MODAL,
});

export const closeModal = () => ({
  type: types.CLOSE_MODAL,
});

export const switchTheme = theme => ({
  type: types.SWITCH_THEME,
  payload: theme,
});
