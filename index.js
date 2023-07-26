const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What three characters would you like your logo to have?',
      name: 'characters',
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
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );