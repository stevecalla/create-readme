const fs = require('fs');
const inquirer = require('inquirer'); // Step #1: prompt for readme information
const { promptQuestion } = require('./readme-questions'); //Step #1a: list of questions
const { writeAnswers } = require('./readme-writeAnswers'); // Step #2: save answers to readme-answers.txt
const { getAnswers } = require('./readme-getAnswers'); // Step #3: read answers from readme-answers.txt; pass to handle answer function
const template = require('./readme-template'); // Step #3a: readme-template used to build readme

async function main() {
  instructions();
  const promptAnswers = await inquirer.prompt(promptQuestion); // Step #1
  console.log('1 = ', promptAnswers);
  await writeAnswers(JSON.stringify(promptAnswers)); // Step #2
  await getAnswers(); // Step #3
}

function instructions() {
  console.log('The following prompts will create a professional README for a project. Please answer each question. If a question is not answered a header for that section will appear in the README. After completion of all prompts, the README will be available in the current directory, and can be edited to include the final content.');
  console.log(`------------------\n`);
}

// const ui = new inquirer.ui.BottomBar();

// // pipe a Stream to the log zone
// outputStream.pipe(ui.log);

// // Or simply write output
// ui.log.write('something just happened.');
// ui.log.write('Almost over, standby!');

// // During processing, update the bottom bar content to display a loader
// // or output a progress bar, etc
// ui.updateBottomBar('new bottom bar content');

main()

// Source:
// https://gist.github.com/midnightcodr/bd8f9cd4414f5571774c141d1e0865d8


// function writeAnswers(answers) {
//   fs.writeFile('readme-answers.txt', answers, function (err) {
//     if (err) throw err;
//     // console.log('It\'s saved!');
//     // return answers;
//   })
// }

// function getAnswers() {
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

