# SmokeTest_Pixabay_POM

[![Playwright Logo](https://img.shields.io/badge/Playwright-E2E%20Testing-brightgreen?logo=playwright&style=for-the-badge)](https://playwright.dev/)
[![Design Pattern](https://img.shields.io/badge/Pattern-Page%20Object%20Model-yellow?style=for-the-badge)]()
[![Target Website](https://img.shields.io/badge/Target-Pixabay.com-informational?style=for-the-badge)](https://pixabay.com/)
[![Language](https://img.shields.io/badge/Language-TypeScript-blue?logo=typescript&style=for-the-badge)]()

## Project Overview

This repository features a robust, automated test suite dedicated to running **Smoke Tests** on the popular media platform **[Pixabay](https://pixabay.com/)**.

The project is architecturally sound, adhering strictly to the **Page Object Model (POM)** pattern. This design ensures that all test logic is cleanly separated from page locators and interactions, resulting in highly maintainable, scalable, and reusable test code.

The goal is to provide fast and reliable verification of critical functionalities, such as:
* User navigation and UI stability.
* Core search and filtering capabilities.
* Ensuring key components load correctly.

---

## Technology Stack

* **Playwright** - The chosen framework for high-performance and reliable browser automation.
* **TypeScript** - Provides static typing for improved code quality and robustness.
* **Page Object Model (POM)** - The architectural pattern ensuring clean separation of concerns.
* **Node.js & npm** - The execution environment and dependency management.

---

## Prerequisites

You must have the following software installed:

* **Node.js** (version 16 or newer recommended)
* **npm** or **Yarn**
* **Git**

---

## Installation and Execution

Follow these steps to set up and run the tests on your local machine.

### 1. Clone the Repository

```bash
git clone [https://github.com/ivan-milutinovic/SmokeTest_Pixabay_POM.git](https://github.com/ivan-milutinovic/SmokeTest_Pixabay_POM.git)
cd SmokeTest_Pixabay_POM

2. Install Dependencies
Install all necessary npm packages and the required Playwright browser drivers:
Bash
npm install
npx playwright install

3. Running the Smoke Tests
Execute the full smoke test suite using the configured Playwright command:
Bash
npx playwright test

Run in UI Mode (Interactive Debugging):
Bash
npx playwright test --ui

4. Viewing the Test Report
Generate and view the detailed HTML report after execution for a visual summary:
Bash
npx playwright show-report

Project Structure
The project structure is optimized for the Page Object Model:

.
├── pages/                  # All Page Object Model classes (e.g., SearchPage, HomePage)
├── tests/                  # Test files referencing the page objects
├── fixtures/               # Custom test fixtures or data setup
├── playwright.config.ts    # Main configuration file
└── package.json            # Dependencies and scripts
