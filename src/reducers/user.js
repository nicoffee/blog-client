import {
  FETCH_LOGIN_REQUEST,
  FETCH_LOGOUT_REQUEST,
  CREATE_USER_REQUEST,
  FETCH_LOGIN_SUCCESS,
  CREATE_USER_SUCCESS,
  FETCH_LOGIN_FAILURE,
  CREATE_USER_FAILURE,
  TOGGLE_LIKE_SUCCESS,
} from '../constants/types';

const user = (state = {isFetching: false}, action) => {
  switch (action.type) {
    case FETCH_LOGIN_REQUEST:
    case CREATE_USER_REQUEST:
      return {...state, isFetching: true, error: null};
    case FETCH_LOGIN_SUCCESS:
    case CREATE_USER_SUCCESS:
      return {...state, isFetching: false, ...action.payload};
    case FETCH_LOGIN_FAILURE:
    case CREATE_USER_FAILURE:
      return {...state, isFetching: false, error: action.payload};
    case FETCH_LOGOUT_REQUEST:
      return {...state, isFetching: false, email: null};
    case TOGGLE_LIKE_SUCCESS:
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export default user;

export const getErrorMessage = state => state.user.error;
export const getUserName = state => state.user.email;
export const getUserId = state => state.user.id;
