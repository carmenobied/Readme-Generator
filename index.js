// require constants for writing to the filesystem and gathering user input 
const fs = require('fs');
const inquirer = require("inquirer");
const axios = require("axios");
// import generateMarkdown file
const generateMarkdown = require('./utils/generateMarkdown');
const util = require("util"); 
// promisify to convert function into async function and return a promise
const writeFileAsync = util.promisify(fs.writeFile);

// questions array for question prompts: Github Username - Project title - Description - Table of Contents - Installation - Usage - License - Contributing - Tests
function questionPrompts() {
    return inquirer.prompt([
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
      }
        
    ])
    // .then(answers => console.log(answers))
}

// function to write README file
function writeToFile(fileName, data) {
    const markDown = generateMarkdown.generateMarkdown(data);

    writeFileAsync(fileName, markDown);
}

// function to initialize program
function init() {
        questionPrompts()
        .then( data => {
            return writeToFile("README.md", data)
        })
        .then( () => console.log("Successfully created a README.md!") )
        .catch( error => console.log(error) )
}

// function call to initialize program
init();