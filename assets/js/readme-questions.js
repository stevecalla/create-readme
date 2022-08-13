const promptQuestion = [
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'What is the description of your project?',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    name: 'instructions',
  },
  {
    type: 'input',
    message: 'Provide instructions and examples for use. Include screenshots as needed. To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax: ![alt text](assets/images/screenshot.png)',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Please provide examples of how to run tests?',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'Please detail guidelines to contribute to your project?',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'Please enter your GitHub user name?',
    name: 'userName',
  },
  {
    type: 'input',
    message: 'Please enter your email address?',
    name: 'emailAddress',
  },
  {
    type: 'list',
    message: 'Please select a license?',
    name: 'license',
    choices: [ "Choice A", "choice B" ]
  },
];

module.exports = {
  promptQuestion,
}

// THEN a high-quality, professional README.md is generated with the 
    // title
    //   THEN this is displayed as the title of the README

    // Description, 
    // Table of Contents, 

    // Installation, 
    // Usage, 

    // License, 
    //   WHEN I choose a license for my application from a list of options

    //   THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

    // Contributing, 
    // Tests, and 
    // Questions
    //   WHEN I enter my GitHub username
    //   THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
    //   WHEN I enter my email address
    //   THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
    //   WHEN I click on the links in the Table of Contents
    //   THEN I am taken to the corresponding section of the README