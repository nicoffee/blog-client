import {combineReducers} from 'redux';
import posts from './posts';
import post from './post';
import user from './user';
import modal from './modal';

const rootReducer = combineReducers({posts, post, user, modal});

export default rootReducer;
