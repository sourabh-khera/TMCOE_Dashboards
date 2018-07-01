const PythonShell = require('python-shell');

exports.getTotalSales = () => {
  new Promise((resolve, reject) => {
    PythonShell.run('../py/flights/totalSales.py', (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
    });
  });
}
exports.getTopDestinations = () => {
  new Promise((resolve, reject) => {
    PythonShell.run('../py/flights/topDestinations.py', (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
    });
  });
}
exports.getTopOrigins = () => {
  new Promise((resolve, reject) => {
    PythonShell.run('../py/flights/topOrigins.py', (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
    });
  });
}
exports.getTopRoutes = () => {
  new Promise((resolve, reject) => {
    PythonShell.run('../py/flights/topRoutes.py', (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
    });
  });
}
exports.getTopAirlines = () => {
  new Promise((resolve, reject) => {
    PythonShell.run('../py/flights/topAirlines.py', (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
    });
  });
}
