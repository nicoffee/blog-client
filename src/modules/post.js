import axios from 'axios';
import {call, put} from 'redux-saga/effects';
import history from '../utils/history';
import config from '../../config.json';

axios.defaults.withCredentials = true;

const apiUrl =
  process.env.NODE_ENV === 'development'
    ? config.api_dev
    : config.real_api_prod;

// Actions
export const CREATE_POST_REQUEST = 'blog/post/create/REQUEST';
const CREATE_POST_SUCCESS = 'blog/post/create/SUCCESS';
const CREATE_POST_FAILURE = 'blog/post/create/FAILURE';

export const FETCH_POST_REQUEST = 'blog/post/read/REQUEST';
const FETCH_POST_SUCCESS = 'blog/post/read/SUCCESS';
const FETCH_POST_FAILURE = 'blog/post/read/FAILURE';

export const UPDATE_POST_REQUEST = 'blog/post/update/REQUEST';
const UPDATE_POST_SUCCESS = 'blog/post/update/SUCCESS';
const UPDATE_POST_FAILURE = 'blog/post/update/FAILURE';

export const FETCH_COMMENTS_REQUEST = 'blog/post/comments/REQUEST';
const FETCH_COMMENTS_SUCCESS = 'blog/post/comments/SUCCESS';
const FETCH_COMMENTS_FAILURE = 'blog/post/comments/FAILURE';

export const TOGGLE_LIKE_REQUEST = 'blog/post/like/REQUEST';
const TOGGLE_LIKE_SUCCESS = 'blog/post/like/SUCCESS';

// Reducer
const initialState = {
  isFetching: false,
  error: null,
  data: {likes: []},
  comments: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_POST_REQUEST:
      return {...state, isFetching: true};
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: {...state.data, ...action.payload},
      };
    case CREATE_POST_FAILURE:
      return {...state, isFetching: false, error: action.payload};

    case FETCH_POST_REQUEST:
      return {...state, isFetching: true};
    case FETCH_POST_SUCCESS:
    case TOGGLE_LIKE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: {...state.data, ...action.payload},
      };
    case FETCH_POST_FAILURE:
      return {...state, isFetching: false, error: action.payload};

    case UPDATE_POST_REQUEST:
      return {...state, isFetching: true};
    case UPDATE_POST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: {...state.data, ...action.payload},
      };
    case UPDATE_POST_FAILURE:
      return {...state, isFetching: false, error: action.payload};

    case FETCH_COMMENTS_REQUEST:
      return {...state, isFetching: true};
    case FETCH_COMMENTS_SUCCESS:
      return {...state, isFetching: false, comments: action.payload};
    case FETCH_COMMENTS_FAILURE:
      return {...state, isFetching: false, error: action.payload};

    default:
      return state;
  }
}

// Action Creators
export const fetchPostRequest = postId => ({
  type: FETCH_POST_REQUEST,
  id: postId,
});

export const fetchPostSuccess = data => ({
  type: FETCH_POST_SUCCESS,
  payload: data,
});

export const fetchPostError = error => ({
  type: FETCH_POST_FAILURE,
  payload: error.message,
});

export const createPostRequest = data => ({
  type: CREATE_POST_REQUEST,
  data,
});

export const createPostSuccess = data => ({
  type: CREATE_POST_SUCCESS,
  payload: data,
});

export const createPostError = error => ({
  type: CREATE_POST_FAILURE,
  payload: error.message,
});

export const updatePostRequest = (postId, data) => ({
  type: UPDATE_POST_REQUEST,
  id: postId,
  data,
});

export const updatePostSuccess = data => ({
  type: UPDATE_POST_SUCCESS,
  payload: data,
});

export const updatePostError = error => ({
  type: UPDATE_POST_FAILURE,
  payload: error.message,
});

export const fetchPostCommentsRequest = postId => ({
  type: FETCH_COMMENTS_REQUEST,
  id: postId,
});

export const fetchPostCommentsSuccess = data => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload: data,
});

export const fetchPostCommentsError = error => ({
  type: FETCH_COMMENTS_FAILURE,
  payload: error,
});

export const toggleLikeRequest = (postId, like) => ({
  type: TOGGLE_LIKE_REQUEST,
  postId,
  like,
});

export const toggleLikeSuccess = data => ({
  type: TOGGLE_LIKE_SUCCESS,
  payload: data,
});

// Side effects
export function fetchPost(postId) {
  return axios.get(`${apiUrl}/posts/${postId}`);
}

export function updatePost(postId, data) {
  return axios.patch(`${apiUrl}/posts/${postId}`, data);
}

export function createPost(data) {
  return axios.post(`${apiUrl}/posts`, data);
}

export function likePost(postId, like) {
  return axios.put(`${apiUrl}/posts/${postId}/like`, {like});
}

export function fetchPostComments(postId) {
  return axios.get(`${apiUrl}/comments/?postId=${postId}`);
}

// Sagas
export function* createPostSaga(action) {
  try {
    const post = yield call(createPost, action.data);
    // yield put(createPostSuccess(post.data));
    yield call(history.push, `/post/${post.data.id}`);
  } catch (error) {
    yield put(createPostError(error));
  }
}

export function* fetchPostSaga(action) {
  try {
    const post = yield call(fetchPost, action.id);
    yield put(fetchPostSuccess(post.data));
  } catch (error) {
    yield put(fetchPostError(error));
  }
}

export function* updatePostSaga(action) {
  try {
    const post = yield call(updatePost, action.id, action.data);
    yield put(updatePostSuccess(post.data));
  } catch (error) {
    yield put(updatePostError(error));
  }
}

export function* fetchPostCommentsSaga(action) {
  try {
    const post = yield call(fetchPostComments, action.id);
    yield put(fetchPostCommentsSuccess(post.data));
  } catch (error) {
    yield put(fetchPostCommentsError(error));
  }
}

export function* likePostSaga(action) {
  const post = yield call(likePost, action.postId, action.like);
  yield put(toggleLikeSuccess(post.data));
}

//Selectors
export const getIsLiked = state => state.post.data.isLiked;
export const getCanEdit = state => state.post.data.canEdit;
export const getLikesCount = state => state.post.data.likes.length;
export const getErrorMessage = state => state.post.error;
