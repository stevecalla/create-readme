const fs = require('fs');
const inquirer = require('inquirer'); // Step #1: prompt for readme information
const { promptQuestion } = require('./readme-questions'); //Step #1a: list of questions
const { writeAnswers } = require('./readme-writeAnswers'); // Step #2: save answers to readme-answers.txt
const { getAnswers } = require('./readme-getAnswers'); // Step #3: read answers from readme-answers.txt; pass to handle answer function
// const template = require('./readme-template'); // Step #3a: readme-template used to build readme

async function main() {
  instructions(); //prints initial instructions to the console
  const promptAnswers = await inquirer.prompt(promptQuestion); // Step #1
  // console.log('1 = ', promptAnswers); // if necessary to view the answers object
  await writeAnswers(JSON.stringify(promptAnswers)); // Step #2
  await getAnswers(); // Step #3
  // Step #4 getAnswers() called handleAnswers()
  // Step #5 handleAnswers() determines which license badge to add to the answwers object & gerates the readme file
  nextSteps(); //prints final instructions to the console
}

function instructions() {
  console.log(`\n------------------`);
  console.log('The following prompts will create a professional README for a project. Please answer each question. If a question is not answered a header for that section will appear in the README. After completion of all prompts, the README will be available in the current directory, and can be edited to include the final content.');
  console.log(`------------------\n`);
}

function nextSteps() {
  console.log(`\n------------------`);
  console.log(`The README.md starter is now available in your current directory. This starter includes placeholders for static images or video along with a variety of other placeholders to enhance the README. Please edit as necessary to finalize the README.`);
  console.log(`------------------\n`)
}

main()

// Source:
// https://gist.github.com/midnightcodr/bd8f9cd4414f5571774c141d1e0865d8
