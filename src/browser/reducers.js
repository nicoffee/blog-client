import {combineReducers} from 'redux';
import posts from './modules/posts';
import post from './modules/post';
import user from './modules/user';
import app from './modules/app';

const rootReducer = combineReducers({posts, post, user, app});

export default rootReducer;
