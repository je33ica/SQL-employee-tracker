const database = require("./config/dbQuery.js");
const inquirer = require("inquirer");
require("console.table")

const chalk = require('chalk');
const figlet = require('figlet');


//run this first then trigger first questions
function initialiseApplication() {
    
    bigBanner();
}
const bigBanner = function () {
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

        firstQuestions();
    });
};



async function firstQuestions() {
    const { answer } = await inquirer
        .prompt([
            {
                type: "list",
                name: "answer",
                message: "What would you like to do?",
                choices: [
                    {
                        name: "Add to a department?",
                        value: "addDept",
                    },
                    {
                        name: "Add a role ?",
                        value: "addRole",
                    },
                    {
                        name: "Add an Employee?",
                        value: "addEmployee",
                    },
                    {
                        name: "View departments?",
                        value: "view_dept",
                    },
                    {
                        name: "View roles",
                        value: "view_roles",
                    },
                    {
                        name: "View Employees",
                        value: "view_employees"
                    }
                ],
            },
        ])
    console.log(answer)
    switch (answer) {
        case "addDept":
            return addDepartment();
        case "addRole":
            return addRole();
        case "addEmployee":
            return addEmployee();
        case "view_dept":
            return viewDepartments();
        case "view_roles":
            return viewRoles();
        case "view_employees":
            return viewEmployees();
    }
};

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


c
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