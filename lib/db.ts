const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'commerce',
    password: process.env.DB_PASSWORD,
    port: 5432,
});

pool.connect()
    .then(() => {
        console.log('Connected to the database');
    })
    .catch((err: Error) => {
        console.error('Error connecting to the database:', err.message);
    });

module.exports = pool;