const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'sql12.freesqldatabase.com',
  user: 'sql12792795',
  password: 'qlxS6T2Uz6',
  database: 'sql12792795',
});

module.exports = db;
