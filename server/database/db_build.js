const dbcon = require('./db_connection.js');
const fs = require('fs');

const sql = fs.readFileSync(`${__dirname}/db.sql`).toString();
const dbConnect = (cb) => {
    dbcon.query(sql, (err, res) => {
        if (err) return cb(err);
        cb(null, res);
    });
};
dbConnect((err, result) => {
    console.log('Supply-Change database has been initialized');
});

module.exports = dbConnect;