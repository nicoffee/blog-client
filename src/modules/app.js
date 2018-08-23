import {
  FETCH_SESSION_REQUEST,
  FETCH_SESSION_SUCCESS,
  FETCH_SESSION_FAILURE,
} from './user';

// Actions
export const OPEN_MODAL = 'blog/ui/modal/OPEN';
export const CLOSE_MODAL = 'blog/ui/modal/CLOSE';
export const OPEN_CONFIRM_MODAL = 'blog/ui/confirm-modal/OPEN';
export const CLOSE_CONFIRM_MODAL = 'blog/ui/confirm-modal/CLOSE';
export const AGREE_CONFIRM_MODAL = 'blog/ui/confirm-modal/AGREE';
export const SWITCH_THEME = 'blog/ui/theme/SWITCH';

// Reducer
const initialState = {theme: undefined, isFetching: false, isModalOpen: false};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SWITCH_THEME:
      return {...state, theme: action.payload};
    case OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
        modalType: action.payload,
        confirmAction: action.payload.confirmAction,
      };
    case CLOSE_MODAL:
      return {...state, isModalOpen: false};
    case FETCH_SESSION_REQUEST:
      return {...state, isFetching: true};
    case FETCH_SESSION_SUCCESS:
    case FETCH_SESSION_FAILURE:
      return {...state, isFetching: false};
    default:
      return state;
  }
}

// Action Creators
export const confirm = action => ({
  type: AGREE_CONFIRM_MODAL,
  payload: action,
});

export const openModal = type => ({
  type: OPEN_MODAL,
  payload: type,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

export const switchTheme = theme => ({
  type: SWITCH_THEME,
  payload: theme,
});

// Sagas
export function* switchThemeSaga(action) {
  yield localStorage.setItem('theme', action.payload);
}

//Selectors
export const getCurrentTheme = state => state.app.theme;
export const getModalType = state => state.app.modalType;
export const getIsModalOpen = state => state.app.isModalOpen;
export const getAction = state => state.app.performAction;
export const getIsFetching = state => state.app.isFetching;
