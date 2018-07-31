import axios from 'axios';
import config from '../../config.json';

axios.defaults.withCredentials = true;

const apiUrl =
  process.env.NODE_ENV === 'development' ? config.api_dev : config.api_prod;

const realApiUrl =
  process.env.NODE_ENV === 'development'
    ? config.api_dev
    : config.real_api_prod;

export function fetchPosts(params) {
  return axios.get(`${realApiUrl}/posts`, {params});
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
