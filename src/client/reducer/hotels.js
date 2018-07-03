import {
  SAVE_OVER_ALL_SALES,
  SAVE_HOTEL_TOP_DESTINATIONS,
  SAVE_TOP_HOTELS,
  SAVE_TOP_SUPPLIERS,
} from '../constants';

const initialState = {
  overAllSales: {},
  topSuppliers: [],
  topHotelsDestinations: [],
  topHotels: [],
};

const saveOverAllSales = (state, { overAllSales }) => ({...state, overAllSales});
const saveTopDestinations = (state, {topHotelsDestinations}) => ({...state, topHotelsDestinations});
const saveTopSuppliers = (state, { topSuppliers }) => ({...state, topSuppliers});
const saveTopHotels = (state, { topHotels }) => ({...state, topHotels});


const hotels = (state = initialState, action) => {
  switch (action.type) {
  case SAVE_OVER_ALL_SALES:
    return saveOverAllSales(state, action);
  case SAVE_HOTEL_TOP_DESTINATIONS:
    return saveTopDestinations(state, action);
  case SAVE_TOP_HOTELS:
    return saveTopHotels(state, action);
  case SAVE_TOP_SUPPLIERS:
    return saveTopSuppliers(state, action);
  default: return state;
  }
};

export default hotels;
