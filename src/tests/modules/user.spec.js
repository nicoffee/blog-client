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

  it('should create an action fetch session error', () => {
    const expectedAction = {
      type: module.FETCH_SESSION_FAILURE,
    };

    expect(module.fetchSessionError()).toEqual(expectedAction);
  });

  it('should create an action fetch login request', () => {
    const data = {
      user: 'user',
      password: 'password',
    };

    const expectedAction = {
      type: module.FETCH_LOGIN_REQUEST,
      payload: data,
    };

    expect(module.fetchLoginRequest(data)).toEqual(expectedAction);
  });

  it('should create an action fetch login success', () => {
    const data = {
      user: 'user',
      password: 'password',
    };

    const expectedAction = {
      type: module.FETCH_LOGIN_SUCCESS,
      payload: data,
    };

    expect(module.fetchLoginSuccess(data)).toEqual(expectedAction);
  });
});

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({isFetching: false, errors: []});
  });

  it('should return the state with user info', () => {
    expect(reducer(undefined, {type: module.FETCH_LOGIN_REQUEST})).toEqual({
      isFetching: true,
      signInError: null,
      signUpError: null,
      errors: [],
    });

    expect(reducer(undefined, {type: module.CREATE_USER_REQUEST})).toEqual({
      isFetching: true,
      signInError: null,
      signUpError: null,
      errors: [],
    });
  });
});

describe('sagas', () => {
  it('should logout', () => {
    const gen = module.fetchLogoutSaga();

    expect(gen.next().value).toEqual(call(module.fetchLogout));
    expect(gen.next().value).toEqual(put(module.fetchLogoutSuccess()));
    expect(gen.next().done).toEqual(true);
  });

  it('should fetch session', () => {
    const gen = module.fetchSessionSaga();

    expect(gen.next().value).toEqual(call(module.fetchSession));

    const session = {
      data: {
        email: 'asd@asd.asd',
      },
    };

    expect(gen.next(session).value).toEqual(
      put(module.fetchSessionSuccess(session.data.email))
    );
    expect(gen.next().done).toEqual(true);
  });

  it('should handle fetch session error', () => {
    const gen = module.fetchSessionSaga();

    expect(gen.next().value).toEqual(call(module.fetchSession));
    expect(gen.next(undefined).value).toEqual(put(module.fetchSessionError()));
    expect(gen.next().done).toEqual(true);
  });
});
