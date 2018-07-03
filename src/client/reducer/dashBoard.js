import {
  ENABLE_DISABLE_SLIDE_MENU,
  SET_ERROR_MESSAGE,
  ENABLE_DISABLE_LOADER,
  HIGHLIGHT_FLIGHT,
  HIGHLIGHT_HOTEL,
  ENABLE_DISABLE_ORIGIN_LOADER,
  ENABLE_DISABLE_AIRLINE_LOADER,
  ENABLE_DISABLE_SUPPLIER_LOADER,
  ENABLE_DISABLE_DESTINATION_LOADER,
 } from '../constants';

const initialState = {
  menuOpen: false,
  apiError: false,
  showLoader: false,
  activeHotel: true,
  activeFlight: false,
  activeDashboard: 'HOTELS',
  showOriginLoader: false,
  showSupplierLoader: false,
  showAirlineLoader: false,
  showDestLoader: false,
};

const toggleSlideMenu = state => ({ ...state, menuOpen: !state.menuOpen });
const setErrorMessage = (state, { value }) => ({ ...state, apiError: value });
const highlightHotel = (state, { highlight }) => ({...state, activeHotel: highlight, activeFlight: false, activeDashboard: 'HOTELS'});
const highlightFlight = (state, { highlight }) => ({...state, activeFlight: highlight, activeHotel: false, activeDashboard: 'FLIGHTS'});

const showHideLoader = (
  state,
  {
    showLoader
  }, type,
) => {
  if (type === 'dashboard') {
    return { ...state, showLoader };
  } else if (type === 'origin') {
    return { ...state, showOriginLoader };
  } else if (type === 'supplier') {
    return { ...state, showSupplierLoader };
  } else if (type === 'destination') {
    return { ...state, showDestLoader };
  } else if (type === 'airline') {
    return { ...state, showAirlineLoader };
  }
  return { ...state };
};

const dashBoard = (state = initialState, action) => {
  switch (action.type) {
  case ENABLE_DISABLE_SLIDE_MENU:
    return toggleSlideMenu(state, action);
  case ENABLE_DISABLE_ORIGIN_LOADER:
    return showHideLoader(state, action, 'origin');
  case ENABLE_DISABLE_AIRLINE_LOADER:
    return showHideLoader(state, action, 'airline');
  case ENABLE_DISABLE_SUPPLIER_LOADER:
    return showHideLoader(state, action, 'supplier');
  case ENABLE_DISABLE_DESTINATION_LOADER:
    return showHideLoader(state, action, 'destination');
  case SET_ERROR_MESSAGE:
    return setErrorMessage(state, action);
  case ENABLE_DISABLE_LOADER:
    return showHideLoader(state, action, 'dashboard');
  case HIGHLIGHT_HOTEL:
    return highlightHotel(state, action);
  case HIGHLIGHT_FLIGHT:
    return highlightFlight(state, action);
  default: return state;
  }
};

export default dashBoard;
