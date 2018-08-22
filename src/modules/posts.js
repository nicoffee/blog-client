import axios from 'axios';
import {combineReducers} from 'redux';
import {call, put} from 'redux-saga/effects';
import {schema, normalize} from 'normalizr';
import history from '../utils/history';
import config from '../../config.json';

axios.defaults.withCredentials = true;

const apiUrl =
  process.env.NODE_ENV === 'development'
    ? config.api_dev
    : config.real_api_prod;

const postSchema = new schema.Entity('posts', {}, {idAttribute: '_id'});
const postListSchema = new schema.Array(postSchema);

// Actions
export const FETCH_POSTS_REQUEST = 'blog/posts/fetch/REQUEST';
export const FETCH_MORE_POSTS_REQUEST = 'blog/posts/fetch-more/REQUEST';
export const FETCH_POSTS_SUCCESS = 'blog/posts/fetch/SUCCESS';
export const FETCH_MORE_POSTS_SUCCESS = 'blog/posts/fetch-more/SUCCESS';
export const FETCH_POSTS_FAILURE = 'blog/posts/fetch/FAILURE';

export const SEARCH_POSTS_REQUEST = 'blog/posts/search/REQUEST';
export const SEARCH_POSTS_SUCCESS = 'blog/posts/search/SUCCESS';
export const SEARCH_POSTS_FAILURE = 'blog/posts/search/FAILURE';

// Reducer
const createList = () => {
  const ids = (state = [], action) => {
    switch (action.type) {
      case FETCH_POSTS_SUCCESS:
        return action.payload.result;
      case FETCH_MORE_POSTS_SUCCESS:
        return [...state, ...action.payload.result];
      default:
        return state;
    }
  };

  const isFetching = (state = false, action) => {
    switch (action.type) {
      case FETCH_POSTS_REQUEST:
        return true;
      case FETCH_POSTS_FAILURE:
      case FETCH_POSTS_SUCCESS:
        return false;
      default:
        return state;
    }
  };

  const errorMessage = (state = null, action) => {
    switch (action.type) {
      case FETCH_POSTS_FAILURE:
        return action.payload || 'Something went wrong';
      case FETCH_POSTS_REQUEST:
      case FETCH_POSTS_SUCCESS:
        return null;
      default:
        return state;
    }
  };

  const isMorePostsAvailable = (state = false, action) => {
    switch (action.type) {
      case FETCH_POSTS_SUCCESS:
        return action.payload.result.length === 10;
      default:
        return state;
    }
  };

  const isMorePostsFetching = (state = false, action) => {
    switch (action.type) {
      case FETCH_MORE_POSTS_REQUEST:
        return true;
      case FETCH_MORE_POSTS_SUCCESS:
        return false;
      default:
        return state;
    }
  };

  return combineReducers({
    ids,
    isFetching,
    isMorePostsAvailable,
    isMorePostsFetching,
    errorMessage,
  });
};

const createSearchedList = () => {
  const ids = (state = [], action) => {
    switch (action.type) {
      case SEARCH_POSTS_SUCCESS:
        return action.payload.result;
      default:
        return state;
    }
  };

  const isFetching = (state = false, action) => {
    switch (action.type) {
      case FETCH_POSTS_REQUEST:
        return true;
      case FETCH_POSTS_FAILURE:
      case SEARCH_POSTS_SUCCESS:
        return false;
      default:
        return state;
    }
  };

  const errorMessage = (state = null, action) => {
    switch (action.type) {
      case SEARCH_POSTS_FAILURE:
        return action.payload || 'Something went wrong';
      case SEARCH_POSTS_REQUEST:
      case SEARCH_POSTS_SUCCESS:
        return null;
      default:
        return state;
    }
  };

  return combineReducers({
    ids,
    isFetching,
    errorMessage,
  });
};

const byId = (state = {}, action) => {
  if (action.payload && action.payload.entities) {
    return {
      ...state,
      ...action.payload.entities.posts,
    };
  }

  return state;
};

export default combineReducers({
  all: createList(),
  searched: createSearchedList(),
  byId,
});

// Action Creators
export const fetchPostsRequest = params => ({
  type: FETCH_POSTS_REQUEST,
  payload: params,
});

export const fetchMorePostsRequest = params => ({
  type: FETCH_MORE_POSTS_REQUEST,
  payload: params,
});

export const fetchPostsSuccess = data => ({
  type: FETCH_POSTS_SUCCESS,
  payload: normalize(data, postListSchema),
});

export const fetchMorePostsSuccess = data => ({
  type: FETCH_MORE_POSTS_SUCCESS,
  payload: normalize(data, postListSchema),
});

export const fetchPostsError = error => ({
  type: FETCH_POSTS_FAILURE,
  payload: error.message,
});

export const searchPostsSuccess = data => ({
  type: SEARCH_POSTS_SUCCESS,
  payload: normalize(data, postListSchema),
});

export const searchPostsError = error => ({
  type: SEARCH_POSTS_FAILURE,
  payload: error.message,
});

// Side effects
function fetchPosts(params) {
  return axios.get(`${apiUrl}/posts`, {params});
}

// Sagas
export function* fetchPostsSaga(action) {
  try {
    if (action.payload.search) {
      yield call(history.push, `/search?q=${action.payload.search}`);
      const posts = yield call(fetchPosts, action.payload);
      yield put(searchPostsSuccess(posts.data));

      return;
    }

    const posts = yield call(fetchPosts, action.payload);
    yield put(fetchPostsSuccess(posts.data));
  } catch (error) {
    yield put(fetchPostsError(error));
  }
}

export function* fetchMorePostsSaga(action) {
  const posts = yield call(fetchPosts, action.payload);
  yield put(fetchMorePostsSuccess(posts.data));
}

//Selectors
export const getPost = state => state;

const getIds = state => state.ids;
const getIsListFetching = state => state.isFetching;
const getListErrorMessage = state => state.errorMessage;
const getListIsMorePostsAvailable = state => state.isMorePostsAvailable;
const getIsMoreListFetching = state => state.isMorePostsFetching;

export const getPosts = state => {
  const ids = getIds(state.posts.all);
  const posts = ids.map(id => getPost(state.posts.byId[id], id));

  // return sortPostsByDate(posts);
  return posts;
};

export const getSearchedPosts = state => {
  const ids = getIds(state.posts.searched);
  const posts = ids.map(id => getPost(state.posts.byId[id], id));

  // return sortPostsByDate(posts);
  return posts;
};

export const getIsSearchedFetching = state =>
  getIsListFetching(state.posts.searched);
// export const getErrorMessage = state => getListErrorMessage(state.posts.all);

export const getIsFetching = state => getIsListFetching(state.posts.all);
export const getErrorMessage = state => getListErrorMessage(state.posts.all);
export const getIsMorePostsAvailable = state =>
  getListIsMorePostsAvailable(state.posts.all);
export const getIsMorePostsFetching = state =>
  getIsMoreListFetching(state.posts.all);
