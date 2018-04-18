import { combineReducers } from "redux";
import posts from "./posts.js";
import post from "./post.js";

const rootReducer = combineReducers({ posts, post });

export default rootReducer;
