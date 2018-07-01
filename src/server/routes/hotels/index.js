const hotelsController = require('../../controller/hotels');

module.exports = app => {
  app.get('/overallSales', hotelsController.fetchOverAllsales);
  app.get('/topDestinations', hotelsController.fetchTopDestinations);
  app.get('/topSuppliers', hotelsController.fetchTopSuppliers);
  app.get('/topHotels', hotelsController.fetchTopHotels);
};
