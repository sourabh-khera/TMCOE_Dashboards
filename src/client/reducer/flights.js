import {
  SAVE_TOTAL_SALES,
  SAVE_TOP_DESTINATIONS,
  SAVE_TOP_ORIGINS,
  SAVE_TOP_ROUTES,
  SAVE_TOP_AIRLINES,
} from '../constants';

const initialState = {};

const saveTotalSales = state => {};
const saveTopDestinations = state => {};
const saveTopOrigins = state => {};
const saveTopRoutes = state => {};
const saveTopAirlines = state => {};


const dashBoard = (state = initialState, action) => {
  switch (action.type) {
  case SAVE_OVER_ALL_SALES:
    return saveTotalSales(state, action);
  case SAVE_TOP_DESTINATIONS:
    return saveTopDestinations(state, action);
  case SAVE_TOP_ORIGINS:
    return saveTopOrigins(state, action);
  case SAVE_TOP_ROUTES:
    return saveTopRoutes(state, action);
  case SAVE_TOP_AIRLINES:
    return saveTopAirlines(state, action);
  default: return state;
  }
};

export default dashBoard;
