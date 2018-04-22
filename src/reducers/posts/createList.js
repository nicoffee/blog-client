import {combineReducers} from 'redux';
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from '../../constants';

const createList = () => {
  const ids = (state = [], action) => {
    switch (action.type) {
      case FETCH_POSTS_SUCCESS:
        return action.payload.map(post => post.id);
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

  return combineReducers({
    ids,
    isFetching,
    errorMessage,
  });
};

export default createList;

export const getIds = state => {
  return state.ids;
};
export const getIsFetching = state => state.isFetching;
export const getErrorMessage = state => state.errorMessage;
