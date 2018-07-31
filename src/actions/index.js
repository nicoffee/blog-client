import {normalize} from 'normalizr';
import {postListSchema} from './schema';
import * as types from '../constants/types';

export const fetchPostsRequest = params => ({
  type: types.FETCH_POSTS_REQUEST,
  payload: params,
});

export const fetchPostsSuccess = data => ({
  type: types.FETCH_POSTS_SUCCESS,
  payload: normalize(data, postListSchema),
});

export const fetchPostsError = error => ({
  type: types.FETCH_POSTS_FAILURE,
  payload: error.message,
});

export const fetchSessionRequest = () => ({
  type: types.FETCH_SESSION_REQUEST,
});

export const fetchSessionSuccess = data => ({
  type: types.FETCH_SESSION_SUCCESS,
  payload: data,
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
  payload: error,
});

export const fetchLogoutRequest = () => ({
  type: types.FETCH_LOGOUT_REQUEST,
});

export const fetchLogoutSuccess = () => ({
  type: types.FETCH_LOGOUT_SUCCESS,
});

export const createUserRequest = data => ({
  type: types.CREATE_USER_REQUEST,
  payload: data,
});

export const createUserSuccess = data => ({
  type: types.CREATE_USER_SUCCESS,
  payload: data,
});

export const createUserError = errors => ({
  type: types.CREATE_USER_FAILURE,
  payload: errors,
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
