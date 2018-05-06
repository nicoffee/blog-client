import {combineReducers} from 'redux';
import posts from './posts';
import post from './post';
import user from './user';
import modal from './modal';
import app from './app';

const rootReducer = combineReducers({posts, post, user, modal, app});

export default rootReducer;

export const getIsLiked = state => {
  return state.user.posts
    ? Object.keys(state.user.posts).indexOf(state.post.info.id) > -1
    : false;
};
