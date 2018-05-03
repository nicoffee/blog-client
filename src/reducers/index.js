import {combineReducers} from 'redux';
import posts from './posts';
import post from './post';
import user from './user';

const rootReducer = combineReducers({posts, post, user});

export default rootReducer;
