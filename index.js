const inquirer = require("inquirer");
const db = require("./db/connection.js");


async function cmdPrompt() {
    await inquirer.prompt([
        {
          type: 'list',
          name: 'task',
          message: 'What would you like to do',
          choices: [
                    'view all departments',
                    'view all roles',
                    'view all employees',
                    'add a department',
                    'add a role',
                    'add an employee',
                    'update an employee role',
                    'Exit'
                   ]
        },
    ])
    .then( function(res) {
        console.log(res);
        switch (res.task) {
            case "view all departments":
                viewDepartments();
                break;
            
            case "view all roles":
                viewRoles();
                break;

            case "view all employees":
                viewEmployees();
                break;

            case "add a department":
                addDepartment();
                break;

            case "add a role":
                addRole();
                break;

            case "add an employee":
                addEmployee();
                break;

            case "update an employee role":
                updateEmployeeRole();
                break;
        }
    });
}

function viewDepartments() {
    db.query(`SELECT * FROM department`, (err, results) => {
        err ? console.log(err) : console.log(results);
        cmdPrompt();
    });
}

function viewRoles() {
    db.query(`SELECT * FROM roles`, (err, results) => {
        err ? console.log(err) : console.log(results);
        cmdPrompt();
    });
}

function viewEmployees() {
    db.query(`SELECT * FROM employee`, (err, results) => {
        err ? console.log(err) : console.log(results);
        cmdPrompt();
    });
}

function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Input a department name.',
            name: 'newDepartment',
        },
    ])
    .then(function(res) {
        db.query(`INSERT INTO department (departmentName) VALUES ("${res.newDepartment}")`, (err, results) => {
            console.log(res.newDepartment);
            err ? console.log(err) : console.log(results);
            cmdPrompt();
        });
    });
}

function addRole() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Input a name for the new role.',
            name: 'roleName',
        },
        {
            type: 'input',
            message: 'Input a salary for the new role.',
            name: 'roleSalary',
        },
        {
            type: 'input',
            message: 'Input a department this role belongs to.',
            name: 'roleDepartment',
        },
    ])
    .then(function(res) {
        db.query(`INSERT INTO roles (title, salary, departmentID) VALUES ("${res.roleName}", ${res.roleSalary}, ${res.roleDepartment})`, (err, results) => {
            console.log(res);
            err ? console.log(err) : console.log(results);
            cmdPrompt();
        });
    });
}

function addEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Input an employee first name.',
            name: 'firstName',
        },
        {
            type: 'input',
            message: 'Input an employee last name.',
            name: 'lastName',
        },
        {
            type: 'input',
            message: 'Input a role this employee belongs to.',
            name: 'employeeRole',
        },
        {
            type: 'input',
            message: 'Input a manager ID for this employee.',
            name: 'employeeManager',
        },
    ])
    .then(function(res) {
        db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${res.firstName}", "${res.lastName}", ${res.employeeRole}, ${res.employeeManager})`, (err, results) => {
            console.log(res);
            err ? console.log(err) : console.log(results);
            cmdPrompt();
        });
    });
}

function updateEmployeeRole() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Input id of employee you wish to update.',
            name: 'employeeId',
        },
        {
            type: 'input',
            message: 'Input a new role for the employee.',
            name: 'newRole',
        },
    ])
    .then(function(res) {
        db.query(`UPDATE employees set role_id = ${res.newRole} WHERE id = ${res.employeeId}`, (err, results) => {
            console.log(res);
            err ? console.log(err) : console.log(results);
            cmdPrompt();
        });
    });

}

cmdPrompt();