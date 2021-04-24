// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return ("")
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  return `
  
  # ${answer.name}

*[Installation](#installation)

*[Usage](#usage)

*[contribution](#contribution)

*[Credits](#credits)

*[Lisence](#lisence)   

## Description

${answer.description}

## Table of Contents
* Installation
* Usage
* Lisence
* Questions

#### Installation

${answer.Installation}

## Usage

${answer.usage}

## Lisence

${answer.Lisence}

## Questions

${answer.questions}

`
}

module.exports = generateMarkdown;
