// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  
  ${data.Description}

  ## Table of Contents (Optional)
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  
  ## Installation
  
  ${data.Installation}

  ## Usage
  
  ${data.Usage}
  
  ## License
  
  ${data.License}
  
  ## Contributors
  
  ${data.Contribution}

  ## Tests
  
  ${data.Test}

  ## Questions

  ${data.Questions}

`;
}

module.exports = generateMarkdown;
