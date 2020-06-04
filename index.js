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
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "Title",
            message: "What is your Project Title?"
        },
        {
            type: "input",
            name: "Description",
            message: "Please include a short project description."
        },
        {
            type: "input",
            name: "Installation",
            message: "What commands are required to install the project and its dependencies?"
        },
        {
            type: "input",
            name: "Usage",
            message: "Please provide repo usage instructions."
        },
        {
            type: "checkbox",
            name: "License",
            message: "Please enter the License name if aplicable, otherwise enter N/A.",
            choices: ["MIT", "Apache","GPL", "N/A", "Other"]
        },
        {
            type: "input",
            name: "Contribution",
            message: "Please include Github usernames of project contributors, if applicable?"
        },
        {
            type: "input",
            name: "Tests",
            message: "What commands are required to run tests?"
        },
    
        {
            type: "input",
            name: "Email",
            message: "What is your email?"
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