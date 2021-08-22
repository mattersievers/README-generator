// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}

  ## Table of Contents
  * [Description](#description)
  * [Information](#information)
  * [Install](#install)
  * [Use](#use)
  * [Licenses](#licenses)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Description
  ${data.projectDescription}

  ## Information
  ${data.projectInfo}

  ## Install
  ${data.projectInstall}
  
  ## Use
  ${data.projectUse}

  ## Project Licenses
  ${data.projectLicense}
  
  ## Contributors
  ${data.projectContribute}

  ## Tests
  ${data.projectTests}
  
  ## Questions
  ${data.projectQuestions}

`;
}

module.exports = generateMarkdown;
