const PythonShell = require('python-shell');

exports.getOverAllSales = () => {
  new Promise((resolve, reject) => {
    PythonShell.run('../py/hotels/overAllSales.py', (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
    });
  });
}
exports.getTopDestinations = () => {
  new Promise((resolve, reject) => {
    PythonShell.run('../py/hotels/topDestinations.py', (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
    });
  });
}
exports.getTopSuppliers = () => {
  new Promise((resolve, reject) => {
    PythonShell.run('../py/hotels/topSuppliers.py', (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
    });
  });
}
exports.getTopHotels = () => {
  new Promise((resolve, reject) => {
    PythonShell.run('../py/hotels/topHotels.py', (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
    });
  });
}
