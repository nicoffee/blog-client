import {call, put, takeEvery} from 'redux-saga/effects';
import {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsError,
} from '../actions';
import {fetchPosts} from '../services/api';

export function* fetchPostsSaga() {
  try {
    const posts = yield call(fetchPosts);
    yield put(fetchPostsSuccess(posts.data));
  } catch (error) {
    yield put(fetchPostsError);
  }
}

function* mySaga() {
  yield takeEvery(fetchPostsRequest(), fetchPostsSaga);
}

export default mySaga;
