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
       // "View all employees by managers",
        "Add to a department",
        "Add a role",
        "Add an Employee",
        "Update employee role",
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
    // case "View all employees by managers":
    //     return viewEmployeesByManager();
    case "Add to a department":
      return addDepartment();
    case "Add a role":
      return addRole();
    case "Add an Employee":
      return addEmployee();
    case "Update employee role":
      return updateEmployee();
  }
}

//for viewing data
async function viewDepartments() {

  const allDepartments = await database.findAllDepartments();
  
  console.table(allDepartments);
  firstQuestions();
}
async function viewRoles() {

  const allRoles = await database.findAllRoles();
 
  console.table(allRoles);
  firstQuestions();
}
async function viewEmployees() {

  const allEmployees = await database.findAllEmployees();
 
  console.table(allEmployees);
  firstQuestions();
}

//functions for adding
async function addDepartment() {
  const newDept = await inquirer.prompt([
    {
      type: "input",
      name: "dept_name",
      message: "What is the name of the department you would like to create?",
    },
  ]);

  await database.createDept(newDept);
  console.log(
    chalk.green(newDept.dept_name),
    " has been added to the database "
  );
  firstQuestions();
}
async function addEmployee() {
  const newemployeeName = await inquirer.prompt([
    {
      type: "input",
      name: "first_name",
      message: "What is the employee's first name ?",
    },
    {
      type: "input",
      name: "last_name",
      message: "What is the employee's last name ?",
    },
  ]);

  let roles = await database.findAllRoles();
  console.table(roles);
  const newRoleID = await inquirer.prompt([
    {
      type: "input",
      name: "role_id",
      message: "What is the employee's role ID number ?",
    },
  ]);

  const newemployee = { ...newemployeeName, ...newRoleID };
  await database.createEmployee(newemployee);

  console.log(
    chalk.green(newemployee.first_name, newemployee.last_name),
    "has been added to the database"
  );
  firstQuestions();
}
async function addRole() {
  const newRoleTitleID = await inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of the role ?",
    },
    {
      type: "input",
      name: "salary",
      message: "What is the salary in GBP per year for the role?",
    },
  ]);
  let department = await database.findAllDepartments();
  console.table(department);
  const newDeptID = await inquirer.prompt([
    {
      type: "input",
      name: "department_id",
      message: "What is the ID of the department this role belongs too ?",
    },
  ]);
  const newRole = { ...newRoleTitleID, ...newDeptID };
  await database.createRole(newRole);
  console.log(
    chalk.green(newRoleTitleID.title),
    "has been added to the datbase"
  );
  firstQuestions();
}

async function updateEmployee() {
  const allEmployees = await database.findAllEmployees();
  console.table(allEmployees);

  const roleToUpdate = allEmployees.map(({ id, first_name, last_name }) => ({
    value: id,
    name: `${first_name} ${last_name}`,
  }));

  const { employeeID } = await inquirer.prompt([
    {
      type: "list",
      name: "employeeID",
      message: "Which employee's role do you want to update?",
      choices: roleToUpdate,
    },
  ]);
  const roles = await database.findAllRoles();
  const roleChoice = roles.map(({ id, title }) => ({
    value: id,
    name: title,
  }));
  const { roleID } = await inquirer.prompt([
    {
      type: "list",
      name: "roleID",
      message: "Which role do you want to assign the employee?",
      choices: roleChoice,
    },
  ]);

  await database.updateEmployeeRole(employeeID, roleID);
  console.log(chalk.green("You have updated the employees role"));
  firstQuestions();
 
}

initialiseApplication();


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
