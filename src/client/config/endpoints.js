const API = {
  ENDPOINT: {
    BASE: process.env.NODE_ENV === 'production' ? 'tmcoe.atgdmap.com' : 'localhost:3000',
    DOMAIN: 'http',
    PORT: 3000,
    HOTELS: {
      OVER_ALL_SALES: {
        url: '/overAllSales',
        method: 'get',
      },
      TOP_DESTINATIONS: {
        url: '/topHotelsDestinations',
        method: 'get',
      },
      TOP_SUPPLIERS: {
        url: '/topSuppliers',
        method: 'get',
      },
      TOP_HOTELS: {
        url: '/topHotels',
        method: 'get',
      },
    },
   FLIGHTS: {
     TOTAL_SALES: {
      url: '/totalSales',
      method: 'get',
     },
     TOP_DESTINATIONS: {
      url: '/topFlightsDestinations',
      method: 'get',
     },
     TOP_AIRLINES: {
      url: '/topAirlines',
      method: 'get',
     },
     TOP_ORIGINS: {
      url: '/topOrigins',
      method: 'get',
     },
     TOP_ROUTES: {
      url: '/topRoutes',
      method: 'get',
     },
   },
  },
};
export default API;
