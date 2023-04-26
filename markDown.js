// Creates function that returns a license badge if no badge is selected then it is an empty string

function renderLicenseBadge(data) {
  var license = `${data.license}`;
  var licenseBadge = "";
    if (license == 'GNU GPLv3' ) {
      var licenseBadge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
      return licenseBadge;
    } else if (license == "GNU APGLv3") {
      var licenseBadge = "![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)";
      return licenseBadge;
    } else if (license == "GNU LGPLv3") {
      var licenseBadge = "![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)";
      return licenseBadge;
    } else if (license == "Mozilla Public License 2.0") {
      var licenseBadge = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";
      return licenseBadge;;
    } else if (license == "Apache License 2.0") {
      var licenseBadge = "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
      return licenseBadge;
    } else if (license == "MIT License") {
      var licenseBadge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      return licenseBadge;
    } else if (license == "Boost Software License 1.0") {
      var licenseBadge = "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)";
      return licenseBadge;
    } else if (license == "The Unlicense") {
      var licenseBadge = "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)";
      return licenseBadge;
    }
  };

// Returns the license link If there is no license, return an empty string

function renderLicenseLink(data) {
  var license = `${data.license}`;
  var licenseLink = "";
  if (license == 'GNU GPLv3' ) {
    var licenseLink = "(https://choosealicense.com/licenses/gpl-3.0/)";
    return licenseLink;
  } else if (license == "GNU APGLv3") {
    var licenseLink = "(https://choosealicense.com/licenses/agpl-3.0/)";
    return licenseLink;
  } else if (license == "GNU LGPLv3") {
    var licenseLink = "(https://choosealicense.com/licenses/lgpl-3.0/)";
    return licenseLink;
  } else if (license == "Mozilla Public License 2.0") {
    var licenseLink = "(https://choosealicense.com/licenses/mpl-2.0/)";
    return licenseLink;;
  } else if (license == "Apache License 2.0") {
    var licenseLink = "(https://choosealicense.com/licenses/apache-2.0/)";
    return licenseLink;
  } else if (license == "MIT License") {
    var licenseLink = "(https://choosealicense.com/licenses/mit/)";
    return licenseLink;
  } else if (license == "Boost Software License 1.0") {
    var licenseLink = "(https://choosealicense.com/licenses/bsl-1.0/)";
    return licenseLink;
  } else if (license == "The Unlicense") {
    var licenseLink = "(https://choosealicense.com/licenses/unlicense/)";
    return licenseLink;
  }
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  var license = `${data.license}`;
  if (license == 'No License') {
    var license = '';
    return license;
  } else {
    return license;
  } 
};






// generates markdown for README
function generateMarkdown(data) {
  var license = renderLicenseSection(data);
  var licenseBadge = renderLicenseBadge(data);
  var licenseLink = renderLicenseLink(data);
  return `# ${data.title} ${licenseBadge}

## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
${license}

[Click here for more license info!]${licenseLink}

## Questions
Have any questions? 

Feel free to reach out via email to: ${data.email}

For more information and other projects by this author, visit GitHub: [${data.github}](https://github.com/${data.github})

          

`;
}

module.exports = generateMarkdown;
