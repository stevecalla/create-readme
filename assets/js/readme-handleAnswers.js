const fs = require('fs');
const template = require('./readme-template');
const { licenseBadges } = require('./readme-badges');

function handleAnswers(answers) {

  // licenseBadges.forEach(element => console.log(element))

  // let licenseList = licenseBadges.map(element => element.license);
  // console.log(licenseList);

  let licenseList = licenseBadges.map(element => element.license).sort();
  console.log(licenseList)

  let renderBadge = licenseBadges.filter(element => element.license.toLowerCase() === answers.license.toLowerCase())
  console.log('test ', renderBadge)

  answers.licenseBadge = renderBadge[0].badge;
  // answers.licenseBadge = renderBadge;
  console.log('4 ', answers);
  
  fs.writeFile('readme-draft.md', template.readmeTemplate(answers), function (err) {
    if (err) throw err;
    // console.log('It\'s saved!');
  })
}

module.exports = {
  handleAnswers,
}