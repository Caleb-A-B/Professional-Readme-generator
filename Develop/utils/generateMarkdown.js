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
  return `# ${data.title}
            ${data.description}
            [A converted version can be viewed here.](${data.URL})
---
## Contents

1. [About](#about)
  1.[User Story](#user%20story)
  2.[Acceptance criteria](#acceptance%20criteria)
  3.[Visuals](#visuals)
  4.[Build](#build)
2.[Installation](#installation)
3.[License](#license)
4.[Contributing](#contributing)
5.[Tests](#tests)
6.[Authors and acknowledgment](#author%20and%20acknowledgment)

---

## About

  ${data.about}

---

## User Story



---


## Acceptance Criteria


---

## Visuals:

  ![]()


  ---

  ## Installation:
    ${data.installation}

    To clone the Repo:

      git clone ${data.clone}

---

## License
  License used for this project - ${data.license}


---

## Contirbuting:

  To contribute to this app, create a pull request.
  -Fork the Repo
  -create a feature branch
  -commit your new feature
  -push your branch
  -create a new pull request

---

## Tests:
  ${data.test}

---

## Contact Information:
* Github username: ${data.userName}
* Github email: ${data.userEmail}

`;
}

module.exports = generateMarkdown;
