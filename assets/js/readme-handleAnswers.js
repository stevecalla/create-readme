const fs = require('fs');
const template = require('./readme-template');

function handleAnswers(answers) {

  answers.badges = 'hello';
  console.log('4 ', answers);
  
  fs.writeFile('readme-draft.md', template.readmeTemplate(answers), function (err) {
    if (err) throw err;
    // console.log('It\'s saved!');
  })
}

module.exports = {
  handleAnswers,
}