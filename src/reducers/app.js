import {SWITCH_THEME} from '../constants/types';

const app = (state = {theme: undefined}, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      return {theme: action.payload};
    default:
      return state;
  }
};

export default app;

export const getCurrentTheme = state => state.app.theme;
