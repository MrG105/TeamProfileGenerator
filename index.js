const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const path = require('path');
const dist_dir = path.resolve(__dirname, 'dist');
const outputPath = path.join(dist_dir, 'index.html');
const render = require('./src/template.js');


const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const team = [];

// prompts for Engineer info
function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the name of your Engineer?',
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'What is the ID Number of your Engineer?',
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the email address of your Engineer?',
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is the Github Username of your Engineer?',
        },
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        team.push(engineer);
        buildTeam();        
    }); 
}

// prompts for Intern info
function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the name of your Intern?',
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is the ID Number of your Intern?',
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the email address of your Intern?',
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What school is your Intern attending?',
        },
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        team.push(intern);
        buildTeam();
    });    
}

// prompts for Manager info
function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the name of your Manager?',
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the ID Number of your Manager?',
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the email address of your Manager?',
        },
        {
            type: 'input',
            name: 'managerOfficenumber',
            message: 'What is the Office Number of your Manager?',
        },
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        team.push(manager);
        buildTeam();
    });    
}

// function to start/continue adding members to the team
function buildTeam() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: 'What type of employee would you like to add to your team?',
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "Finalize Team"
            ]
        }
    ]).then(userChoice => {
        switch (userChoice.employeeType) {
            case "Manager":
                addManager();
                break;
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            case "Finalize Team":
                renderHTML();
                break;
            default:
                renderHTML();
        }
    })

}

function init() {
    buildTeam();
}

function renderHTML() {
    console.log("Assembling Your Team Of All-Stars");
    fs.writeFile(outputPath, render(team), "utf-8", () => {});
}

init();