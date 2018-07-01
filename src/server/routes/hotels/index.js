const hotelsController = require('../../controller/hotels');

module.exports = app => {
  app.get('/overAllSales', hotelsController.fetchOverAllSales);
  app.get('/topHotelsDestinations', hotelsController.fetchTopDestinations);
  app.get('/topSuppliers', hotelsController.fetchTopSuppliers);
  app.get('/topHotels', hotelsController.fetchTopHotels);
};
