import {call, put, takeEvery} from 'redux-saga/effects';
import {
  FETCH_POSTS_REQUEST,
  POST_INFO_REQUEST,
  EDIT_POST_REQUEST,
  POST_COMMENTS_REQUEST,
  FETCH_LOGIN_REQUEST,
  CREATE_POST_REQUEST,
} from '../types';
import * as actions from '../actions';
import * as api from '../services/api';

export function* fetchPosts() {
  try {
    const posts = yield call(api.fetchPosts);
    yield put(actions.fetchPostsSuccess(posts.data));
  } catch (error) {
    yield put(actions.fetchPostsError(error));
  }
}

export function* fetchPostInfo(action) {
  try {
    const post = yield call(api.fetchPost, action.id);
    yield put(actions.fetchPostInfoSuccess(post.data));
  } catch (error) {
    yield put(actions.fetchPostInfoError(error));
  }
}

export function* editPostInfo(action) {
  try {
    const post = yield call(api.editPost, action.id, action.data);
    yield put(actions.editPostInfoSuccess(post.data));
  } catch (error) {
    yield put(actions.editPostInfoError(error));
  }
}

export function* createPost() {
  try {
    const post = yield call(api.createPost);
    yield put(actions.createPostSuccess(post.data));
  } catch (error) {
    yield put(actions.createPostError(error));
  }
}

export function* fetchPostComments(action) {
  try {
    const post = yield call(api.fetchPostComments, action.id);
    yield put(actions.fetchPostCommentsSuccess(post.data));
  } catch (error) {
    yield put(actions.fetchPostCommentsError(error));
  }
}

export function* fetchLogin(action) {
  try {
    const login = yield call(api.fetchLogin, action.payload);
    yield put(actions.fetchLoginSuccess(login.data));
    yield put(actions.closeModal());
  } catch (error) {
    yield put(actions.fetchLoginError(error));
  }
}

function* mySaga() {
  yield takeEvery(FETCH_POSTS_REQUEST, fetchPosts);
  yield takeEvery(POST_INFO_REQUEST, fetchPostInfo);
  yield takeEvery(EDIT_POST_REQUEST, editPostInfo);
  yield takeEvery(CREATE_POST_REQUEST, createPost);
  yield takeEvery(POST_COMMENTS_REQUEST, fetchPostComments);
  yield takeEvery(FETCH_LOGIN_REQUEST, fetchLogin);
}

export default mySaga;
