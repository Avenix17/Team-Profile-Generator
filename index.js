const fs = require('fs');
const inquirer = require('inquirer');

// profiles for team members
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// array for team members
const workTeam = [];

//inquirer for team

//Manager
const createManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the Manager's name: ",
            validate: userInput => {
                if (!userInput) {
                    console.log("Please enter a name!");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the Manager's employee ID: ",
            validate: userInput => {
                if (isNaN(userInput)) {
                    console.log("You must enter an ID.");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the Manager's preferred email: ",
            validate: userEmail => {
                const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                if (!valid.test(userEmail)) {
                    console.log("Please enter valid email.");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter Manager's office number: ",
            validate: userInput => {
                if (!userInput) {
                    console.log("Please enter a name!");
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
    .then(allInput => {
        let { name, id, email, officeNumber } = allInput;
        let manager = new Manager (name, id, email, officeNumber);

        workTeam.push(manager);
    })
};

//Employee
const createEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "What is the employee's role?",
            choices: ['Intern', 'Engineer']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?",
            validate: userInput => {
                if (!userInput) {
                    console.log("Please enter a name!");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter employee's ID: ",
            validate: userInput => {
                if (isNaN(userInput)) {
                    console.log("You must enter an ID.");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please input the employee's preferred email: ",
            validate: userEmail => {
                const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                if (!valid.test(userEmail)) {
                    console.log("Please enter valid email.");
                    return false;
                } else {
                    return true;
                }
            }
        },
        //Intern
        {
            type: 'input',
            name: 'school',
            message: 'What school does the intern attend?',
            when: (userInput) => userInput.role === 'Intern',
            validate: userInput => {
                if (!userInput) {
                    console.log("Please enter a school!");
                    return false;
                } else {
                    return true;
                }
            }
        },
        //Engineer
        {
            type: 'input',
            name: 'github',
            message: "What is the Engineer's GitHub username?",
            when: (userInput) => userInput.role === 'Engineer',
            validate: userInput => {
                if (!userInput) {
                    console.log("Please enter a GitHub username!");
                    return false;
                } else {
                    return true;
                }
            }
        },
        //asks user if they wish to continue
        {
            type: 'confirm',
            name: 'confirmCreateEmployee',
            message: 'Would you like to add more members to the team?',
            default: false
        }
    ])
    .then(employeeInput => {
        let {name, id, email, role, github, school, confirmCreateEmployee} = employeeInput;
        let employee;

        if (role === 'Intern') {
            employee = new Intern (name, id, email, school);

        } else if (role === 'Engineer') {
            employee = new Engineer (name, id, email, github);
        }

        workTeam.push(employee);

        if (confirmCreateEmployee) {
            return createEmployee(workTeam);
        } else {
            return workTeam;
        }
    })
};


//function to write to and create html file using htmlgenerator.js