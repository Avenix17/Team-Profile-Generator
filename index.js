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
            message: "Please enter the Manager's work email: ",
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

//Engineer

//Intern

//function to write to and create html file using htmlgenerator.js