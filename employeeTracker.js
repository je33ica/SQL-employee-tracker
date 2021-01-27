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

//   * Add departments, roles, employees
const Add = () => {
    inquirer.promt([
        {
        type: "list",
        name: "start",
        message: "What would you like to do?",
        choices:[
            {
                name:"Add Departments",
                value: addDepartment
              },
              {
                name:"Add Roles",
                value: addRoles
              },
              {
                name:"Add Employees",
                value: addEmployee
              },
              {
                name:"Exit",
                value: exit
              }
        ],

        }
    ])
    .then(function (value) {
        if (value.addDepartment){
            addDepartment();
        } else if (value.addRoles){
            addRoles();
        } else if (value.addEmployee){
            addEmployee();
        }else (value.exit)
        })
}
//   * View departments, roles, employees
const view = () => {
    inquirer.promt([
        {
        type: "list",
        name: "start",
        message: "What would you like to do?",
        choices:[
            {
                name:"View Departments",
                value: displayDepartments
              },
              {
                name:"View Roles",
                value: displayRoles
              },
              {
                name:"View Employees",
                value: displayEmployees
              },
              {
                name:"Exit",
                value: exit
              }
        ],

        }
    ])
    .then(function (value) {
        if (value.displayDepartments){
            displayDepartments();
        } else if (value.displayRoles){
            displayRoles();
        } else if (value.displayEmployees){
            displayEmployees();
        }else (value.exit)
        })
}


//   * Update employee roles