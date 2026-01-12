# Swag Labs Automation with WebdriverIO

This project automates the Swag Labs website using WebdriverIO and Cucumber. The `test.feature` file contains a scenario to test the login, adding items to the cart, and completing the checkout process.

---

## Prerequisites

Before running the tests, ensure the following are installed on your system:

1. **Node.js** (v20 or later, my node version - v24.4.1) - [Download Node.js](https://nodejs.org/)
2. **npm** (Node Package Manager, my npm version - 11.4.2) - Comes with Node.js
3. **Google Chrome** or another browser supported by WebdriverIO
4. **Java (optional)** - Required if you use Selenium Standalone service

---

## Project Setup

Follow these steps to set up the project:

### 1. Clone the Repository or etract the zip folder
Clone the repository to your local machine:
```bash
git clone <repository-url>
cd rahul_webdriverIO_demo
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
```
USERNAME=your_username
PASSWORD=your_password
```

### 4. Test Case Execution
```bash
npm run wdio
```

### 5. Execution Result
```
[0-0] PASSED in chrome - file:///features/test.feature
2026-01-09T22:33:17.001Z INFO @wdio/cli:launcher: Run onWorkerEnd hook

 "spec" Reporter:
------------------------------------------------------------------
[chrome 143.0.7499.193 mac #0-0] Running: chrome (v143.0.7499.193) on mac
[chrome 143.0.7499.193 mac #0-0] Session ID: a9c83eb90f1507a4dc850730502ea03f
[chrome 143.0.7499.193 mac #0-0]
[chrome 143.0.7499.193 mac #0-0] Â» features/test.feature
[chrome 143.0.7499.193 mac #0-0] Swag Labs Website
[chrome 143.0.7499.193 mac #0-0] As a user, I can log into the secure area
[chrome 143.0.7499.193 mac #0-0]    âœ“ Given I am on the login page
[chrome 143.0.7499.193 mac #0-0]    âœ“ When I login into the application
[chrome 143.0.7499.193 mac #0-0]    âœ“ And I add 3 items to the cart
[chrome 143.0.7499.193 mac #0-0]    âœ“ And I go to the cart page
[chrome 143.0.7499.193 mac #0-0]    âœ“ And I go to the checkout page
[chrome 143.0.7499.193 mac #0-0]    âœ“ And I complete the checkout process with the following details:
[chrome 143.0.7499.193 mac #0-0]      â”‚ field      â”‚ value   â”‚
[chrome 143.0.7499.193 mac #0-0]      â”‚ firstname  â”‚ Henry   â”‚
[chrome 143.0.7499.193 mac #0-0]      â”‚ lastname   â”‚ Higgins â”‚
[chrome 143.0.7499.193 mac #0-0]      â”‚ postalcode â”‚ 123456  â”‚
[chrome 143.0.7499.193 mac #0-0]    âœ“ Then I expect that checkout process is successfully completed
[chrome 143.0.7499.193 mac #0-0]    âœ“ And I logout from the application
[chrome 143.0.7499.193 mac #0-0]
[chrome 143.0.7499.193 mac #0-0] 8 passing (28.5s)


Spec Files:      1 passed, 1 total (100% completed) in 00:00:39  
```