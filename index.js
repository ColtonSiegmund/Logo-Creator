const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const shapes = require('./library/shapes')
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

inquirer
  .prompt([
    {
      type: 'maxlength-input',
      message: 'What three characters would you like your logo to have?',
      name: 'characters',
      maxLength: 3,
    },
    {
      type: 'input',
      message: 'What color would you like the text to be?',
      name: 'textColor',
    },
    {
      type: 'list',
      message: 'Which shape would you like your logo to be?',
      name: 'shape',
      choices: ["Circle", "Square", "Triangle"]
    },
    {
      type: 'input',
      message: 'What color would you like the shape to be?',
      name: 'shapeColor',
    },
  ])
  .then((response) =>
      console.log('Generated logo.svg')
  );