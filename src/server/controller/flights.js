const service = require('../services/flights');

exports.fetchTotalSales = (req, res) => {
  service.getTotalSales()
  .then(data => res.send(data))
  .catch(err => console.log(err));
}

exports.fetchTopDestinations = (req, res) => {
  service.getTopDestinations()
  .then(data => res.send(data))
  .catch(err => console.log(err));
}

exports.fetchTopRoutes = (req, res) => {
  service.getTopRoutes()
  .then(data => res.send(data))
  .catch(err => console.log(err));
}

exports.fetchTopAirlines = (req, res) => {
  service.getTopAirlines()
  .then(data => res.send(data))
  .catch(err => console.log(err));
}
exports.fetchTopOrigins = (req, res) => {
  service.getTopOrigins()
  .then(data => res.send(data))
  .catch(err => console.log(err));
}
