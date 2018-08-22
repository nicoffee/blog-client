import {takeEvery} from 'redux-saga/effects';
import {
  FETCH_POSTS_REQUEST,
  FETCH_MORE_POSTS_REQUEST,
  fetchPostsSaga,
  fetchMorePostsSaga,
} from './modules/posts';
import {
  CREATE_POST_REQUEST,
  FETCH_POST_REQUEST,
  UPDATE_POST_REQUEST,
  TOGGLE_LIKE_REQUEST,
  FETCH_COMMENTS_REQUEST,
  DELETE_POST_REQUEST,
  createPostSaga,
  fetchPostSaga,
  updatePostSaga,
  deletePostSaga,
  fetchPostCommentsSaga,
  likePostSaga,
} from './modules/post';
import {
  CREATE_USER_REQUEST,
  FETCH_LOGIN_REQUEST,
  FETCH_LOGOUT_REQUEST,
  FETCH_SESSION_REQUEST,
  fetchLoginSaga,
  fetchLogoutSaga,
  fetchSessionSaga,
  createUserSaga,
} from './modules/user';
import {
  SWITCH_THEME,
  // OPEN_CONFIRM_MODAL,
  switchThemeSaga,
  // openConfirmModalSaga,
} from './modules/app';

function* mySaga() {
  yield takeEvery(FETCH_POSTS_REQUEST, fetchPostsSaga);
  yield takeEvery(FETCH_MORE_POSTS_REQUEST, fetchMorePostsSaga);

  yield takeEvery(CREATE_POST_REQUEST, createPostSaga);
  yield takeEvery(FETCH_POST_REQUEST, fetchPostSaga);
  yield takeEvery(UPDATE_POST_REQUEST, updatePostSaga);
  yield takeEvery(DELETE_POST_REQUEST, deletePostSaga);

  // yield takeEvery(OPEN_CONFIRM_MODAL, openConfirmModalSaga);

  yield takeEvery(TOGGLE_LIKE_REQUEST, likePostSaga);
  yield takeEvery(FETCH_COMMENTS_REQUEST, fetchPostCommentsSaga);

  yield takeEvery(FETCH_LOGIN_REQUEST, fetchLoginSaga);
  yield takeEvery(FETCH_LOGOUT_REQUEST, fetchLogoutSaga);
  yield takeEvery(CREATE_USER_REQUEST, createUserSaga);
  yield takeEvery(FETCH_SESSION_REQUEST, fetchSessionSaga);

  yield takeEvery(SWITCH_THEME, switchThemeSaga);
}

export default mySaga;
