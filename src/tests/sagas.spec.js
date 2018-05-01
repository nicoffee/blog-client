import {call} from 'redux-saga/effects';
import * as api from '../services/api';
import {fetchPosts} from '../sagas';

describe('saga', () => {
  it('should yield an Effect call', () => {
    const generator = fetchPosts();

    expect(generator.next().value).toEqual(call(api.fetchPosts));
  });
});
