// TODO: Include packages needed for this application
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please name your Project.",
      },
      {
        type: "input",
        name: "description",
        message: "Please explain the purpous of your project",
      },
      {
        type: "input",
        name: "link",
        message: "Please provide a the link to your deployed project."
      },
      {
        type: "checkbox",
        name: "license",
        message: "Please select a license applicable to this project.",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
      },
      {
        type: "input",
        name: "required",
        message: "Please list any requirments for your project",
      },
      {
        type: "input",
        name: "usage",
        message:
          "Describe the uses of your project",
      },
      {
        type: "input",
        name: "Contributors",
        message: "Provide the names of who contributed on this project",
      },
      {
        type: "input",
        name: "email",
        message: "Provide a valid email addresses of contributors.",
      },
      {
        type: "input",
        name: "test",
        message: "Explain the tests you performed for this project.",
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Professional README.md File...");
        writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
      });
}

// Function call to initialize app
init();
