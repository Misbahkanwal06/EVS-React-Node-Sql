


const mysql = require("mysql2/promise");

console.log('connection Established');
const dbSql = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "mysqlworkbench",
  database: "crud",
  insecureAuth: true,
});

module.exports = dbSql;



