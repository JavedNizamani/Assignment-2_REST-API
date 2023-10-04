const pg = require('pg');
const dbConfig = require('../config/db.config');

var connection = new pg.Pool({
    user: dbConfig.USER,
    host: dbConfig.HOST,
    database: dbConfig.DATABASE,
    password: dbConfig.PASSWORD,
    port: dbConfig.PORT
});

module.exports = connection;