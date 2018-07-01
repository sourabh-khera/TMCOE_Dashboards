const PythonShell = require('python-shell');

exports.getOverAllSales = () => {
  return new Promise((resolve, reject) => {
    PythonShell.run('./src/server/py/hotels/overAllSales.py', (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
    });
  });
}
exports.getTopDestinations = () => {
  return new Promise((resolve, reject) => {
    PythonShell.run('./src/server/py/hotels/topDestinations.py', (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
    });
  });
}
exports.getTopSuppliers = () => {
  return new Promise((resolve, reject) => {
    PythonShell.run('./src/server/py/hotels/topSuppliers.py', (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
    });
  });
}
exports.getTopHotels = () => {
  return new Promise((resolve, reject) => {
    PythonShell.run('./src/server/py/hotels/topHotels.py', (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
    });
  });
}
