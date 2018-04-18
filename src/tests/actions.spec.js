import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actions from '../actions';
import * as types from '../constants';
import {api_prod} from '../../config.json';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockAdapter = new MockAdapter(axios);

describe('async actions', () => {
  it('creates FETCH_POSTS_SUCCESS when fetching items has been done', () => {
    mockAdapter.onGet(`${api_prod}/posts`).reply(200, {
      posts: [
        {
          body: 'Quia et suscipit recusandae consequuntur',
          id: 1,
          image: 'https://source.unsplash.com/random',
          title: 'Hello World',
        },
      ],
    });

    const expectedActions = [
      {type: types.FETCH_POSTS_REQUEST},
      {
        type: types.FETCH_POSTS_SUCCESS,
        payload: {
          posts: [
            {
              body: 'Quia et suscipit recusandae consequuntur',
              id: 1,
              image: 'https://source.unsplash.com/random',
              title: 'Hello World',
            },
          ],
        },
      },
    ];

    const store = mockStore({posts: []});

    return store.dispatch(actions.fetchPosts()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
