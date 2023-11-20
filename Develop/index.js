// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
console.log("README Generator!")
console.log("Input each required field to create a professional README file for applications.")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of the application?',
        validate: your_Input => {
            if (your_Input) {
                return true;
            } else {
                console.log('Please provide your app name.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'Description',
        message: 'Describe your app.',
        validate: your_description => {
            if (your_description) {
                return true;
            } else {
                console.log('Please provide a description for your app.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'Installation',
        message: 'Describe how a user installs your app.',
        validate: your_description => {
            if (your_description) {
                return true;
            } else {
                console.log('Please provide an installation method for your app.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'Usage',
        message: 'Describe how your app should be used.',
        validate: your_description => {
            if (your_description) {
                return true;
            } else {
                console.log('Please provide a description of the usage for your app.');
                return false;
            }
        }
    },

    {
        type: 'checkbox',
        name: 'License',
        message: 'Provide the license used for your app.',
        choices: ['Apache License 2.0', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Common Development and Distribution License 1.1', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 1.0', 'GNU Lesser General Public License v2.1 or later', 'ISC License', 'MIT License'],
        validate: your_description => {
            if (your_description) {
                return true;
            } else {
                console.log('Please provide the license for your app.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'Contribution',
        message: 'Who contributed to creating this app? (provide Github usernames if applicable)',
        validate: your_description => {
            if (your_description) {
                return true;
            } else {
                console.log('Please detail who contributed to this app.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'Test',
        message: 'Describe how the user tests your app.',
        validate: your_description => {
            if (your_description) {
                return true;
            } else {
                console.log('Please provide a description for how the user can test your app.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'Questions',
        message: 'Describe how users can ask questions related to the app.',
        validate: your_description => {
            if (your_description) {
                return true;
            } else {
                console.log('Please provide a way for users to contact you with questions.');
                return false;
            }
        }
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("README file successfully created!");
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
