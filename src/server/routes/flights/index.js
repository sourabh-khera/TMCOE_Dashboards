const flightsController = require('../../controller/flights');

module.exports = app => {
  app.get('/totalSales', flightsController.fetchTotalSales);
  app.get('/topDestinations', flightsController.fetchTopDestinations);
  app.get('/topOrigins', flightsController.fetchTopOrigins);
  app.get('/topRoutes', flightsController.fetchTopRoutes);
  app.get('/topAirlines', flightsController.fetchTopAirlines);
};
