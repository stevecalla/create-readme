const fs = require('fs');
const { json } = require('stream/consumers');
const { handleAnswers } = require('./readme-handleAnswers');

let getAnswers = () => {
  fs.readFile('readme-answers.txt', 'utf8', function(err, jsonString){
    // console.log('readme-answers = ', jsonString);
    // console.log('readme-answers = ', JSON.parse(jsonString));

    if (err) throw err;
    let answers = JSON.parse(jsonString)

    handleAnswers(answers);
    // return console.log(answers);
    // return answers;
  });
}

module.exports = {
  getAnswers,
}