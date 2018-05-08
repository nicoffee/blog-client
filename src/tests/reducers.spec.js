import post from '../reducers/post';
import * as types from '../types'

describe('post reducer', () => {
  it('should return the initial state', () => {
    expect(post(undefined, {})).toEqual({
      isFetching: false,
      info: {},
      comments: [],
      error: null
    });
  });

  it('should handle POST_INFO_REQUEST', () => {
    expect(
      post(undefined, {
        type: types.POST_INFO_REQUEST
      })
    ).toEqual(
      {
        isFetching: true,
        info: {},
        comments: [],
        error: null
      }
    )
  });

  it('should handle POST_INFO_SUCCESS', () => {
    expect(
      post(undefined, {
        type: types.POST_INFO_SUCCESS,
        payload: {title: 'title'}
      })
    ).toEqual(
      {
        isFetching: false, 
        info: {title: 'title'},
        comments: [],
        error: null
      }
    )
  });

  it('should handle POST_INFO_FAILURE', () => {
    expect(
      post(undefined, {
        type: types.POST_INFO_FAILURE,
        payload: 'error'
      })
    ).toEqual(
      {
        isFetching: false, 
        info: {},
        comments: [],
        error: 'error',
      }
    )
  });
});
