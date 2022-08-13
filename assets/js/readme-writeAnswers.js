const fs = require('fs');

let writeAnswers = (answers) => {
  fs.writeFile('readme-answers.txt', answers, function (err) {
    if (err) throw err;
    // console.log('It\'s saved!');
  })
}

module.exports = {
  writeAnswers,
}