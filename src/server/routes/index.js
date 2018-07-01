const flights = require('./flights');
const hotels = require('./hotels');
const cors = require('cors');

module.exports = app => {
  app.use(cors());
  flights(app);
  hotels(app);
};
