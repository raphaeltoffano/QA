# Computer Database Cypress Test Suite
This repository contains a simple and straightforward test suite for the Computer Database web application using Cypress, Cucumber, and TypeScript. This test suite was created as a part of the QA Engineer Cypress exercise to focus on the following functionality: adding a new computer.

## Getting Started
To set up the project, follow the steps below:

#### Prerequisites
- [Node.js (v14 or later recommended)](https://nodejs.org/en/download)
- [Yarn or npm (Yarn recommended)](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
#### Installation

1. Clone the repository:
`git clone git@github.com:raphaeltoffano/QA.git`


2. Change to the project directory:
`cd QA`

3. Install the dependencies:
`yarn install`
or
`npm install`

### Running the Tests
To run the tests using the Cypress Test Runner:
`yarn cypress open`
or
`npm run cypress open`

This will open the Cypress Test Runner, and you can click on the test file to run the tests in your browser.

To run the tests in headless mode:
`yarn cypress run`
or
`npm run cypress run`

This will run the tests in the command line without opening the Cypress Test Runner.

### Test Scenarios
The test suite covers the following scenarios:

1. Visit the computer's homepage and check the elements present on the page.
2. Verify search functionality.
3. Test an invalid search query.
4. Add a computer.
5. Attempt to add a computer without filling in the required fields.

The test scenarios are described in the `cypress/e2e/computer-database.feature` file, and the corresponding test steps are implemented in the `cypress/e2e/computer-database.ts` file.

### Bugs Found
During the test execution, the following bug was discovered:

1. When creating a computer with only the name, it is not possible to find it in the search results.