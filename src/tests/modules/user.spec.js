import {call, put} from 'redux-saga/effects';
import reducer, * as module from '../../modules/user';

describe('actions', () => {
  it('should create an action fetch session', () => {
    const expectedAction = {
      type: module.FETCH_SESSION_REQUEST,
    };

    expect(module.fetchSessionRequest()).toEqual(expectedAction);
  });

  it('should create an action fetch session success', () => {
    const expectedAction = {
      type: module.FETCH_SESSION_SUCCESS,
      payload: {email: '123'},
    };

    expect(module.fetchSessionSuccess({email: '123'})).toEqual(expectedAction);
  });

  it('should create an action fetch session success', () => {
    const expectedAction = {
      type: module.FETCH_SESSION_FAILURE,
    };

    expect(module.fetchSessionError()).toEqual(expectedAction);
  });
});

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({isFetching: false, errors: []});
  });
});

describe('sagas', () => {
  it('should logout', () => {
    const gen = module.fetchLogoutSaga();

    expect(gen.next().value).toEqual(call(module.fetchLogout));
    expect(gen.next().value).toEqual(put(module.fetchLogoutSuccess()));
    expect(gen.next().done).toEqual(true);
  });
});
