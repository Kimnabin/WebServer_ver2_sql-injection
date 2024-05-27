// Database connection
const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // use your MySQL username
    password: 'root', // use your MySQL password
    database: 'testdb' // replace with your database name
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

module.exports = db;