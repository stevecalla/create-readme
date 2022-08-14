const fs = require("fs");

let writeAnswers = (answers) => {
  // console.log('writeAnswers = ', answers);
  // let answersParse = JSON.parse(answers);
  // console.log('writeAnswers = ', answersParse);
  fs.writeFile("readme-answers.txt", answers, function (err) {
    if (err) throw err;
    // console.log('It\'s saved!');
  });
};

module.exports = {
  writeAnswers,
};
