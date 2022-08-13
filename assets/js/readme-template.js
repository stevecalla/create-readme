const readmeTemplate = ( { title, description, instructions, usage, tests, contributing, userName, emailAddress, license, licenseBadge } ) => 
`# ${title.toUpperCase()} 
${licenseBadge}

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

${licenseBadge}`

module.exports = {
  readmeTemplate,
};

