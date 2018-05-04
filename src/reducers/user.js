import {
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE,
} from '../constants';

const post = (state = {isFetching: false, user: null}, action) => {
  switch (action.type) {
    case FETCH_LOGIN_REQUEST:
      return {...state, isFetching: true};
    case FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: {login: action.payload.email, id: action.payload.id},
      };
    case FETCH_LOGIN_FAILURE:
      return {...state, isFetching: false, error: action.payload};
    default:
      return state;
  }
};

export const getErrorMessage = state => state.user.error;
// export const getUser = state => state.user.error;

export default post;
