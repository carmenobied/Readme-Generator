// require constants for writing to the filesystem and gathering user input 
const fs = require('fs');
const inquirer = require("inquirer");
const axios = require("axios");
// import generateMarkdown file
const generateREADME = require("./utils/generateMarkdown.js");
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
]);
}

function generateREADME(answers) {
return inquirer.prompt(answers);
};


async function init() {
console.log("Hi! Let's start generating your README file.")
try {
  const answers = await questionPrompts();

  module.exports = data

  const goodREADME = generateREADME(answers);

  await writeFileAsync("README.md", goodREADME);

  console.log("Successfully wrote to README.md file");
} catch(err) {
  console.log(err);
}
}

// create badge via http://shields.io/

// call markdown generator

// retrieve user's Github information via the Github API

// call writeToFile() function

// call init() function
init();