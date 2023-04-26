// import
const inquirer = require("inquirer");
const fs = require('fs');
const { resolve } = require("path");
const generateMarkdown = require('./markDown.js');

//Array of questions for user input
const questionPrompt = readmeData => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What should the title of this README be? ',
            validate: projectTitleInput => {
                if (projectTitleInput) {
                    return true;
                } else {
                    console.log("Please enter a title!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a short description of this project, including the motivation behind it, what it solved, and what was learned: ',
            validate: projectDescriptionInput => {
                if (projectDescriptionInput) {
                    return true;
                } else {
                    console.log("Please enter a description:");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide all the steps to install this project: ',
            validate: projectInstallationInput => {
                if (projectInstallationInput) {
                    return true;
                } else {
                    console.log("Please enter installation instructions!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage instructions and/or examples: ',
            validate: projectUsageInput => {
                if (projectUsageInput) {
                    return true;
                } else {
                    console.log("Please enter usage instructions!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please provide information on how others can contribute to this project: ',
            validate: projectContributeInput => {
                if (projectContributeInput) {
                    return true;
                } else {
                    console.log("Please provide information on how to contribute to this project!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide a test/tests for your application, along with examples of how to run them: ',
            validate: projectTestInput => {
                if (projectTestInput) {
                    return true;
                } else {
                    console.log("Please provide testing information!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username: ',
            validate: projectGithubInput => {
                if (projectGithubInput) {
                    return true;
                } else {
                    console.log("Please enter your GitHub username!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address: ',
            validate: projectEmailInput => {
                if (projectEmailInput) {
                    return true;
                } else {
                    console.log("Please enter your email address!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contact',
            message: 'Please provide instructions for contact: ',
            validate: projectContactInput => {
                if (projectContactInput) {
                    return true;
                } else {
                    console.log("Please enter contact instructions!");
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a license type: ',
            choices: ['GNU APGLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense', 'No License']
        }
    ])
};

// writes README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('READMEex.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
questionPrompt()
    .then(readmeData => {
        return generateMarkdown(readmeData);
    })
    .then(readmeFile => {
        return writeToFile(readmeFile);
    });



