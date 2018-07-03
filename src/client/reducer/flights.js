import {
  SAVE_TOTAL_SALES,
  SAVE_FLIGHT_TOP_DESTINATIONS,
  SAVE_TOP_ORIGINS,
  SAVE_TOP_ROUTES,
  SAVE_TOP_AIRLINES,
} from '../constants';

const initialState = {
  totalSales: {},
  topFlightsDestinations: [],
  topOrigins: [],
  topRoutes: [],
  topAirlines: [],
  treeMapData:{},
};

const saveTotalSales = (state, { totalSales }) => ({...state, totalSales});
const saveTopDestinations = (state, { topFlightsDestinations }) => ({...state, topFlightsDestinations});
const saveTopOrigins = (state, { topOrigins }) => ({...state, topOrigins});
const saveTopRoutes = (state, { topRoutes }) => ({...state, topRoutes});
const saveTopAirlines = (state, { topAirlines }) => ({...state, topAirlines});
const saveTreeMapData = (state, { topAirlines }) => {
  const flightsType = [];
  const airlines = { airline: "airlines", children: [] };
  topAirlines.map((item, i) => {
    airlines.children.push({ airline: `airline${i}`, children: [{ airline: item.Airline, iov: item.IOV }] });
    if(i < 10) {
     flightsType.push(item);
    }
  })
  return { ...state, treeMapData: airlines, topAirlines: flightsType };
};


const flights = (state = initialState, action) => {
  switch (action.type) {
  case SAVE_TOTAL_SALES:
    return saveTotalSales(state, action);
  case SAVE_FLIGHT_TOP_DESTINATIONS:
    return saveTopDestinations(state, action);
  case SAVE_TOP_ORIGINS:
    return saveTopOrigins(state, action);
  case SAVE_TOP_ROUTES:
    return saveTopRoutes(state, action);
  case SAVE_TOP_AIRLINES:
    return saveTreeMapData(state, action);
  default: return state;
  }
};

export default flights;
