import axios from 'axios';
import {call, put} from 'redux-saga/effects';
import config from '../../config.json';
import {closeModal} from './app';

axios.defaults.withCredentials = true;

const apiUrl =
  process.env.NODE_ENV === 'development'
    ? config.api_dev
    : config.real_api_prod;

// Actions
export const CREATE_USER_REQUEST = 'blog/user/create/REQUEST';
const CREATE_USER_SUCCESS = 'blog/user/create/SUCCESS';
const CREATE_USER_VALIDATION_FAILURE = 'blog/user/create/validation/FAILURE';
const CREATE_USER_FAILURE = 'blog/user/create/FAILURE';

export const FETCH_LOGIN_REQUEST = 'blog/user/login/REQUEST';
const FETCH_LOGIN_SUCCESS = 'blog/user/login/SUCCESS';
const FETCH_LOGIN_FAILURE = 'blog/user/login/FAILURE';

export const FETCH_LOGOUT_REQUEST = 'blog/user/logout/REQUEST';
const FETCH_LOGOUT_SUCCESS = 'blog/user/logout/SUCCESS';

export const FETCH_SESSION_REQUEST = 'blog/user/session/REQUEST';
const FETCH_SESSION_SUCCESS = 'blog/user/session/SUCCESS';
const FETCH_SESSION_FAILURE = 'blog/user/session/FAILURE';

// Reducer
const initialState = {isFetching: false, errors: []};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LOGIN_REQUEST:
    case CREATE_USER_REQUEST:
      return {...state, isFetching: true, error: null};
    case FETCH_LOGIN_SUCCESS:
    case CREATE_USER_SUCCESS:
      return {...state, isFetching: false, email: action.payload};
    case FETCH_LOGIN_FAILURE:
      return {...state, isFetching: false, error: action.payload};
    case CREATE_USER_VALIDATION_FAILURE:
      return {...state, isFetching: false, errors: action.payload};
    case CREATE_USER_FAILURE:
      return {...state, isFetching: false, error: action.payload};
    case FETCH_LOGOUT_REQUEST:
      return {...state, isFetching: false, email: null};
    case FETCH_SESSION_REQUEST:
      return {...state};
    case FETCH_SESSION_SUCCESS:
      return {...state, isFetching: false, email: action.payload};
    default:
      return state;
  }
}

// Action Creators
export const fetchSessionRequest = () => ({
  type: FETCH_SESSION_REQUEST,
});

export const fetchSessionSuccess = data => ({
  type: FETCH_SESSION_SUCCESS,
  payload: data,
});

export const fetchSessionError = () => ({
  type: FETCH_SESSION_FAILURE,
});

export const fetchLoginRequest = data => ({
  type: FETCH_LOGIN_REQUEST,
  payload: data,
});

export const fetchLoginSuccess = data => ({
  type: FETCH_LOGIN_SUCCESS,
  payload: data,
});

export const fetchLoginError = error => ({
  type: FETCH_LOGIN_FAILURE,
  payload: error,
});

export const fetchLogoutRequest = () => ({
  type: FETCH_LOGOUT_REQUEST,
});

export const fetchLogoutSuccess = () => ({
  type: FETCH_LOGOUT_SUCCESS,
});

export const createUserRequest = data => ({
  type: CREATE_USER_REQUEST,
  payload: data,
});

export const createUserSuccess = data => ({
  type: CREATE_USER_SUCCESS,
  payload: data,
});

export const createUserValidationError = errors => ({
  type: CREATE_USER_VALIDATION_FAILURE,
  payload: errors,
});

export const createUserError = error => ({
  type: CREATE_USER_FAILURE,
  payload: error,
});

// Side effects
export function fetchLogin(data) {
  return axios.put(`${apiUrl}/users`, data);
}

export function createUser(data) {
  return axios.post(`${apiUrl}/users`, data);
}

export function fetchLogout() {
  return axios.get(`${apiUrl}/logout`);
}

export function fetchSession() {
  return axios.get(`${apiUrl}/session`);
}

export function updateUser(userId, data) {
  return axios.patch(`${apiUrl}/users/${userId}`, data);
}

// Sagas
export function* fetchLoginSaga(action) {
  try {
    const login = yield call(fetchLogin, action.payload);
    localStorage.setItem('session_id', login.data.session_id);
    yield put(fetchLoginSuccess(login.data.email));
    yield put(closeModal());
  } catch (error) {
    yield put(fetchLoginError(error.response.data.message));
  }
}

export function* fetchLogoutSaga() {
  yield call(fetchLogout);
  yield put(fetchLogoutSuccess());
}

export function* fetchSessionSaga() {
  try {
    const session = yield call(fetchSession);
    yield put(fetchSessionSuccess(session.data.email));
  } catch (error) {
    yield put(fetchSessionError());
  }
}

export function* createUserSaga(action) {
  try {
    const user = yield call(createUser, action.payload);
    yield put(createUserSuccess(user.data));
    yield put(closeModal());
  } catch (error) {
    if (error.response.data.errors) {
      yield put(createUserValidationError(error.response.data.errors));
    } else {
      yield put(createUserError(error.response.data));
    }
  }
}

//Selectors
export const getErrorMessage = state => state.user.error;
export const getErrors = state => state.user.errors;
export const getUserName = state => state.user.email;
export const getUserId = state => state.user.id;
