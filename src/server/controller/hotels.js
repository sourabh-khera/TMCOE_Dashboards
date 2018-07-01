const service = require('../services/hotels');

exports.fetchOverAllsales = (req, res) => {
  service.getOverAllSales()
  .then(data => res.send(data))
  .catch(err => console.log(err));
}

exports.fetchTopDestinations = (req, res) => {
  service.getTopDestinations()
  .then(data => res.send(data))
  .catch(err => console.log(err));
}

exports.fetchTopSuppliers = (req, res) => {
  service.getTopSuppliers()
  .then(data => res.send(data))
  .catch(err => console.log(err));
}

exports.fetchTopHotels = (req, res) => {
  service.getTopHotels()
  .then(data => res.send(data))
  .catch(err => console.log(err));
}
