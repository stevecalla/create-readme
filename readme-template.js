const readmeTemplate = ( { title, description, instructions, usage, tests, contributing, userName, emailAddress, license } ) => `# ${title.toUpperCase()} 

## Index

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Resources](#resources)
6. [License](#license)

## Description

\`\`\`
${description} 
\`\`\`

## Installation

${instructions}

## Usage

${usage}

## Tests

${tests}

## Contributing
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

${contributing}

## Resources

1. Project Manager: [Steve Calla - GitHub Profile](https://github.com/${userName})
2. Contact Email: [Steve Calla - email](${emailAddress})

## License

${license}

![APM](https://img.shields.io/apm/l/NPM)

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`

module.exports = {
  readmeTemplate,
};

