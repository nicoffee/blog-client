import { createAction, createActions } from 'redux-actions';
import axios from 'axios';
import { api } from '../../config.json';

export const fetchPostsAction = createAction('FETCH_POSTS', posts => posts);

export const postsActions = createActions({
  FETCH_POSTS_STARTED: () => {},
  FETCH_POSTS_SUCCESS: posts => posts,
  FETCH_POSTS_ERROR: error => error
});

console.log('postsActions', postsActions);

export const fetchPosts = () => dispatch => {
  return axios.get(`${api}/posts`).then(response => {
    dispatch(fetchPostsAction(response));
  });
};
