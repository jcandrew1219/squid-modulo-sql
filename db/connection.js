const mysql = require("mysql2");

const db = mysql.createConnection(
    {
      host: 'localhost',

      user: 'root',
  
      password: 'fa11out@greenaudi42',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
  );

  module.exports = db;
  