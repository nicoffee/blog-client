import axios from 'axios';
import config from '../../config.json';
const apiUrl =
  process.env.NODE_ENV === 'development' ? config.api_dev : config.api_prod;

export function fetchPosts() {
  return axios.get(`${apiUrl}/posts`);
}

export function fetchPost(postId) {
  return axios.get(`${apiUrl}/posts/${postId}`);
}
