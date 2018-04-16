import { combineReducers } from "redux";
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  POST_INFO_REQUEST,
  POST_INFO_SUCCESS,
  POST_INFO_FAILURE,
  EDIT_POST_REQUEST,
  EDIT_POST_SUCCESS,
  EDIT_POST_FAILURE,
  POST_COMMENTS_REQUEST,
  POST_COMMENTS_SUCCESS,
  POST_COMMENTS_FAILURE
} from "../constants";

const posts = (state = { isFetching: false, items: [] }, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { isFetching: true };
    case FETCH_POSTS_SUCCESS:
      return { isFetching: false, items: [...action.payload.data] };
    case FETCH_POSTS_FAILURE:
      return { isFetching: false, error: action.payload };
    default:
      return state;
  }
};

const post = (state = { isFetching: false, info: {}, comments: [] }, action) => {
  switch (action.type) {
    case POST_INFO_REQUEST:
      return { ...state, isFetching: true };
    case POST_INFO_SUCCESS:
      return { ...state, isFetching: false, info: action.payload.data };
    case POST_INFO_FAILURE:
      return { ...state, isFetching: false, error: action.payload };
    case POST_COMMENTS_REQUEST:
      return { ...state, isFetching: true };
    case POST_COMMENTS_SUCCESS:
      return { ...state, isFetching: false, comments: action.payload.data };
    case POST_COMMENTS_FAILURE:
      return { ...state, isFetching: false, error: action.payload };
    case EDIT_POST_REQUEST:
      return { ...state, isFetching: true };
    case EDIT_POST_SUCCESS:
      return { ...state, isFetching: false, info: action.payload.data };
    case EDIT_POST_FAILURE:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ posts, post });

export default rootReducer;
