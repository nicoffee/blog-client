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

const rootReducer = combineReducers({ posts });

export default rootReducer;
