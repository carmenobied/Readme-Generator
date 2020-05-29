// require constants for writing to the filesystem and gathering user input 
const fs = require('fs');
const inquirer = require("inquirer");
const axios = require("axios");
// import generateMarkdown file
const generator = require("./utils/generateMarkdown.js");
const util = require("util"); 
// promisify to convert function into async function and return a promise
const writeFileAsync = util.promisify(fs.writeFile);

// questions array for question prompts: Github Username - Project title - Description - Table of Contents - Installation - Usage - License - Contributing - Tests
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
]

// question prompts function to display questions
function questionPrompts(incoming) {
    return inquirer.prompt(incoming);
};

// asynchronous init
async function init() {
    console.log(generator.welcome);
    try {
        const data = await questionPrompts(questions);

        module.exports = data
        
        const readme = generator.generateMarkdown(data);

        await writeFileAsync("README.md", readme);

        console.log("Successfully generated a Good README.md");
    } catch (err) {
        console.log(err);
    }
}

// writeToFile function with file-extend (fs) module function to create a README
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
          console.log(err)
        } else {
          console.log("Success!")
        }
      });
}


// create badge via http://shields.io/

// call markdown generator
const goodReadme = generator({ ...questions});

// retrieve user's Github information via the Github API

// call writeToFile() function
writeToFile(goodReadme);

// call init() function
init();

// command git init to initialise local Git repo