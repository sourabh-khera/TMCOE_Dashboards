import {
  SAVE_OVER_ALL_SALES,
  SAVE_HOTEL_TOP_DESTINATIONS,
  SAVE_TOP_HOTELS,
  SAVE_TOP_SUPPLIERS,
} from '../constants';

export const saveOverAllSales = overAllSales => (
  { type: SAVE_OVER_ALL_SALES, overAllSales }
);
export const saveTopDestinations = topDestinations => (
  { type: SAVE_HOTEL_TOP_DESTINATIONS, topDestinations }
);
export const saveTopSuppliers = topSuppliers => (
  { type: SAVE_TOP_SUPPLIERS, topSuppliers }
);
export const saveTopHotels = topHotels => (
  { type: SAVE_TOP_HOTELS, topHotels }
);
