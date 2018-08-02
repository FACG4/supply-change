const { Pool } = require('pg');
require('env2')('./config.env');

if (!process.env.DB_URL) throw new Error('DB_URL is not set!');
const url = process.env.DB_URL;

module.exports = new Pool({ connectionString: url, ssl: true });