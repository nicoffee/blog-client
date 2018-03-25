import { combineReducers } from 'redux';

const posts = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return [...action.payload.data];
    default:
      return state;
  }
};

const rootReducer = combineReducers({ posts });

export default rootReducer;
