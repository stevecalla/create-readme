const fs = require('fs');
const { handleAnswers } = require('./readme-handleAnswers');

let getAnswers = () => {
  fs.readFile('readme-answers.txt', 'utf8', function(err, jsonString){
    if (err) throw err;
    let answers = JSON.parse(jsonString)
    handleAnswers(answers);
  });
}

module.exports = {
  getAnswers,
}