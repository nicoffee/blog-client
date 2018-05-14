import * as types from '../constants/types';

const post = (
  state = {isFetching: false, error: null, info: {}, comments: []},
  action
) => {
  switch (action.type) {
    case types.POST_INFO_REQUEST:
      return {...state, isFetching: true};
    case types.POST_INFO_SUCCESS:
      return {...state, isFetching: false, info: action.payload};
    case types.POST_INFO_FAILURE:
      return {...state, isFetching: false, error: action.payload};
    case types.EDIT_POST_REQUEST:
      return {...state, isFetching: true};
    case types.EDIT_POST_SUCCESS:
      return {...state, isFetching: false, info: action.payload};
    case types.EDIT_POST_FAILURE:
      return {...state, isFetching: false, error: action.payload};
    case types.CREATE_POST_REQUEST:
      return {...state, isFetching: true};
    case types.CREATE_POST_SUCCESS:
      return {...state, isFetching: false};
    case types.CREATE_POST_FAILURE:
      return {...state, isFetching: false, error: action.payload};
    case types.POST_COMMENTS_REQUEST:
      return {...state, isFetching: true};
    case types.POST_COMMENTS_SUCCESS:
      return {...state, isFetching: false, comments: action.payload};
    case types.POST_COMMENTS_FAILURE:
      return {...state, isFetching: false, error: action.payload};
    default:
      return state;
  }
};

export default post;
