const readmeTemplate = ( { title, description, instructions, usage, features, enhancements, staticImage, video, tests, contributing, userName, emailAddress, license, licenseBadge } ) => 
`# ${title.toUpperCase()} 
${licenseBadge}

## Index

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Features](#features)
5. [Future Enhancements](#future-enhancements)
6. [Contributing](#contributing)
7. [Resources](#resources)
8. [License](#license)

## Description

\`\`\`
${description} 
\`\`\`

## Installation

${instructions}

## Usage

${usage}

## Features

${features}
<!-- 
1. TBD
2. TBD
3. TBD
-->
## Future Enhancements

${enhancements}
<!-- 
1. TBD
2. TBD
3. TBD
-->

## App Preview - Static Screenshot

<img alt="" src="${staticImage}" width="100%" height="425"/>


## App Preview - Video Preview

<img alt="" src=${video} width="100%" height="425"/>

## Tests

${tests}

## Contributing
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

${contributing}

## Resources

1. Project Manager: [Steve Calla - GitHub Profile](https://github.com/${userName})
2. Contact Email: [Steve Calla - email](${emailAddress})

## License ${licenseBadge}

This project is licensed under the terms of the <span style="color:blue">${license}</span>. Please click on the license badge for more information.

<!-- DELETE THIS SECTION FOR THE FINAL README. Per Github, you are under no obligation to choose a license. However, without a license, the default copyright laws apply, meaning that you retain all rights to your source code and no one may reproduce, distribute, or create derivative works from your work. If you're creating an open source project, we strongly encourage you to include an open source license. The Open Source Guide provides additional guidance on choosing the correct license for your project. SEE THE FOLLOWING LINKS FOR MORE INFORMATION:

1. GitHub: [Licensing a repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)
2. Open Source Guide: [To Choose A License](https://choosealicense.com/)
-->`


module.exports = {
  readmeTemplate,
};

