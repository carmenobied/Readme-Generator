// generate markdown function to construct the README file
// create badge via http://shields.io/

function generateMarkdown(data) {
    return `

    # ${data.Title}

  ![Project license badge](https://img.shields.io/badge/license-${data.License}-brightgreen)      

  ## Description
  ${data.Description}

  ## Table of Contents
    * [Installation](#Installation)
    * [Usage](#Usage)
    * [License](#License)
    * [Contributing](#Contributing)
    * [Tests](#Tests)
    * [Questions](#Questions)
    * 
  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## License
  This project is covered under the ${data.License[0]} license. Find out more: [https://choosealicense.com/licenses/](https://choosealicense.com/licenses/)

  ## Contributing
  ${data.Contribution}

  ## Tests
  ${data.Tests}

  ## Questions
  ${data.Email}
  
 Have questions? Contact me at:
 ##### Email address: ${data.Email}
 ##### Github username: ${data.Username} 

  `;
  }
  
  module.exports = 
  {
    generateMarkdown: generateMarkdown
  }