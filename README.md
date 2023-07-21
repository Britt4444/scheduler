# Interview Scheduler

This project is a single-page application (SPA) that allows students to book technical interviews, choosing which time slot and interviewer works best for them. Interviews can also be edited or deleted by the student. The front-end was built with the React library, building components with JSX. Axios is used to load and persist data from the API and, therefore, user-booked interviews will remain unchanged upon refreshing the browser.

Components were built in isolation with `Storybook`, and then tested using both the `Jest` and `Cypress` testing frameworks. 

## Setup

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone onto your local device.
3. `cd` into the `scheduler` directory and install [dependencies](#dependencies) listed below.
4. Clone the database [respository](https://github.com/lighthouse-labs/scheduler-api) onto your local device (`cd` to the root directory first).
5. Follow the instructions on the `scheduler-api` repo to create and seed your database.
6. [Run the Webpack Dev Server](#running-webpack-development-server) to interact with the app via available appointments, as well as booking/editing/deleting appointments.
7. [Run the Jest testing framework](#running-jest-testing-framework), [run the Storybook visual testbed](#running-storybook-visual-testbed), and/or [run the Cypress testing framework](#running-cypress-testing-framework).

## Final Product

https://github.com/Britt4444/scheduler/assets/110925259/8524d072-b397-4e0d-ab7f-f492e40bc5b2

## Dependencies

- node 10.x or above
- npm 5.x or above
- pg
- axios
- classnames
- normalize.css
- react
- react-dom
- react-scripts

Install dependencies with `npm install`.

## Development Dependencies

- @storybook/react
- @testing-library/jest-dom
- @testing-library/react
- @testing-library/react-hooks
- @babel/core
- babel-loader
- sass
- react-test-renderer
- prop-types
- eslint-plugin-cypress
- cypress@9.7.0

Install development dependencies with `npm install --save-dev`

## Running Webpack Development Server

1. Open up `two` terminal windows on your local device.
2. `cd` into `scheduler-api`and connect to the database via node-postgres (pg).
3. `npm start` to run the database.
4. Visit `http://localhost:8001/api/debug/reset` or use `npm reset` to reset the database data.
5. From the other terminal window, `cd` into `scheduler` and `npm start` to `Create React App`.

## Running Jest Testing Framework

1. Open up `two` terminal windows on your local device.
2. `cd` into `scheduler-api`and connect to the database via node-postgres (pg).
3. `npm start` to run the database.
4. Visit `http://localhost:8001/api/debug/reset` or use `npm reset` to reset the database data.
5. From the other terminal window, `cd` into `scheduler` and `npm test` to run the available tests.

## Running Storybook Visual Testbed

1. `cd` into `scheduler`.
2. `npm run storybook` to launch `Storybook`.
3. Once webpack is built, visit either the `Local` or `On your network` link.
4. View and interact with available stories.

## Running Cypress Testing Framework

1. Open up `three` terminal windows on your local device.
2. `cd` into `scheduler-api`and connect to the database via node-postgres (pg).
3. `npm run test:server` to run the database in test mode.
4. From the second terminal window, `cd` into `scheduler` and `npm start` to `Create React App`.
5. From the third terminal window, `cd` into `scheduler` and `npm run cypress` to launch `Cypress`.
6. View all available tests.
