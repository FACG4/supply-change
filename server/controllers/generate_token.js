const jwt = require('jsonwebtoken');

module.exports = data => new Promise((resolve, reject) => {
  jwt.sign(data, process.env.SECRET, (err, token) => {
    if (err) return reject(err);
    resolve(token);
  });
});
