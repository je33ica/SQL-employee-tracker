const mysql = require("mysql");
const inquirer = require("inquirer")
const cTable = require('console.table');
var util = require('util');


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Dollface16*",
    database: "employeeTracker"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    showEmployee();
    showDept();
    showRoles();
    
});
function showEmployee() {
    connection.query('SELECT * FROM employee', function (err, res) {
      if (err) throw err;
  
      // Log all results of the SELECT statement
      console.table("these are the emplooyees",res);
      
    });
  }
  function showDept() {
    connection.query('SELECT * FROM department', function (err, res) {
      if (err) throw err;
  
      // Log all results of the SELECT statement
      console.table("these are the depst",res);
      
    });
  }
  function showRoles() {
    connection.query('SELECT * FROM roles', function (err, res) {
      if (err) throw err;
  
      // Log all results of the SELECT statement
      console.table("these are the rolces", res);
      
    });
  }

  // function addTables(){
  //   connection.query('SELECT ')
  // }

