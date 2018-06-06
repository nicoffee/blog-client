import axios from 'axios';
import config from '../../config.json';

const apiUrl =
  process.env.NODE_ENV === 'development' ? config.api_dev : config.api_prod;

const loginApiUrl =
  process.env.NODE_ENV === 'development'
    ? config.api_dev
    : config.api_login_prod;

export function fetchPosts() {
  return axios.get(`${apiUrl}/posts`);
}

export function fetchPost(postId) {
  return axios.get(`${apiUrl}/posts/${postId}`);
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
  return axios.put(`${loginApiUrl}/users`, data);
}

export function createUser(data) {
  return axios.post(`${loginApiUrl}/users`, data);
}

export function updateUser(userId, data) {
  return axios.patch(`${apiUrl}/users/${userId}`, data);
}
