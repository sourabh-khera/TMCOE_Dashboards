import {
  SAVE_OVER_ALL_SALES,
  SAVE_TOP_DESTINATIONS,
  SAVE_TOP_HOTELS,
  SAVE_TOP_SUPPLIERS,
} from '../constants';

const initialState = {};

const saveOverAllSales = state => {};
const saveTopDestinations = state => {};
const saveTopSuppliers = state => {};
const saveTopHotels = state => {};


const dashBoard = (state = initialState, action) => {
  switch (action.type) {
  case SAVE_OVER_ALL_SALES:
    return saveOverAllSales(state, action);
  case SAVE_TOP_DESTINATIONS:
    return saveTopDestinations(state, action);
  case SAVE_TOP_HOTELS:
    return saveTopHotels(state, action);
  case SAVE_TOP_SUPPLIERS:
    return saveTopSuppliers(state, action);
  default: return state;
  }
};

export default dashBoard;
