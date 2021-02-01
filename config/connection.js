const mysql = require("mysql");

const cTable = require('console.table');
const util = require('util');


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "employeeTracker"
});

connection.connect();

connection.query = util.promisify(connection.query);

module.exports = connection;



  
