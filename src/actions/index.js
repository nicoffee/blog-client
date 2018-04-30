import axios from 'axios';
import {normalize} from 'normalizr';
import {postListSchema} from './schema';
import config from '../../config.json';
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  POST_INFO_REQUEST,
  POST_INFO_FAILURE,
  POST_INFO_SUCCESS,
  EDIT_POST_REQUEST,
  EDIT_POST_FAILURE,
  EDIT_POST_SUCCESS,
  POST_COMMENTS_REQUEST,
  POST_COMMENTS_FAILURE,
  POST_COMMENTS_SUCCESS,
} from '../constants';

const apiUrl =
  process.env.NODE_ENV === 'development' ? config.api_dev : config.api_prod;

export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = data => ({
  type: FETCH_POSTS_SUCCESS,
  payload: normalize(data, postListSchema),
});

export const fetchPostsError = error => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});

export const fetchPostInfo = postId => dispatch => {
  dispatch({type: POST_INFO_REQUEST});
  fetchPosts;

  return axios
    .get(`${apiUrl}/posts/${postId}`)
    .then(response => {
      dispatch({
        type: POST_INFO_SUCCESS,
        payload: response,
      });
    })
    .catch(error =>
      dispatch({
        type: POST_INFO_FAILURE,
        payload: error,
      })
    );
};

export const editPost = (id, data) => dispatch => {
  dispatch({type: EDIT_POST_REQUEST});

  return axios.put(`${apiUrl}/posts/${id}`, data).then(response => {
    dispatch({type: EDIT_POST_SUCCESS, payload: response}).catch(error =>
      dispatch({
        type: EDIT_POST_FAILURE,
        payload: error,
      })
    );
  });
};

export const fetchPostComments = postId => dispatch => {
  dispatch({type: POST_COMMENTS_REQUEST});

  return axios
    .get(`${apiUrl}/comments/?postId=${postId}`)
    .then(response => {
      dispatch({type: POST_COMMENTS_SUCCESS, payload: response});
    })
    .catch(error =>
      dispatch({
        type: POST_COMMENTS_FAILURE,
        payload: error,
      })
    );
};
