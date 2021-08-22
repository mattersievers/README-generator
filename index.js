// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;    
            } else{
                console.log('Please enter the name of the project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Please provide a description of what your project does. (Required)',
        validate: descInput => {
            if (descInput) {
                return true;    
            } else{
                console.log('Please enter a description of the project!');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'projectInstall',
        message: 'Please provide information on how to install the project. (Required)',
        validate: installInput => {
            if (installInput) {
                return true;    
            } else{
                console.log('Please explain the installation procedures!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'projectUse',
        message: 'Please explain how to use the project. (Required)',
        validate: projectUseInput => {
            if (projectUseInput) {
                return true;    
            } else{
                console.log('Please explain how to use the project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name:'projectLicense',
        message: 'Please list and licenses.'
    },
    {
        type: 'input',
        name: 'projectContribute',
        message: 'Please list any contributors.'
    },
    {

    }    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init();
