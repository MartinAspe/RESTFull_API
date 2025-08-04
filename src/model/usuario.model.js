const pool = require('../config/db');

const getUsuarios = (callback) => {
  pool.query('SELECT * FROM usuarios', (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};

module.exports = { getUsuarios };
