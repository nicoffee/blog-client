import {call, put, takeEvery} from 'redux-saga/effects';
import {
  fetchPostsSuccess,
  fetchPostsError,
  fetchPostInfoSuccess,
  fetchPostInfoError,
} from '../actions';
import {FETCH_POSTS_REQUEST, POST_INFO_REQUEST} from '../constants';
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

function* mySaga() {
  yield takeEvery(FETCH_POSTS_REQUEST, fetchPosts);
  yield takeEvery(POST_INFO_REQUEST, fetchPostInfo);
}

export default mySaga;
