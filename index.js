// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//writefile fnction
const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'what is your Project Name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a brief description of your project'
    },
    {
        type: 'Checkbox',
        message: 'What will be in your table of contents?',
        choices: ['Installation', 'Usage', 'Lisence', 'Questions']
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What are the installation steps?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?'
    },
    {
        type: 'List',
        message: 'What lisence will you use?',
        name: 'Lisence',
        choices: ["MIT", "GPL", "EPL"]
    },
    {
        type: 'input',
        name: 'questions',
        message: 'How can users reach out to you for questions they may have?'
    },
    
]);
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
