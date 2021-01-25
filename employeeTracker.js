const mysql = require("mysql");
const inquirer = require("inquirer")
const cTable = require('console.table');
var util = require('util');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "employeeTracker"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    artistSearch();
  });