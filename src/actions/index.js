import {normalize} from 'normalizr';
import {postListSchema} from './schema';
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  POST_INFO_REQUEST,
  POST_INFO_FAILURE,
  POST_INFO_SUCCESS,
  EDIT_POST_REQUEST,
  EDIT_POST_FAILURE,
  EDIT_POST_SUCCESS,
  POST_COMMENTS_REQUEST,
  POST_COMMENTS_FAILURE,
  POST_COMMENTS_SUCCESS,
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE,
} from '../constants';

export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = data => ({
  type: FETCH_POSTS_SUCCESS,
  payload: normalize(data, postListSchema),
});

export const fetchPostsError = error => ({
  type: FETCH_POSTS_FAILURE,
  payload: error.message,
});

export const fetchPostInfoRequest = postId => ({
  type: POST_INFO_REQUEST,
  id: postId,
});

export const fetchPostInfoSuccess = data => ({
  type: POST_INFO_SUCCESS,
  payload: data,
});

export const fetchPostInfoError = error => ({
  type: POST_INFO_FAILURE,
  payload: error.message,
});

export const editPostInfoRequest = (postId, data) => ({
  type: EDIT_POST_REQUEST,
  id: postId,
  data,
});

export const editPostInfoSuccess = data => ({
  type: EDIT_POST_SUCCESS,
  payload: data,
});

export const editPostInfoError = error => ({
  type: EDIT_POST_FAILURE,
  payload: error.message,
});

export const fetchPostCommentsRequest = postId => ({
  type: POST_COMMENTS_REQUEST,
  id: postId,
});

export const fetchPostCommentsSuccess = data => ({
  type: POST_COMMENTS_SUCCESS,
  payload: data,
});

export const fetchPostCommentsError = error => ({
  type: POST_COMMENTS_FAILURE,
  payload: error,
});

export const fetchLoginRequest = data => ({
  type: FETCH_LOGIN_REQUEST,
  payload: data,
});

export const fetchLoginSuccess = data => ({
  type: FETCH_LOGIN_SUCCESS,
  payload: data,
});

export const fetchLoginError = error => ({
  type: FETCH_LOGIN_FAILURE,
  payload: error.message,
});
