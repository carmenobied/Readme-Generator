// require constants 
const inquirer = require('inquirer');
const fs = require('fs');
// import generateMarkdown file
// const axios = require("axios");
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

// function to run inquirer and promp user questions for project
function questionPrompts() {
    return inquirer.prompt([
        {
            type: "input",
            name: "Username",
            message: "What is your GitHub username?",
            validate: answer => {
                if (answer.length < 1) {
                    return "You must enter your Github username for your application."
                } return true;
            }
        },
        {
            type: "input",
            name: "Title",
            message: "What is your Project Title?",
            validate: answer => {
                if (answer.length < 1) {
                    return "You must enter a project title for your application."
                } return true;
            }
        },
        {
            type: "input",
            name: "Description",
            message: "Please include a short project description.",
            validate: answer => {
                if (answer.length < 1) {
                    return "You must enter a project description for your application."
                } return true;
            }
        },
        {
            type: "input",
            name: "Installation",
            message: "What commands are required to install the project and its dependencies?",
            validate: answer => {
                if (answer.length < 1) {
                    return "You must describe how to install your project application."
                } return true;
            }
        },
        {
            type: "input",
            name: "Usage",
            message: "Please provide repo usage instructions.",
            validate: answer => {
                if (answer.length < 1) {
                    return "You must describe your application usage."
                } return true;
            }
        },
        {
            type: "checkbox",
            name: "License",
            message: "Please enter the License name if aplicable, otherwise enter N/A.",
            choices: ["MIT", "Apache","GPL", "N/A", "Other"],
            validate: answer => {
                if (answer.length < 1) {
                    return "You must select one license option by pressing space."
                } return true;
            }
        },
        {
            type: "input",
            name: "Contribution",
            message: "Please include Github usernames of project contributors, if applicable?",
            validate: answer => {
                if (answer.length < 1) {
                    return "Please indicate if and how you would like others to contribute to your project."
                } return true;
            }
        },
        {
            type: "input",
            name: "Tests",
            message: "What commands are required to run tests?",
            validate: answer => {
                if (answer.length < 1) {
                    return "Please indicate if and how others can run tests for your project."
                } return true;
            }
        },
        {
            type: "input",
            name: "Email",
            message: "What is your email?",
            validate: answer => {
                if (answer.length < 1) {
                    return "You must enter your email address."
                } return true;
            }
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