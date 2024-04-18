const fs = require('fs')
const {Circle, Triangle, Square} = require('./lib/shapes')
const inquirer = require('inquirer')



inquirer
    .prompt([
        {
            type: 'input',
            message: 'what text would you like on the logo, up to 3 characters',
            name: 'logoText',

            validate: logoText => {
                if(logoText.length > 3) {
                    console.log(" make sure to enter no more than 3 characters")
                    
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: 'what color would you like on the logo text',
            name: 'textColor'
        },
        {
            type: 'list',
            message: 'what shape would you like for the logo background',
            name: 'logoShape',
            choices: ["triangle", "square", "circle"]
        },
        {
            type: 'input',
            message: 'what color would you like for the logo background',
            name: 'shapeColor'
        }
    ]).then((answers) => {
        if(answers.logoShape === 'triangle') {
            const triangle = new Triangle(answers.logoText, answers.textColor, answers.shapeColor) 
            fs.writeFile('./examples/triangle.svg', triangle.render(), err => {
                err ? console.log(err, "error") : console.log("generated logo")
            })
        }else if (answers.logoShape === 'square') {
            const square = new Square(answers.logoText, answers.textColor, answers.shapeColor) 
            fs.writeFile('./examples/square.svg', square.render(), err => {
                err ? console.log(err, "error") : console.log("generated logo")
            })

        } else if (answers.logoShape === 'circle') {
            const circle = new Circle(answers.logoText, answers.textColor, answers.shapeColor) 
            fs.writeFile('./examples/circle.svg', circle.render(), err => {
                err ? console.log(err, "error") : console.log("generated logo")
            })
        }
      
        
    })



