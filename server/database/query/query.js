const dbConnection = require('../db_connection');

module.exports = sql => new Promise((resolve, reject) => {
  dbConnection.query(sql, (err, result) => {
    if (err) return reject(err);
    resolve(result);
  });
});
