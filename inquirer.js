
const firstQuestions = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "start",
            message: "What would you like to do?",
            choices: [
                {
                    name: " Add to a department, role or Employee?",
                    value: addDept_roles_employee

                },
                {
                    name: "View the departments, roles or employees?",
                    value: viewDept_role_employee
                }
            ]

        }
    ])
}
//   * Add departments, roles, employees
const addDept_roles_employee = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "start",
            message: "What would you like to do?",
            choices: [
                {
                    name: "Add Department",
                    value: addDepartment
                },
                {
                    name: "Add Role",
                    value: addRoles
                },
                {
                    name: "Add Employee",
                    value: addEmployee
                },
                {
                    name: "Exit",
                    value: exit
                }
            ],

        }
    ])
        .then(function (value) {
            if (value.addDepartment) {
                addDepartment();
            } else if (value.addRoles) {
                addRoles();
            } else if (value.addEmployee) {
                addEmployee();
            } else (value.exit)
        })
}

const addDepartment = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "createDept",
            message: "What department would you like create?",
        },
        {
            type: "input",
            name: "",
            message: "",
        }

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
            } else (value.exit)
        })
}

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
        {

        }
    ])
}

const addManager = () => {
    inquirer.prompt([
        {
            input: "What is department is "
        }
    ])
}
//   * View departments, roles, employees
const viewDept_role_employee = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "start",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View Departments",
                    value: displayDepartments
                },
                {
                    name: "View Roles",
                    value: displayRoles
                },
                {
                    name: "View Employees",
                    value: displayEmployees
                },
                {
                    name: "Exit",
                    value: exit
                }
            ],

        }
    ])
        .then(function (value) {
            if (value.displayDepartments) {
                displayDepartments();
            } else if (value.displayRoles) {
                displayRoles();
            } else if (value.displayEmployees) {
                displayEmployees();
            } else (value.exit)
        })
}


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
