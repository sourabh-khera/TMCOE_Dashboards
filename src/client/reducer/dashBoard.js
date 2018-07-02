import {
  ENABLE_DISABLE_SLIDE_MENU,
  SET_ERROR_MESSAGE,
  ENABLE_DISABLE_LOADER,
 } from '../constants';

const initialState = {
  menuOpen: false,
  apiError: false,
  showLoader: false,
};

const toggleSlideMenu = state => ({ ...state, menuOpen: !state.menuOpen });
const setErrorMessage = (state, { value }) => ({ ...state, apiError: value });
const showHideLoader = (
  state,
  {
    showLoader
  }, type,
) => {
  if (type === 'dashboard') {
    return { ...state, showLoader };
  }
  return { ...state };
};

const dashBoard = (state = initialState, action) => {
  switch (action.type) {
  case ENABLE_DISABLE_SLIDE_MENU:
    return toggleSlideMenu(state, action);
  case SET_ERROR_MESSAGE:
    return setErrorMessage(state, action);
  case ENABLE_DISABLE_LOADER:
    return showHideLoader(state, action, 'dashboard');
  default: return state;
  }
};

export default dashBoard;
