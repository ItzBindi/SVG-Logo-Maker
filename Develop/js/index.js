const inquirer = require("inquirer");

const fs = require("fs");   
const shapes = require("./shapes.js");



const questions = [
    {
        type: 'string',
        message: 'What is your logo text?(up to 3 characters)',
        name: 'text',
    },
    {
        type: 'string',
        message: 'What is the background color of your logo?',
        name: 'color',
    },
    {
        type: 'string',
        message: 'What is the color of your logo text?',
        name: 'textColor',
    },
    {
        type: 'checkbox',
        message: "What is the shape of your logo?",
        choices: ['square', 'circle', 'triangle'],
        name: 'shape',
    }

]



inquirer.prompt(questions)
    .then((response) => {
        console.log(response);
        const selectedShape = response.shape;
        let svgShape = ''
        selectedShape.forEach((shape) => {
        if (shape === 'square') {
            svgShape = shapes.createSquare(response);
          } else if (shape === 'circle') {
            svgShape = shapes.createCircle(response);
          } else if (shape === 'triangle') {
            svgShape = shapes.createTriangle(response);
          } else {
            console.log('Invalid shape input.');
            return;
          }
          fs.writeFile('logo.svg', svgShape, function (err) {});
        });
        
        })

    .catch((err) => {
        console.log(err);
    });

    