import reducer, * as module from '../../modules/app';

describe('actions', () => {
  it('should create an action open modal', () => {
    const type = 'auth';
    const expectedAction = {
      type: module.OPEN_MODAL,
      payload: type,
    };

    expect(module.openModal(type)).toEqual(expectedAction);
  });
});

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      theme: undefined,
      isFetching: false,
      isModalOpen: false,
    });
  });
});

describe('sagas', () => {
  it('should switch theme', () => {
    const action = {
      payload: 'dark',
    };

    const gen = module.switchThemeSaga(action);

    expect(gen.next().value).toEqual(undefined);

    expect(gen.next().done).toEqual(true);
  });
});
