import {call, put, takeEvery} from 'redux-saga/effects';
import {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsError,
} from '../actions';
import {FETCH_POSTS_REQUEST} from '../constants';
import {fetchPosts} from '../services/api';

export function* fetchPostsSaga() {
  try {
    const posts = yield call(fetchPosts);
    yield put(fetchPostsSuccess(posts.data));
  } catch (error) {
    yield put(fetchPostsError(error));
  }
}

function* mySaga() {
  yield takeEvery(FETCH_POSTS_REQUEST, fetchPostsSaga);
}

export default mySaga;
