
// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  return `
  
  # ${answer.name}

  ## Table of Contents

*[Installation](#installation)

*[Description](#description)

*[Usage](#usage)

*[contribution](#contribution)

*[Credits](#credits)

*[Lisence](#lisence)   

*[Questions](#questions)

*[Github](#Github)

*[Repo Link](#repo link)

## Description

${answer.description}

#### Installation

${answer.Installation}

## Usage

${answer.usage}

## Contribution

${answer.contribution}

## Credits

${answer.credits}

## Lisence

${answer.Lisence}

## Questions

${answer.questions}

## Github Username

${answer.github}

## Repo Link: 

${answer.projectlink}

`
}

module.exports = generateMarkdown;
