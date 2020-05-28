// require constants 
const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");

// import generateMarkdown file
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
}
// create badge via http://shields.io/
generateMarkdown();

// retrieve user's Github information via the Github API

// call writeToFile() function
writeToFile();

// call init() function
init();

// command git init to initialise local Git repo