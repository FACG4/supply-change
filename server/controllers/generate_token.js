const jwt = require('jsonwebtoken');

module.exports = data => new Promise((resolve, reject)=>{
    jwt.sign(data, process.env.SECRET, function(err, token) {
        if(err) return reject(err);
        resolve(token);
    });
})