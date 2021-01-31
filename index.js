const database = require("./config/dbQuery.js");
const inquirer = require("inquirer");
require("console.table");

const chalk = require("chalk");
const figlet = require("figlet");

//run this first then trigger first questions
function initialiseApplication() {
    bigBanner();
}
const bigBanner = function () {
    figlet.text(
        "Employee",
        {
            font: "ANSI Regular",
            horizontalLayout: "default",
            verticalLayout: "default",
        },
        function (err, data) {
            if (err) {
                console.log("Something went wrong...");
                console.dir(err);
                return;
            }
            console.log(chalk.blue(data));
        }
    );
    figlet.text(
        "Tracker",
        {
            font: "ANSI Regular",
            horizontalLayout: "default",
            verticalLayout: "default",
        },
        function (err, data) {
            if (err) {
                console.log("Something went wrong...");
                console.dir(err);
                return;
            }
            console.log(chalk.green(data));

            firstQuestions();
        }
    );
};

async function firstQuestions() {
    const { answer } = await inquirer.prompt([
        {
            type: "list",
            name: "answer",
            message: "What would you like to do?",
            choices: [
                "View departments",

                "View all roles",

                "View all employees",

                "View all employees by managers",

                "Add to a department",

                "Add a role",

                "Add an Employee",
            ],
        },
    ]);
    console.log(answer);
    switch (answer) {
        case "View departments":
            return viewDepartments();
        case "View all roles":
            return viewRoles();
        case "View all employees":
            return viewEmployees();
        case "View all employees by managers":
            return viewEmployeesByManager();
        case "Add to a department":
            return addDepartment();
        case "Add a role":
            return addRole();
        case "Add an Employee":
            return addEmployee();
        // case "view_dept":
        //     return viewDepartments();
        // case "view_roles":
        //     return viewRoles();
        // case "view_employees":
        //     return viewEmployees();
    }
}

// async function addDepartment() {
//     //  console.log()
//     const allEmployees = await database.();
//     // console.log(allEmployees);
//     console.table(allEmployees);
//     firstQuestions();
// }

//for viewing data
async function viewDepartments() {
    //  console.log()
    const allDepartments = await database.findAllDepartments();
    // console.log(allEmployees);
    console.table(allDepartments);
    firstQuestions();
}
async function viewRoles() {
    //  console.log()
    const allRoles = await database.findAllRoles();
    // console.log(allEmployees);
    console.table(allRoles);
    firstQuestions();
}
async function viewEmployees() {
    //  console.log()
    const allEmployees = await database.findAllEmployees();
    // console.log(allEmployees);
    console.table(allEmployees);
    firstQuestions();
}
// async function viewEmployeesByManager() {
//     //get all the managers
//      const managers = await database.findAllEmployees();
//      const mgrChoices = managers.map(({ id, first_name, last_name}) => ({
//         name:  `${first_name} ${last_name}`,
//         value: id
//     }));
//     console.log(mgrChoices);
// //Ask which manager they want
//     const { mgrId } = await 
//     inquirer.prompt([
//         {
//             type: 'list',
//             name: 'mgrId',
//             message: 'Which employee do you want to see the direct reports for?',
//             choices: mgrChoices
//         }
//     ]);
// //Search for the managers the return if they have the employees or not
//     const employees = await database.findAllMgrs(mgrId);

//     console.log('\n');

//     if (employees.length === 0) {
//         console.log('The selectd employee has no direct reports');
//     } else {
//         console.table(employees);
//     }

//     firstQuestions();
// }

async function addDepartment(){
    const newDept = await
    inquirer.prompt([
        {
            type: "input",
            name: "dept_name",
            message: "What is the name of the department you would like to create?"
        }
    ]);
    console.log(newDept);
    await database.createDept(newDept)
}
async function addEmployee(){


    const newemployeeName = await
    inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "What is the employee's first name ?",
        },
        {
            type: "input",
            name: "last_name",
            message: "What is the employee's last name ?"
        }

    ]);
   // console.log(newemployeeName.first, newemployeeName.last);
    
    
    // const { roleId } = await answer ({
    //     type: 'list',
    //     name: 'roleId',
    //     message: 'What is the employees role?',
    //     choices: roleChoice
    // });
    // console.log();
let roles = await database.findAllRoles();
    console.table(roles );
    const newRoleID = await
    inquirer.prompt([
        {
            type: "input",
            name: "role_id",
            message: "What is the employee's role ID number ?",
        },
    ]);

const newemployee =  {...newemployeeName,... newRoleID}


//console.log(newemployee)
 await database.createEmployee(newemployee);
//   console.log(newemployee);
//     await database.createEmployee(newemployee);
//     console.log(
//         `Added ${newemployee.first_name} ${newemployee.last_name} to the database`
//  );
    }
//     const addEmployee = await database.addEmployee();
//     console.log (addEmployee);
//     firstQuestions();
// }
// async function addDepartment() {
//     inquirer.prompt({
//         type: "input",
//         name: "departmentName",
//         message: "What's the name of the Department",

//     })
//     const deptToadd = answer.deparmentName
//     console.log( deptToadd)
// const addDept = await database.addDepartment(deptToadd);
//     // .then(function(answer){
//     //     var sql = "insert into department set ?";
//     //     connection.query(sql, {
//     //         name: answer.departmentName
//     //     }, function(err){
//     //         if (err) throw err;
//     //         console.log ("department added");
//     //         firstQuestions();
//     //     });
//     // });
// }



/*
//   * Add departments, roles, employees
const addDept_roles_employee = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "start",
        message: "What would you like to do?",
        choices: [
          {
            name: "Add Department",
            value: addDepartment,
          },
          {
            name: "Add Role",
            value: addRoles,
          },
          {
            name: "Add Employee",
            value: addEmployee,
          },
          {
            name: "Exit",
            value: exit,
          },
        ],
      },
    ])
    .then(function (value) {
      if (value.addDepartment) {
        addDepartment();
      } else if (value.addRoles) {
        addRoles();
      } else if (value.addEmployee) {
        addEmployee();
      } else value.exit;
    });
};

const addDepartment = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "createDept",
        message: "What department would you like create?",
      },
      {
        type: "input",
        name: "",
        message: "",
      },
    ])
    .then(function (value) {
      if (value.addManager) {
        addManager();
      } else if (value.addBOH) {
        addBOH();
      } else if (value.addFOH) {
        addFOH();
      } else if (value.addHR) {
        addHR();
      } else value.exit;
    });
};

const addRoles = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "getTitle",
      message: "What role would you like to create?",
    },
    {
      type: "input",
      name: "What department would ",
      message: "What is the salary",
    },
    {},
  ]);
};

const addManager = () => {
  inquirer.prompt([
    {
      input: "What is department is ",
    },
  ]);
};
//   * View departments, roles, employees
const viewDept_role_employee = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "start",
        message: "What would you like to do?",
        choices: [
          {
            name: "View Departments",
            value: displayDepartments,
          },
          {
            name: "View Roles",
            value: displayRoles,
          },
          {
            name: "View Employees",
            value: displayEmployees,
          },
          {
            name: "Exit",
            value: exit,
          },
        ],
      },
    ])
    .then(function (value) {
      if (value.displayDepartments) {
        displayDepartments();
      } else if (value.displayRoles) {
        displayRoles();
      } else if (value.displayEmployees) {
        displayEmployees();
      } else value.exit;
    });
};

//   * Update employee roles

// .then(function (answer) {
//     switch (answer.action) {
//         case "Add Department":
//             addDepartment();
//             break;
//         case "Add Role":
//             addRoles();
//             break;
//         case "Add Employee":
//             addEmployee();
//             break;
firstQuestions();
*/
initialiseApplication();

// {
//     name: "View departments?",
//     value: "view_dept",
// },
// {
//     name: "View all roles",
//     value: "view_roles",
// },
// {
//     name: "View all employees",
//     value: "view_employees"
// },
// {
//     name: "View all employees by managers",
//     value: "view_employees_manager"
// },
// {
//     name: "Add to a department?",
//     value: "addDept",
// },
// {
//     name: "Add a role ?",
//     value: "addRole",
// },
// {
//     name: "Add an Employee?",
//     value: "addEmployee",
// }

// case "view_dept":
//     return viewDepartments();
// case "view_roles":
//     return viewRoles();
// case "view_employees":
//     return viewEmployees();
// case "view_employees_manager":
//     return viewEmployeesByManager();
// case "addDept":
//     return addDepartment();
// case "addRole":
//     return addRole();
// case "addEmployee":
//     return addEmployee();
