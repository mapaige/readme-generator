// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();


var inquirer = require("inquirer");
inquirer
.prompt([
  {
    type: "input",
    message: "Title of the project:",
    name: "title"
  },
  {
   type:"input",
   message: "Description",
   title: "description"
  },
  {
    type: "input",
    message: "Table of Contents",
    title: "TOC"
  },
  {
    type: "input",
    message: "Installation",
    title: "install"
  },
  {
    type: "input",
    message: "Usage",
    title:"usage"
  },
  {
    type: "input",
    message: "License",
    title: "license"
  },
  {
    type :"input",
    message: "Contributing",
    title :"contributors"
  },
  {
    type: "input",
    message: "Questions",
    title : "questions"
  }
])