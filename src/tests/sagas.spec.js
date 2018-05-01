import {call, put} from 'redux-saga/effects';
import * as api from '../services/api';
import {fetchPostsSuccess} from '../actions';
import {fetchPosts} from '../sagas';

const iterator = fetchPosts();

it("firstm fetchProducts should yield an Effect call(Api.fetch, './products')", () => {
  expect(iterator.next().value).toEqual(call(api.fetchPosts));
});

it("second fetchProducts should yield an Effect call(Api.fetch, './products')", () => {
  const posts = [
    {
      body: 'Quia et suscipit recusandae consequuntur',
      id: 1,
      image: 'https://source.unsplash.com/random',
      title: 'Hello World',
    },
  ];

  expect(iterator.next(posts).value).toEqual(put(fetchPostsSuccess(posts)));
});
