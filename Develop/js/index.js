const inquirer = require("inquirer");

const fs = require("fs");   
const questions = require("./questions");
const genShapes = require("./shapes");

inquirer
    .prompt(questions)

    .then((response) => {
        console.log(response);
        fs.writeFile('logo.svg', genShapes(response), function (err) {
            err ? console.log(err) : console.log("success");
        })
    })