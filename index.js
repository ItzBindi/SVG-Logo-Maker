const inquirer = require("inquirer");

const fs = require("fs");   

const {Circle, Triangle, Square} = require("./lib/shape.js");
const SVG = require("./lib/svg.js");



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
        type: 'list',
        message: "What is the shape of your logo?",
        choices: ['square', 'circle', 'triangle'],
        name: 'shape',
    }

]



inquirer.prompt(questions)
    .then((response) => {
        console.log(response);
        let shapeObj;
        switch (response.shape) {
            case "square":
                shapeObj = new Square();
                break;
            case "triangle":
                shapeObj = new Triangle();
                break;
            case "circle":
                shapeObj = new Circle();
                break;
            default:
                break;
        }
        shapeObj.setColor(response.color);
        const svgOb = new SVG();
        svgOb.setText(response.text, response.textColor);
        svgOb.setShape(shapeObj);
        fs.writeFile("logo.svg", svgOb.render(), (err) => { err? console.log(err): console.log("success")});
        
        })

    .catch((err) => {
        console.log(err);
    });

    