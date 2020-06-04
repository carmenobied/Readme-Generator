// require constants 
const inquirer = require('inquirer');
const fs = require('fs');
// import generateMarkdown file
// const axios = require("axios");
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

// create user questions array
const userQuestions = [
    "What is your GitHub username?",
    "What is your Project Title?",
    "Please include a short project description.",
    "What commands are required to install the project and its dependencies?",
    "Please provide repo usage instructions.",
    "Please enter the License name if aplicable, otherwise enter N/A.",
    "Please include Github usernames of project contributors, if applicable?",
    "What commands are required to run tests?",
];

// function to run inquirer and promp user questions for project
function questionPrompts() {
    return inquirer.prompt([
        {
            type: "input",
            name: "Username",
            message: userQuestions[0]
        },
        {
            type: "input",
            name: "Title",
            message: userQuestions[1]
        },
        {
            type: "input",
            name: "Description",
            message: userQuestions[2]
        },
        {
            type: "input",
            name: "Installation",
            message: userQuestions[3]
        },
        {
            type: "input",
            name: "Usage",
            message: userQuestions[4]
        },
        {
            type: "checkbox",
            name: "License",
            message: userQuestions[5],
            choices: ["MIT", "Apache","GPL", "N/A", "Other"]
        },
        {
            type: "input",
            name: "Contribution",
            message: userQuestions[6]
        },
        {
            type: "input",
            name: "Tests",
            message: userQuestions[7]
        },
    
        {
            type: "input",
            name: "Email",
            message: userQuestions[8]
        }
        
    ])
}

// init function to initialize and display questions
function init() {
    console.log("Let's create your README.md")
    questionPrompts()
        .then( data => {
            return writeToFile("README.md", data)
        })
        .then( () => console.log("Successfully generated a README.md!") )
        .catch( error => console.log(error) )
}

// create badge via http://shields.io/ // for badge link open ./utils/generateMarkdown.js

// writeToFile function to generate a README
function writeToFile(fileName, data) {
    const goodREADME= generateMarkdown.generateMarkdown(data);

    writeFileAsync(fileName, goodREADME);
}

// call init() function to initialize the app
init();