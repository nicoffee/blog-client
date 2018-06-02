import {normalize} from 'normalizr';
import {postListSchema} from '../actions/schema';
import * as actions from '../actions';
import * as types from '../constants/types';

describe('fetch posts actions', () => {
  it('should create an action to fetch posts', () => {
    const expectedAction = {
      type: types.FETCH_POSTS_REQUEST,
    };

    expect(actions.fetchPostsRequest()).toEqual(expectedAction);
  });

  it('should create an action when fetch posts succeeded', () => {
    const posts = [
      {
        body: 'Quia et suscipit recusandae consequuntur',
        id: 1,
        image: 'https://source.unsplash.com/random',
        title: 'Hello World',
      },
    ];

    const expectedAction = {
      type: types.FETCH_POSTS_SUCCESS,
      payload: normalize(posts, postListSchema),
    };

    expect(actions.fetchPostsSuccess(posts)).toEqual(expectedAction);
  });

  it('should create an action when fetch posts failed', () => {
    const error = new Error('error message');

    const expectedAction = {
      type: types.FETCH_POSTS_FAILURE,
      payload: error.message,
    };

    expect(actions.fetchPostsError(error)).toEqual(expectedAction);
  });
});

describe('fetch post info actions', () => {
  it('should create an action to fetch post info', () => {
    const postId = 1;

    const expectedAction = {
      type: types.POST_INFO_REQUEST,
      id: postId,
    };

    expect(actions.fetchPostInfoRequest(postId)).toEqual(expectedAction);
  });

  it('should create an action when fetch post info succeeded', () => {
    const postInfo = {
      body: 'Quia et suscipit recusandae consequuntur',
      id: 1,
      image: 'https://source.unsplash.com/random',
      title: 'Hello World',
    };

    const expectedAction = {
      type: types.POST_INFO_SUCCESS,
      payload: postInfo,
    };

    expect(actions.fetchPostInfoSuccess(postInfo)).toEqual(expectedAction);
  });

  it('should create an action when fetch post info failed', () => {
    const error = new Error('error message');

    const expectedAction = {
      type: types.POST_INFO_FAILURE,
      payload: error.message,
    };

    expect(actions.fetchPostInfoError(error)).toEqual(expectedAction);
  });
});

describe('edit post info actions', () => {
  it('should create an action to edit post info', () => {
    const postId = 1;

    const expectedAction = {
      type: types.EDIT_POST_REQUEST,
      id: postId,
    };

    expect(actions.editPostInfoRequest(postId)).toEqual(expectedAction);
  });

  it('should create an action when edit post info succeeded', () => {
    const postInfo = {
      body: 'Quia et suscipit recusandae consequuntur',
      id: 1,
      image: 'https://source.unsplash.com/random',
      title: 'Hello World',
    };

    const expectedAction = {
      type: types.EDIT_POST_SUCCESS,
      payload: postInfo,
    };

    expect(actions.editPostInfoSuccess(postInfo)).toEqual(expectedAction);
  });

  it('should create an action when edit post info failed', () => {
    const error = new Error('error message');

    const expectedAction = {
      type: types.EDIT_POST_FAILURE,
      payload: error.message,
    };

    expect(actions.editPostInfoError(error)).toEqual(expectedAction);
  });
});
