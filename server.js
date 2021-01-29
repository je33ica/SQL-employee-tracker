const mysql = require("mysql");
const inquirer = require("inquirer")
const cTable = require('console.table');
var util = require('util');
const chalk = require('chalk');
const figlet = require('figlet');


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "employeeTracker"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
   // showEmployee();
  //  showDept();
 showRoles();
    //renderImage();
    bigText()
    
});


function bigText () {
  figlet.text('Employee', {
     font: 'ANSI Regular',
     horizontalLayout: 'default',
     verticalLayout: 'default'
 }, function(err, data){
     if (err){
         console.log('Something went wrong...');
         console.dir(err);
         return;
     };
     console.log(chalk.blue(data));
 });
 figlet.text('Tracker', {
     font: 'ANSI Regular',
     horizontalLayout: 'default',
     verticalLayout: 'default'
 }, function(err, data){
     if (err){
         console.log('Something went wrong...');
         console.dir(err);
         return;
     };
     console.log(chalk.green(data));
 
   //  mainPrompts();
 });
}


//view all employess

//view all employess by department
// --  which department would you like to see employess for

//view all employess by manager

//add employee - first name, last name, role id, manager id
//remove employee
//Update employee role 
//update employee manager
function mainPrompts(){

}
function showEmployee() {
    connection.query(
      "SELECT roles.id, roles.title, roles.salary, employee.first_name, employee.last_name, employee.manager_id FROM roles JOIN employee ON roles.id = employee.role_id" , function (err, res) {
       // "SELECT roles.id, employee.first_name, employee.last_name, roles.title,roles.department_id, roles.salary, employee.manager_id, FROM roles JOIN employee ON roles.id = employee.role_id",function (err, res) {
        if (err) throw err;
  
      // Log all results of the SELECT statement
      console.table("these are the employees",res);
      
    });
  }
  function showDept() {
    connection.query('SELECT * FROM department', function (err, res) {
      if (err) throw err;
  
      // Log all results of the SELECT statement
      console.table("these are the depts",res);
      
    });
  }
  function showRoles() {
    connection.query('SELECT title FROM roles', function (err, res) {
      if (err) throw err;
  
      // Log all results of the SELECT statement
      console.table("these are the roles", res);
      
    });
  }

  // function queryEmployees(){
  //  const query = 
  // }


