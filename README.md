# Node.js and ES6+: Good README Generator

The goal was to create a command-line application that dynamically generates a README.md from a user's input. The application will be invoked with the following command:
```
node index.js
```
The user is prompted for their GitHub username and other information pertaining to the project the README is for.

The README is populated with the following:
* At least one badge
* Project title
* Description
* Table of Contents
* Installation
* Usage
* License
* Contributing
* Tests
* Questions
    * User GitHub profile picture
    * User GitHub email

## User Story
```
AS A developer

I WANT a README generator

SO THAT I can easily put together a good README for a new project
```

## Installation
```
i. Fork the Github repository.
ii. Clone the forked repo into your local machine using gitbash/terminal to pull the project and data.
iii. Access the code files and assets via Visual Studio or in your browser to view the code and website respectively.  
iv. Open Github and use the Good README.md Generator for a repo.
```

## Usage
Key Components Used:
```bash
node.js - ES6+
```

## Key Checks Included ensuring the following:
1. Ensuring a functional, deployed application.
2. GitHub repository with a unique name and a README describing project.
3. The generated README includes 1 badge that's specific to the repository.
4. The generated README includes the following sections: 
```bash
Title - Description - Table of Contents - Installation - Usage - License - Contributing - Tests - Questions
```
5. GIVEN the developer has a GitHub profile and a repository, WHEN prompted for the developer's GitHub username and repo specific information, THEN a README for the repo is generated