// require constants 
const fs = require('fs');
const inquirer = require("inquirer");
const axios = require("axios");
// import generateMarkdown file
const generateMarkdown = require("./utils/generateMarkdown.js");
const writeFileAsync = util.promisify(fs.writeFile);
let userName;

// questions array
const questions = [
    { 
        type: "input",
        message: "What is your GitHub username?",
        name: "Username"
      },
      { 
        type: "input",
        message: "What is your Project Title?",
        name: "Title"
      },
    {
        type: "input",
        message: "Please include a short project description.",
        name: "Description"
    },
    {
        type: "input",
        message: "What commands are required to install the project and its dependencies?",
        name: "Installation"
    },
    {
        type: "input",
        message: "Please provide repo usage instructions.",        
        name: "Usage",
    },
    {
        type: "input",
        message: "Please enter the License name if aplicable, otherwise enter N/A.",
        name: "License"
    },
    {
        type: "input",
        message: "Please include Github usernames of project contributors, if applicable",
        name: "Contributing"
    },
    {
        type: "input",
        message: "What commands are required to run tests?",
        name: "Tests"
    },
];

// Questions:
// * Github Username 
// * Project title
// * Description
// * Table of Contents
// * Installation
// * Usage
// * License
// * Contributing
// * Tests

// writeToFile function with file-extend (fs) module function to create a README
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
          console.log(err)
        }else {
          console.log("Success!")
        }
      });
}

// init function to display questions
function init() {
    return inquirer.prompt([])
}
// create badge via http://shields.io/
const badge = `![GitHub repo size](https://img.shields.io/github/repo-size/${Username}/${Title}?logo=github)`

// call generateMarkdown
generateMarkdown();

// retrieve user's Github information via the Github API

// call writeToFile() function
writeToFile();

// call init() function
init();

// command git init to initialise local Git repo