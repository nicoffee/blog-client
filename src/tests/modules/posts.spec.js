import {schema, normalize} from 'normalizr';
import {mockedPosts} from '../mock';
import * as module from '../../modules/posts';

describe('actions', () => {
  it('should create an action fetch list of posts', () => {
    const params = undefined;
    const expectedAction = {
      type: module.FETCH_POSTS_REQUEST,
      payload: params,
    };

    expect(module.fetchPostsRequest(params)).toEqual(expectedAction);
  });

  it('should create an action fetch additional posts', () => {
    const params = {limit: 10, offset: 10};
    const expectedAction = {
      type: module.FETCH_MORE_POSTS_REQUEST,
      payload: params,
    };

    expect(module.fetchMorePostsRequest(params)).toEqual(expectedAction);
  });

  it('should create an action fetch posts success', () => {
    const postSchema = new schema.Entity('posts', {}, {idAttribute: '_id'});
    const postListSchema = new schema.Array(postSchema);
    const normalizedData = normalize(mockedPosts, postListSchema);

    const expectedAction = {
      type: module.FETCH_POSTS_SUCCESS,
      payload: normalizedData,
    };

    expect(module.fetchPostsSuccess(mockedPosts)).toEqual(expectedAction);
  });

  it('should create an action fetch additional posts success', () => {
    const postSchema = new schema.Entity('posts', {}, {idAttribute: '_id'});
    const postListSchema = new schema.Array(postSchema);
    const normalizedData = normalize(mockedPosts, postListSchema);

    const expectedAction = {
      type: module.FETCH_MORE_POSTS_SUCCESS,
      payload: normalizedData,
    };

    expect(module.fetchMorePostsSuccess(mockedPosts)).toEqual(expectedAction);
  });
});
