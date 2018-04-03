import { combineReducers } from "redux";

const posts = (state = { isFetching: false, items: [] }, action) => {
  switch (action.type) {
    case "FETCH_POSTS_STARTED":
      return { isFetching: true };
    case "FETCH_POSTS":
      return { isFetching: false, items: [...action.payload.data] };
    default:
      return state;
  }
};

const post = (state = { isFetching: false, info: {}, comments: [] }, action) => {
  switch (action.type) {
    case "FETCH_POST_INFO_STARTED":
      return { ...state, isFetching: true };
    case "FETCH_POST_INFO":
      return { ...state, isFetching: false, info: action.payload.data };
    case "FETCH_POST_COMMENTS_STARTED":
      return state;
    case "FETCH_POST_COMMENTS_SUCCESS":
      return { ...state, comments: action.payload.data };
    case "EDIT_POST_INFO_STARTED":
      return { ...state, isFetching: true };
    case "EDIT_POST_INFO":
      return { ...state, isFetching: false, info: action.payload.data };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ posts, post });

export default rootReducer;
