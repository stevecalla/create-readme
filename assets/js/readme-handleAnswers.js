const fs = require('fs');
const template = require('./readme-template');
const { licenseBadges } = require('./readme-badges');

function handleAnswers(answers) {
  let renderBadge = licenseBadges.filter(element => element.license.toLowerCase() === answers.license.toLowerCase())
  // console.log('view badge info = ', renderBadge);

  answers.licenseBadge = renderBadge[0].badge;
  // console.log('4 ', answers); //if necessary uncomment to see the final anaswer object
  
  fs.writeFile('README-DRAFT.md', template.readmeTemplate(answers), function (err) {
    if (err) throw err;
    // console.log('It\'s saved!');
  })
}

module.exports = {
  handleAnswers,
}

/*
See or run readme-utilities (node readme-utilities.js) to view a list of the licenses from the readme-badges.js object
*/