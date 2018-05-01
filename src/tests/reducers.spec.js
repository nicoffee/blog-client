import post from '../reducers/post';

describe('post reducer', () => {
  it('should return the initial state', () => {
    expect(post(undefined, {})).toEqual({
      isFetching: false,
      info: {},
      comments: [],
    });
  });
});
