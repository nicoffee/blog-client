// Actions
export const OPEN_MODAL = 'blog/ui/modal/OPEN';
export const CLOSE_MODAL = 'blog/ui/modal/CLOSE';
export const SWITCH_THEME = 'blog/ui/theme/SWITCH';

export function* switchThemeSaga(action) {
  yield localStorage.setItem('theme', action.payload);
}

// Reducer
const initialState = {theme: undefined, isFetching: false, isModalOpen: false};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SWITCH_THEME:
      return {...state, theme: action.payload};
    case OPEN_MODAL:
      return {...state, isModalOpen: true};
    case CLOSE_MODAL:
      return {...state, isModalOpen: false};
    // case FETCH_SESSION_SUCCESS:
    //   return {...state, isFetching: false};
    // case FETCH_SESSION_FAILURE:
    //   return {...state, isFetching: false};
    default:
      return state;
  }
}

// Action Creators
export const openModal = () => ({
  type: OPEN_MODAL,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

export const switchTheme = theme => ({
  type: SWITCH_THEME,
  payload: theme,
});

//Selectors
export const getCurrentTheme = state => state.app.theme;
export const getIsModalOpen = state => state.app.isModalOpen;
