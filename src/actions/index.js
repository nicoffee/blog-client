import { createAction, createActions } from "redux-actions";
import axios from "axios";
import { api } from "../../config.json";

export const fetchPostsStartedAction = createAction("FETCH_POSTS_STARTED");
export const fetchPostsAction = createAction("FETCH_POSTS", posts => posts);
export const fetchPostInfoAction = createAction("FETCH_POST_INFO", post => post);

export const postsActions = createActions({
  FETCH_POSTS_STARTED: () => {},
  FETCH_POSTS_SUCCESS: posts => posts,
  FETCH_POSTS_ERROR: error => error
});

export const fetchPosts = () => dispatch => {
  dispatch({ type: "FETCH_POSTS_STARTED" });

  return axios.get(`${api}/posts`).then(response => {
    dispatch(fetchPostsAction(response));
  });
};

export const fetchPostInfo = postId => dispatch => {
  dispatch({ type: "FETCH_POST_INFO_STARTED" });

  return axios.get(`${api}/posts/${postId}`).then(response => {
    dispatch(fetchPostInfoAction(response));
  });
};

export const fetchPostComments = postId => dispatch => {
  dispatch({ type: "FETCH_POST_COMMENTS_STARTED" });

  return axios.get(`${api}/comments/?postId=${postId}`).then(response => {
    dispatch({ type: "FETCH_POST_COMMENTS_SUCCESS", payload: response });
  });
};

export const editPostInfo = (id, data) => dispatch => {
  dispatch({ type: "EDIT_POST_INFO_STARTED" });

  return axios.put(`${api}/posts/${id}`, data).then(response => {
    dispatch({ type: "EDIT_POST_INFO", payload: response });
  });
};
