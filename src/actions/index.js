import axios from "axios";
import { api_prod } from "../../config.json";
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_SUCCESS,
  POST_INFO_REQUEST,
  POST_INFO_FAILURE,
  POST_INFO_SUCCESS,
  EDIT_POST_REQUEST,
  EDIT_POST_FAILURE,
  EDIT_POST_SUCCESS,
  POST_COMMENTS_REQUEST,
  POST_COMMENTS_FAILURE,
  POST_COMMENTS_SUCCESS
} from "../constants";

export const fetchPosts = () => dispatch => {
  dispatch({ type: FETCH_POSTS_REQUEST });

  return axios
    .get(`${api_prod}/posts`)
    .then(response =>
      dispatch({
        type: FETCH_POSTS_SUCCESS,
        payload: response
      })
    )
    .catch(error =>
      dispatch({
        type: FETCH_POSTS_FAILURE,
        payload: error
      })
    );
};

export const fetchPostInfo = postId => dispatch => {
  dispatch({ type: POST_INFO_REQUEST });

  return axios
    .get(`${api_prod}/posts/${postId}`)
    .then(response => {
      dispatch({
        type: POST_INFO_SUCCESS,
        payload: response
      });
    })
    .catch(error =>
      dispatch({
        type: POST_INFO_FAILURE,
        payload: error
      })
    );
};

export const editPost = (id, data) => dispatch => {
  dispatch({ type: EDIT_POST_REQUEST });

  return axios.put(`${api_prod}/posts/${id}`, data).then(response => {
    dispatch({ type: EDIT_POST_SUCCESS, payload: response }).catch(error =>
      dispatch({
        type: EDIT_POST_FAILURE,
        payload: error
      })
    );
  });
};

export const fetchPostComments = postId => dispatch => {
  dispatch({ type: POST_COMMENTS_REQUEST });

  return axios
    .get(`${api_prod}/comments/?postId=${postId}`)
    .then(response => {
      dispatch({ type: POST_COMMENTS_SUCCESS, payload: response });
    })
    .catch(error =>
      dispatch({
        type: POST_COMMENTS_FAILURE,
        payload: error
      })
    );
};
