// Imports needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./markDown.js');

// Array of questions for user to input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: "What's the project title?",
    },
    {
        type: 'input',
        name: 'Description',
        message: "Describe what your project is meant to accomplish: ",
    },
     {
        type: 'input',
        name: 'Installation',
        message: "Are there any neccessary installations required to use your application?",
    },
    {
        type: 'input',
        name: 'Usage',
        message: "How is your application used?",
    },
    {
        type: 'input',
        name: 'Contributing',
        message: "Who contributed in this project?",
    },
    {
        type: 'input',
        name: 'Tests',
        message: "How can users test this application?",
      },
      {
        type: 'list',
        message: "Which license will you use for this project?",
        name: 'License',
        choices: ['The MIT License', 'GPLv3', 'Apache 2.0 License','BSD 3', 'none'],
      },
      {
        type: 'input',
        name: 'Username',
        message: "What's your GitHub username?",
      },
      {
        type: 'input',
        name: 'Email',
        message: "What's your email address?",
      },
];

// creates the readMe file with input data
function writeToFile(fileName, data) {
    fs.writeFileSync("README.md", generateMarkdown(data), )
    };
    
    
 // Function to initialize app
    function init() {
        inquirer
        .prompt(questions)
        .then((data)=>{
          console.log(data);
          writeToFile("readme.md", data)
        })
    };

// call to initialize app
init();
