import {mockedPosts, mockedLargePosts} from '../mock';
import reducer, * as module from '../../modules/posts';

describe('actions', () => {
  it('should create an action fetch list of posts', () => {
    const params = undefined;
    const expectedAction = {
      type: module.FETCH_POSTS_REQUEST,
      payload: params,
    };

    expect(module.fetchPostsRequest(params)).toEqual(expectedAction);
  });

  it('should create an action fetch posts success', () => {
    const expectedAction = {
      type: module.FETCH_POSTS_SUCCESS,
      payload: mockedPosts,
    };

    expect(module.fetchPostsSuccess(mockedPosts)).toEqual(expectedAction);
  });

  it('should create an action fetch posts error', () => {
    const expectedAction = {
      type: module.FETCH_POSTS_FAILURE,
      payload: 'error',
    };

    expect(module.fetchPostsError('error')).toEqual(expectedAction);
  });

  it('should create an action fetch additional posts', () => {
    const params = {limit: 10, offset: 10};
    const expectedAction = {
      type: module.FETCH_MORE_POSTS_REQUEST,
      payload: params,
    };

    expect(module.fetchMorePostsRequest(params)).toEqual(expectedAction);
  });

  it('should create an action fetch additional posts success', () => {
    const expectedAction = {
      type: module.FETCH_MORE_POSTS_SUCCESS,
      payload: mockedPosts,
    };

    expect(module.fetchMorePostsSuccess(mockedPosts)).toEqual(expectedAction);
  });

  it('should create an action fetch searched posts success', () => {
    const expectedAction = {
      type: module.SEARCH_POSTS_SUCCESS,
      payload: mockedPosts,
    };

    expect(module.searchPostsSuccess(mockedPosts)).toEqual(expectedAction);
  });
});

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      isFetching: false,
      isMorePostsFetching: false,
      isMorePostsAvailable: false,
      error: null,
      data: [],
    });
  });

  it('should handle FETCH_POSTS_REQUEST', () => {
    expect(
      reducer(undefined, {
        type: module.FETCH_POSTS_REQUEST,
      })
    ).toEqual({
      isFetching: true,
      isMorePostsFetching: false,
      isMorePostsAvailable: false,
      error: null,
      data: [],
    });
  });

  it('should handle FETCH_POSTS_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: module.FETCH_POSTS_SUCCESS,
        payload: mockedPosts,
      })
    ).toEqual({
      isFetching: false,
      isMorePostsFetching: false,
      isMorePostsAvailable: false,
      error: null,
      data: mockedPosts,
    });
  });

  it('should handle FETCH_POSTS_SUCCESS when posts more than 10', () => {
    expect(
      reducer(undefined, {
        type: module.FETCH_POSTS_SUCCESS,
        payload: mockedLargePosts,
      })
    ).toEqual({
      isFetching: false,
      isMorePostsFetching: false,
      isMorePostsAvailable: true,
      error: null,
      data: mockedLargePosts,
    });
  });
});
