import {call, put, takeEvery, select} from 'redux-saga/effects';
import {
  FETCH_POSTS_REQUEST,
  FETCH_LOGIN_REQUEST,
  FETCH_LOGOUT_REQUEST,
  FETCH_SESSION_REQUEST,
  CREATE_USER_REQUEST,
  // TOGGLE_LIKE_REQUEST,
  SWITCH_THEME,
} from '../constants/types';
import {
  CREATE_POST_REQUEST,
  FETCH_POST_REQUEST,
  UPDATE_POST_REQUEST,
  TOGGLE_LIKE_REQUEST,
  FETCH_COMMENTS_REQUEST,
  createPostSaga,
  fetchPostSaga,
  updatePostSaga,
  fetchPostCommentsSaga,
  likePostSaga,
} from '../modules/post';
import * as actions from '../actions';
import * as api from '../services/api';

export function* fetchPosts(action) {
  try {
    const posts = yield call(api.fetchPosts, action.payload);
    yield put(actions.fetchPostsSuccess(posts.data));
  } catch (error) {
    yield put(actions.fetchPostsError(error));
  }
}

export function* fetchLogin(action) {
  try {
    const login = yield call(api.fetchLogin, action.payload);
    localStorage.setItem('session_id', login.data.session_id);
    yield put(actions.fetchLoginSuccess(login.data.email));
    yield put(actions.closeModal());
  } catch (error) {
    yield put(actions.fetchLoginError(error.response.data.message));
  }
}

export function* fetchLogout() {
  yield call(api.fetchLogout);
  yield put(actions.fetchLogoutSuccess());
}

export function* fetchSession() {
  try {
    const session = yield call(api.fetchSession);
    yield put(actions.fetchSessionSuccess(session.data.email));
  } catch (error) {
    //handleError()
  }
}

export function* createUser(action) {
  try {
    const user = yield call(api.createUser, action.payload);
    yield put(actions.createUserSuccess(user.data));
    yield put(actions.closeModal());
  } catch (error) {
    const errors = error.response.data.errors;
    yield put(actions.createUserError(errors));
  }
}

export function* switchTheme(action) {
  yield localStorage.setItem('theme', action.payload);
}

// export function* toggleLike(action) {
//   const user = yield select(state => state.user);
//   const post = yield select(state => state.post);
//   let like = false;

//   if (user.likedPosts && user.likedPosts[action.payload]) {
//     like = user.likedPosts[action.payload].like;
//   }

//   const postReq = yield call(api.editPost, action.payload, {
//     likes: like ? post.data.likes - 1 : post.data.likes + 1,
//   });

//   yield put(actions.editPostInfoSuccess(postReq.data));
//   const data = {likedPosts: {[action.payload]: {like: !like}}};
//   const response = yield call(api.updateUser, user.id, data);
//   yield put(actions.toggleLikeSuccess(response.data));
// }

function* mySaga() {
  yield takeEvery(FETCH_POSTS_REQUEST, fetchPosts);

  yield takeEvery(CREATE_POST_REQUEST, createPostSaga);
  yield takeEvery(FETCH_POST_REQUEST, fetchPostSaga);
  yield takeEvery(UPDATE_POST_REQUEST, updatePostSaga);
  yield takeEvery(TOGGLE_LIKE_REQUEST, likePostSaga);
  yield takeEvery(FETCH_COMMENTS_REQUEST, fetchPostCommentsSaga);

  yield takeEvery(FETCH_LOGIN_REQUEST, fetchLogin);
  yield takeEvery(FETCH_LOGOUT_REQUEST, fetchLogout);
  yield takeEvery(CREATE_USER_REQUEST, createUser);

  // yield takeEvery(TOGGLE_LIKE_REQUEST, toggleLike);

  yield takeEvery(SWITCH_THEME, switchTheme);
  yield takeEvery(FETCH_SESSION_REQUEST, fetchSession);
}

export default mySaga;
