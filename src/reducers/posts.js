import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from '../constants';

const posts = (state = {isFetching: false, items: []}, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {isFetching: true};
    case FETCH_POSTS_SUCCESS:
      return {isFetching: false, items: [...action.payload]};
    case FETCH_POSTS_FAILURE:
      return {isFetching: false, error: action.payload};
    default:
      return state;
  }
};

export default posts;

export const getPosts = state => state.items;
