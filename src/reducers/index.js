import {combineReducers} from 'redux';
import posts from './posts';
import post from '../ducks/post';
import user from './user';
import modal from './modal';
import app from './app';

const rootReducer = combineReducers({posts, post, user, modal, app});

export default rootReducer;

export const getIsLiked = state => {
  if (
    state.user.likedPosts &&
    state.post.data.id &&
    state.user.likedPosts[state.post.data.id]
  ) {
    return state.user.likedPosts[state.post.data.id].like;
  }

  return false;
};
