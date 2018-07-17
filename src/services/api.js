import axios from 'axios';
import config from '../../config.json';

axios.defaults.withCredentials = true;

const apiUrl =
  process.env.NODE_ENV === 'development' ? config.api_dev : config.api_prod;

const realApiUrl =
  process.env.NODE_ENV === 'development'
    ? config.api_dev
    : config.api_login_prod;

export function fetchPosts() {
  return axios.get(`${realApiUrl}/posts`);
}

export function fetchPost(postId) {
  return axios.get(`${realApiUrl}/posts/${postId}`);
}

export function editPost(postId, data) {
  return axios.patch(`${apiUrl}/posts/${postId}`, data);
}

export function createPost(data) {
  return axios.post(`${apiUrl}/posts`, data);
}

export function fetchPostComments(postId) {
  return axios.get(`${apiUrl}/comments/?postId=${postId}`);
}

export function fetchLogin(data) {
  return axios.put(`${realApiUrl}/users`, data);
}

export function createUser(data) {
  return axios.post(`${realApiUrl}/users`, data);
}

export function fetchLogout() {
  return axios.get(`${realApiUrl}/logout`);
}

export function fetchSession() {
  return axios.get(`${realApiUrl}/session`);
}

export function updateUser(userId, data) {
  return axios.patch(`${apiUrl}/users/${userId}`, data);
}
