import axios from '../config/axios';
import {call, put} from 'redux-saga/effects';
import history from '../config/history';

// Actions
export const FETCH_POSTS_REQUEST = 'blog/posts/fetch/REQUEST';
export const FETCH_POSTS_SUCCESS = 'blog/posts/fetch/SUCCESS';
export const FETCH_POSTS_FAILURE = 'blog/posts/fetch/FAILURE';

export const FETCH_MORE_POSTS_REQUEST = 'blog/posts/fetch-more/REQUEST';
export const FETCH_MORE_POSTS_SUCCESS = 'blog/posts/fetch-more/SUCCESS';

// Reducer
const initialState = {
  isFetching: false,
  isMorePostsFetching: false,
  isMorePostsAvailable: false,
  error: null,
  data: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case FETCH_MORE_POSTS_REQUEST:
      return {
        ...state,
        isMorePostsFetching: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        isMorePostsAvailable: action.payload.length >= 10,
      };
    case FETCH_MORE_POSTS_SUCCESS:
      return {
        ...state,
        isMorePostsAvailable: action.payload.length >= 10,
        isMorePostsFetching: false,
        data: [...state.data, ...action.payload],
      };
    case FETCH_POSTS_FAILURE:
      return {...state, isFetching: false, error: action.payload};
    default:
      return state;
  }
}

// Action Creators
export const fetchPostsRequest = params => ({
  type: FETCH_POSTS_REQUEST,
  payload: params,
});

export const fetchPostsSuccess = data => ({
  type: FETCH_POSTS_SUCCESS,
  payload: data,
});

export const fetchPostsError = error => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});

export const fetchMorePostsRequest = params => ({
  type: FETCH_MORE_POSTS_REQUEST,
  payload: params,
});

export const fetchMorePostsSuccess = data => ({
  type: FETCH_MORE_POSTS_SUCCESS,
  payload: data,
});

// export const searchPostsSuccess = data => ({
//   type: SEARCH_POSTS_SUCCESS,
//   payload: data,
// });

// Side effects
function fetchPosts(params) {
  return axios.get(`/posts`, {params});
}

// Sagas
export function* fetchPostsSaga(action) {
  try {
    if (action.payload.search) {
      yield call(history.push, `/search?q=${action.payload.search}`);
      const posts = yield call(fetchPosts, action.payload);
      yield put(fetchPostsSuccess(posts.data));

      return;
    }

    const posts = yield call(fetchPosts, action.payload);
    yield put(fetchPostsSuccess(posts.data));
  } catch (error) {
    yield put(fetchPostsError(error.message));
  }
}

export function* fetchMorePostsSaga(action) {
  const posts = yield call(fetchPosts, action.payload);
  yield put(fetchMorePostsSuccess(posts.data));
}

//Selectors
export const getPosts = state => state.posts.data;
export const getIsFetching = state => state.posts.isFetching;
export const getErrorMessage = state => state.posts.error;
export const getIsMorePostsAvailable = state =>
  state.posts.isMorePostsAvailable;
export const getIsMorePostsFetching = state => state.posts.isMorePostsFetching;
