import {combineReducers} from 'redux';
import posts from './posts';
import post from './post';
import user from './user';
import modal from './modal';
import app from './app';

const rootReducer = combineReducers({posts, post, user, modal, app});

export default rootReducer;

export const getIsLiked = state => {
  if (state.user.likedPosts && state.post.info.id) {
    return state.user.likedPosts[state.post.info.id].like;
  }

  return false;
};
