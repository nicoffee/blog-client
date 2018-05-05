import {OPEN_MODAL, CLOSE_MODAL} from '../constants';

const modal = (state = {isOpen: false}, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {...state, isOpen: true};
    case CLOSE_MODAL:
      return {...state, isOpen: false};
    default:
      return state;
  }
};

export default modal;

export const getisModalOpen = state => state.modal.isOpen;
