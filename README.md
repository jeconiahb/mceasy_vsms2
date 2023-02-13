# Cypress Automation Framework for McEasy
This is the repository for McEasy Cypress Automation Framework
It supports automation for Chrome only

# Setup Steps
- Clone this repo locally
- Download and Install node.js: https://nodejs.org/en/download/
- Install NPM
```
npm install
```
- Install Cypress
```
npm install cypress
```
- Add XPATH Support for Cypress

```
npm install -D cypress-xpath
```
- Install TypeScript

```
npm i typescript
```

# Enable Linter
- In VS Code, install the extension: ESLint (the one with over 10 millions download)
- Install the eslint

```
npm install eslint
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

# Enable Import Auto Arrange
- Add the following code your user settings.json:
```
    "editor.codeActionsOnSave": {
        "source.organizeImports": true,
        "source.fixAll": true ,
        "source.fixAll.eslint": true
    },
```

# Folders
- integration: Contain spec files (the test cases)
- page-objects: Contain the Constant, Selector, and Helper functions

# Quick Commands
- Open cypress

```
npx cypress open
```
- Run all cypress test cases

```
npx cypress run
```
- Run cypress test cases in one sub-folder (eg: login)

```
npx cypress run --spec cypress/integration/end-to-end/login/*.spec.ts
```

- Run cypress test cases inside a folder, including sub-folders (eg: end-to-end folder)

```
npx cypress run --spec cypress/integration/end-to-end/**/*.spec.ts
```

# Cypress Tutorial
https://testautomationu.applitools.com/cypress-tutorial/

# Cypress Commands
[Framework for Cypress Automation](https://docs.cypress.io/api/commands/get)
