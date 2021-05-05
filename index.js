// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'what is your Project Name?',
        validate: (answer)=>{ if(answer){return true} else {return 'Please enter an answer before proceeding'}}
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a brief description of your project',
        validate: (answer)=>{ if(answer){return true} else {return 'Please enter an answer before proceeding'}}
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What are the installation steps?',
        validate: (answer)=>{ if(answer){return true} else {return 'Please enter an answer before proceeding'}}
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
        validate: (answer)=>{ if(answer){return true} else {return 'Please enter an answer before proceeding'}}
    },
    {
        type: 'input',
        name: 'credits',
        message: 'What are the credits?',
        validate: (answer)=>{ if(answer){return true} else {return 'Please enter an answer before proceeding'}}
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What contribution was there?',
        validate: (answer)=>{ if(answer){return true} else {return 'Please enter an answer before proceeding'}}
    },
    {
        type: 'list',
        message: 'What lisence will you use?',
        name: 'Lisence',
        choices: ["MIT", "GPL", "EPL"]
    },
    {
        type: 'input',
        name: 'questions',
        message: 'How can users reach out to you for questions they may have?',
        validate: (answer)=>{ if(answer){return true} else {return 'Please enter an answer before proceeding'}}
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
        validate: (answer)=>{ if(answer){return true} else {return 'Please enter an answer before proceeding'}}
    },
    {
        type: 'input',
        name: 'projectlink',
        message: 'What is the link to your deployed project?',
        validate: (answer)=>{ if(answer){return true} else {return 'Please enter an answer before proceeding'}}
    },
])
.then((answers) => {
    const filename =  `${answers.name.toLowerCase().split(' ').join('')}.md`;
    fs.writeFile(filename, generateMarkdown(answers), (err) =>
    err? console.log(err) : console.log("README has been created! Check it out!"))

})
};

questions()

// // TODO: Create a function to write README file
// function writeToFile(answer) {

//    return `# ${answer.name}

// *[Installation](#installation)

// *[Usage](#usage)

// *[contribution](#contribution)

// *[Credits](#credits)

// *[Lisence](#lisence)   

// ## Description

// ${answer.description}

// ## Table of Contents
// * Installation
// * Usage
// * Lisence
// * Questions

// #### Installation

// ${answer.Installation}

// ## Usage

// ${answer.usage}

// ## Lisence

// ${answer.Lisence}

// ## Questions

// ${answer.questions}`;
// }



// // TODO: Create a function to initialize app
// const init = () => {
//     questions()
//     .then((answer) => writeFileAsync('README.md', writeToFile(answer)))
//     .then(()=> console.log('Your README has been created!'))
//     .catch((err) => console.error(err)); 
// };

// // Function call to initialize app
// init();
