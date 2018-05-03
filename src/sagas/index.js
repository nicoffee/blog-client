import {call, put, takeEvery} from 'redux-saga/effects';
import {
  fetchPostsSuccess,
  fetchPostsError,
  fetchPostInfoSuccess,
  fetchPostInfoError,
  editPostInfoSuccess,
  editPostInfoError,
  fetchPostCommentsSuccess,
  fetchPostCommentsError,
} from '../actions';
import {
  FETCH_POSTS_REQUEST,
  POST_INFO_REQUEST,
  EDIT_POST_REQUEST,
  POST_COMMENTS_REQUEST,
} from '../constants';
import * as api from '../services/api';

export function* fetchPosts() {
  try {
    const posts = yield call(api.fetchPosts);
    yield put(fetchPostsSuccess(posts.data));
  } catch (error) {
    yield put(fetchPostsError(error));
  }
}

export function* fetchPostInfo(action) {
  try {
    const post = yield call(api.fetchPost, action.id);
    yield put(fetchPostInfoSuccess(post.data));
  } catch (error) {
    yield put(fetchPostInfoError(error));
  }
}

export function* editPostInfo(action) {
  try {
    const post = yield call(api.editPost, action.id, action.data);
    yield put(editPostInfoSuccess(post.data));
  } catch (error) {
    yield put(editPostInfoError(error));
  }
}

export function* fetchPostComments(action) {
  try {
    const post = yield call(api.fetchPostComments, action.id);
    yield put(fetchPostCommentsSuccess(post.data));
  } catch (error) {
    yield put(fetchPostCommentsError(error));
  }
}

function* mySaga() {
  yield takeEvery(FETCH_POSTS_REQUEST, fetchPosts);
  yield takeEvery(POST_INFO_REQUEST, fetchPostInfo);
  yield takeEvery(EDIT_POST_REQUEST, editPostInfo);
  yield takeEvery(POST_COMMENTS_REQUEST, fetchPostComments);
}

export default mySaga;
