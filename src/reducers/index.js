import {combineReducers} from 'redux';
import posts from './posts';
import post from './post';
import user from './user';
import modal from './modal';
import app from './app';

const rootReducer = combineReducers({posts, post, user, modal, app});

export default rootReducer;
