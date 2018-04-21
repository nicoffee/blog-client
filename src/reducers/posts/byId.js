import {
  // FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  // FETCH_POSTS_FAILURE,
} from '../../constants';

const byId = (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      const nextState = {...state};
      action.payload.forEach(post => {
        nextState[post.id] = post;
      });
      return nextState;
    default:
      return state;
  }
};

export default byId;

export const getPost = state => state;
