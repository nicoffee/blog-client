import {call, put, takeEvery} from 'redux-saga/effects';
import {normalize} from 'normalizr';
import * as schema from '../actions/schema';
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_SUCCESS,
} from '../constants';
import {fetchPosts} from '../services/api';

function* fetchPostsSaga() {
  try {
    const posts = yield call(fetchPosts);
    yield put({
      type: FETCH_POSTS_SUCCESS,
      payload: normalize(posts.data, schema.postListSchema),
    });
  } catch (error) {
    yield put({
      type: FETCH_POSTS_FAILURE,
      payload: error.message,
    });
  }
}

function* mySaga() {
  yield takeEvery(FETCH_POSTS_REQUEST, fetchPostsSaga);
}

export default mySaga;
