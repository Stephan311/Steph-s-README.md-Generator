// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is the Title of this README??'
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Give a Brief Description of your project'
        },
        {
            type: 'checkbox',
            message: 'What will you include in the table of contents?',
            choices: ["Installation", "Usage", "License", "Questions"]
        },
        {
            type: 'input',
            name: 'Installation',
            message: "What are the installation steps for your program?"
        },
        {
            type: 'input',
            name: 'Usage',
            message: "How will this program be used?"
        },
        {
            type: 'list',
            message: "What Lisence is this program using?",
            name: 'Lisence',
            choices: ["BSD", "MIT", "GPL"]
        },
        

    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
