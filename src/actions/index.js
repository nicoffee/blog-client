import { createAction } from 'redux-actions';
import axios from 'axios';

export const fetchPostsAction = createAction('FETCH_POSTS', posts => posts);

export const fetchPosts = () => dispatch => {
  return axios.get(`http://localhost:3000/posts`).then(response => {
    dispatch(fetchPostsAction(response));
  });
};
