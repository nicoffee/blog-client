import {call, put, takeEvery, select} from 'redux-saga/effects';
import {
  FETCH_POSTS_REQUEST,
  POST_INFO_REQUEST,
  EDIT_POST_REQUEST,
  POST_COMMENTS_REQUEST,
  FETCH_LOGIN_REQUEST,
  CREATE_USER_REQUEST,
  CREATE_POST_REQUEST,
  TOGGLE_LIKE_REQUEST,
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

export function* createPost(action) {
  try {
    const post = yield call(api.createPost, action.data);
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
    yield put(actions.fetchLoginSuccess(login.data[0]));
    yield put(actions.closeModal());
  } catch (error) {
    yield put(actions.fetchLoginError(error));
  }
}

export function* createUser(action) {
  const user = yield call(api.createUser, action.payload);
  yield put(actions.createUserSuccess(user.data));
  yield put(actions.closeModal());
}

export function* toggleLike(action) {
  const user = yield select(state => state.user);
  const post = user.posts[action.payload];
  const like = post ? post.like : false;
  const superData = {posts: {[action.payload]: {like: !like}}};
  const response = yield call(api.updateUser, user.id, superData);
  yield put(actions.toggleLikeSuccess(response.data));
}

function* mySaga() {
  yield takeEvery(FETCH_POSTS_REQUEST, fetchPosts);
  yield takeEvery(POST_INFO_REQUEST, fetchPostInfo);
  yield takeEvery(EDIT_POST_REQUEST, editPostInfo);
  yield takeEvery(CREATE_POST_REQUEST, createPost);
  yield takeEvery(POST_COMMENTS_REQUEST, fetchPostComments);
  yield takeEvery(FETCH_LOGIN_REQUEST, fetchLogin);
  yield takeEvery(CREATE_USER_REQUEST, createUser);
  yield takeEvery(TOGGLE_LIKE_REQUEST, toggleLike);
}

export default mySaga;
