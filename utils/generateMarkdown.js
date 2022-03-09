// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'Apache 2.0':
      return '![License Badge](https://img.shields.io/badge/License-Apache-blue.svg)';
    case 'GNU GPLv3':
      return '![License Badge](https://img.shields.io/badge/License-GNU_GPLv3-blue.svg)';
    case 'ISC':
      return '![License Badge](https://img.shields.io/badge/License-ISC-blue.svg)';
    case 'MIT':
      return '![License Badge](https://img.shields.io/badge/License-MIT-blue.svg)';
    default:
      return '';    
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'Apache 2.0':
      return 'http://www.apache.org/licenses/LICENSE-2.0';
    case 'GNU GPLv3':
      return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
    case 'ISC':
      return 'https://choosealicense.com/licenses/isc/';
    case 'MIT': 
      return 'https://choosealicense.com/licenses/mit/'
    default:
      return ''; 
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license) {
    case 'Apache 2.0':
      return 'Licensed under the Apache License, Version 2.0 (the "License")';
    case 'GNU GPLv3':
      return 'Licensed under the GNU General Public License version 3.0';
    case 'ISC':
      return 'Licensed under the ISC License';
    case 'MIT': 
    return 'Licensed under MIT License';
    default:
      return 'No license.'; 
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {


  return `
 
  # ${data.projectName}
  [${renderLicenseBadge(data.projectLicense)}](${renderLicenseLink(data.projectLicense)})

  ## Table of Contents
  * [Description](#description)
  * [Install](#install)
  * [Use](#use)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Description
  ${data.projectDescription}

  ## Install
  ${data.projectInstall}
  
  ## Use
  ${data.projectUse}
  
  ## License
  ${renderLicenseSection(data.projectLicense)}

  ## Contributing
  ${data.projectContribute}

  ## Tests
  ${data.projectTests}
  
  ## Questions
  - [Github for mattersievers](http://www.github.com/mattersievers)
  - For further questions, contact me through email at mattersievers@gmail.com

`;
}

module.exports = generateMarkdown;
