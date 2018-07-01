import {
  SAVE_TOTAL_SALES,
  SAVE_TOP_DESTINATIONS,
  SAVE_TOP_ORIGINS,
  SAVE_TOP_ROUTES,
  SAVE_TOP_AIRLINES,
} from '../constants';

export const saveTotalSales = totalSales => (
  { type: SAVE_TOTAL_SALES, totalSales }
);
export const saveTopDestinations = topDestinations => (
  { type: SAVE_TOP_DESTINATIONS, topDestinations }
);
export const saveTopOrigins = topOrigins => (
  { type: SAVE_TOP_ORIGINS, topOrigins }
);
export const saveTopRoutes = topRoutes => (
  { type: SAVE_TOP_ROUTES, topRoutes }
);
export const saveTopAirlines = topAirlines => (
  { type: SAVE_TOP_AIRLINES, topAirlines }
);
