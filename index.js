const template = require('./readme-template');
const fs = require('fs');

//ADJUST README WITH 
console.log(template.readmeTemplate('Steve'));

fs.writeFile('readme-test.md', template.readmeTemplate('Steve'), function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
})

// console.log(template.fruit);
// console.log(template.predictable())