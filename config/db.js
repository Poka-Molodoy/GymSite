const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'sportArea',
    password: 'postgres',
    port: 5436,
});

module.exports = pool;