// const inquirer = require('inquirer');
// const fs = require('fs');
// const { promptQuestion } = require('./readme-questions');
// const template = require('./readme-template');

// async function writeAnswers(answers) {
//   fs.writeFile('readme-answers.txt', answers, function (err) {
//     if (err) throw err;
//     // console.log('It\'s saved!');
//     return answers;
//   })
// }

// async function getAnswers() {
//   fs.readFile('readme-answers.txt', 'utf8', function(err, jsonString){
//   // Display the file content
//   if (err) throw err;
//   // console.log('3 = ', JSON.parse(jsonString));
//   let test = JSON.parse(jsonString)
//   handleAnswers(test);
// });
// }

// function handleAnswers(test) {
//   console.log('4 ', test);
//   fs.writeFile('readme-draft.md', template.readmeTemplate(test), function (err) {
//   if (err) throw err;
//   // console.log('It\'s saved!');
// })
// }

// async function main() {
//   const promptAnswers = await inquirer.prompt(promptQuestion);
//   console.log('1 = ', promptAnswers);
//   await writeAnswers(JSON.stringify(promptAnswers));
//   await getAnswers();
// }

// main()

// // Source:
// // https://gist.github.com/midnightcodr/bd8f9cd4414f5571774c141d1e0865d8