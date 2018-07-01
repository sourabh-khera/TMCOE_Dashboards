const PythonShell = require('python-shell');

exports.getTotalSales = () => {
  return new Promise((resolve, reject) => {
    PythonShell.run('./src/server/py/flights/totalSales.py', (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
    });
  });
}
exports.getTopDestinations = () => {
  return new Promise((resolve, reject) => {
    PythonShell.run('./src/server/py/flights/topDestinations.py', (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
    });
  });
}
exports.getTopOrigins = () => {
  return new Promise((resolve, reject) => {
    PythonShell.run('./src/server/py/flights/topOrigins.py', (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
    });
  });
}
exports.getTopRoutes = () => {
  return new Promise((resolve, reject) => {
    PythonShell.run('./src/server/py/flights/topRoutes.py', (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
    });
  });
}
exports.getTopAirlines = () => {
  return new Promise((resolve, reject) => {
    PythonShell.run('./src/server/py/flights/topAirlines.py', (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
    });
  });
}
