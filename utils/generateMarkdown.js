// generate markdown function to construct the README file
// create badge via http://shields.io/

function generateMarkdown(data) {
    return `

 # ${data.Title}

  ![Project license badge](https://img.shields.io/badge/license-${data.License}-brightgreen)      

  # Description
  ${data.Description}

  # Table of Contents

    * [Installation](#Installation)
    * [Usage](#Usage)
    * [License](#License)
    * [Contributing](#Contributing)
    * [Tests](#Tests)
    * [Questions](#Questions)
  
  ## Installation
  > ${data.Installation}

  ## Usage
  > ${data.Usage}

  ## License
  ${data.License[0]} license. 

  ## Contributing
  ${data.Contribution}

  ## Tests
  ${data.Tests}

  ## Questions
  ${data.Email}
  
 Have questions? Contact me at:
 ##### Email address: ${data.Email}
 ##### Github username:  \n**${data.Username}**

  `;
  }
  
  module.exports = 
  {
    generateMarkdown: generateMarkdown
  }