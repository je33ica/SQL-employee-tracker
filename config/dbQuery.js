var connection = require("./connection.js");
/*
const cTable = require('console.table');

const chalk = require('chalk');
const figlet = require('figlet');
*/
class databaseQueries {
    constructor(connection){
        this.connection = connection;
    }

    findAllEmployees(){
        return this.connection.query(
          //  "SELECT * FROM employeeTracker.employee"
          //"SELECT employee.id, employee.first_name, employee.last_name FROM employee"
           "SELECT roles.id, roles.title, roles.salary, employee.first_name, employee.last_name, employee.manager_id FROM roles JOIN employee ON roles.id = employee.role_id"
            )
           // console.table("these are the employees", result);
    };
    findAllDepartments(){
        return this.connection.query(
           " SELECT dept_name FROM department"
           
            )
        
    };
    findAllRoles(){
        return this.connection.query(
            "SELECT title FROM roles"
            )
        
    };

    // async function viewDepartments(){
    //     //  console.log()
    //       const allDepartments = await database.findAllDepartments();
    //      // console.log(allEmployees); 
    //       console.table(allDepartments); 
    //       firstQuestions();
    //   }





}

module.exports = new databaseQueries(connection); 

/*
var orm = {


    bigText: function () {
        figlet.text('Employee', {
            font: 'ANSI Regular',
            horizontalLayout: 'default',
            verticalLayout: 'default'
        }, function (err, data) {
            if (err) {
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
        }, function (err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            };
            console.log(chalk.green(data));

          
        });
    },


    //view all employess

    //view all employess by department
    // --  which department would you like to see employess for

    //view all employess by manager

    //add employee - first name, last name, role id, manager id
    //remove employee
    //Update employee role 
    //update employee manager
    mainPrompts: function () {

    },
    showEmployee: () => {
        return connection.query(
            "SELECT roles.id, roles.title, roles.salary, employee.first_name, employee.last_name, employee.manager_id FROM roles JOIN employee ON roles.id = employee.role_id", function (err, res) {
                // "SELECT roles.id, employee.first_name, employee.last_name, roles.title,roles.department_id, roles.salary, employee.manager_id, FROM roles JOIN employee ON roles.id = employee.role_id",function (err, res) {
                if (err)
                    throw err;

                // Log all results of the SELECT statement
                // console.table("these are the employees", res);
            });
    },
    showDept: function () {
        connection.query('SELECT * FROM department', function (err, res) {
            if (err) throw err;

            // Log all results of the SELECT statement
            console.table("these are the depts", res);

        });
    },
    showRoles: function () {
        connection.query('SELECT title FROM roles', function (err, res) {
            if (err) throw err;

            // Log all results of the SELECT statement
            console.table("these are the roles", res);
         
            //(chalk.green(data))
        });
    }
}
// function queryEmployees(){
//  const query = 
// }
module.exports = orm;  
*/