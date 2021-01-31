var connection = require("./connection.js");

class databaseQueries {
    constructor(connection){
        this.connection = connection;
    }
 findAllDepartments(){
        return this.connection.query(
           " SELECT id, dept_name FROM department"
           
            )
        
    };
    findAllRoles(){
        return this.connection.query(
            "SELECT id, title FROM roles"
            )
        
    };
    findAllEmployees(){
        return this.connection.query(

         "SELECT employee.id, roles.title, roles.salary, employee.first_name, employee.last_name, employee.manager_id FROM roles JOIN employee ON roles.id = employee.role_id"
            )
          
    };

      //create dept
      createDept(newDept){
        return this.connection.query("INSERT INTO department SET ?", newDept);
    };

    createEmployee(newemployee){
        return this.connection.query(
            "INSERT INTO employee SET ?",newemployee
            
            );
    };
 
    createRole(newRole){
        return this.connection.query(
            "INSERT INTO roles SET ?", newRole
        )
    };

    findAllRoles(){
        return this.connection.query(
        "SELECT roles.id, roles.title, dept_name AS department, roles.salary FROM roles LEFT JOIN department on roles.department_id = department.id"
        );
    };

    updateEmployeeRole(employeeID, roleID) {
        return this.connection.query(
            "UPDATE employee SET role_id = ? WHERE id = ?",
            [ roleID, employeeID]
        );
    };


}

module.exports = new databaseQueries(connection);    


 // //find all managers
    // findAllMgrs(employeeId){
    //     return this.connection.query(
    //         "SELECT id, first_name, last_name FROM employee WHERE id != ?",
    //         employeeId
    //     );
    // }

    // findEmployeeMgr(managerId) {
    //     return this.connection.query(
    //         "SELECT employee.id, employee.first_name, employee.last_name, department.name AS department, role.title FROM employee LEFT JOIN role on role.id = employee.role_id LEFT JOIN department ON department.id = role.department_id WHERE manager_id = ?;",
    //         managerId
    //     );
    // }
