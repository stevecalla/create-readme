const fs = require("fs");
const template = require("./readme-template");
const { licenseBadges } = require("./badges");
const { writeAnswers } = require("./writeAnswers"); // Step #2: save answers to readme-answers.txt

handleAnswers = (answers) => {
  // GET THE LICENSE BADGE BASED ON USER SELECTION
  let renderBadge = licenseBadges.filter(
    (element) => element.license.toLowerCase() === answers.license.toLowerCase()
  );

  // ADD THE LICENSE BADGE TO THE ANSWER OBJECT
  answers.licenseBadge = renderBadge[0].badge;
  // console.log('4 ', answers); //if necessary uncomment to see the final anaswer object

  // WRITE THE NEW ANSWERS OBJECT TO THE SOURCE OF TRUTH README-ANSWERS.TXT FILE
  writeAnswers(JSON.stringify(answers));

  // CREATE THE README
  fs.writeFile(
    '../../README.md',
    template.readmeTemplate(answers),
    function (err) {
      if (err) throw err;
      // console.log('It\'s saved!');
    }
  );
};

module.exports = {
  handleAnswers,
};

/*
See or run readme-utilities (node readme-utilities.js) to view a list of the licenses from the readme-badges.js object
*/
