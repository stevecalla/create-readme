const { NONAME } = require('dns');
const { licenseList } = require('./readme-badges');

const promptQuestion = [
  {
    prefix: '⠋🟡 1)',
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
    suffix: ' 🟡',
    validate(answer) {
      if(!answer) {
          return "Please, provide the project title!"
      }
      return true
    },
    filter(answer) {
      return answer.trim()
    },
  },
  {
    prefix: '⠋🟡 2)',
    type: 'input',
    message: 'What is the description of your project?',
    name: 'description',
    suffix: ' 🟡',
    filter(answer) {
      return answer.trim()
    },
  },
  {
    prefix: '⠋🟡 3)',
    type: 'input',
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    name: 'instructions',
    suffix: ' 🟡',
    filter(answer) {
      return answer.trim()
    },
  },
  {
    prefix: '⠋🟡 4)',
    type: 'input',
    message: 'Provide instructions and examples for use.',
    name: 'usage',
    suffix: ' 🟡',
    filter(answer) {
      return answer.trim()
    },
  },
  {
    prefix: '⠋🟡 5)',
    type: 'input',
    message: 'Please detail the most important features?',
    name: 'features',
    suffix: ' 🟡',
    filter(answer) {
      return answer.trim()
    },
  },
  {
    prefix: '⠋🟡 6)',
    type: 'input',
    message: 'Please detail plans for future enhancements?',
    name: 'enhancements',
    suffix: ' 🟡',
    filter(answer) {
      return answer.trim()
    },
  },
  {
    prefix: '⠋🟡 7)',
    type: 'input',
    message: 'Please provide examples of how to run tests?',
    name: 'tests',
    suffix: ' 🟡',
    filter(answer) {
      return answer.trim()
    },
  },
  {
    prefix: '⠋🟡 8)',
    type: 'input',
    message: 'Please provide guidelines to contribute to your project?',
    name: 'contributing',
    suffix: ' 🟡',
    filter(answer) {
      return answer.trim()
    },
  },
  {
    prefix: '⠋🟡 9)',
    type: 'input',
    message: 'Please enter your GitHub user name?',
    name: 'userName',
    suffix: ' 🟡',
    filter(answer) {
      return answer.trim()
    },
  },
  {
    prefix: '⠋🟡 10)',
    type: 'input',
    message: 'Please enter your email address?',
    name: 'emailAddress',
    validate(answer) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(!emailRegex.test(answer)) {
            return "Please provide a valid email address!"
        }
        return true
    }
  },
  {
    prefix: '⠋🟡 11)',
    type: 'rawlist',
    message: 'Please select a license?',
    name: 'license',
    choices: licenseList,
    pageSize: 10,
    default: 19,
    suffix: ' 🟡',
  },
];

module.exports = {
  promptQuestion,
}