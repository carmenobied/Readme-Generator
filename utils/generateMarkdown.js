// generate markdown function to construct the README file
// create badge via http://shields.io/

function generateMarkdown(data) {
    return `

 # ${data.Title}

  ![Project license badge](https://img.shields.io/badge/license-${data.License}-brightgreen)      

  # Description
  ${data.Description}

  # Table of Contents

    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
  
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
 Have questions? Contact me at:
 ##### Email address: ${data.Email}
 ##### Github username:  \n**${data.Username}**

  `;
  }
  
  module.exports = 
  {
    generateMarkdown: generateMarkdown
  }