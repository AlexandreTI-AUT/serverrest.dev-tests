# VerifyMy - Technical Test

### Installing the project
- Clone the project in a local environment: https://github.com/AlexandreTI-AUT/serverrest.dev-tests

## Functional Tests

### Required
- Install  Node.js in your computer.Link => https://nodejs.org/pt-br/download/
- Open the terminal in the `Functional-Tests` project directory and run the `npm install` command to install the dependencies.

### How to run automation
- Run the command `npm run test-open` to open the Cypress screen to run tests by interacting with the screen.
- Run the command `npm run test-run` to run the tests in headless mode.
- Run the `test-api` command to run only the api tests.
- Run the `test-chrome` command to listen to web tests in the Chrome browser.

### Automation structure

**Tests API**
- In the `cypress/e2e/api` directory are the test files.
- In the `cypress/support/api` directory are the commands or methods used in the test scenarios.

**Tests WEB**
- In the `cypress/e2e/web` directory are the test files.
- In the `cypress/support/web` directory are the commands or methods used in the test scenarios.
- In the `cypress/support/web-data.js` file are the test masses only for web tests.

## Performance Tests

### Required
- Install K6 in your computer.Link => https://k6.io/docs/get-started/installation/

### Run Tests

- Open the terminal in directory `Performance-Tests/tests` and run the `k6 run stress-create-user.js` command to run the test.
- At the end of the test, a `.html` file with the test result will be created in the `tests` directory.

### Automation Performance structure
- In the `libs` directory is the file `uuid.js` which contains the method for generating random test data.
- In the tests directory is the file `stress-create-user.js` with the stress tests that create the user through the api.
- The `report.html` file presents the test results after completion.

### Tests Cases for BugBank https://bugbank.netlify.app/
- In the VerifyMy root `testCases-bugbank.feature`