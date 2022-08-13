const fs = require('fs');
const { handleAnswers } = require('./readme-handleAnswers');

let getAnswers = () => {
  fs.readFile('readme-answers.txt', 'utf8', function(err, jsonString){
    // Display the file content
    if (err) throw err;
    // console.log('3 = ', JSON.parse(jsonString));
    let answers = JSON.parse(jsonString)
    handleAnswers(answers);
  });
}

module.exports = {
  getAnswers,
}