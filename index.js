const fs = require('fs')
const {circle, triangle, square} = require('./lib/shapes')
const inquirer = require('inquirer')

const generateLogo = ({logoText, textColor, logoShape, shapeColor}) =>
`${logoText}
${textColor}
${logoShape}
${shapeColor}`

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
        generateLogos = generateLogo(answers)
        fs.writeFile('./examples/logo.svg', generateLogos, err => {
            err ? console.log(err, "error") : console.log("generated logo")
        })
    })


