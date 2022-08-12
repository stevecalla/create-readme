const { promptQuestion } = require('./readme-questions');
const inquirer = require('inquirer');
const fs = require('fs');

function writeAnswers(answers) {
  fs.writeFile('readme-answers.txt', answers, function (err) {
    if (err) throw err;
    // console.log('It\'s saved!');
  })
}

function getAnswers() {
  fs.readFile('readme-answers.txt', 'utf8', function(err, jsonString){
  // Display the file content
  console.log('1 = ', JSON.parse(jsonString));
  let test = JSON.parse(jsonString)
  // return 'hello';
});
}

async function main() {
  const promptAnswers = await inquirer.prompt(promptQuestion);
  console.log(promptAnswers);
  let storedAnswers = await writeAnswers(JSON.stringify(promptAnswers));
  // console.log(storedAnswers)
  let getStoredAnswers = await getAnswers();
  console.log('2 = ', getStoredAnswers);
}

main()

  // console.log(fs.write)
  // const orderList = await getList()
  // const getOrder = await inquirer.prompt(genList(orderList))
  // const getConfirm = await inquirer.prompt(confirmUpdate(getOrder.orders))

  // if(getConfirm.toUpdate) {
  //     console.log('to update', getOrder.orders, 'for account', getAccount.account)
  // } else {
  //     console.log('NOT to update', getOrder.orders)
  // }