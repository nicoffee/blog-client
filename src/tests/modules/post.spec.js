import {call, put} from 'redux-saga/effects';
import {mockedPost} from '../mock';
import history from '../../utils/history';
import reducer, * as module from '../../modules/post';

describe('post reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      isFetching: false,
      error: null,
      data: {likes: []},
      comments: [],
    });
  });

  it('should handle CREATE_POST_REQUEST', () => {
    expect(
      reducer(undefined, {
        type: module.CREATE_POST_REQUEST,
      })
    ).toEqual({
      isFetching: true,
      error: null,
      data: {likes: []},
      comments: [],
    });
  });

  it('should handle CREATE_POST_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: module.CREATE_POST_SUCCESS,
        payload: mockedPost,
      })
    ).toEqual({
      isFetching: false,
      error: null,
      data: mockedPost,
      comments: [],
    });
  });

  it('should handle CREATE_POST_FAILURE', () => {
    expect(
      reducer(undefined, {
        type: module.CREATE_POST_FAILURE,
        payload: 'error',
      })
    ).toEqual({
      isFetching: false,
      error: 'error',
      data: {likes: []},
      comments: [],
    });
  });
});

describe('post sagas', () => {
  it('should wait for server to fetch post', () => {
    const data = {
      picture:
        'https://images.pexels.com/photos/67636/rose-blue-f…jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title: '1',
      body: '2',
    };
    const gen = module.createPostSaga({data});
    const post = {data: mockedPost};

    expect(gen.next().value).toEqual(
      call(module.createPost, {
        picture:
          'https://images.pexels.com/photos/67636/rose-blue-f…jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: '1',
        body: '2',
      })
    );

    expect(gen.next(post).value).toEqual(
      put(module.createPostSuccess(post.data))
    );

    expect(gen.next().value).toEqual(
      call(history.push, `/post/${post.data._id}`)
    );

    expect(gen.next().done).toEqual(true);
  });
});
