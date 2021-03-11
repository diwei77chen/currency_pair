# Solution Stack

This challenge is completed with a React based pure front end solution.

# Run the app

### 1. Setup

Please have a Node dependency installed in your environment:

- Node - v14.15.+. Check https://nodejs.org/en/download/ for install information.

### 2. Start the app

Open a new terminal window, change the directory to this project:

1. Install the dependencies:

   `npm install`

2. Start the app:

   `npm start`

# Design Guide

1. SOLID principles are widely applied in the code.
1. Following the principle of single source of truth, form data are kept on the form level and passed down to children components for validation.
1. Material UI is used for markup design.
1. JSDoc is used for comments.

# Testing

Due to the time constraint, there are only minimal tests covered in the project.

Open a new terminal window, change the directory to this project and run:

`npm test`

### 1. Unit Tests

1. Requests: ./src/request/index.test.js

### 2. Component Tests

1. Testing User Interactions:
1. Testing Rendered Output:
   ./src/scenes/QuoteResult/NewQuoteButton.test.js

### 3. Integration/End-to-End Test

Stand-alone integration/end-to-end tests are marked as a TODO for the project.
WebdriverIO aims to be integrated for integration/end-to-end tests. https://webdriver.io/

# System limitations

1. Error handling and UI are not done for requests response errors.
1. Warning messages on browser console are not handled.
