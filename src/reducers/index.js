import {combineReducers} from 'redux';
import posts, * as fromPosts from './posts';
import post from './post.js';

const rootReducer = combineReducers({posts, post});

export default rootReducer;

export const getPosts = state => fromPosts.getPosts(state.posts);
