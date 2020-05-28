// require constants 
const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");

// import generateMarkdown
const generateMarkdown = require("./utils/generateMarkdown.js");

// questions array
const questions = [
    { 
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
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

// fs module function to create a README
function writeToFile(fileName, data) {
}

// init function to display questions
function init() {

// create badge via http://shields.io/

// retrieving user's Github information via the Github API

// call writeToFile() function
}

// call init() function
init();