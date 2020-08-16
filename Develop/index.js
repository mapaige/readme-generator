var inquirer = require("inquirer");
var generateMarkdown = require("./utils/generateMarkdown")
var fs = require("fs")
// array of questions for user
const questions = [
  {
    type: "input",
    message: "Title of the project:",
    name: "title"
  },
  {
   type:"input",
   message: "Description",
   name: "description"
  },
  
  {
    type: "input",
    message: "Installation",
    name: "installation"
  },
  {
    type: "input",
    message: "Usage",
    name: "usage"
  },
  {
    type: "input",
    message: "License",
    name: "license"
  },
  {
    type :"input",
    message: "Contributing",
    name :"contributing"
  },
  {
    type: "input",
    message: "Tests",
    name : "tests"
  }
]

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName,data,function(err){
    if(err) throw err
    console.log("Success!")
  })
}

// function to initialize program
function init() {

  inquirer
  .prompt(questions).then(function(userInput){
        var data= {}
        data.title = userInput.title
        data.description =userInput.description
        data.installation = userInput.installation
        data.usage = userInput.usage
        data.credits = userInput.credits
        data.badges = userInput.badges
        data.contributing = userInput.contributing
        data.tests =userInput.tests
        const readMeText = generateMarkdown(data)
        writeToFile("./README.md",readMeText)
  })
}

// function call to initialize program
init();


